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
    <section id="skills" className="py-12 md:py-24 px-5 md:px-4 bg-background border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-16 space-y-3 md:space-y-4">
          <p className="text-muted-foreground font-light tracking-wider uppercase text-xs">
            Systems & Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            The Digital Foundation
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl font-light">
            A comprehensive toolkit spanning design, development, hardware, and enterprise systems
          </p>
        </div>

        {/* Main Skills Grid - Mobile first, single column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Design Software */}
          <div className="border border-foreground/20 rounded-none p-5 hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 group bg-foreground/[0.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 border border-foreground/20 text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Design Software
                </h3>
                <p className="text-xs text-muted-foreground font-light">Creative Suite & 3D</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs px-2 py-1 border border-foreground/20 text-muted-foreground rounded-none hover:border-foreground/40 hover:text-foreground transition-colors font-light"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="border border-foreground/20 rounded-none p-5 hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 group bg-foreground/[0.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 border border-foreground/20 text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Programming
                </h3>
                <p className="text-xs text-muted-foreground font-light">Languages & Frameworks</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {devTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs px-2 py-1 border border-foreground/20 text-muted-foreground rounded-none hover:border-foreground/40 hover:text-foreground transition-colors font-light"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="border border-foreground/20 rounded-none p-5 hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 group bg-foreground/[0.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 border border-foreground/20 text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Database
                </h3>
                <p className="text-xs text-muted-foreground font-light">Data Management</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {databaseTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs px-2 py-1 border border-foreground/20 text-muted-foreground rounded-none hover:border-foreground/40 hover:text-foreground transition-colors font-light"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Hardware & IT */}
          <div className="border border-foreground/20 rounded-none p-5 hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 group bg-foreground/[0.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 border border-foreground/20 text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Hardware & IT
                </h3>
                <p className="text-xs text-muted-foreground font-light">Electronic Design & IoT</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {hardwareTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs px-2 py-1 border border-foreground/20 text-muted-foreground rounded-none hover:border-foreground/40 hover:text-foreground transition-colors font-light"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & Office - Full width on mobile, spans 2 cols on lg */}
          <div className="border border-foreground/20 rounded-none p-5 hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 group bg-foreground/[0.01] md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 border border-foreground/20 text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Operating Systems & Office
                </h3>
                <p className="text-xs text-muted-foreground font-light">Platforms & Productivity</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {systemTools.map((tool) => (
                <span 
                  key={tool}
                  className="text-xs px-2 py-1 border border-foreground/20 text-muted-foreground rounded-none hover:border-foreground/40 hover:text-foreground transition-colors font-light"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8 border border-foreground/10 rounded-none p-5">
          <h3 className="text-sm md:text-base font-semibold text-foreground mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Analytical Thinking", "Creativity", "Teamwork", "Diligence", "Proactiveness", "Leadership", "Self-Learner (Autodidact)"].map((skill) => (
              <span 
                key={skill}
                className="text-xs px-2.5 py-1 border border-foreground/20 text-muted-foreground rounded-none font-light hover:border-foreground/40 hover:text-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row - Mobile first, 2 columns on mobile, 4 on md */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          <div className="border border-foreground/20 rounded-none p-4 text-center hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 bg-foreground/[0.01]">
            <p className="text-xl md:text-2xl lg:text-3xl font-black text-foreground" style={{ fontFamily: 'var(--font-display)' }}>15+</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 font-light">Years Experience</p>
          </div>
          <div className="border border-foreground/20 rounded-none p-4 text-center hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 bg-foreground/[0.01]">
            <p className="text-xl md:text-2xl lg:text-3xl font-black text-foreground" style={{ fontFamily: 'var(--font-display)' }}>8</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 font-light">Programming Languages</p>
          </div>
          <div className="border border-foreground/20 rounded-none p-4 text-center hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 bg-foreground/[0.01]">
            <p className="text-xl md:text-2xl lg:text-3xl font-black text-foreground" style={{ fontFamily: 'var(--font-display)' }}>$80K</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 font-light">Business Grown</p>
          </div>
          <div className="border border-foreground/20 rounded-none p-4 text-center hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 bg-foreground/[0.01]">
            <p className="text-xl md:text-2xl lg:text-3xl font-black text-foreground" style={{ fontFamily: 'var(--font-display)' }}>3</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 font-light">Degrees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
