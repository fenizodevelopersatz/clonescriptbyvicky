export default function EnhanceBusinessCta() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-6 vc_col-sm-offset-0 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h3>Launch Your Online Classified Marketplace</h3>
                  </header>
                  <div className="vc_btn3-container vc_btn3-inline vc_do_btn">
                    <button
                      type="button"
                      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
                      className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-round vc_btn3-style-custom vc_btn3-icon-right"
                      onClick={() => window.tidioChatApi?.open()}
                    >
                      Chat With Expert <i className="vc_btn3-icon fas fa-comments"></i>
                    </button>
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
                        <img src="/wp-content/uploads/2025/02/why-choose.webp" width="494" height="455" className="vc_single_image-img attachment-full" alt="Grow your classified marketplace business with CloneScript" loading="eager" decoding="async" />
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
