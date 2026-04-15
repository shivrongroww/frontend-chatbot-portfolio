const LINKS = [
  { label: 'Email', href: 'mailto:raishivang03@gmail.com' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-ink/8 flex flex-col
                      px-7 py-8 bg-cream">
      {/* Avatar placeholder */}
      <div className="w-14 h-14 rounded-full bg-ink/8 mb-5 flex items-center
                      justify-center text-ink/20 text-lg font-serif select-none">
        SR
      </div>

      {/* Name + title */}
      <div className="mb-6">
        <h2 className="font-serif text-xl text-ink leading-snug">Shivang Rai</h2>
        <p className="text-sm font-sans text-ink/50 mt-0.5">Product Designer</p>
      </div>

      {/* Meta */}
      <div className="space-y-3 text-sm font-sans mb-8">
        <div className="flex items-start gap-2.5">
          <span className="text-ink/25 mt-px">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M1 6h12" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M4.5 1.5V4M9.5 1.5V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="text-ink/60">
            Intern @ <span className="text-ink font-medium">Groww</span>
          </span>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="text-ink/25 mt-px">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5C4.79 1.5 3 3.29 3 5.5c0 3 4 7 4 7s4-4 4-7c0-2.21-1.79-4-4-4z"
                    stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="7" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </span>
          <span className="text-ink/60">Bangalore, India</span>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="text-ink/25 mt-px">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="text-ink/60">2 years experience</span>
        </div>
      </div>

      {/* Availability badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                      border border-emerald-200 bg-emerald-50 mb-8 self-start">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-sans text-emerald-700">Open to opportunities</span>
      </div>

      {/* Divider */}
      <div className="border-t border-ink/8 mb-6" />

      {/* Links */}
      <div className="space-y-1 mt-auto">
        {LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-2 text-sm font-sans text-ink/40
                       hover:text-ink transition-colors py-1"
          >
            <span>{link.label}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                 className="opacity-50">
              <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        ))}
      </div>
    </aside>
  )
}
