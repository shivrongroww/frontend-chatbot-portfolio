const LINKS = [
  { label: 'Email', href: 'mailto:raishivang03@gmail.com' },
]

export default function Sidebar() {
  return (
    <aside className="w-60 flex-shrink-0 border-r border-dark-border flex flex-col
                      bg-dark-sidebar">
      {/* Logo area */}
      <div className="px-5 py-5 border-b border-dark-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-purple-400
                          flex items-center justify-center text-white text-sm font-semibold">
            SR
          </div>
          <div>
            <h2 className="text-sm font-medium text-text-primary leading-tight">Shivang Rai</h2>
            <p className="text-xs text-text-muted">Product Designer</p>
          </div>
        </div>
      </div>

      {/* Info section */}
      <div className="flex-1 px-5 py-5 space-y-6">
        {/* Status */}
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted font-medium">
            Status
          </p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                          bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-emerald-400">Open to work</span>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted font-medium">
            Details
          </p>
          <div className="space-y-2.5">
            <InfoRow icon="briefcase" text="Intern @ Groww" />
            <InfoRow icon="location" text="Bangalore, India" />
            <InfoRow icon="clock" text="2 years experience" />
          </div>
        </div>

        {/* Focus */}
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted font-medium">
            Focus areas
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['Fintech', 'DeFi', 'Mobile', 'Design Systems'].map(tag => (
              <span key={tag} className="px-2 py-0.5 text-[11px] rounded-md
                                         bg-dark-elevated text-text-secondary border border-dark-border">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="px-5 py-4 border-t border-dark-border">
        {LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-2 text-xs text-text-muted
                       hover:text-accent-light transition-colors py-1"
          >
            <span>{link.label}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50">
              <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        ))}
      </div>
    </aside>
  )
}


function InfoRow({ icon, text }: { icon: string; text: string }) {
  const icons: Record<string, JSX.Element> = {
    briefcase: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4.5 4V2.5a1 1 0 011-1h3a1 1 0 011 1V4" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    location: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path d="M7 1.5C4.79 1.5 3 3.29 3 5.5c0 3 4 7 4 7s4-4 4-7c0-2.21-1.79-4-4-4z"
              stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="7" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    clock: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-text-muted">{icons[icon]}</span>
      <span className="text-xs text-text-secondary">{text}</span>
    </div>
  )
}
