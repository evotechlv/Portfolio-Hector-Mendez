"use client"

import { BarChart3, Truck, DollarSign, Palette, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FieldGrid() {
  const projects = [
    {
      id: 1,
      title: "Field Project Tracking",
      subtitle: "Architectural Plan Reading",
      description: "Real-time construction site management and blueprint interpretation",
      icon: BarChart3,
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-600 dark:text-blue-400"
    },
    {
      id: 2,
      title: "Global Supply Chain",
      subtitle: "Logistics & Deliveries",
      description: "ETA tracking, warehouse control, and overseas shipping management",
      icon: Truck,
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-600 dark:text-emerald-400"
    },
    {
      id: 3,
      title: "Construction Economics",
      subtitle: "PO & Estimations",
      description: "Financial management for Electrical, Drywall, Flooring, and Trim",
      icon: DollarSign,
      color: "from-orange-500/20 to-orange-500/5",
      accent: "text-orange-600 dark:text-orange-400"
    },
    {
      id: 4,
      title: "3D Visualization",
      subtitle: "Sketchup & Adobe",
      description: "Cabinet renders, floor plans, and architectural visualization",
      icon: Palette,
      color: "from-purple-500/20 to-purple-500/5",
      accent: "text-purple-600 dark:text-purple-400"
    }
  ]

  return (
    <section id="field-grid" className="relative py-20 px-4 blueprint-grid texture-paper">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive toolkit for modern construction and design management
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className={`scroll-reveal scroll-reveal-${idx} group crystal-card p-8 lg:p-10 hover-tilt cursor-pointer transition-all duration-300 ${
                  idx === 0 || idx === 3 ? "md:col-span-1" : "md:col-span-1"
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl pointer-events-none`} />

                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center ${project.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 flex items-center gap-2 text-accent group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
