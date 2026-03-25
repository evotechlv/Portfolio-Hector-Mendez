'use client'

import { Mail, Phone, MapPin, ArrowDown, Zap, Code, Cpu, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className='min-h-screen bg-background blueprint-grid grain-overlay mesh-gradient'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/3 dark:to-accent/5 pointer-events-none' />

        <div className='relative max-w-6xl mx-auto w-full'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='space-y-8 scroll-reveal'>
              {/* Status Badge */}
              <div className='inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card hover-lift w-fit'>
                <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
                <span className='text-sm font-medium text-foreground'>Available for Projects</span>
              </div>

              {/* Hero Title */}
              <h1 className='text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] text-foreground'>
                <span className='block text-accent'>HECTOR</span>
                <span className='block'>MENDEZ</span>
              </h1>

              {/* Subtitle */}
              <p className='text-2xl sm:text-3xl font-semibold text-muted-foreground max-w-2xl'>
                Hyper-Modern Design-Engineer
              </p>

              {/* Description */}
              <p className='text-lg text-muted-foreground leading-relaxed max-w-lg'>
                Architecting the intersection of hardware, software, and construction operations. Specialist in logistics, financial analytics, and digital infrastructure.
              </p>

              {/* CTAs */}
              <div className='flex flex-wrap gap-4 pt-4'>
                <Button className='gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-medium transition-all'>
                  <Mail className='w-4 h-4' />
                  Start Project
                </Button>
                <Button variant='outline' className='gap-2 rounded-full px-8 py-6 text-base font-medium hover-lift'>
                  <Code className='w-4 h-4' />
                  View Expertise
                </Button>
              </div>

              {/* Contact */}
              <div className='pt-8 space-y-3 border-t border-border'>
                <div className='flex flex-wrap gap-6'>
                  <a href='tel:+17026095075' className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group'>
                    <Phone className='w-4 h-4 group-hover:text-accent' />
                    (702) 609-5075
                  </a>
                  <a href='mailto:me@hectormendez.io' className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group'>
                    <Mail className='w-4 h-4 group-hover:text-accent' />
                    me@hectormendez.io
                  </a>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <MapPin className='w-4 h-4' />
                    Las Vegas, NV
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Crystal Contact Card */}
            <div className='flex justify-center lg:justify-end scroll-reveal scroll-reveal-1'>
              <div className='relative w-full max-w-md group'>
                {/* Glow effect */}
                <div className='absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity' />

                {/* Card */}
                <div className='relative glass-card rounded-[2rem] p-8 lg:p-10 space-y-6 hover-lift'>
                  {/* Avatar */}
                  <div className='flex justify-center'>
                    <div className='w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center text-4xl font-bold text-accent'>
                      HM
                    </div>
                  </div>

                  <div className='text-center space-y-2'>
                    <h2 className='text-3xl font-bold text-foreground'>Let's Build</h2>
                    <p className='text-sm text-muted-foreground'>Exceptional projects need exceptional partners</p>
                  </div>

                  <Button className='w-full gap-2 bg-accent hover:bg-accent/90 text-white rounded-full py-6 font-medium'>
                    <Mail className='w-4 h-4' />
                    Start a Project
                  </Button>

                  <div className='space-y-3 pt-4 border-t border-accent/20'>
                    <p className='text-xs font-semibold text-accent uppercase tracking-wider'>Availability</p>
                    <div className='w-full bg-muted/30 rounded-full h-1.5 overflow-hidden'>
                      <div className='w-3/4 h-full bg-gradient-to-r from-accent to-accent/50 rounded-full' />
                    </div>
                    <p className='text-xs text-muted-foreground'>Open for New Logistics & Tech Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce group cursor-pointer'
          aria-label='Scroll to expertise'
        >
          <ArrowDown className='w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors' />
        </button>
      </section>

      {/* Core Expertise Section */}
      <section id='expertise' className='relative px-4 py-32'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl lg:text-6xl font-bold mb-16 text-foreground scroll-reveal'>Core Expertise</h2>

          <div className='grid lg:grid-cols-2 gap-6'>
            {[
              {
                title: 'Field & Logistics',
                description: 'Plan reading, project tracking, overseas deliveries, warehouse control systems',
                icon: Zap,
              },
              {
                title: 'Financial Analytics',
                description: 'Multi-trade estimations, financial PO management, budget optimization',
                icon: Code,
              },
              {
                title: 'Design & Rendering',
                description: 'SketchUp 3D cabinet rendering, floor plan creation, architectural visualization',
                icon: Cpu,
              },
              {
                title: 'Tech Infrastructure',
                description: 'IoT systems, server management, automation, network architecture',
                icon: Users,
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`glass-card p-8 rounded-2xl hover-lift group relative overflow-hidden scroll-reveal ${
                    i === 0 ? 'scroll-reveal-1' : i === 1 ? 'scroll-reveal-2' : i === 2 ? 'scroll-reveal-3' : 'scroll-reveal-4'
                  }`}
                >
                  {/* Decorative SVG background - Thin-line circuits */}
                  <div className='absolute inset-0 opacity-5 pointer-events-none'>
                    <svg viewBox='0 0 400 400' className='w-full h-full'>
                      <path d='M 0 200 Q 100 100 200 200 T 400 200' stroke='currentColor' fill='none' strokeWidth='1' />
                      <circle cx='200' cy='200' r='50' stroke='currentColor' fill='none' strokeWidth='1' opacity='0.5' />
                      <line x1='100' y1='100' x2='300' y2='300' stroke='currentColor' strokeWidth='1' opacity='0.3' />
                    </svg>
                  </div>

                  <div className='relative space-y-4'>
                    <div className='p-3 rounded-lg bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors'>
                      <Icon className='w-6 h-6 text-accent' />
                    </div>
                    <h3 className='text-xl font-semibold text-foreground'>{item.title}</h3>
                    <p className='text-muted-foreground text-sm'>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className='relative px-4 py-32 border-t border-border'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Languages', value: '8' },
              { label: 'Companies', value: '4' },
              { label: 'Degrees', value: '3' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`glass-card p-8 rounded-2xl text-center hover-lift scroll-reveal ${
                  i === 0 ? 'scroll-reveal-1' : i === 1 ? 'scroll-reveal-2' : i === 2 ? 'scroll-reveal-3' : 'scroll-reveal-4'
                }`}
              >
                <p className='text-4xl font-bold text-accent mb-2'>{stat.value}</p>
                <p className='text-sm text-muted-foreground'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className='relative px-4 py-20 border-t border-border'>
        <div className='max-w-6xl mx-auto text-center space-y-6'>
          <h3 className='text-3xl font-bold text-foreground'>Ready to Build Something Great?</h3>
          <p className='text-muted-foreground max-w-xl mx-auto'>Let's collaborate on your next project. Get in touch to discuss how I can help.</p>
          <div className='flex justify-center gap-4 flex-wrap'>
            <Button className='gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 font-medium'>
              <Mail className='w-4 h-4' />
              Contact Me
            </Button>
            <Button variant='outline' className='gap-2 rounded-full px-8 py-6 font-medium'>
              <Star className='w-4 h-4' />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Dock Navigation */}
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 z-50'>
        <div className='dock rounded-full'>
          <a href='#' className='dock-item text-sm text-foreground hover:text-accent font-medium'>Home</a>
          <div className='w-px h-6 bg-border' />
          <a href='#expertise' className='dock-item text-sm text-foreground hover:text-accent font-medium'>Expertise</a>
          <div className='w-px h-6 bg-border' />
          <a href='mailto:me@hectormendez.io' className='dock-item text-sm text-foreground hover:text-accent font-medium'>Contact</a>
        </div>
      </div>
    </main>
  )
}
