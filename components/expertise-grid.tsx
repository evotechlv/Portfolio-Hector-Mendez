"use client"

import { Globe, DollarSign, Pencil, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExpertiseGrid() {
  return (
    <section id="expertise" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold tracking-widest uppercase text-xs">
            Construction Master-Grid
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Three Pillars of <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Orchestrating complex operations across global supply chains, financial precision, and architectural visualization
          </p>
        </div>

        {/* Bento Grid - 3 Large Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Global Operations & Logistics */}
          <div className="group lg:col-span-1 crystal-card p-8 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500">
            <div className="relative space-y-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 w-fit group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Global Operations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Orchestrated complex overseas deliveries with 100% ETA tracking visibility. Managed multinational warehouse control systems and implemented comprehensive project field tracking from scratch.
                </p>
              </div>

              <div className="space-y-2 pt-4">
                <p className="text-sm font-semibold text-accent">Key Achievements:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 3-year multi-state stone contracts optimized for efficiency</li>
                  <li>• Real-time ETA tracking across continents</li>
                  <li>• Warehouse inventory control from zero-to-production</li>
                  <li>• CPM-based scheduling for construction developers</li>
                </ul>
              </div>

              <Button className="w-full mt-4 bg-accent/10 hover:bg-accent/20 text-accent rounded-full group-hover:shadow-lg transition-all">
                Explore Logistics
              </Button>
            </div>
          </div>

          {/* Financial & Estimations */}
          <div className="group lg:col-span-1 crystal-card p-8 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500">
            <div className="relative space-y-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 w-fit group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  The Estimator
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Executed comprehensive project estimations and financial POs for multi-trade construction builds. Expert in material costing (FOB/CIF), pricing negotiation, and budget-driven project optimization.
                </p>
              </div>

              <div className="space-y-2 pt-4">
                <p className="text-sm font-semibold text-accent">Specializations:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multi-trade cost estimation (Electrical, Drywall, Trim)</li>
                  <li>• Financial PO management & invoicing</li>
                  <li>• Material pricing & supplier negotiation</li>
                  <li>• Budget optimization & cost control</li>
                </ul>
              </div>

              <Button className="w-full mt-4 bg-accent/10 hover:bg-accent/20 text-accent rounded-full group-hover:shadow-lg transition-all">
                Explore Financials
              </Button>
            </div>
          </div>

          {/* Design & Visualization */}
          <div className="group lg:col-span-1 crystal-card p-8 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500">
            <div className="relative space-y-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 w-fit group-hover:scale-110 transition-transform duration-300">
                <Pencil className="w-8 h-8 text-accent" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Design & Renders
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Translated client visions into technical floor plans and detailed 3D cabinet renderings. Expertise in blueprints, CAD design, and photorealistic visualization for future developments.
                </p>
              </div>

              <div className="space-y-2 pt-4">
                <p className="text-sm font-semibold text-accent">Design Tools:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SketchUp Pro (advanced modeling)</li>
                  <li>• Adobe Creative Suite (renders & mock-ups)</li>
                  <li>• Cabinet rendering & technical drawings</li>
                  <li>• Floor plans & architectural blueprints</li>
                </ul>
              </div>

              <Button className="w-full mt-4 bg-accent/10 hover:bg-accent/20 text-accent rounded-full group-hover:shadow-lg transition-all">
                Explore Design
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Years in Operations", value: "15+" },
            { label: "Global Projects", value: "50+" },
            { label: "Budget Managed", value: "$10M+" },
            { label: "Efficiency Gain", value: "40%" }
          ].map((stat) => (
            <div key={stat.label} className="crystal-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-accent/10 hover:scale-105 transition-all duration-300">
              <p className="text-3xl font-bold text-accent mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
