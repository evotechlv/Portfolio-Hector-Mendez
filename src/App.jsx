import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tweaks from './components/Tweaks'

const DEFAULTS = {
  accentHue: '145',
  lightMode: false,
}

function applyHue(hue) {
  const r = document.documentElement.style
  r.setProperty('--accent',      `oklch(60% 0.18 ${hue})`)
  r.setProperty('--accent-dim',  `oklch(40% 0.12 ${hue})`)
  r.setProperty('--accent-glow', `oklch(60% 0.18 ${hue} / 0.15)`)
}

export default function App() {
  const [tweaks, setTweaks] = useState(DEFAULTS)
  const [tweaksOpen, setTweaksOpen] = useState(false)
  const [scrollHidden, setScrollHidden] = useState(false)

  // Apply hue on mount
  useEffect(() => { applyHue(tweaks.accentHue) }, [])

  // Light mode
  useEffect(() => {
    document.body.classList.toggle('light', tweaks.lightMode)
  }, [tweaks.lightMode])

  // Hide tweaks panel on scroll-down
  useEffect(() => {
    let last = window.scrollY
    const handler = () => {
      const cur = window.scrollY
      setScrollHidden(cur > 120 && cur > last)
      last = cur
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const setTweak = (key, val) => {
    setTweaks(prev => ({ ...prev, [key]: val }))
    if (key === 'accentHue') applyHue(val)
    if (key === 'lightMode') document.body.classList.toggle('light', val)
  }

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Tweaks
        tweaks={tweaks}
        setTweak={setTweak}
        open={tweaksOpen}
        setOpen={setTweaksOpen}
        scrollHidden={scrollHidden}
      />
    </>
  )
}
