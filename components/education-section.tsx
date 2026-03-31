"use client"

import { GraduationCap, Award, BookOpen, MapPin, Calendar } from "lucide-react"

const education = [
  {
    degree: "Computer Science Engineer",
    school: "Don Bosco University",
    location: "El Salvador",
    period: "2008 - 2016",
    description: "Comprehensive engineering program covering software development, hardware design, systems architecture, and database management.",
    icon: GraduationCap,
    featured: true
  },
  {
    degree: "MBA Financial Management",
    school: "Washington Business School",
    location: "Online",
    period: "2018",
    description: "Advanced business education focusing on financial analytics, strategic management, project estimation, and business operations.",
    icon: Award
  },
  {
    degree: "Introduction to Web Development",
    school: "University of Alicante",
    location: "Online",
    period: "2017",
    description: "Foundations of modern web development including HTML, CSS, JavaScript, responsive design, and WordPress development.",
    icon: BookOpen
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-24 px-5 md:px-4 bg-background border-t border-foreground/10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 md:mb-16 space-y-3 md:space-y-4">
          <p className="text-muted-foreground font-light tracking-wider uppercase text-xs">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Education
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl font-light">
            A strong foundation combining engineering expertise with business acumen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`border border-foreground/20 rounded-none p-5 md:p-6 hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all duration-300 group bg-foreground/[0.01] ${
                edu.featured ? 'ring-1 ring-foreground/30' : ''
              }`}
            >
              <div className="flex flex-col h-full">
                {edu.featured && (
                  <span className="text-[10px] px-2 py-0.5 border border-foreground/30 text-muted-foreground rounded-none w-fit mb-3 font-light tracking-wider uppercase">
                    Primary Degree
                  </span>
                )}
                <div className="p-2 border border-foreground/20 text-foreground shrink-0 w-fit mb-4 group-hover:border-foreground/40 transition-colors">
                  <edu.icon className="w-4 h-4" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-sm md:text-base font-semibold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-light text-xs md:text-sm">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1.5 sm:gap-2 text-xs text-muted-foreground font-light">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 shrink-0" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 shrink-0" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed pt-1 font-light">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
