import TextRotator from '../shared/TextRotator.jsx'
import SchoolCrmHeroVisual from './SchoolCrmHeroVisual.jsx'
import './SchoolCrmHero.css'

const rotatingKeywords = [
  { text: 'Cloud-Based', color: 'rgb(255, 87, 87)' },
  { text: 'Mobile Ready', color: 'rgb(87, 161, 255)' },
  { text: 'Secure & Scalable', color: 'rgb(0, 214, 53)' },
  { text: '100% Customizable', color: 'rgb(210, 71, 204)' },
]

export default function SchoolCrmHero() {
  return (
    <section className="cs-schoolcrm-hero vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-left">
                    <h1 className="cs-schoolcrm-hero__heading lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt">
                        <span style={{ color: '#3157f5' }}>School CRM Software</span>{' '}
                        <br />
                        <span className="hero-heading">for Smarter Education Management</span>
                      </span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p className="cs-schoolcrm-hero__desc" style={{ textAlign: 'left' }}>
                        <span style={{ fontWeight: 400 }}>
                          Build an organized school-management ecosystem with CloneScript. Our School CRM helps
                          educational institutions manage admissions, students, parents, teachers, fees,
                          communication, and administrative activities from one centralized platform.
                        </span>
                      </p>
                      <p className="cs-schoolcrm-hero__desc" style={{ textAlign: 'left' }}>
                        <span style={{ fontWeight: 400 }}>
                          The software reduces repetitive work, improves communication, and gives school
                          administrators clearer insights into everyday operations.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-left">
                    <h4 className="lqd-highlight-underline lqd-highlight-grow-left" data-text-rotator="true">
                      <span className="ld-fh-txt">
                        {' '}
                        <TextRotator keywords={rotatingKeywords} />
                      </span>
                    </h4>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="#demo" className="btn btn-solid btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Live Demo</span>
                      <span className="btn-icon"><i className="fa fa-regular fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">View Prices</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-dollar-sign"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="iconbox iconbox-side iconbox-heading-xs">
                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-cloud"></i></span></div>
                    <h3 className="font-weight-semibold">Cloud Hosted</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <SchoolCrmHeroVisual />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
