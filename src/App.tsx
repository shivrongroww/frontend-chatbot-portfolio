import Chat from './components/Chat'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-dark-bg overflow-hidden">
      {/* Mobile header */}
      <header className="md:hidden flex-shrink-0 border-b border-dark-border px-5 py-4
                         flex items-center justify-between bg-dark-sidebar">
        <div>
          <span className="font-medium text-base text-text-primary">Shivang Rai</span>
          <span className="text-text-muted text-xs ml-2">Product Designer</span>
        </div>
        <a
          href="mailto:raishivang03@gmail.com"
          className="text-xs text-text-secondary hover:text-accent-light transition-colors
                     border border-dark-border hover:border-accent/30
                     px-3 py-1.5 rounded-full"
        >
          Contact
        </a>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 min-h-0">
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        <main className="flex-1 min-w-0">
          <Chat />
        </main>
      </div>
    </div>
  )
}
