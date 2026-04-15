import { useState, useCallback, useRef } from 'react'
import type { Message } from '../types/chat'
import { API_BASE } from '../config'

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return

    const userMsg: Message = { id: uid(), role: 'user', content: text }
    const assistantId = uid()

    setMessages(prev => [
      ...prev,
      userMsg,
      { id: assistantId, role: 'assistant', content: '', streaming: true },
    ])
    setLoading(true)

    abortRef.current = new AbortController()

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }))

      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
        signal: abortRef.current.signal,
      })

      if (res.status === 429) {
        setMessages(prev =>
          prev.map(m =>
            m.id === assistantId
              ? { ...m, content: "You're sending messages too fast. Please wait a moment and try again.", streaming: false }
              : m
          )
        )
        return
      }

      if (!res.ok || !res.body) {
        throw new Error(`Server error: ${res.status}`)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const chunk = line.slice(6)
          if (chunk === '[DONE]') break
          if (chunk.startsWith('[ERROR]')) {
            setMessages(prev =>
              prev.map(m =>
                m.id === assistantId
                  ? { ...m, content: 'Something went wrong. Please try again.', streaming: false }
                  : m
              )
            )
            return
          }
          setMessages(prev =>
            prev.map(m =>
              m.id === assistantId
                ? { ...m, content: m.content + chunk }
                : m
            )
          )
        }
      }
    } catch (err) {
      if ((err as Error).name === 'AbortError') return
      setMessages(prev =>
        prev.map(m =>
          m.id === assistantId
            ? { ...m, content: 'Connection lost. Please try again.', streaming: false }
            : m
        )
      )
    } finally {
      setMessages(prev =>
        prev.map(m => (m.id === assistantId ? { ...m, streaming: false } : m))
      )
      setLoading(false)
    }
  }, [messages, loading])

  const reset = useCallback(() => {
    abortRef.current?.abort()
    setMessages([])
    setLoading(false)
  }, [])

  return { messages, loading, sendMessage, reset }
}
