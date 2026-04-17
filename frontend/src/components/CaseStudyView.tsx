import { useState } from 'react'
import type { Project } from '../data/projects'

interface Props {
  project: Project
}

/**
 * Long-form case study content. Renders inline inside the right column —
 * no modal chrome. Back navigation lives in the LeftPanel header.
 */
export default function CaseStudyView({ project }: Props) {
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set())

  const handleImageError = (src: string) => {
    setImgErrors(prev => new Set(prev).add(src))
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-10 md:pt-14">
        {/* Title block */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
            {project.title}
          </h1>
          <p className="text-sm text-text-muted">
            {project.company} &middot; {project.year}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-lg
                         bg-dark-elevated text-text-secondary border border-dark-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* About */}
        <div className="mb-10 space-y-2">
          <h2 className="text-xs uppercase tracking-[0.15em] text-text-muted font-medium">
            About this project
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            {project.longDescription}
          </p>
        </div>
      </div>

      {/* Image gallery — 80% of the right column, full-bleed of the max-w-3xl wrapper */}
      {project.images.length > 0 && (
        <div className="w-4/5 mx-auto space-y-4 mb-10">
          {project.images.map(src => (
            <div
              key={src}
              className="rounded-xl overflow-hidden bg-dark-elevated border border-dark-border"
            >
              {!imgErrors.has(src) ? (
                <img
                  src={src}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  onError={() => handleImageError(src)}
                  className="w-full h-auto"
                />
              ) : (
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mx-auto text-text-muted"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
                      <path
                        d="M3 16l4-4 3 3 4-4 7 7v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-xs text-text-muted">Image not available</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* External case study link */}
      {project.caseStudyUrl && (
        <div className="max-w-3xl mx-auto px-6 md:px-10 pb-10 md:pb-14">
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                       border border-dark-border text-text-secondary text-sm
                       hover:border-accent/40 hover:text-text-primary transition-all"
          >
            View full case study
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M3 9l6-6M9 3H4M9 3v5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}
