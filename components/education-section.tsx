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
    <section id="education" className="py-16 md:py-24 px-5 md:px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <p className="text-accent font-semibold tracking-wide uppercase text-xs">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Education
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            A strong foundation combining engineering expertise with business acumen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`glass rounded-2xl p-6 md:p-8 shadow-sm hover:glass-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group ${
                edu.featured ? 'ring-1 ring-accent/20' : ''
              }`}
            >
              <div className="flex flex-col h-full">
                {edu.featured && (
                  <span className="text-[10px] px-2 py-0.5 bg-accent text-accent-foreground rounded-full w-fit mb-3 font-medium">
                    Primary Degree
                  </span>
                )}
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0 w-fit group-hover:scale-110 transition-transform duration-300 mb-4">
                  <edu.icon className="w-6 h-6" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                    {edu.degree}
                  </h3>
                  <p className="text-accent font-medium text-sm">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 shrink-0" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 shrink-0" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-2">
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
