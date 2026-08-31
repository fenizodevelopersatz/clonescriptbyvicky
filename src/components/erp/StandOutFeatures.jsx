import { standOutFeatures } from '../../data/erp/coreModules.js'

export default function StandOutFeatures() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a6672000 erp-standout-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2>What Makes Our ERP SaaS Different?</h2>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        Our ERP platform balances comprehensive business functionality with a manageable user experience.
                        Employees can access relevant information, understand their responsibilities, and respond more
                        quickly to operational changes.
                      </p>
                    </div>
                  </div>
                  <div className="ld-fancy-heading text-center">
                    <h6 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Connected Business Processes Without Unnecessary Complexity</span>
                    </h6>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        Bring departments and business information together through a system designed for both everyday
                        employees and management teams.
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row erp-standout-grid">
          {standOutFeatures.map((f, i) => (
            <div className="hover-flash-card wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-sm-offset-1" key={i}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="iconbox text-left iconbox-shadow-hover iconbox-xl iconbox-heading-xs premium-icon-box" style={{ color: 'rgb(0, 38, 146)' }}>
                      <div className="iconbox-icon-wrap">
                        <span className="iconbox-icon-container"><i className={f.icon}></i></span>
                      </div>
                      <div className="contents">
                        <h3 className="font-weight-semibold">{f.title}</h3>
                        <p><span style={{ color: '#1a1a1a', fontSize: 15 }}>{f.desc}</span></p>
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
