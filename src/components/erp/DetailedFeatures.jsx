import { detailedFeatures } from '../../data/erp/coreModules.js'

export default function DetailedFeatures() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a6663000 erp-modules-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center sv_text_super">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Core <span style={{ color: '#002692' }}>ERP Modules</span></span>
                    </h2>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>Manage important business processes through interconnected modules that share accurate and updated information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ld-row erp-modules-grid">
          {detailedFeatures.map((f, i) => (
            <div className="wpb_column vc_column_container vc_col-sm-3" key={i}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="iconbox iconbox-heading-xs sv_border" style={{ color: f.color }}>
                      <div className="iconbox-icon-wrap">
                        <span className="iconbox-icon-container"><i className={f.icon}></i></span>
                      </div>
                      <div className="contents">
                        <h3>{f.title}</h3>
                        <p><span style={{ fontWeight: 400 }}>{f.desc}</span></p>
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
