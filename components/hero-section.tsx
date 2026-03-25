"use client"

import { Mail, Linkedin, Github, ArrowDown, Phone, Globe, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/3 dark:from-background dark:to-accent/5" />
      
      {/* Animated blueprint grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(0,122,255,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,122,255,0.3) 1px, transparent 1px),
          linear-gradient(rgba(0,122,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,122,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        animation: 'drift 30s linear infinite'
      }} />
      
      {/* Decorative glass elements with blur */}
      <div className="absolute top-32 right-12 w-56 h-56 glass-crystal-sm rounded-full opacity-20 hidden lg:block blur-3xl" />
      <div className="absolute bottom-40 left-12 w-48 h-48 glass-crystal-sm rounded-full opacity-15 hidden lg:block blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Premium Typography */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-crystal-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-medium text-muted-foreground">Available for Projects</p>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-balance block">Hector</span>
                <span className="text-balance text-accent block">Mendez</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium">
                Construction Operations & Digital Design Architect
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Integrating hardware, software, and DevOps principles to optimize system reliability. Expert in construction estimations, 3D rendering, logistics orchestration, and financial management.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="gap-2 bg-accent hover:bg-accent/90 dark:hover:bg-accent/80 text-accent-foreground rounded-full px-8 py-6 text-base shimmer-button transition-all duration-300" asChild>
                <a href="#expertise">
                  Explore Expertise
                </a>
              </Button>
              <Button variant="outline" className="gap-2 border-muted hover:glass-crystal-sm dark:hover:glass-crystal-sm rounded-full px-8 py-6 text-base transition-all duration-300" asChild>
                <a href="#" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 space-y-3 border-t border-white/10 dark:border-white/5">
              <p className="text-sm font-semibold text-accent">Get in Touch</p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:me@hectormendez.io" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                  <Mail className="w-4 h-4 group-hover:text-accent transition-colors" />
                  <span className="text-sm">me@hectormendez.io</span>
                </a>
                <a href="tel:+17026095075" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                  <Phone className="w-4 h-4 group-hover:text-accent transition-colors" />
                  <span className="text-sm">(702) 609-5075</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Crystal Contact Card */}
          <div className="flex justify-center lg:justify-end lg:col-span-1">
            <div className="relative group w-full max-w-sm">
              {/* Animated glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-accent/20 to-accent/30 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse" />
              
              {/* Crystal glass card */}
              <div className="relative glass-crystal-lg rounded-[2.5rem] p-8 lg:p-10 transform group-hover:scale-[1.02] transition-all duration-500 space-y-8">
                {/* Premium Avatar */}
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent/5 blur-xl" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center">
                      <span className="text-5xl font-bold text-accent" style={{ fontFamily: 'var(--font-display)' }}>◆</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                    Let's Build
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Turning complex construction operations into seamless digital systems
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Primary CTA */}
                  <Button 
                    className="w-full gap-2 bg-accent hover:bg-accent/90 dark:hover:bg-accent/80 text-accent-foreground rounded-full py-6 font-medium transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:me@hectormendez.io">
                      <Mail className="w-4 h-4" />
                      Start a Project
                    </a>
                  </Button>
                  
                  {/* LinkedIn CTA */}
                  <Button 
                    className="w-full gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white rounded-full py-6 font-medium transition-all duration-300"
                    asChild
                  >
                    <a href="https://linkedin.com/in/hectormendez" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {/* GitHub */}
                    <Button 
                      variant="outline" 
                      className="gap-2 border-muted/30 hover:glass-crystal-sm dark:hover:glass-crystal-sm rounded-full py-5 transition-all duration-300"
                      asChild
                    >
                      <a href="https://github.com/hectormendez" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    </Button>
                    
                    {/* Website */}
                    <Button 
                      variant="outline" 
                      className="gap-2 border-muted/30 hover:glass-crystal-sm dark:hover:glass-crystal-sm rounded-full py-5 transition-all duration-300"
                      asChild
                    >
                      <a href="https://hectormendez.io" target="_blank" rel="noopener noreferrer" title="Website">
                        <Globe className="w-4 h-4" />
                        <span className="hidden sm:inline">Website</span>
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Footer text */}
                <div className="pt-6 border-t border-white/10 dark:border-white/5 text-center">
                  <p className="text-xs text-muted-foreground">
                    Las Vegas, NV • USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
      </button>
    </section>
  )
}
