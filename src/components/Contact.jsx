const RESUME_PATH = '/Hector_Mendez_Resume.pdf'

const LINKS = [
  { label: 'me@hectormendez.io', href: 'mailto:me@hectormendez.io' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hectorlv/' },
  { label: 'GitHub', href: 'https://github.com/hectormendez' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-label">06 — Contact</div>
        <h2 className="contact-headline">
          Let's build<br /><em>something together.</em>
        </h2>
        <div className="contact-links">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="contact-link"
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <span className="contact-dot" />{l.label}
            </a>
          ))}
          <a href={RESUME_PATH} download="Hector_Mendez_Resume.pdf" className="contact-link">
            <span className="contact-dot" />Download Resume PDF
          </a>
        </div>
        <div className="footer-meta">
          <span>© 2026 Hector Mendez</span>
          <span>Las Vegas, NV</span>
          <span>Precision in Construction & Digital Design</span>
        </div>
      </div>
    </section>
  )
}
