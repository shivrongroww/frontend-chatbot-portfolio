import type { Message } from '../types/chat'

interface Props {
  message: Message
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === 'user'

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[70%] px-4 py-3 bg-accent/15 border border-accent/20
                        text-text-primary rounded-2xl rounded-br-sm
                        text-sm leading-relaxed">
          {message.content}
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] space-y-1.5">
        <div className="flex items-center gap-2 pl-1">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent to-purple-400
                          flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1l1.5 2.5L9 4.5 7 6.5l.5 3L5 8l-2.5 1.5.5-3L1 4.5l2.5-1L5 1z"
                    fill="white" opacity="0.9"/>
            </svg>
          </div>
          <span className="text-[11px] text-text-muted">Portfolio AI</span>
        </div>
        <div className="text-sm leading-[1.7] text-text-secondary pl-1">
          {message.content}
          {message.streaming && (
            <span className="inline-block w-[2px] h-[1em] bg-accent ml-[2px]
                             align-text-bottom animate-pulse" />
          )}
        </div>
      </div>
    </div>
  )
}
