import { Link } from 'react-router-dom'

export default function ScheduleServiceCta() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-1 vc_col-md-4 vc_hidden-sm vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2025/09/freelance-marketplace-script.webp" width="1430" height="2129" className="vc_single_image-img attachment-full" alt="freelance-marketplace-script" title="freelance-marketplace-script" loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h3>Launch Your Freelance Marketplace Today</h3>
                  </header>
                  <Link to="/schedule-free-demo" target="_blank" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                    <span>
                      <span className="btn-txt">Schedule a Consultation</span>
                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
