import { HUE_OPTIONS } from '../data'

export default function Tweaks({ tweaks, setTweak, open, setOpen, scrollHidden }) {
  return (
    <>
      {/* Toggle button — visible when panel is closed */}
      <div
        className={`tweaks-btn ${open ? 'hidden' : ''}`}
        onClick={() => setOpen(true)}
        title="Customize"
      >
        ⚙
      </div>

      {/* Panel */}
      <div className={`tweaks-panel ${open ? 'open' : ''} ${scrollHidden ? 'scroll-hidden' : ''}`}>
        <div className="tweaks-header">
          <div className="tweaks-title">Tweaks</div>
          <div className="tweaks-close" onClick={() => setOpen(false)}>×</div>
        </div>

        <div className="tweak-row">
          <div className="tweak-label">Appearance</div>
          <div className="tweak-options">
            <span className={`tweak-opt ${!tweaks.lightMode ? 'active' : ''}`} onClick={() => setTweak('lightMode', false)}>Dark</span>
            <span className={`tweak-opt ${tweaks.lightMode ? 'active' : ''}`}  onClick={() => setTweak('lightMode', true)}>Light</span>
          </div>
        </div>

        <div className="tweak-row">
          <div className="tweak-label">Accent Color</div>
          <div className="tweak-options">
            {HUE_OPTIONS.map(([name, hue]) => (
              <span
                key={hue}
                className={`tweak-opt ${tweaks.accentHue === hue ? 'active' : ''}`}
                onClick={() => setTweak('accentHue', hue)}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
