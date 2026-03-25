"use client"

import { HardHat, Truck, Calculator, Palette, Box, FileText } from "lucide-react"
import { HorizontalScroll, ScrollCard } from "./horizontal-scroll"

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
    <section id="about" className="py-12 md:py-24 px-5 md:px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section - Shorter on mobile */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16 space-y-3 md:space-y-6">
          <p className="text-accent font-semibold tracking-wide uppercase text-xs">
            Profile
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            The Master Builder
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Experienced and proactive engineer integrating hardware, software, and DevOps principles to optimize system reliability and scalability.
          </p>
          {/* Longer description hidden on mobile */}
          <p className="hidden md:block text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Proven track record as a consultant for large-scale projects, 3D rendering for future developments, and managing multinational operations.
          </p>
        </div>

        {/* Core Construction Expertise */}
        <div className="space-y-4 md:space-y-6">
          <div className="text-center">
            <p className="text-accent font-semibold tracking-wide uppercase text-xs">
              Core Construction Expertise
            </p>
          </div>
          
          {/* Mobile: Horizontal Scroll Carousel */}
          <div className="lg:hidden -mx-5 md:-mx-4">
            <HorizontalScroll>
              {expertiseCards.map((card) => (
                <ScrollCard key={card.title}>
                  <div className="glass rounded-2xl p-5 h-full hover:glass-xl transition-all duration-300 group">
                    <div className="space-y-3">
                      <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors w-fit">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </ScrollCard>
              ))}
            </HorizontalScroll>
          </div>
          
          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseCards.map((card) => (
              <div 
                key={card.title}
                className="glass rounded-2xl p-6 hover:glass-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
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

        {/* Key Accomplishments */}
        <div className="mt-8 md:mt-12 glass rounded-2xl p-5 md:p-8">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Key Accomplishments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-xs uppercase tracking-wider">Project Tracking & Logistics</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Orchestrated complex overseas delivery schedules, maintaining 100% visibility on ETAs.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-accent font-semibold text-xs uppercase tracking-wider">Financial Management</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Executed comprehensive project estimations and financial POs for multi-trade builds.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-accent font-semibold text-xs uppercase tracking-wider">Technical Design</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Translated client needs into technical floor plans and detailed cabinet renderings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
