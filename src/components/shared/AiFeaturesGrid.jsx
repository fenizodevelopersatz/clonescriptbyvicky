import Reveal from './Reveal.jsx'
import './AiFeaturesGrid.css'

const CARD_STYLE = {
  padding: 25,
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  border: '1px solid #002692',
}

export default function AiFeaturesGrid({ items, heading = 'AI-Powered Capabilities', desc, columns = 3 }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <Reveal>
                    <header className="fancy-title text-center">
                      <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> {heading}</span>
                      </h2>
                      {desc && (
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>{desc}</p>
                        </div>
                      )}
                    </header>
                  </Reveal>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ld-row ai-features-grid__row" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {items.map((f, i) => (
            <div className={`wpb_column vc_column_container vc_col-sm-${12 / columns}`} key={i}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <Reveal delay={0.1 * (i % columns)}>
                      <div className="iconbox iconbox-heading-xs iconbox-icon-image" style={CARD_STYLE}>
                        <div className="iconbox-icon-wrap">
                          <span className="iconbox-icon-container"><img src={f.image} className="liquid-image-icon" width="60" height="52" alt={f.title} loading="lazy" decoding="async" /></span>
                        </div>
                        <div className="contents">
                          <h3>{f.title}</h3>
                          <p><span style={{ fontWeight: 400 }}>{f.desc}</span></p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
