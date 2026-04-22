import { useState, useEffect } from 'react'

const SECTIONS = ['About', 'Expertise', 'Experience', 'Skills', 'Education', 'Projects']

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = [...SECTIONS.map(s => s.toLowerCase()), 'contact']
    const handler = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="nav">
      <div className="nav-logo">hm.io</div>
      <ul className="nav-links">
        {SECTIONS.map(s => (
          <li key={s}>
            <a href={`#${s.toLowerCase()}`} className={active === s.toLowerCase() ? 'active' : ''}>{s}</a>
          </li>
        ))}
      </ul>
      <a href="mailto:me@hectormendez.io" className="nav-cta">Get in Touch</a>
    </nav>
  )
}
