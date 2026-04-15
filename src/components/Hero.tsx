interface Props {
  onQuestion: (q: string) => void
}

const STARTERS = [
  'What kind of work do you do?',
  'Tell me about your time at Groww.',
  'What was it like being a founding designer?',
  'What are you looking for in your next role?',
  'How do you handle design pushback?',
  'What tools do you work with?',
]

export default function Hero({ onQuestion }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-16 text-center">
      {/* Greeting */}
      <div className="space-y-3 mb-12">
        <p className="text-xs font-sans tracking-[0.2em] uppercase text-ink/30">
          Portfolio
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          Hi, I'm Shivang.
        </h1>
        <p className="font-serif italic text-xl text-ink/50 leading-relaxed max-w-sm mx-auto">
          Product designer focused on financial products and the details that make them feel right.
        </p>
      </div>

      {/* Divider */}
      <div className="w-px h-10 bg-ink/15 mb-10" />

      {/* Prompt chips */}
      <div className="space-y-3 w-full max-w-md">
        <p className="text-xs font-sans text-ink/30 tracking-wide">
          Ask me something
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {STARTERS.map(q => (
            <button
              key={q}
              onClick={() => onQuestion(q)}
              className="px-4 py-2 text-sm font-sans border border-ink/15 rounded-full
                         text-ink/50 hover:text-ink hover:border-ink/40
                         transition-all duration-150 text-left"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
