"use client"

import { Mail, Linkedin, Github, ArrowDown, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen lg:min-h-screen flex items-center justify-center overflow-hidden px-5 md:px-4 py-20 pt-28 md:pt-20 lg:pt-32">
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
      
      {/* Decorative glass elements - hidden on mobile */}
      <div className="absolute top-32 right-12 w-40 h-40 glass-sm rounded-3xl opacity-30 hidden lg:block" />
      <div className="absolute bottom-40 left-12 w-32 h-32 glass-sm rounded-3xl opacity-20 hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Typography - Mobile first, shortened on mobile */}
          <div className="space-y-4 md:space-y-8">
            {/* Mobile: Short title */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-balance">Hector Mendez</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-accent">Master Builder</p>
            </div>
            
            {/* Mobile: Short description, hidden on desktop */}
            <p className="text-base text-muted-foreground leading-relaxed lg:hidden">
              Construction operations & digital systems expert with 15+ years of experience.
            </p>

            {/* Desktop: Full description, hidden on mobile */}
            <div className="hidden lg:block space-y-4">
              <p className="text-accent font-semibold tracking-wide uppercase text-xs">
                Construction Operations & Design Specialist
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Experienced engineer integrating hardware, software, and DevOps principles to optimize system reliability. Expert in construction estimations, 3D rendering, and financial analytics.
              </p>
            </div>
            
            {/* Status - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Projects
              </span>
              <span>Las Vegas, NV</span>
            </div>
            
            {/* CTA - Mobile: Single button, Desktop: Two buttons */}
            <div className="pt-2 lg:flex gap-3">
              <Button 
                className="w-full lg:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 h-12"
                asChild
              >
                <a href="mailto:me@hectormendez.io">Get in Touch</a>
              </Button>
              
              {/* Desktop additional button */}
              <Button 
                variant="outline" 
                className="hidden lg:inline-flex gap-2 border-muted hover:bg-muted/50 hover:border-muted rounded-full px-6 h-12"
                asChild
              >
                <a href="#">Download Full Project List</a>
              </Button>
            </div>

            {/* Mobile: Compact Connect with Me Card */}
            <div className="lg:hidden mt-6 glass rounded-2xl p-5 space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Connect with Me
                </h3>
                <p className="text-xs text-muted-foreground">
                  Ready to build better systems together
                </p>
              </div>

              <div className="space-y-2">
                <Button 
                  className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-10 text-sm"
                  asChild
                >
                  <a href="mailto:me@hectormendez.io">
                    <Mail className="w-3.5 h-3.5" />
                    me@hectormendez.io
                  </a>
                </Button>
                
                <Button 
                  className="w-full gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white rounded-full h-10 text-sm"
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
                    className="gap-1.5 border-muted/50 hover:bg-muted/30 hover:border-muted rounded-full h-10 text-xs"
                    asChild
                  >
                    <a href="https://github.com/hectormendez" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="gap-1.5 border-muted/50 hover:bg-muted/30 hover:border-muted rounded-full h-10 text-xs"
                    asChild
                  >
                    <a href="https://hectormendez.io" target="_blank" rel="noopener noreferrer">
                      <Globe className="w-3.5 h-3.5" />
                      Website
                    </a>
                  </Button>
                </div>
              </div>
              
              <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                (702) 609-5075
              </p>
            </div>
          </div>

          {/* Right: Contact Card - Full width on mobile, hidden on mobile */}
          <div className="hidden lg:flex justify-center lg:justify-end mt-8 md:mt-0">
            <div className="relative group w-full max-w-sm">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Main card with glass effect */}
              <div className="relative glass-xl rounded-3xl p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300 w-full">
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
                      className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12"
                      asChild
                    >
                      <a href="mailto:me@hectormendez.io">
                        <Mail className="w-4 h-4" />
                        me@hectormendez.io
                      </a>
                    </Button>
                    
                    {/* LinkedIn - Hire Me CTA */}
                    <Button 
                      className="w-full gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white rounded-full h-12"
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
                      className="w-full gap-2 border-muted/50 hover:bg-muted/30 hover:border-muted rounded-full h-12 relative"
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
                      className="w-full gap-2 border-muted/50 hover:bg-muted/30 hover:border-muted rounded-full h-12"
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

      {/* Scroll indicator - Hidden on mobile */}
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  )
}
