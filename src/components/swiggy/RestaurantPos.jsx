import CloneScriptImage from '../shared/CloneScriptImage.jsx'

export default function RestaurantPos() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-sm-offset-0 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading blink-new">
                    <p className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> New</span>
                    </p>
                  </div>
                  <header className="fancy-title">
                    <h2>Restaurant POS Application</h2>
                    <h3>Faster Restaurant Order Management</h3>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>A connected point-of-sale application can help restaurant teams receive and organize online orders through supported phones, tablets, and counter devices. Staff can review order details, confirm availability, update preparation status, generate invoices, and coordinate pickups from one interface. The POS application can reduce manual order entry and help restaurants manage several incoming requests more efficiently.</span></p>
                    </div>
                  </header>
                  <a href="#schedule_form" className="btn btn-solid btn-sm circle btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Schedule a POS Demonstration</span>
                      <span className="btn-icon"><i className="fas fa-eye"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <CloneScriptImage src="/wp-content/uploads/2025/03/restaruant-POS-system.webp" width="1368" height="880" className="vc_single_image-img attachment-full" alt="restaurant pos app" loading="lazy" />
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
