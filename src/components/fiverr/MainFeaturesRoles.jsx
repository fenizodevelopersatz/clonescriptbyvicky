import { mainFeatureRoles } from '../../data/fiverr/fiverrData.js'

function FeatureRole({ roleKey, role }) {
  return (
    <section id={roleKey} className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src={role.image} className="vc_single_image-img attachment-full" alt={role.imageAlt} loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
                    <div className="carousel-items row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {role.items.map((item, i) => (
                        <div className="carousel-item" key={i} style={{ flex: '1 1 45%', minWidth: 240 }}>
                          <header className="fancy-title">
                            <h4>{item.title}</h4>
                            <div className="st-desc">
                              <p><span style={{ fontWeight: 400 }}>{item.desc}</span></p>
                            </div>
                          </header>
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

export default function MainFeaturesRoles() {
  return (
    <>
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Main Features</span>
                      </p>
                    </div>
                    <header className="fancy-title text-center">
                      <p>The platform includes dedicated functionality for clients, freelancers, and administrators.</p>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div id="fixed-menu" className="lqd-custom-menu text-center fixed-menu">
                      <ul className="reset-ul inline-nav menu-items-have-fill">
                        {Object.entries(mainFeatureRoles).map(([key, role]) => (
                          <li key={key}><a href={`#${key}`}><i className={`${role.icon} custom-tab-icon`}></i> {role.label}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {Object.entries(mainFeatureRoles).map(([key, role]) => (
        <FeatureRole roleKey={key} role={role} key={key} />
      ))}
    </>
  )
}
