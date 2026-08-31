import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="clonescript-hero vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a409892f vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <h1
                    style={{ fontSize: 32, color: '#101B48', textAlign: 'left' }}
                    className="vc_custom_heading cs-anim-fade-up"
                  >
                    Custom Web & Mobile App Development Company
                  </h1>
                  <div className="wpb_text_column wpb_content_element cs-anim-fade-up" style={{ animationDelay: '0.12s' }}>
                    <div className="wpb_wrapper">
                      <p>
                        We create custom web and mobile app solutions that combine modern design, advanced
                        technology, and scalable performance. From business applications to marketplace
                        platforms and PHP solutions, we help businesses build secure, engaging, and
                        growth-focused digital products.
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space" style={{ height: 32 }}>
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <div
                    className="cs-anim-fade-up"
                    style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, animationDelay: '0.24s' }}
                  >
                    <Link to="/contact-us" className="btn btn-solid btn-md circle btn-bordered border-thin btn-icon-circle" style={{ margin: 0 }}>
                      <span>
                        <span className="btn-txt">Start Your Project</span>
                        <span className="btn-icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                      </span>
                    </Link>
                    <a href="#services" className="btn btn-default btn-md circle btn-bordered border-thin btn-icon-circle" style={{ margin: 0 }}>
                      <span>
                        <span className="btn-txt">Explore Our Services</span>
                        <span className="btn-icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left cs-anim-focus-reveal" style={{ animationDelay: '0.1s' }}>
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey cs-hover-zoom">
                        <img
                          src="/wp-content/uploads/home.webp"
                          width="556"
                          height="371"
                          className="vc_single_image-img attachment-full"
                          alt="Web and app development at CloneScript"
                          title="clonescript-hero-development"
                          fetchPriority="high"
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
