import { EXPERTISE } from '../data'

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="section-label">01 — Expertise</div>
      <h2 className="section-title">Core Capabilities</h2>
      <div className="expertise-grid">
        {EXPERTISE.map(e => (
          <div key={e.code} className="expertise-card">
            <div className="expertise-icon">{e.code}</div>
            <div className="expertise-title">{e.title}</div>
            <p className="expertise-desc">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
