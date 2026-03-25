"use client"

import { useState } from "react"
import { Briefcase, Building2, HardHat, Cpu, Plus, Minus } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Supervisor - Cleaning Department",
    company: "ESC Federal",
    location: "Las Vegas (Area 15)",
    period: "2024 - Present",
    description: "Supervising operations at one of Las Vegas' most iconic venues. Managing staff, ensuring safety and health regulations compliance, creating clean and welcoming environments for visitors.",
    highlights: ["Operations Management", "Compliance", "Team Leadership", "Quality Control"],
    icon: Building2,
    category: "current"
  },
  {
    id: 2,
    role: "IT/Office Manager & Warehouse Manager",
    company: "RDI",
    location: "Las Vegas",
    period: "2022 - 2024",
    description: "Started in warehouse operations, advanced to Warehouse Manager. Implemented comprehensive inventory tracking systems from scratch. Transitioned to IT/Office Manager, overseeing website development, estimation, and bidding systems for multinational projects.",
    highlights: ["Inventory Systems", "3D Rendering", "Estimations", "Bidding Systems", "Multi-State Projects"],
    icon: HardHat,
    category: "construction"
  },
  {
    id: 3,
    role: "IT Manager",
    company: "Audicon",
    location: "El Salvador",
    period: "2015 - 2022",
    description: "Developed professional website and secure messaging systems. Upgraded network infrastructure, addressed security vulnerabilities. Deployed dedicated servers with automated daily backups. Maintained and upgraded company hardware.",
    highlights: ["Network Infrastructure", "Security", "Server Management", "Hardware Maintenance"],
    icon: Cpu,
    category: "tech"
  },
  {
    id: 4,
    role: "Co-Founder & Tech Lead",
    company: "ALSW",
    location: "El Salvador",
    period: "2008 - 2020",
    description: "Co-founded and grew a tech company from $40 to $80K operation over eight years. Provided machine support, automation systems, and technology solutions. Worked with U.S. factories on confidential prototypes. Speaker at international events.",
    highlights: ["Entrepreneurship", "3D Printing", "Automation", "IoT", "International Speaking"],
    icon: Cpu,
    category: "tech"
  },
  {
    id: 5,
    role: "Operations & Financial Manager",
    company: "Cars Mendez",
    location: "El Salvador",
    period: "2005 - 2025",
    description: "Family business with over 35 years of operation. Managed international wire transfers, inventory control, bank payments, and government compliance. Price negotiation, financial management, and liaison with auto auctions.",
    highlights: ["Financial Management", "International Transfers", "Inventory Control", "Negotiations"],
    icon: Building2,
    category: "business"
  }
]

export function ExperienceTimeline() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="experience" className="py-12 md:py-24 px-5 md:px-4 bg-background pb-32 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
          <p className="text-accent font-semibold tracking-wide uppercase text-xs">
            Professional Timeline
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Career Journey
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
            From tech entrepreneurship to construction operations - two decades of building systems
          </p>
        </div>

        {/* Mobile: Condensed Timeline with Collapsible Accomplishments */}
        <div className="space-y-3 md:hidden">
          {experiences.map((exp) => (
            <div key={exp.id} className="glass rounded-xl overflow-hidden">
              {/* Header - Always Visible */}
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground line-clamp-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.role.split(" - ")[0]}</p>
                </div>
                {expandedId === exp.id ? (
                  <Minus className="w-5 h-5 text-accent shrink-0 ml-2" />
                ) : (
                  <Plus className="w-5 h-5 text-accent shrink-0 ml-2" />
                )}
              </button>

              {/* Expandable Details */}
              {expandedId === exp.id && (
                <div className="border-t border-white/10 px-4 py-3 space-y-3 bg-white/2.5">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent font-medium">{exp.period}</span> · {exp.location}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="text-[10px] px-2 py-1 bg-accent/10 text-muted-foreground rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Traditional Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent z-10 flex items-center justify-center">
                  <div className={`w-2 h-2 rounded-full bg-accent transition-transform duration-300 ${
                    hoveredId === exp.id ? 'scale-150' : 'scale-100'
                  }`} />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div 
                    className={`glass rounded-2xl p-6 shadow-sm transition-all duration-300 ${
                      hoveredId === exp.id ? 'shadow-lg shadow-accent/10 glass-xl' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                        hoveredId === exp.id ? 'bg-accent text-accent-foreground' : 'bg-accent/10 text-accent'
                      }`}>
                        <exp.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                            {exp.role}
                          </h3>
                          <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          {exp.company} · {exp.location}
                        </p>
                        <p className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${
                          hoveredId === exp.id ? 'opacity-100' : 'opacity-80'
                        }`}>
                          {exp.description}
                        </p>
                        <div className={`flex flex-wrap gap-2 mt-4 transition-all duration-300 ${
                          hoveredId === exp.id ? 'opacity-100' : 'opacity-60'
                        }`}>
                          {exp.highlights.map((highlight) => (
                            <span 
                              key={highlight}
                              className="text-xs px-2.5 py-1 bg-accent/5 text-muted-foreground rounded-md"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
