import Reveal from '../shared/Reveal.jsx'

export default function AmazonHero() {
  return (
    <section className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" duration={1.2}>
                  <div className="ld-fancy-heading ld-fh-has-fill">
                    <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> 🏆 Best Amazon Clone</span>
                    </p>
                  </div>
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> <b>Build a Scalable Amazon Clone Marketplace</b></span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Launch a branded multi-vendor ecommerce platform with CloneScript. Connect customers with independent sellers and manage products, payments, orders, commissions, shipping, and marketplace activities through one scalable solution.</span>
                      </p>
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>The Amazon Clone can be customized around your visual identity, product categories, payment options, seller policies, customer requirements, and revenue model.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="#demo" className="btn btn-solid btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Explore Live Demo</span>
                      <span className="btn-icon"><i className="fas fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">View Packages</span>
                      <span className="btn-icon"><i className="fas fa-dollar-sign"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space" style={{ height: 40 }}><span className="liquid_empty_space_inner"></span></div>
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img
                          src="/wp-content/uploads/2025/09/amazon-clone.webp"
                          width="1319"
                          height="911"
                          className="vc_single_image-img attachment-full"
                          alt="amazon-clone"
                          loading="lazy"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                    </figure>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
        </div>
      </div>
    </section>
  )
}
