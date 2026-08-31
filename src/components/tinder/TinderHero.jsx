import Reveal from '../shared/Reveal.jsx'
import TinderShowcase from './TinderShowcase.jsx'
import { trustCategories } from '../../data/trustedByLogos.js'

export default function TinderHero() {
  return (
    <section className="vc_section vc_custom_1737697649562 vc_section-has-fill">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-1 vc_col-xs-offset-1 vc_col-xs-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" duration={1.2}>
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Customizable<span style={{ color: '#ff9b99' }}> Online Dating Script</span> for Modern Matchmaking</span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>Create a secure adults-only matchmaking platform with CloneScript. Our Dating Script helps verified adult users create profiles, discover compatible people, communicate in real time, and build meaningful connections. The platform includes responsive web and mobile applications, flexible membership plans, privacy controls, user verification, and a centralized admin panel.</p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="#schedule_form" className="btn btn-solid btn-sm circle btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Live Demo</span>
                      <span className="btn-icon"><i className="fas fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm circle btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">View Prices</span>
                      <span className="btn-icon"><i className="fas fa-dollar-sign"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2025/01/Container.webp" width="425" height="110" alt="reviews" loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <TinderShowcase />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <p className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Trusted by Growing Businesses</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container-fluid">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
                    {trustCategories.map((cat, i) => (
                      <div className="iconbox iconbox-inline iconbox-heading-xs" key={i} style={{ color: '#0030b8' }}>
                        <div className="iconbox-icon-wrap">
                          <span className="iconbox-icon-container">
                            <i className={cat.icon}></i>
                          </span>
                        </div>
                        <h3 className="font-weight-semibold" style={{ fontSize: 15 }}>{cat.label}</h3>
                      </div>
                    ))}
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
