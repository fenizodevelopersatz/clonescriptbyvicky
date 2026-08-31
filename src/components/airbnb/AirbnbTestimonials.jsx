import { testimonials } from '../../data/airbnb/airbnbData.js'

export default function AirbnbTestimonials() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="vc_row wpb_row vc_inner vc_row-fluid sv_testimonial">
            <div className="wpb_column vc_column_container vc_col-sm-7">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading text-left sv_text_super">
                      <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt">
                          {' '}
                          <span style={{ color: '#fe5337' }}>What Our</span>
                          <br />
                          Customer Says
                        </span>
                      </h2>
                    </div>
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p><span style={{ fontWeight: 400 }}>Our customers trust us for our quick delivery, reliable support, and ready-to-use platform. Their success stories showcase the quality, performance, and results we consistently deliver.</span></p>
                      </div>
                    </div>
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                    <a href="/schedule-free-demo" className="btn btn-solid btn-sm round btn-bordered border-thin btn-icon-left">
                      <span>
                        <span className="btn-txt">Book Free Demo</span>
                        <span className="btn-icon"><i className="fa fa-regular fa-calendar-check"></i></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sv_testimonial wpb_column vc_column_container vc_col-sm-5">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    {testimonials.map((t, i) => (
                      <div className="iconbox iconbox-side iconbox-heading-sm iconbox-icon-image" key={i}>
                        <div className="iconbox-icon-wrap">
                          <span className="iconbox-icon-container"><img src={t.image} className="liquid-image-icon" width="100" height="100" alt={t.name} /></span>
                        </div>
                        <div className="contents">
                          <h3>{t.name}</h3>
                          <p><em><span style={{ fontWeight: 400 }}>{t.text}</span></em></p>
                        </div>
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
