import { Link } from 'react-router-dom'
import LaunchIllustration from './LaunchIllustration.jsx'

export function LaunchCta() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a6686000 erp-launch-section">
      <div className="ld-container container">
        <div className="row ld-row erp-launch-panel">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h3>Let&rsquo;s Create a Smarter ERP Solution for Your Business</h3>
                    <div className="st-desc">
                      <p>
                        Convert your operational needs into a practical ERP platform that fits your everyday processes.
                        From configuration and data setup to employee onboarding and long-term support, professional
                        guidance can help your organization adopt the system smoothly.
                      </p>
                    </div>
                  </header>
                  <Link to="/schedule-free-demo" target="_blank" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                    <span>
                      <span className="btn-txt">Get Professional ERP Support</span>
                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="erp-launch-visual">
            <LaunchIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

export function MoneyBackGuarantee() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a668f000 erp-moneyback-section">
      <div className="ld-container container">
        <div className="row ld-row erp-moneyback-panel">
          <div className="erp-moneyback-visual">
            <img src="/wp-content/uploads/money-back-badge.svg" width="160" height="160" alt="7 day money back guarantee seal" loading="lazy" decoding="async" />
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>100% Money Back Guaranteed</h2>
                    <div className="st-desc">
                      <p><span style={{ color: '#222222', fontSize: 14 }}>If our product doesn&rsquo;t work well we&rsquo;ll refund 100% of your money within 7 days.</span></p>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
