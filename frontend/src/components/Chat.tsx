import { useEffect, useRef } from 'react'
import { useChat } from '../hooks/useChat'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'
import Hero from './Hero'

export default function Chat() {
  const { messages, loading, sendMessage, reset } = useChat()
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const isEmpty = messages.length === 0

  return (
    <div className="flex flex-col h-full bg-dark-bg">
      {/* Messages / Hero area */}
      <div className="flex-1 overflow-y-auto">
        {isEmpty ? (
          <Hero onQuestion={sendMessage} />
        ) : (
          <div className="max-w-2xl mx-auto px-6 md:px-8 py-10 space-y-6">
            {messages.map(msg => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="border-t border-dark-border px-6 md:px-8 py-4 bg-dark-bg/80
                      backdrop-blur-sm">
        <div className="max-w-2xl mx-auto space-y-3">
          <ChatInput onSend={sendMessage} disabled={loading} />
          {!isEmpty && (
            <div className="flex justify-center">
              <button
                onClick={reset}
                className="text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                Clear conversation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
