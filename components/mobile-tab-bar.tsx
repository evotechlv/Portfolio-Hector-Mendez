"use client"

import { Home, Briefcase, FolderOpen } from "lucide-react"

export function MobileTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:hidden z-40 glass border-t border-white/20">
      <div className="flex items-center justify-around h-16 px-4">
        <a 
          href="#"
          className="flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
          aria-label="Home"
        >
          <Home className="w-6 h-6" />
          <span>Home</span>
        </a>
        
        <a 
          href="#experience"
          className="flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
          aria-label="Experience"
        >
          <Briefcase className="w-6 h-6" />
          <span>Work</span>
        </a>
        
        <a 
          href="#projects"
          className="flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
          aria-label="Projects"
        >
          <FolderOpen className="w-6 h-6" />
          <span>Projects</span>
        </a>
      </div>
    </nav>
  )
}
