"use client"

import { Home, Briefcase, Mail, Github, Linkedin, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function FloatingDock() {
  const [isExpanded, setIsExpanded] = useState(false)

  const links = [
    { icon: Home, href: "#", label: "Home", color: "hover:text-blue-600 dark:hover:text-blue-400" },
    { icon: Briefcase, href: "#field-grid", label: "Projects", color: "hover:text-emerald-600 dark:hover:text-emerald-400" },
    { icon: Mail, href: "mailto:mail@domain.com", label: "Email", color: "hover:text-purple-600 dark:hover:text-purple-400" },
    { icon: Phone, href: "tel:+259699595", label: "Call", color: "hover:text-orange-600 dark:hover:text-orange-400" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-600 dark:hover:text-gray-400", external: true },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700 dark:hover:text-blue-300", external: true }
  ]

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* Crystal dock container */}
      <div className="crystal-card px-3 py-4 shadow-2xl">
        <div className="flex items-center gap-2">
          {links.map((link) => {
            const Icon = link.icon
            const element = (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`p-3 rounded-2xl transition-all duration-300 ${link.color} hover:bg-muted/50 dark:hover:bg-white/5 group relative`}
                title={link.label}
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {link.label}
                </span>
              </a>
            )
            return element
          })}
        </div>
      </div>

      {/* Subtle indicator */}
      <div className="text-center mt-3">
        <p className="text-xs text-muted-foreground">Available for new projects</p>
      </div>
    </div>
  )
}
