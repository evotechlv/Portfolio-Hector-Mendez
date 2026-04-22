import { EXPERTISE } from '../data'

export default function About() {
  const highlights = [
    { num: '15+', label: 'Years in Tech & Operations' },
    { num: '$80K', label: 'Tech Company Co-Founded & Scaled' },
    { num: '5+', label: 'Industries Worked In' },
    { num: '3', label: 'Degrees Earned' },
  ]

  return (
    <section id="about" className="section">
      <div className="section-label">00 — About</div>
      <h2 className="section-title">The Master Builder</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm a <strong>Computer Science Engineer</strong> with 15+ years building systems that work — whether that's enterprise IT infrastructure, iOS apps, construction estimation platforms, or IoT prototypes.</p>
          <p>My background bridges two worlds: <strong>digital systems engineering</strong> and <strong>construction operations</strong>. I've co-founded tech companies, lectured at universities, built bidding platforms for multinational projects, and spoken at international events on technology and open hardware.</p>
          <p>Based in Las Vegas. Fluent in hardware, software, and the language of getting things done.</p>
        </div>
        <div className="about-highlights">
          {highlights.map(h => (
            <div key={h.label} className="highlight-item">
              <div className="highlight-num">{h.num}</div>
              <div className="highlight-label">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
