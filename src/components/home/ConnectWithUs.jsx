import { siteContact } from '../../data/siteContact.js'

export default function ConnectWithUs() {
  return (
    <section className="vc_row wpb_row vc_row-fluid vc_custom_1745410232590 liquid-row-shadowbox-6a665a40c2645 vc_row-has-fill vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper vc_custom_1745496524078">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h2>Let&rsquo;s Turn Your Business Idea Into Reality</h2>
                    <div className="st-desc">
                      <p>
                        Turn your business idea into a powerful Digital Solution with our expert Development
                        Services. From initial planning and UI/UX design to development, testing, and launch, we
                        build secure, scalable, and customized platforms designed to support long-term business
                        growth.
                      </p>
                    </div>
                  </header>
                  <div className="vc_row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-1/5 vc_col-xs-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_wrapper-inner">
                            <div className="iconbox iconbox-inline iconbox-circle" data-plugin-options='{"color":"rgb(255, 255, 255)"}' data-shape-border="1">
                              <div className="iconbox-icon-wrap">
                                <span className="iconbox-icon-container">
                                  <i className="far fa-envelope"></i>
                                </span>
                              </div>
                              <a href={`mailto:${siteContact.supportEmail}`} target="_blank" rel="noreferrer" className="liquid-overlay-link z-index-2"></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-1/5 vc_col-xs-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_wrapper-inner">
                            <div className="iconbox iconbox-inline iconbox-circle" data-plugin-options='{"color":"rgb(255, 255, 255)"}' data-shape-border="1">
                              <div className="iconbox-icon-wrap">
                                <span className="iconbox-icon-container">
                                  <i className="fab fa-whatsapp"></i>
                                </span>
                              </div>
                              <a
                                href={`https://api.whatsapp.com/send?phone=${siteContact.whatsappApiNumber}&text=Hello,%20I%E2%80%99m%20contacting%20${siteContact.shortName}%20to%20know%20more%20about%20your%20product.%20Can%20you%20assist%20me?`}
                                target="_blank"
                                rel="noreferrer"
                                className="liquid-overlay-link z-index-2"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-1/5"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
                    <div className="wpb_column vc_column_container vc_col-sm-1/5 vc_col-md-offset-0 vc_col-md-1/5 vc_col-xs-4"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
                    <div className="wpb_column vc_column_container vc_col-sm-1/5"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1761559243227">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey cs-connect-flip">
                        <img
                          src="/wp-content/reviews/home-page-connect-with-us-transparent.webp"
                          width="680"
                          height="318"
                          className="vc_single_image-img attachment-full"
                          alt="Connect with the CloneScript team"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </figure>
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
