import Chat from './components/Chat'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-cream overflow-hidden">
      {/* Mobile header — only visible below md */}
      <header className="md:hidden flex-shrink-0 border-b border-ink/8 px-5 py-4
                         flex items-center justify-between">
        <div>
          <span className="font-serif text-base text-ink">Shivang Rai</span>
          <span className="text-ink/30 font-sans text-xs ml-2">Product Designer</span>
        </div>
        <a
          href="mailto:raishivang03@gmail.com"
          className="text-xs font-sans text-ink/40 hover:text-ink transition-colors
                     border border-ink/20 hover:border-ink/50 px-3 py-1.5 rounded-full"
        >
          Contact
        </a>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar — desktop only */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        {/* Chat area */}
        <main className="flex-1 min-w-0">
          <Chat />
        </main>
      </div>
    </div>
  )
}
