import { trustCategories } from '../../data/trustedByLogos.js'

export default function TrustedByLogosCarousel() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <p className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Trusted by Growing Businesses</span>
                    </p>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row" style={{ justifyContent: 'center' }}>
          {trustCategories.map((cat, i) => (
            <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3" key={i}>
              <div className="iconbox iconbox-center iconbox-heading-md" style={{ padding: '10px 10px 30px' }}>
                <div className="iconbox-icon-wrap">
                  <span className="iconbox-icon-container">
                    <i className={cat.icon} style={{ color: '#0030b8', fontSize: 28 }}></i>
                  </span>
                </div>
                <div className="contents">
                  <h3 className="font-weight-semibold" style={{ fontSize: 16 }}>{cat.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
