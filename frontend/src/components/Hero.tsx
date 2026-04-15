interface Props {
  onQuestion: (q: string) => void
}

const STARTERS = [
  'What kind of work do you do?',
  'Tell me about Groww.',
  'What was it like being a founding designer?',
  'What tools do you use?',
  'How do you handle design pushback?',
]

export default function Hero({ onQuestion }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-16 text-center">
      {/* Glow orb */}
      <div className="relative mb-10">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent via-purple-500 to-fuchsia-500
                        blur-sm opacity-60" />
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-accent via-purple-500 to-fuchsia-500
                        opacity-40 blur-2xl scale-150" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 leading-tight">
        Ready to Know More?
      </h1>
      <p className="text-sm text-text-muted mb-12 max-w-sm">
        Ask me about my design work, experience, and process.
      </p>

      {/* Starter chips */}
      <div className="flex flex-wrap gap-2 justify-center max-w-lg">
        {STARTERS.map(q => (
          <button
            key={q}
            onClick={() => onQuestion(q)}
            className="px-4 py-2 text-sm border border-dark-border rounded-full
                       bg-dark-card text-text-secondary
                       hover:border-accent/40 hover:text-accent-light hover:bg-dark-elevated
                       transition-all duration-200"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  )
}
