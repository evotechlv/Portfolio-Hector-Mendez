import { Mail, Linkedin, Github, MapPin, Phone, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass border-t border-white/20 py-12 md:py-16 px-5 md:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              Hector Mendez
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
              Construction Operations & Design Specialist integrating hardware, software, and DevOps principles to optimize system reliability and scalability.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="mailto:me@hectormendez.io" 
                className="p-2.5 rounded-lg bg-accent/10 hover:bg-accent/20 hover:text-accent transition-colors text-foreground"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/hectormendez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-accent/10 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] transition-colors text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/hectormendez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-accent/10 hover:bg-accent/20 hover:text-accent transition-colors text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://hectormendez.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-accent/10 hover:bg-accent/20 hover:text-accent transition-colors text-foreground"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base md:text-lg text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Skills
              </a>
              <a href="#education" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Education
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base md:text-lg text-foreground">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 text-accent" />
                <span>Las Vegas, NV</span>
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <span>(702) 609-5075</span>
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <span>me@hectormendez.io</span>
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 shrink-0 text-accent" />
                <span>hectormendez.io</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Stacked on mobile */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Hector Mendez. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Precision in Construction & Digital Design
          </p>
        </div>
      </div>
    </footer>
  )
}
