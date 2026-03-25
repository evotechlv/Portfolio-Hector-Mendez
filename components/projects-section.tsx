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
    <section id="projects" className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Project Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Construction operations and tech solutions showcasing precision in execution
          </p>
        </div>

        <div className="space-y-12">
          {/* Construction Projects */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                Construction & Operations
              </h3>
              <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full">
                Estimations, Renders & Systems
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {constructionProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} featured={index === 0} />
              ))}
            </div>
          </div>

          {/* Tech Projects */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                Technology & Innovation
              </h3>
              <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full">
                Entrepreneurship & IT
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {techProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} featured={index === 0} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Box className="w-5 h-5" />
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
      className={`group relative bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ${
        featured ? 'border-primary/30 ring-1 ring-primary/10' : 'border-border hover:border-primary/20'
      }`}
    >
      {/* Project Image Placeholder */}
      <div className={`${project.image} h-44 relative overflow-hidden`}>
        {/* Blueprint grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,130,67,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,130,67,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-14 h-14 mx-auto mb-2 rounded-xl bg-card/70 backdrop-blur-sm border border-border/50 flex items-center justify-center">
              <span className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                {project.id.toString().padStart(2, '0')}
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">{project.category}</p>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button size="sm" variant="secondary" className="gap-2" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Details
            </a>
          </Button>
          <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              View
            </a>
          </Button>
        </div>
        {featured && (
          <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 bg-primary text-primary-foreground rounded-full font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-foreground leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
