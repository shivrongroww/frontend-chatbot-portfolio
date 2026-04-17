import { useEffect } from 'react'
import type { Project } from '../data/projects'
import type { Message } from '../types/chat'
import InlineChat from './InlineChat'

const BROWSE_STARTERS = [
  'What kind of work do you do?',
  'Tell me about Groww.',
  'Founding designer — what does that mean?',
  'What tools do you use?',
]

interface Props {
  activeProject: Project | null
  onBack: () => void
  messages: Message[]
  loading: boolean
  sendMessage: (text: string) => void
  reset: () => void
}

/**
 * Left column. Header zone swaps between identity (browse) and project
 * thumbnail + back button (case study). Chat fills the remaining height.
 * Resets the chat when entering or leaving a case study.
 */
export default function LeftPanel({
  activeProject,
  onBack,
  messages,
  loading,
  sendMessage,
  reset,
}: Props) {
  // Reset chat history whenever the active project changes (open OR back).
  useEffect(() => {
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject?.id])

  return (
    <aside
      className="flex flex-col h-full min-h-0 bg-dark-sidebar
                 border-b md:border-b-0 md:border-r border-dark-border"
    >
      {/* Header zone */}
      {activeProject ? (
        <ProjectHeader project={activeProject} onBack={onBack} />
      ) : (
        <IdentityHeader />
      )}

      {/* Chat zone */}
      <InlineChat
        messages={messages}
        loading={loading}
        onSend={sendMessage}
        onReset={reset}
        suggestedQuestions={
          activeProject ? activeProject.suggestedQuestions : BROWSE_STARTERS
        }
        emptyHeading={
          activeProject
            ? `Ask about ${activeProject.company}`
            : 'Curious about something?'
        }
        emptySubtext={
          activeProject
            ? 'Pick a prompt below or write your own.'
            : 'Ask about my design work, experience, or process.'
        }
      />
    </aside>
  )
}

function IdentityHeader() {
  return (
    <div className="px-5 py-5 border-b border-dark-border">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl overflow-hidden bg-dark-elevated flex-shrink-0">
          <img src="/photo.png" alt="Shivang Rai" className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-text-primary leading-tight">
            Shivang Rai
          </h2>
          <p className="text-xs text-text-muted truncate">
            Product Designer · Bangalore
          </p>
        </div>
      </div>
    </div>
  )
}

function ProjectHeader({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <div className="border-b border-dark-border">
      {/* Thumbnail */}
      <div className="aspect-[16/10] bg-dark-elevated overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={e => {
            // Hide broken image, leave the elevated bg
            ;(e.currentTarget as HTMLImageElement).style.opacity = '0'
          }}
        />
      </div>

      {/* Title + back */}
      <div className="px-5 py-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-text-primary leading-tight truncate">
            {project.title}
          </h2>
          <p className="text-xs text-text-muted mt-0.5">
            {project.company} &middot; {project.year}
          </p>
        </div>
        <button
          onClick={onBack}
          className="flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg
                     text-[11px] text-text-secondary border border-dark-border
                     hover:border-accent/40 hover:text-accent transition-all"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M6 2L3 5l3 3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
  )
}
