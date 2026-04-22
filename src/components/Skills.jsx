import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-label">03 — Technical Stack</div>
      <h2 className="section-title">The Digital Foundation</h2>
      <div className="skills-layout">
        {SKILLS.map(g => (
          <div key={g.group} className="skill-group">
            <div className="skill-group-title">{g.group}</div>
            <div className="skill-pills">
              {g.items.map(item => <span key={item} className="skill-pill">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
