import type { Message } from '../types/chat'

interface Props {
  message: Message
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === 'user'

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[70%] px-5 py-3 bg-ink text-cream rounded-2xl rounded-br-sm
                        text-sm font-sans leading-relaxed">
          {message.content}
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] space-y-2">
        <div className="text-xs font-sans text-ink/30 pl-1 tracking-wide uppercase">
          Portfolio
        </div>
        <div className="text-[15px] font-serif leading-[1.75] text-ink">
          {message.content}
          {message.streaming && (
            <span className="inline-block w-[2px] h-[1.1em] bg-ink/40 ml-[2px]
                             align-text-bottom animate-pulse" />
          )}
        </div>
      </div>
    </div>
  )
}
