import { Link } from 'react-router-dom'

export default function TeamToolsBanner() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40b1a2c">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="clonescript-showcase-content wpb_wrapper vc_custom_1742215997062">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center text-capitalize">
                    <h3 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt">
                        We&rsquo;ve got the talent, the tech, and the tools
                        <br />
                        Let&rsquo;s Build Something Innovative Together.
                      </span>
                    </h3>
                  </div>
                  <div className="vc_btn3-container vc_btn3-inline vc_do_btn">
                    <Link
                      to="/schedule-free-demo"
                      style={{ backgroundColor: '#006FFF', color: '#FFFFFF' }}
                      className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-round vc_btn3-style-custom vc_btn3-icon-right"
                    >
                      Enquiry Now <i className="vc_btn3-icon fas fa-headset"></i>
                    </Link>
                  </div>
                  <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1761555679935">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img
                          src="/wp-content/uploads/2026/08/team-tools-solutions.webp"
                          width="2814"
                          height="1536"
                          className="vc_single_image-img attachment-full"
                          alt="CloneScript digital solutions across e-commerce, rental, transport and education"
                          title="clone-script-solutions"
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
