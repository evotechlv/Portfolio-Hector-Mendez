"use client"

import { ExternalLink, Github, Building, Layers, Cpu, Box } from "lucide-react"
import { Button } from "@/components/ui/button"

const constructionProjects = [
  {
    id: 1,
    title: "3D Cabinet & Floor Plan Rendering",
    description: "High-fidelity cabinet rendering and detailed floor plan creation for RDI multi-state stone projects. Comprehensive visualization for project stakeholders and factories.",
    category: "Design & Rendering",
    image: "bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5",
    tags: ["SketchUp", "3D Rendering", "Floor Plans", "Client Visualization"],
    featured: true,
    type: "construction"
  },
  {
    id: 2,
    title: "Inventory & Tracking System",
    description: "Built comprehensive warehouse inventory and tracking system from scratch at RDI. Includes in/out systems, packing schedules, and CPM-based tracking for construction developers.",
    category: "Warehouse Operations",
    image: "bg-gradient-to-br from-chart-2/20 via-chart-2/10 to-chart-2/5",
    tags: ["Inventory Control", "CPM Tracking", "Warehouse Management"],
    featured: false,
    type: "construction"
  },
  {
    id: 3,
    title: "Multi-Trade Estimation Platform",
    description: "Estimation and bidding systems for multinational projects covering electrical, carpentry, and stonework. FOB/CIF material cost calculations and delivery scheduling.",
    category: "Pre-Construction",
    image: "bg-gradient-to-br from-chart-3/20 via-chart-3/10 to-chart-3/5",
    tags: ["Estimations", "Bidding Systems", "FOB/CIF", "Financial PO"],
    featured: false,
    type: "construction"
  }
]

const techProjects = [
  {
    id: 4,
    title: "ALSW Tech Company",
    description: "Co-founded and grew tech company from $40 to $80K operation. Provided machine support, automation systems, and worked with U.S. factories on confidential prototypes.",
    category: "Entrepreneurship",
    image: "bg-gradient-to-br from-chart-4/20 via-chart-4/10 to-chart-4/5",
    tags: ["3D Printing", "Automation", "IoT", "Prototyping"],
    featured: true,
    type: "tech"
  },
  {
    id: 5,
    title: "Enterprise IT Infrastructure",
    description: "Deployed dedicated servers at Audicon, upgraded network infrastructure, implemented secure messaging systems, and automated daily backups for reliable performance.",
    category: "IT Management",
    image: "bg-gradient-to-br from-chart-5/20 via-chart-5/10 to-chart-5/5",
    tags: ["Server Management", "Network Security", "Backup Systems"],
    featured: false,
    type: "tech"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-24 px-5 md:px-4 bg-background border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-16 space-y-3 md:space-y-4">
          <p className="text-muted-foreground font-light tracking-wider uppercase text-xs">
            Project Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Featured Work
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl font-light">
            Construction operations and tech solutions showcasing precision in execution
          </p>
        </div>

        <div className="space-y-12">
          {/* Construction Projects */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <div className="p-2 border border-foreground/20 text-foreground shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Construction & Operations
              </h3>
              <span className="text-xs px-2 py-0.5 border border-foreground/20 text-muted-foreground rounded-none font-light">
                Estimations, Renders & Systems
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {constructionProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} featured={index === 0} />
              ))}
            </div>
          </div>

          {/* Tech Projects */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <div className="p-2 border border-foreground/20 text-foreground shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Technology & Innovation
              </h3>
              <span className="text-xs px-2 py-0.5 border border-foreground/20 text-muted-foreground rounded-none font-light">
                Entrepreneurship & IT
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} featured={index === 0} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button className="w-full sm:w-auto gap-2 bg-foreground hover:bg-foreground/90 text-background rounded-none px-8 h-11 font-semibold text-sm tracking-wide">
            <Box className="w-4 h-4" />
            Download Full Project List
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }: { project: typeof constructionProjects[0]; featured?: boolean }) {
  return (
    <div
      className={`group relative border border-foreground/20 rounded-none overflow-hidden bg-foreground/[0.01] hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 ${
        featured ? 'ring-1 ring-foreground/30' : ''
      }`}
    >
      {/* Project Image Placeholder - 16:9 Aspect Ratio */}
      <div className="bg-gradient-to-br from-foreground/5 to-foreground/2 aspect-video relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-2 border border-foreground/20 flex items-center justify-center">
              <span className="text-lg font-black text-foreground/60" style={{ fontFamily: 'var(--font-display)' }}>
                {project.id.toString().padStart(2, '0')}
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-light">{project.category}</p>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button size="sm" variant="outline" className="gap-2 border-foreground/30 hover:bg-foreground/10 rounded-none h-9 text-sm" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5" />
              Details
            </a>
          </Button>
          <Button size="sm" className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-none h-9 text-sm font-medium" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5" />
              View
            </a>
          </Button>
        </div>
        {featured && (
          <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 border border-foreground/30 text-muted-foreground rounded-none font-light uppercase tracking-wider">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-base font-semibold text-foreground leading-tight tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          {project.title}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3 font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 border border-foreground/20 text-muted-foreground rounded-none font-light hover:border-foreground/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
