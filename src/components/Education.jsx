import { EDUCATION } from '../data'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-label">04 — Education</div>
      <h2 className="section-title">Academic Background</h2>
      <div className="edu-grid">
        {EDUCATION.map(e => (
          <div key={e.degree} className="edu-card">
            <div className="edu-year">{e.year} · {e.location}</div>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <p className="edu-desc">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
