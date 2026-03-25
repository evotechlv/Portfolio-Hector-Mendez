"use client"

import { HardHat, Truck, Calculator, Palette, Box, FileText } from "lucide-react"

const expertiseCards = [
  {
    icon: HardHat,
    title: "Field Operations",
    description: "Tracking projects in the field, reading complex architectural plans, and managing on-site workflows with precision."
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Managing overseas deliveries (ETA tracking), warehouse control, inventory management, and FOB/CIF calculations."
  },
  {
    icon: Calculator,
    title: "Pre-Construction & Estimation",
    description: "Detailed estimations for Flooring, Cabinets, Electrical, Drywall, Doors, and Trim. Financial PO management."
  },
  {
    icon: Palette,
    title: "Design & Rendering",
    description: "High-fidelity cabinet rendering, floor plan creation, and new construction product design using SketchUp and Adobe Suite."
  },
  {
    icon: Box,
    title: "Warehouse Control",
    description: "Implemented comprehensive inventory tracking systems from scratch. Developed in/out systems and packing schedules."
  },
  {
    icon: FileText,
    title: "Financial Analytics",
    description: "Project cost estimations, bidding systems for multinational projects, material cost calculations, and profitability analysis."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Profile
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            The Master Builder
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Experienced and proactive engineer integrating hardware, software, and DevOps principles to optimize system reliability and scalability. Extensive experience in construction, estimations, data analysis, and financial management.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Proven track record as a consultant for large-scale projects, 3D rendering for future developments, and managing multinational operations. Expertise in bidding, risk analysis, and implementing warehouse control systems. Skilled in software development, hardware design, and data-driven decision-making.
          </p>
        </div>

        {/* Core Construction Expertise Bento Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Core Construction Expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseCards.map((card) => (
              <div 
                key={card.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimized Experience Bullets */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Key Accomplishments
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Project Tracking & Logistics</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Orchestrated complex overseas delivery schedules, maintaining 100% visibility on ETAs and warehouse inventory control.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Financial Management</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Executed comprehensive project estimations and financial POs for multi-trade builds, including electrical, drywall, and custom trim.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Technical Design</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Translated client needs into technical floor plans and detailed cabinet renderings using Adobe Creative Suite and SketchUp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
