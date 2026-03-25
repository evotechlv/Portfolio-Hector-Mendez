import { Mail, Linkedin, Github, MapPin, Phone, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              Hector Mendez
            </h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Construction Operations & Design Specialist integrating hardware, software, and DevOps principles to optimize system reliability and scalability.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="mailto:me@hectormendez.io" 
                className="p-2.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/hectormendez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-muted hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/hectormendez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://hectormendez.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">
                Education
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 text-primary" />
                <span>Las Vegas, NV</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>(702) 609-5075</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <span>me@hectormendez.io</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4 shrink-0 text-primary" />
                <span>hectormendez.io</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Hector Mendez. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Precision in Construction & Digital Design
          </p>
        </div>
      </div>
    </footer>
  )
}
