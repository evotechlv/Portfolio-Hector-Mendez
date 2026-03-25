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
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Systems & Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            The Digital Foundation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning design, development, hardware, and enterprise systems
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Design Software */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Design Software
                </h3>
                <p className="text-xs text-muted-foreground">Creative Suite & 3D</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-sm px-3 py-1.5 bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Programming
                </h3>
                <p className="text-xs text-muted-foreground">Languages & Frameworks</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {devTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-sm px-3 py-1.5 bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Database
                </h3>
                <p className="text-xs text-muted-foreground">Data Management</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {databaseTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-sm px-3 py-1.5 bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Hardware & IT */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Hardware & IT
                </h3>
                <p className="text-xs text-muted-foreground">Electronic Design & IoT</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {hardwareTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-sm px-3 py-1.5 bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & Office */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Operating Systems & Office
                </h3>
                <p className="text-xs text-muted-foreground">Platforms & Productivity</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {systemTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-sm px-3 py-1.5 bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8 bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Analytical Thinking", "Creativity", "Teamwork", "Diligence", "Proactiveness", "Leadership", "Self-Learner (Autodidact)"].map((skill) => (
              <span 
                key={skill}
                className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300">
            <p className="text-3xl lg:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>15+</p>
            <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300">
            <p className="text-3xl lg:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>8</p>
            <p className="text-sm text-muted-foreground mt-1">Programming Languages</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300">
            <p className="text-3xl lg:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>$80K</p>
            <p className="text-sm text-muted-foreground mt-1">Business Grown</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300">
            <p className="text-3xl lg:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>3</p>
            <p className="text-sm text-muted-foreground mt-1">Degrees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
