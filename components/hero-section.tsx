"use client"

import { Mail, Linkedin, Github, ArrowDown, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen lg:min-h-screen flex items-center justify-center overflow-hidden px-5 md:px-4 py-20 pt-28 md:pt-20 lg:pt-32">
      {/* Minimal dark background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grid pattern - very minimal */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Bold Typography - Mobile first */}
          <div className="space-y-4 md:space-y-8">
            {/* Main Title - Very Large and Bold */}
            <div className="space-y-3 lg:space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                Hector Mendez
              </h1>
              <p className="text-lg sm:text-xl lg:text-3xl font-light text-muted-foreground tracking-wide">
                Master Builder
              </p>
            </div>
            
            {/* Mobile: Short description */}
            <p className="text-base text-muted-foreground leading-relaxed lg:hidden font-light max-w-sm">
              Construction operations & digital systems engineer with 15+ years building better systems.
            </p>

            {/* Desktop: Full description */}
            <div className="hidden lg:block space-y-4 max-w-xl">
              <p className="text-muted-foreground leading-relaxed font-light text-lg">
                Experienced engineer integrating hardware, software, and DevOps principles to optimize system reliability. Expert in construction estimations, 3D rendering, and financial analytics.
              </p>
            </div>
            
            {/* CTA - Single button on mobile, two on desktop */}
            <div className="pt-2 flex flex-col lg:flex-row gap-3 lg:gap-4">
              <Button 
                className="w-full lg:w-auto bg-foreground hover:bg-foreground/90 text-background rounded-none px-8 h-12 font-semibold text-sm tracking-wide transition-all duration-300"
                asChild
              >
                <a href="mailto:me@hectormendez.io">Get in Touch</a>
              </Button>
              
              <Button 
                variant="outline" 
                className="hidden lg:inline-flex border-foreground/30 hover:bg-foreground/5 hover:border-foreground rounded-none px-8 h-12 font-semibold text-sm tracking-wide transition-all duration-300"
                asChild
              >
                <a href="#">See Projects</a>
              </Button>
            </div>

            {/* Mobile: Compact Connect Card */}
            <div className="lg:hidden mt-6 border border-foreground/20 rounded-none p-5 space-y-4 backdrop-blur-sm bg-foreground/2">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                  Connect
                </h3>
              </div>

              <div className="space-y-2">
                <Button 
                  className="w-full gap-2 bg-foreground text-background rounded-none h-10 text-sm font-medium transition-all duration-300"
                  asChild
                >
                  <a href="mailto:me@hectormendez.io">
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </Button>
                
                <Button 
                  className="w-full gap-2 bg-foreground/90 text-background rounded-none h-10 text-sm font-medium transition-all duration-300"
                  asChild
                >
                  <a href="https://linkedin.com/in/hectormendez" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </Button>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    className="gap-1.5 border-foreground/30 hover:bg-foreground/5 rounded-none h-10 text-xs font-medium transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/hectormendez" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="gap-1.5 border-foreground/30 hover:bg-foreground/5 rounded-none h-10 text-xs font-medium transition-all duration-300"
                    asChild
                  >
                    <a href="https://hectormendez.io" target="_blank" rel="noopener noreferrer">
                      <Globe className="w-3.5 h-3.5" />
                      Site
                    </a>
                  </Button>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground flex items-center justify-start gap-1 font-light">
                <Phone className="w-3.5 h-3.5" />
                (702) 609-5075
              </p>
            </div>
          </div>

          {/* Right: Desktop Contact Card - Hidden on mobile */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              {/* Main card - minimal border */}
              <div className="relative border border-foreground/20 rounded-none p-8 transform hover:border-foreground/40 transition-all duration-500 bg-foreground/[0.02] backdrop-blur-sm">
                
                <div className="relative space-y-8">
                  {/* Avatar */}
                  <div className="w-20 h-20 border border-foreground/20 flex items-center justify-center">
                    <span className="text-2xl font-black text-foreground" style={{ fontFamily: 'var(--font-display)' }}>HM</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-xl font-black text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      Let&apos;s Build Together
                    </h2>
                    <p className="text-sm text-muted-foreground font-light">
                      Available for projects, consulting, and collaborative work.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full gap-2 bg-foreground text-background rounded-none h-11 font-semibold text-sm transition-all duration-300 hover:bg-foreground/90"
                      asChild
                    >
                      <a href="mailto:me@hectormendez.io">
                        <Mail className="w-4 h-4" />
                        me@hectormendez.io
                      </a>
                    </Button>
                    
                    <Button 
                      className="w-full gap-2 bg-foreground/80 text-background rounded-none h-11 font-semibold text-sm transition-all duration-300 hover:bg-foreground"
                      asChild
                    >
                      <a href="https://linkedin.com/in/hectormendez" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full gap-2 border-foreground/30 hover:bg-foreground/5 rounded-none h-11 font-semibold text-sm transition-all duration-300"
                      asChild
                    >
                      <a href="https://github.com/hectormendez" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full gap-2 border-foreground/30 hover:bg-foreground/5 rounded-none h-11 font-semibold text-sm transition-all duration-300"
                      asChild
                    >
                      <a href="https://hectormendez.io" target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4" />
                        Website
                      </a>
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t border-foreground/10">
                    <p className="text-xs text-muted-foreground flex items-center gap-1 font-light">
                      <Phone className="w-3.5 h-3.5" />
                      (702) 609-5075
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </button>
    </section>
  )
}
