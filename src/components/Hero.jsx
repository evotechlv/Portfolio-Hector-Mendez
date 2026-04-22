import Typewriter from './Typewriter'

const RESUME_PATH = '/Hector_Mendez_Resume.pdf'

export default function Hero() {
  return (
    <div id="hero">
      <div className="hero-grid-overlay" />

      <div className="hero-inner">
        <div className="hero-eyebrow">Las Vegas, NV · Available for Work</div>
        <h1 className="hero-name">
          Hector<br /><em>Mendez</em>
        </h1>
        <Typewriter />
        <div className="hero-actions">
          <a href="mailto:me@hectormendez.io" className="btn-primary">Get in Touch</a>
          <a href="#projects" className="btn-ghost">View Projects</a>
          <a href={RESUME_PATH} download="Hector_Mendez_Resume.pdf" className="btn-download">
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="1" x2="7" y2="9" />
              <polyline points="4,6 7,9 10,6" />
              <line x1="2" y1="12" x2="12" y2="12" />
            </svg>
            Resume PDF
          </a>
        </div>
      </div>

      <div className="hero-stats">
        {[
          ['15+', 'Years Experience'],
          ['8', 'Prog. Languages'],
          ['$80K', 'Company Built'],
          ['3', 'Degrees'],
        ].map(([n, l]) => (
          <div key={l}>
            <div className="hero-stat-num">{n}</div>
            <div className="hero-stat-label">{l}</div>
          </div>
        ))}
      </div>

      <div className="hero-fade-bottom" />
    </div>
  )
}
