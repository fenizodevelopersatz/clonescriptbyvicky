import { techStack } from '../../data/erp/coreModules.js'

export default function TechStackSection() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a667c000 erp-tech-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Technology Stack Used for ERP Development</span>
                    </h2>
                  </div>
                  <p className="erp-section-description">
                    The ERP platform can be built using dependable frontend, backend, database, and mobile technologies
                    selected for stability, security, and maintainability.
                  </p>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ld-row erp-tech-grid">
          {techStack.map((t, i) => (
            <div className="wpb_column vc_column_container vc_col-sm-1/5" key={i}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="iconbox iconbox-xl iconbox-contents-show-onhover" style={{ color: t.color }}>
                      <div className="iconbox-icon-wrap">
                        <span className="iconbox-icon-container">
                          {t.type === 'icon' ? <i className={t.icon}></i> : <img src={t.image} className="liquid-image-icon" width="60" height="36" alt={t.title} loading="lazy" decoding="async" />}
                        </span>
                      </div>
                      <h3>{t.title}</h3>
                      <div className="contents">
                        <p><span style={{ fontSize: 14 }}>{t.desc}</span></p>
                      </div>
                    </div>
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
