"use client"

import { Palette, Code2, HardHat, Database, Cpu, Monitor } from "lucide-react"

// Design Software
const designTools = [
  "Photoshop",
  "Illustrator",
  "After Effects",
  "InDesign",
  "Lightroom",
  "Adobe XD",
  "SketchUp",
  "Gimp",
  "Inkscape"
]

// Programming & Development
const devTools = [
  "JavaScript",
  "Python",
  "PHP",
  "HTML/CSS",
  "C++",
  "C#",
  "Java",
  "Arduino",
  "WordPress"
]

// Database
const databaseTools = [
  "MySQL",
  "Oracle",
  "MariaDB"
]

// Hardware & IT
const hardwareTools = [
  "Eagle CAD",
  "Fritzing",
  "KiCad",
  "Hardware Assembly",
  "Electronic Welding",
  "IoT Systems",
  "GPT Integration"
]

// Operating Systems & Office
const systemTools = [
  "Mac OS",
  "Windows",
  "Linux (Ubuntu)",
  "Microsoft Office",
  "Google Suite",
  "Open Office"
]

export function SkillsGrid() {
  return (
    <section id="skills" className="py-16 md:py-24 px-5 md:px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <p className="text-accent font-semibold tracking-wide uppercase text-xs">
            Systems & Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            The Digital Foundation
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning design, development, hardware, and enterprise systems
          </p>
        </div>

        {/* Main Skills Grid - Mobile first, single column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Design Software */}
          <div className="glass rounded-2xl p-6 hover:glass-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Design Software
                </h3>
                <p className="text-xs text-muted-foreground">Creative Suite & 3D</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs md:text-sm px-3 py-1.5 bg-accent/5 text-muted-foreground rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="glass rounded-2xl p-6 hover:glass-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Programming
                </h3>
                <p className="text-xs text-muted-foreground">Languages & Frameworks</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {devTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs md:text-sm px-3 py-1.5 bg-accent/5 text-muted-foreground rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="glass rounded-2xl p-6 hover:glass-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Database
                </h3>
                <p className="text-xs text-muted-foreground">Data Management</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {databaseTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs md:text-sm px-3 py-1.5 bg-accent/5 text-muted-foreground rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Hardware & IT */}
          <div className="glass rounded-2xl p-6 hover:glass-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Hardware & IT
                </h3>
                <p className="text-xs text-muted-foreground">Electronic Design & IoT</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {hardwareTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs md:text-sm px-3 py-1.5 bg-accent/5 text-muted-foreground rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & Office - Full width on mobile, spans 2 cols on lg */}
          <div className="glass rounded-2xl p-6 hover:glass-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Operating Systems & Office
                </h3>
                <p className="text-xs text-muted-foreground">Platforms & Productivity</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {systemTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs md:text-sm px-3 py-1.5 bg-accent/5 text-muted-foreground rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8 glass rounded-2xl p-6">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Analytical Thinking", "Creativity", "Teamwork", "Diligence", "Proactiveness", "Leadership", "Self-Learner (Autodidact)"].map((skill) => (
              <span 
                key={skill}
                className="text-xs md:text-sm px-4 py-2 bg-accent/10 text-accent rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row - Mobile first, 2 columns on mobile, 4 on md */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="glass rounded-2xl p-6 text-center hover:glass-xl transition-all duration-300">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-display)' }}>15+</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Years Experience</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:glass-xl transition-all duration-300">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-display)' }}>8</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Programming Languages</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:glass-xl transition-all duration-300">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-display)' }}>$80K</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Business Grown</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:glass-xl transition-all duration-300">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-display)' }}>3</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Degrees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
