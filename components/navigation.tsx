"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Portfolio" },
  { href: "#education", label: "Education" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main Navigation - Desktop Only */}
      <nav 
        className={`hidden lg:fixed lg:top-0 lg:left-0 lg:right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b border-foreground/10 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="text-2xl font-black tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              HECTOR MENDEZ
            </a>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-foreground group-hover:w-4/5 transition-all duration-300" />
                </a>
              ))}
              <Button 
                className="ml-4 bg-foreground hover:bg-foreground/90 text-background rounded-none px-6 h-10 font-semibold text-sm tracking-wide transition-all duration-200"
                size="sm"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
