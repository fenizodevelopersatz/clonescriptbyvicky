import { industries } from '../../data/erp/coreModules.js'

export default function IndustriesCarousel() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a666e000 erp-industries-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>Industries Supported by Our ERP Software</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>
                        The ERP platform can serve businesses from different industries by connecting sales, inventory,
                        purchases, payments, employees, and customer information.
                      </p>
                    </div>
                  </header>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container-fluid">
        <div className="erp-industries-viewport">
          <div className="row ld-row erp-industries-grid">
            {[...industries, ...industries].map((ind, i) => (
              <div
                className="fancy-box border-radius-3 scheme-light fancy-box-overlay tall"
                key={i}
                aria-hidden={i >= industries.length ? 'true' : undefined}
                style={{ position: 'relative', borderRadius: 15, overflow: 'hidden' }}
              >
                <div className="cb-img-container border-radius-3">
                  <img src={ind.image} alt={ind.title} loading="eager" decoding="async" />
                </div>
                <span className="cb-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)' }}></span>
                <div className="fancy-box-contents border-radius-3" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px' }}>
                  <div className="fancy-box-header">
                    <span className="cb-subtitle text-uppercase ltr-sp-2 border-radius-3">
                      <p style={{ color: '#fff', fontWeight: 700, margin: 0 }}>{ind.title}</p>
                    </span>
                    <p><span style={{ fontSize: 14, color: 'white' }}>{ind.desc}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
