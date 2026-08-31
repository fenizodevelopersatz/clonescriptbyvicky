import Reveal from '../shared/Reveal.jsx'

export default function AllInOneSuperApp() {
  return (
    <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-sm-offset-0 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="left">
                  <header className="fancy-title">
                    <h2>All-in-One Multi-Service Super App</h2>
                    <h3>Key to Rule the Multi-Service Market</h3>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>The Gojek Clone can combine shopping, transportation, delivery, professional assistance, parcel handling, and vehicle rental functions within one connected website and mobile application.</span></p>
                      <p><span style={{ fontWeight: 400 }}>Customers can access several services through one profile, payment environment, and booking history. Administrators can manage the different modules without maintaining separate business systems.</span></p>
                    </div>
                  </header>
                  <a href="#schedule_form" className="btn btn-solid btn-sm circle btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Schedule Demo</span>
                      <span className="btn-icon"><i className="fas fa-eye"></i></span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="right">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2025/08/all-in-one-multi-service-app-2.webp" width="599" height="619" className="vc_single_image-img attachment-full" alt="all-in-one-multi-service-app" title="all-in-one-multi-service-app-2" loading="lazy" />
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
