import type { Project } from '../data/projects'
import ProjectsGrid from './ProjectsGrid'
import CaseStudyView from './CaseStudyView'

interface Props {
  activeProject: Project | null
  onSelectProject: (project: Project) => void
}

/** Right column. Shows the projects grid in browse state, or a case study. */
export default function RightPanel({ activeProject, onSelectProject }: Props) {
  if (activeProject) {
    return <CaseStudyView project={activeProject} />
  }
  return <ProjectsGrid onSelectProject={onSelectProject} />
}
