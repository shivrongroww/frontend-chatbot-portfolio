import { useEffect, useRef } from 'react'
import type { Message } from '../types/chat'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'

interface Props {
  messages: Message[]
  loading: boolean
  onSend: (text: string) => void
  onReset: () => void
  /** Chips shown above the input. */
  suggestedQuestions: string[]
  /** Optional empty-state heading + subtext. */
  emptyHeading?: string
  emptySubtext?: string
}

/**
 * Inline chat surface — message list + suggested-question chips + input.
 * No drawer chrome (no backdrop, header, close button). Designed to be
 * embedded inside the LeftPanel column.
 */
export default function InlineChat({
  messages,
  loading,
  onSend,
  onReset,
  suggestedQuestions,
  emptyHeading = 'Curious about something?',
  emptySubtext = 'Ask about my design work, experience, or process.',
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const isEmpty = messages.length === 0

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto">
        {isEmpty ? (
          <div className="px-4 py-6 text-center">
            <h3 className="text-sm font-medium text-text-primary mb-1">{emptyHeading}</h3>
            <p className="text-xs text-text-muted">{emptySubtext}</p>
          </div>
        ) : (
          <div className="px-4 py-4 space-y-5">
            {messages.map(msg => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Suggested chips */}
      {suggestedQuestions.length > 0 && (
        <div className="px-4 pt-2 pb-1 flex flex-wrap gap-1.5">
          {suggestedQuestions.map(q => (
            <button
              key={q}
              onClick={() => onSend(q)}
              disabled={loading}
              className="px-2.5 py-1 text-[11px] border border-dark-border rounded-full
                         bg-dark-card text-text-secondary
                         hover:border-accent/40 hover:text-accent hover:bg-dark-elevated
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input + clear */}
      <div className="border-t border-dark-border px-3 py-3 bg-dark-sidebar/80 backdrop-blur-sm">
        <ChatInput onSend={onSend} disabled={loading} />
        {!isEmpty && (
          <div className="flex justify-end mt-2">
            <button
              onClick={onReset}
              className="text-[11px] text-text-muted hover:text-text-secondary transition-colors"
            >
              Clear conversation
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
