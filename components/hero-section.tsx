"use client"

import { Mail, Linkedin, Github, ArrowDown, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Blueprint background with architectural grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Blueprint-style grid pattern - architectural lines */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,130,67,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,130,67,0.4) 1px, transparent 1px),
            linear-gradient(rgba(255,130,67,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,130,67,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}
      />
      
      {/* Decorative architectural elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-primary/5 hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Construction Operations & Design Specialist
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-balance">Hector Mendez:</span>
                <br />
                <span className="text-primary text-balance">Precision in Construction & Digital Design</span>
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
              <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                Request an Estimation
              </Button>
              <Button variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                Download Full Project List
              </Button>
            </div>
          </div>

          {/* Right: Contact Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main card */}
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl shadow-primary/5 transform hover:scale-[1.02] transition-all duration-300">
                {/* Decorative blueprint corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
                
                <div className="relative space-y-6">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>HM</span>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      Connect with Me
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Ready to build better systems together
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href="mailto:me@hectormendez.io">
                        <Mail className="w-4 h-4" />
                        me@hectormendez.io
                      </a>
                    </Button>
                    
                    {/* LinkedIn - Hire Me CTA */}
                    <Button 
                      className="w-full gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white"
                      asChild
                    >
                      <a href="https://linkedin.com/in/hectormendez" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        Hire Me on LinkedIn
                      </a>
                    </Button>
                    
                    {/* GitHub - Active Contributor Badge */}
                    <Button 
                      variant="outline" 
                      className="w-full gap-2 border-border hover:bg-muted hover:border-primary/40 relative"
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
                      className="w-full gap-2 border-border hover:bg-muted hover:border-primary/40"
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
