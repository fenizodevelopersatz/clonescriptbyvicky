import { trustCategories } from '../../data/trustedByLogos.js'
import './TrustedByLogos.css'

// Doubled so the marquee track can loop seamlessly -- see TrustedByLogos.css.
const marqueeItems = [...trustCategories, ...trustCategories]

export default function TrustedByLogos() {
  return (
    <section className="vc_row wpb_row vc_row-fluid vc_custom_1742024195220 row-contains-padding-top row-contains-padding-bottom liquid-row-shadowbox-6a665a409aa78 vc_row-has-fill vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 vc_col-has-fill">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space" style={{ height: 20 }}>
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <header className="fancy-title">
                    <h2>The Choice of Industry Leaders</h2>
                    <h6>Shape the Future With Us</h6>
                  </header>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-8">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="clonescript-trust-marquee" aria-label="Why businesses choose us">
                    <div className="clonescript-trust-marquee__track">
                      {marqueeItems.map((cat, i) => (
                        <div
                          className="clonescript-trust-marquee__item"
                          key={i}
                          aria-hidden={i >= trustCategories.length ? 'true' : undefined}
                        >
                          <div className="iconbox iconbox-center iconbox-heading-md">
                            <div className="iconbox-icon-wrap">
                              <span className="iconbox-icon-container">
                                <i className={cat.icon} style={{ color: '#0030b8', fontSize: 26 }}></i>
                              </span>
                            </div>
                            <div className="contents">
                              <h3 className="font-weight-semibold" style={{ fontSize: 15 }}>{cat.label}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
