const STARTERS = [
  'What kind of design work do you do?',
  'Tell me about your most impactful project.',
  'What tools and methods do you use?',
  'What are you looking for in your next role?',
  'How do you approach a new design problem?',
]

interface Props {
  onSelect: (q: string) => void
}

export default function StarterQuestions({ onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {STARTERS.map(q => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="px-4 py-2 text-sm border border-ink/20 rounded-full
                     text-ink/60 hover:border-ink/60 hover:text-ink
                     transition-colors duration-150 font-sans"
        >
          {q}
        </button>
      ))}
    </div>
  )
}
