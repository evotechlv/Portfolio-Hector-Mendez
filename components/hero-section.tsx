"use client"

import { Mail, Linkedin, Github, ArrowDown, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/3" />
      
      {/* Soft architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,122,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,122,255,0.3) 1px, transparent 1px),
            linear-gradient(rgba(0,122,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,122,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}
      />
      
      {/* Decorative glass elements */}
      <div className="absolute top-32 right-12 w-40 h-40 glass-sm rounded-3xl opacity-30 hidden lg:block" />
      <div className="absolute bottom-40 left-12 w-32 h-32 glass-sm rounded-3xl opacity-20 hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-semibold tracking-wide uppercase text-xs">
                Construction Operations & Design Specialist
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-balance">Hector Mendez</span>
                <br />
                <span className="text-accent text-balance">Precision in Construction & Digital Design</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Experienced engineer integrating hardware, software, and DevOps principles to optimize system reliability. Expert in construction estimations, 3D rendering, and financial analytics.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Projects
              </span>
              <span>Las Vegas, NV</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
                Request an Estimation
              </Button>
              <Button variant="outline" className="gap-2 border-muted hover:bg-muted/50 hover:border-muted rounded-full px-6">
                Download Full Project List
              </Button>
            </div>
          </div>

          {/* Right: Contact Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Main card with glass effect */}
              <div className="relative glass-xl rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 w-full max-w-sm">
                {/* Subtle corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent/20 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/20 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/20 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent/20 rounded-br-2xl" />
                
                <div className="relative space-y-6">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/15 to-accent/5 border-2 border-accent/20 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-accent" style={{ fontFamily: 'var(--font-display)' }}>HM</span>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      Connect with Me
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Ready to build better systems together
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                      asChild
                    >
                      <a href="mailto:me@hectormendez.io">
                        <Mail className="w-4 h-4" />
                        me@hectormendez.io
                      </a>
                    </Button>
                    
                    {/* LinkedIn - Hire Me CTA */}
                    <Button 
                      className="w-full gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white rounded-full"
                      asChild
                    >
                      <a href="https://linkedin.com/in/hectormendez" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        Hire Me on LinkedIn
                      </a>
                    </Button>
                    
                    {/* GitHub */}
                    <Button 
                      variant="outline" 
                      className="w-full gap-2 border-muted/50 hover:bg-muted/30 hover:border-muted rounded-full relative"
                      asChild
                    >
                      <a href="https://github.com/hectormendez" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                        <span className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 bg-green-500 text-white rounded-full font-medium">
                          Active
                        </span>
                      </a>
                    </Button>
                    
                    {/* Website */}
                    <Button 
                      variant="outline" 
                      className="w-full gap-2 border-muted/50 hover:bg-muted/30 hover:border-muted rounded-full"
                      asChild
                    >
                      <a href="https://hectormendez.io" target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4" />
                        hectormendez.io
                      </a>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-center text-muted-foreground flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    (702) 609-5075
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  )
}
