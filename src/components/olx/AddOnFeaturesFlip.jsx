import { addOnFeatures } from '../../data/olx/olxData.js'

export default function AddOnFeaturesFlip() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> <span className="free-bg">Free </span>Add on Features</span>
                    </h2>
                  </div>
                  <header className="fancy-title text-center">
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>Explore the Add-On Features That Enhance Your OLX Clone Script.</p>
                    </div>
                  </header>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row">
          {addOnFeatures.map((f, i) => (
            <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-4 vc_col-sm-offset-0 vc_col-xs-offset-1 vc_col-xs-10" key={i}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-flipbox ld-flipbox-shadow-onhover round flip-box-border-olx">
                      <div className="ld-flipbox-wrap">
                        <div className="ld-flipbox-face ld-flipbox-front">
                          <span className="ld-flipbox-overlay ld-overlay"></span>
                          <div className="ld-flipbox-inner">
                            <div className="iconbox iconbox-heading-md" style={{ color: '#4f46e5' }}>
                              <div className="iconbox-icon-wrap">
                                <span className="iconbox-icon-container"><i className={f.icon}></i></span>
                              </div>
                              <h3>{f.title}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="ld-flipbox-face ld-flipbox-back">
                          <span className="ld-flipbox-overlay ld-overlay"></span>
                          <div className="ld-flipbox-inner">
                            <div className="wpb_text_column wpb_content_element">
                              <div className="wpb_wrapper">
                                <p style={{ textAlign: 'center' }}><span style={{ color: '#475569' }}>{f.desc}</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
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
