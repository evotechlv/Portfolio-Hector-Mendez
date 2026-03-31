import { Mail, Linkedin, Github, MapPin, Phone, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12 md:py-16 px-5 md:px-4 mb-20 md:mb-0 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <h3 className="text-lg md:text-xl font-black text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Hector Mendez
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-sm leading-relaxed font-light">
              Construction Operations & Design Specialist integrating hardware, software, and DevOps principles to optimize system reliability and scalability.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a 
                href="mailto:me@hectormendez.io" 
                className="p-2 border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-colors text-foreground"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/hectormendez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-colors text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/hectormendez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-colors text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://hectormendez.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-colors text-foreground"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm md:text-base text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                About
              </a>
              <a href="#experience" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                Experience
              </a>
              <a href="#skills" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                Skills
              </a>
              <a href="#education" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                Education
              </a>
              <a href="#projects" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                Projects
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm md:text-base text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-light">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-foreground/60" />
                <span>Las Vegas, NV</span>
              </p>
              <p className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-light">
                <Phone className="w-3.5 h-3.5 shrink-0 text-foreground/60" />
                <span>(702) 609-5075</span>
              </p>
              <p className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-light">
                <Mail className="w-3.5 h-3.5 shrink-0 text-foreground/60" />
                <span>me@hectormendez.io</span>
              </p>
              <p className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-light">
                <Globe className="w-3.5 h-3.5 shrink-0 text-foreground/60" />
                <span>hectormendez.io</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Stacked on mobile */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-xs font-light">
            &copy; {new Date().getFullYear()} Hector Mendez. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs font-light">
            Precision in Construction & Digital Design
          </p>
        </div>
      </div>
    </footer>
  )
}
