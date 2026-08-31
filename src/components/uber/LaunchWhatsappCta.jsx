import { siteContact } from '../../data/siteContact.js'

export default function LaunchWhatsappCta() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-6 vc_col-sm-offset-0 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h3>Build a Reliable Ride-Hailing Business That Grows With You!</h3>
                  </header>
                  <div className="wpb_raw_code wpb_raw_html wpb_content_element">
                    <div className="wpb_wrapper">
                      <div className="footer-whatsapp page-whatsapp-light">
                        <a href={`https://api.whatsapp.com/send?phone=${siteContact.whatsappApiNumber}&text=Hello,%20I%20am%20interested%20with%20this%20product%20Uber%20Clone`} target="_blank" rel="noreferrer">
                          <i className="fab fa-whatsapp"></i>
                          <span>Chat with us</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-5 vc_hidden-sm vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2025/02/why-choose.webp" width="494" height="455" className="vc_single_image-img attachment-full" alt="Launch your taxi booking business with CloneScript" loading="eager" decoding="async" />
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
