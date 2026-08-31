import Reveal from '../shared/Reveal.jsx'

export default function WhatIsAmazon() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="left">
                  <header className="fancy-title">
                    <h2>What Is an Amazon Clone?</h2>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>An Amazon Clone is a ready-made software foundation for launching a B2C multi-vendor ecommerce marketplace. It allows multiple sellers to create stores and publish products while customers can search, compare, purchase, and track orders through one platform.</span></p>
                      <p><span style={{ fontWeight: 400 }}>The white-label solution includes essential features for customer accounts, vendor management, product catalogues, shopping carts, checkout, online payments, shipping, commissions, and marketplace administration.</span></p>
                      <p><span style={{ fontWeight: 400 }}>Starting with an established software foundation can reduce initial development effort and help businesses enter the ecommerce market faster.</span></p>
                    </div>
                  </header>
                  <a href="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-bordered-gradient">
                    <span>
                      <span className="btn-txt">Schedule Demo</span>
                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="right">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2025/09/ecommerce-script.webp" alt="ecommerce-script" loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
