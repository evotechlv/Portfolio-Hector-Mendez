"use client"

import { Mail, Phone, MapPin, ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 blueprint-grid texture-paper overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-50 dark:from-background dark:via-background dark:to-blue-950/10 pointer-events-none" />
      
      {/* Animated background orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8 scroll-reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full crystal-card w-fit hover-tilt">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">Available for Projects</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-foreground">
              <span className="block text-accent">HECTOR</span>
              <span className="block">MENDEZ</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Construction Operations • Digital Product Design • Project Logistics
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Architect of operational excellence. Bridging construction management with digital design systems to deliver seamless project orchestration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              className="gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300"
              asChild
            >
              <a href="#projects">
                <Sparkles className="w-4 h-4" />
                View Projects
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 border-border rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover-tilt"
              asChild
            >
              <a href="mailto:mail@domain.com">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 space-y-4 border-t border-border">
            <div className="flex flex-wrap gap-6">
              <a href="tel:+259699595" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <Phone className="w-4 h-4 group-hover:text-accent transition-colors" />
                +25 969 959 995
              </a>
              <a href="mailto:mail@domain.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <Mail className="w-4 h-4 group-hover:text-accent transition-colors" />
                mail@domain.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Avenue Park 120, LA
              </div>
            </div>
          </div>
        </div>

        {/* Right: Crystal Contact Card */}
        <div className="flex justify-center lg:justify-end scroll-reveal scroll-reveal-1">
          <div className="relative group w-full max-w-md">
            {/* Glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500" />
            
            {/* Crystal Card */}
            <div className="relative crystal-card p-8 lg:p-10 space-y-6 hover-tilt">
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-accent/30" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-accent/30" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-accent/30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-accent/30" />

              {/* Content */}
              <div className="relative space-y-6">
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center text-4xl font-bold text-accent">
                    HM
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-foreground">Let's Build</h2>
                  <p className="text-sm text-muted-foreground">Exceptional projects require exceptional partners</p>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full gap-2 bg-accent hover:bg-accent/90 text-white rounded-full py-6 font-medium transition-all duration-300"
                  asChild
                >
                  <a href="mailto:mail@domain.com">
                    <Mail className="w-4 h-4" />
                    Start a Project
                  </a>
                </Button>

                {/* Project Status */}
                <div className="space-y-3 pt-4 border-t border-accent/20">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">Project Status</p>
                  <div className="w-full bg-muted/30 rounded-full h-1.5 overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-accent to-accent/50 rounded-full" />
                  </div>
                  <p className="text-xs text-muted-foreground">Available for New Construction & Design Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => {
          const element = document.getElementById('field-grid')
          element?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
      </button>
    </section>
  )
}
