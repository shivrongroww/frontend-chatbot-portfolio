import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'

interface Props {
  onSelectProject: (project: Project) => void
}

export default function ProjectsGrid({ onSelectProject }: Props) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-14">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
            Selected Works
          </h1>
          <p className="text-sm text-text-muted max-w-md">
            A collection of projects across fintech, DeFi, and product design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onSelectProject(project)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
