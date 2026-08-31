import Reveal from './Reveal.jsx'
import './TechStackRow.css'

export default function TechStackRow({ items, heading = 'Technology Stack' }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced cs-techstack-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> {heading}</span>
                    </h2>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-stack-grid">
          {items.map((t, i) => (
            <Reveal delay={0.05 * (i % 5)} className="tech-stack-grid__cell" key={i}>
              <div className="tech-stack-grid__card" style={{ '--tech-color': t.color }}>
                <div className="tech-stack-grid__icon">
                  {t.type === 'icon' ? <i className={t.icon} style={{ color: t.color }}></i> : <img src={t.image} width="60" height="36" alt={t.title} loading="eager" decoding="async" />}
                </div>
                <h3>{t.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
