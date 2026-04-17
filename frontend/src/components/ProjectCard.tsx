import { useState } from 'react'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: Props) {
  const [imgError, setImgError] = useState(false)

  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-2xl border border-dark-border
                 bg-dark-card overflow-hidden transition-all duration-300
                 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-dark-elevated overflow-hidden">
        {!imgError ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500
                       group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20
                            border border-accent/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent/50">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 16l4-4 3 3 4-4 7 7v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/60 via-transparent to-transparent
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="px-5 py-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-text-primary truncate
                           group-hover:text-accent-light transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-text-muted mt-0.5">
              {project.company} &middot; {project.year}
            </p>
          </div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
               className="flex-shrink-0 mt-0.5 text-text-muted opacity-0 group-hover:opacity-100
                          transition-all duration-200 translate-x-0 group-hover:translate-x-0.5">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 text-[10px] rounded-md
                                       bg-dark-elevated text-text-muted border border-dark-border">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] rounded-md text-text-muted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}
