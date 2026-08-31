import { whyChooseAdvantages } from '../../data/handyman/handymanData.js'
import '../shared/SimpleListSection.css'

export default function WhyChooseHandyman() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/clonescript-driver.webp" width="1159" height="1358" className="vc_single_image-img attachment-full" alt="CloneScript service professional" loading="lazy" />
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
                    <h2>Why Choose CloneScript for Your Handyman App?</h2>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>Our Handyman App Like Uber is designed to help entrepreneurs, service agencies, franchise operators, and local businesses establish a well-organized on-demand service marketplace. The platform can be customized for a single service category or developed as a multi-service application covering several professional services.</span></p>
                      <p><span style={{ fontWeight: 400 }}>Major advantages include:</span></p>
                      <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': 2 }}>
                        {whyChooseAdvantages.map((item) => (
                          <li key={item}>
                            <i className="fa fa-solid fa-check" aria-hidden="true"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </header>
                  <a href="/schedule-free-demo" target="_blank" rel="noreferrer" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                    <span>
                      <span className="btn-txt">Schedule now</span>
                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                    </span>
                  </a>{' '}
                  <a href="#schedule_form" className="btn btn-default btn-sm circle btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Live Demo</span>
                      <span className="btn-icon"><i className="far fa-play-circle"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
