"use client"

import { Home, Briefcase, FolderOpen } from "lucide-react"

export function MobileTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:hidden z-40 bg-background border-t border-foreground/10 backdrop-blur-md">
      <div className="flex items-center justify-around h-16 px-4">
        <a 
          href="#"
          className="flex flex-col items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </a>
        
        <a 
          href="#experience"
          className="flex flex-col items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
          aria-label="Experience"
        >
          <Briefcase className="w-5 h-5" />
          <span>Work</span>
        </a>
        
        <a 
          href="#projects"
          className="flex flex-col items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
          aria-label="Projects"
        >
          <FolderOpen className="w-5 h-5" />
          <span>Projects</span>
        </a>
      </div>
    </nav>
  )
}
