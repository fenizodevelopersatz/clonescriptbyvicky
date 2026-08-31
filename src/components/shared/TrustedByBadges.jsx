import { trustCategories } from '../../data/trustedByLogos.js'

export default function TrustedByBadges({ heading, accentColor = '#002692' }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> <span style={{ color: accentColor }}>Trusted </span>{heading}</span>
                    </h2>
                  </div>
                  <div className="vc_empty_space" style={{ height: 67 }}><span className="vc_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row">
          {trustCategories.map((cat, i) => (
            <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6" key={i} style={{ marginBottom: 20 }}>
              <div className="iconbox iconbox-center iconbox-heading-md">
                <div className="iconbox-icon-wrap">
                  <span className="iconbox-icon-container">
                    <i className={cat.icon} style={{ color: accentColor, fontSize: 26 }}></i>
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
    </section>
  )
}
