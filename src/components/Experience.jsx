import { useEffect, useRef, useState } from 'react'
import { EXPERIENCE } from '../data'

function useScrollReveal(ref) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return visible
}

function TimelineItem({ item, delay }) {
  const ref = useRef(null)
  const visible = useScrollReveal(ref)
  return (
    <div ref={ref} className={`timeline-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="timeline-dot" />
      <div className="timeline-period">{item.period}</div>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-company">{item.company}</div>
      <p className="timeline-desc">{item.desc}</p>
      <div className="tags">
        {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-label">02 — Experience</div>
      <h2 className="section-title">Career Journey</h2>
      <div className="timeline">
        {EXPERIENCE.map((item, i) => (
          <TimelineItem key={i} item={item} delay={i * 70} />
        ))}
      </div>
    </section>
  )
}
