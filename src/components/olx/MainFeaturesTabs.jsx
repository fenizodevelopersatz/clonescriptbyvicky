import { mainFeaturesUser, mainFeaturesAdmin } from '../../data/olx/olxData.js'

function FeatureRole({ id, image, imageAlt, items }) {
  return (
    <section id={id} className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src={image} className="vc_single_image-img attachment-full" alt={imageAlt} />
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
                      {items.map((f, i) => (
                        <div className="carousel-item" key={i} style={{ flex: '1 1 45%', minWidth: 260 }}>
                          <div className="iconbox iconbox-side iconbox-heading-xs">
                            <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-circle-check"></i></span></div>
                            <div className="contents">
                              <h4>{f.title}</h4>
                              <p><span style={{ fontWeight: 400 }}>{f.desc}</span></p>
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

export default function MainFeaturesTabs() {
  return (
    <>
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading text-center">
                      <h2 className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Main Features</span>
                      </h2>
                    </div>
                    <header className="fancy-title text-center">
                      <p>Discover the Core User and Admin Features of the OLX Clone Script for Your Online Classified Business.</p>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_custom_1738739449872">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div id="fixed-menu" className="lqd-custom-menu text-center fixed-menu">
                      <ul className="reset-ul inline-nav menu-items-have-fill">
                        <li><a href="#user"><i className="fas fa-user-alt custom-tab-icon"></i> User</a></li>
                        <li><a href="#admin"><i className="fas fa-user-cog custom-tab-icon"></i> Admin</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureRole id="user" image="/wp-content/uploads/2025/09/classified-app-home.webp" imageAlt="classified-app-home" items={mainFeaturesUser} />
      <FeatureRole id="admin" image="/wp-content/uploads/2025/09/classified-script-admin-features.webp" imageAlt="classified-script-admin-features" items={mainFeaturesAdmin} />
    </>
  )
}
