import { useCallback, useState } from 'react'
import { useChat } from './hooks/useChat'
import type { Project } from './data/projects'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

export default function App() {
  const { messages, loading, sendMessage, reset } = useChat()
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const handleSelectProject = useCallback((p: Project) => {
    setActiveProject(p)
    // Scroll the page to top on mobile so the case study is visible.
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleBack = useCallback(() => {
    setActiveProject(null)
  }, [])

  // Column widths react to state. Smooth transition on the basis.
  const leftBasis = activeProject ? 'md:basis-[30%]' : 'md:basis-[40%]'
  const rightBasis = activeProject ? 'md:basis-[70%]' : 'md:basis-[60%]'

  return (
    <div className="min-h-screen md:h-screen flex flex-col bg-dark-bg overflow-hidden md:p-4">
      <div
        className="flex flex-col md:flex-row flex-1 min-h-0
                   md:rounded-2xl md:border md:border-dark-border md:bg-dark-card
                   md:overflow-hidden md:shadow-sm"
      >
        {/* Left column */}
        <div
          className={`flex-shrink-0 w-full md:w-auto ${leftBasis}
                      md:h-full md:min-h-0 transition-[flex-basis] duration-300 ease-out`}
        >
          <LeftPanel
            activeProject={activeProject}
            onBack={handleBack}
            messages={messages}
            loading={loading}
            sendMessage={sendMessage}
            reset={reset}
          />
        </div>

        {/* Right column */}
        <div
          className={`flex-1 min-w-0 w-full md:w-auto ${rightBasis}
                      md:h-full md:min-h-0 transition-[flex-basis] duration-300 ease-out`}
        >
          <RightPanel activeProject={activeProject} onSelectProject={handleSelectProject} />
        </div>
      </div>
    </div>
  )
}
