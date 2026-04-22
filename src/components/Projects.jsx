import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-label">05 — Projects</div>
      <h2 className="section-title">Featured Work</h2>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div key={p.num} className={`project-card ${p.featured ? 'featured-card' : ''}`}>
            <div className="project-num">{p.num}{p.featured ? ' · FEATURED' : ''}</div>
            <div className="project-title">{p.title}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                Visit →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
