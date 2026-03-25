'use client'

import { Mail, Phone, MapPin, Briefcase, Code, Package, Zap, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollReveal, setScrollReveal] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setScrollReveal((prev) => ({ ...prev, [entry.target.id]: true }))
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const timelineEvents = [
    { year: 'Present', role: 'Supervisor at ESC Federal', location: 'Las Vegas Area 15' },
    { year: '2022-24', role: 'IT/Office & Warehouse Manager', location: 'RDI - Inventory systems from scratch' },
    { year: '2015-22', role: 'IT Manager', location: 'Audicon - Network & Security' },
    { year: '2008-20', role: 'Co-Founder', location: 'ALSW - Automation & 3D Printing' },
  ]

  const expertise = [
    {
      title: 'Field & Logistics',
      description: 'Plan reading, project tracking, overseas deliveries (ETA), and Warehouse Control',
      icon: Briefcase,
    },
    {
      title: 'Financial Analytics',
      description: 'Multi-trade estimations (Electrical, Drywall, Flooring, Trim) and Financial PO management',
      icon: Code,
    },
    {
      title: 'Design & Rendering',
      description: 'SketchUp 3D Cabinet rendering and Floor Plan creation',
      icon: Package,
    },
    {
      title: 'Tech Infrastructure',
      description: 'IoT, Server Management, and Automation',
      icon: Zap,
    },
  ]

  const skills = {
    'Creative Suite': ['SketchUp', 'Adobe Creative', 'Figma'],
    'Programming': ['JavaScript', 'Python', 'C++'],
    'Hardware': ['Arduino', 'IoT Devices', 'Eagle CAD'],
    'Database': ['SQL', 'MongoDB', 'Firebase'],
  }

  return (
    <main className='min-h-screen bg-background blueprint-grid'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-accent/3 dark:to-accent/5 pointer-events-none' />
        
        <div className='relative max-w-6xl mx-auto w-full'>
          <div className='space-y-8 max-w-4xl' data-reveal id='hero'>
            {/* Available Status */}
            <div className='inline-flex items-center gap-3 px-4 py-2 rounded-full crystal-card hover-tilt w-fit'>
              <span className='w-2 h-2 rounded-full bg-green-500 pulse-available' />
              <span className='text-sm font-medium text-foreground'>Available for Projects</span>
            </div>

            {/* Main Title */}
            <h1 className='text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] text-foreground'>
              <span className='block text-accent'>HECTOR</span>
              <span className='block'>MENDEZ</span>
            </h1>

            {/* Subtitle */}
            <p className='text-2xl sm:text-3xl font-semibold text-muted-foreground max-w-2xl'>
              The Master Builder: Integrating Hardware, Software, and Construction Operations.
            </p>

            {/* Description */}
            <p className='text-lg text-muted-foreground leading-relaxed max-w-lg'>
              Design-Engineer specializing in construction logistics, financial analytics, and digital infrastructure. Bridging the gap between hardware, software, and operations.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4 pt-4'>
              <Button className='gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-medium'>
                <Mail className='w-4 h-4' />
                Get in Touch
              </Button>
              <Button variant='outline' className='gap-2 rounded-full px-8 py-6 text-base font-medium hover-tilt'>
                <Briefcase className='w-4 h-4' />
                View Projects
              </Button>
            </div>

            {/* Contact Info */}
            <div className='pt-8 space-y-3 border-t border-border'>
              <div className='flex flex-wrap gap-6'>
                <a href='tel:+17026095075' className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group'>
                  <Phone className='w-4 h-4 group-hover:text-accent transition-colors' />
                  (702) 609-5075
                </a>
                <a href='mailto:me@hectormendez.io' className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group'>
                  <Mail className='w-4 h-4 group-hover:text-accent transition-colors' />
                  me@hectormendez.io
                </a>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <MapPin className='w-4 h-4' />
                  Las Vegas, NV
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className='relative px-4 py-20'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' data-reveal id='stats'>
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Programming Languages', value: '8' },
              { label: 'Business Growth', value: '$80K' },
              { label: 'Degrees', value: '3' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`crystal-card p-8 text-center hover-tilt ${scrollReveal[`stat-${i}`] ? 'scroll-reveal' : ''}`}
                id={`stat-${i}`}
                data-reveal
              >
                <p className='text-4xl font-bold text-accent mb-2'>{stat.value}</p>
                <p className='text-sm text-muted-foreground'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className='relative px-4 py-20'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold mb-12 text-foreground' data-reveal id='expertise-title'>Core Expertise</h2>
          <div className='grid lg:grid-cols-2 gap-6'>
            {expertise.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`crystal-card p-8 hover-tilt ${scrollReveal[`exp-${i}`] ? 'scroll-reveal' : ''}`}
                  id={`exp-${i}`}
                  data-reveal
                >
                  <div className='flex items-start gap-4'>
                    <Icon className='w-8 h-8 text-accent flex-shrink-0 mt-1' />
                    <div className='space-y-2'>
                      <h3 className='text-xl font-semibold text-foreground'>{item.title}</h3>
                      <p className='text-muted-foreground'>{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className='relative px-4 py-20'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-4xl font-bold mb-12 text-foreground' data-reveal id='timeline-title'>Professional Journey</h2>
          <div className='space-y-8'>
            {timelineEvents.map((event, i) => (
              <div
                key={event.year}
                className={`flex gap-6 ${scrollReveal[`timeline-${i}`] ? 'scroll-reveal' : ''}`}
                id={`timeline-${i}`}
                data-reveal
              >
                <div className='relative flex flex-col items-center'>
                  <div className='timeline-dot' />
                  {i < timelineEvents.length - 1 && <div className='timeline-connector' />}
                </div>
                <div className='crystal-card p-6 flex-1 hover-tilt'>
                  <p className='text-sm font-semibold text-accent'>{event.year}</p>
                  <h3 className='text-lg font-semibold text-foreground mt-2'>{event.role}</h3>
                  <p className='text-sm text-muted-foreground mt-1'>{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className='relative px-4 py-20'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold mb-12 text-foreground' data-reveal id='stack-title'>Technical Stack</h2>
          <div className='grid lg:grid-cols-4 gap-6'>
            {Object.entries(skills).map(([category, items], i) => (
              <div
                key={category}
                className={`crystal-card p-6 hover-tilt ${scrollReveal[`stack-${i}`] ? 'scroll-reveal' : ''}`}
                id={`stack-${i}`}
                data-reveal
              >
                <h3 className='font-semibold text-foreground mb-4'>{category}</h3>
                <ul className='space-y-2'>
                  {items.map((item) => (
                    <li key={item} className='text-sm text-muted-foreground'>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className='relative px-4 py-20'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-4xl font-bold mb-12 text-foreground' data-reveal id='education-title'>Education</h2>
          <div className='space-y-4'>
            {[
              { degree: 'Computer Science Engineer', school: 'Don Bosco' },
              { degree: 'MBA Financial Management', school: 'Washington' },
            ].map((edu, i) => (
              <div
                key={edu.degree}
                className={`crystal-card p-6 hover-tilt ${scrollReveal[`edu-${i}`] ? 'scroll-reveal' : ''}`}
                id={`edu-${i}`}
                data-reveal
              >
                <h3 className='font-semibold text-foreground'>{edu.degree}</h3>
                <p className='text-sm text-muted-foreground mt-1'>{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className='relative px-4 py-20 border-t border-border'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='space-y-4 mb-8'>
            <h3 className='text-2xl font-bold text-foreground'>Let's Build Something Great</h3>
            <p className='text-muted-foreground'>Las Vegas, NV | (702) 609-5075 | me@hectormendez.io</p>
          </div>
          <Button className='gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-medium'>
            <Mail className='w-4 h-4' />
            Start a Project
          </Button>
        </div>
      </section>

      {/* Floating Dock */}
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 z-50'>
        <div className='crystal-card px-6 py-3 flex gap-4'>
          <a href='#hero' className='dock-item text-sm text-muted-foreground hover:text-accent transition-colors'>Home</a>
          <a href='#expertise-title' className='dock-item text-sm text-muted-foreground hover:text-accent transition-colors'>Expertise</a>
          <a href='#timeline-title' className='dock-item text-sm text-muted-foreground hover:text-accent transition-colors'>Journey</a>
          <a href='#stack-title' className='dock-item text-sm text-muted-foreground hover:text-accent transition-colors'>Stack</a>
        </div>
      </div>
    </main>
  )
}
