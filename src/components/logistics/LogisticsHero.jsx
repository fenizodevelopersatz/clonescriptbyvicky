import TextRotator from '../shared/TextRotator.jsx'

const rotatingKeywords = [
  { text: 'Real-Time Tracking', color: 'rgb(255, 87, 87)' },
  { text: 'Mobile Ready', color: 'rgb(87, 161, 255)' },
  { text: 'Secure & Scalable', color: 'rgb(0, 214, 53)' },
  { text: '100% Customizable', color: 'rgb(210, 71, 204)' },
]

export default function LogisticsHero() {
  return (
    <section className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt">
                        <span style={{ color: '#002692' }}>On-Demand Logistics Service App</span>
                        <br />
                        <span className="hero-heading">for Modern Delivery Businesses</span>
                        <br />
                      </span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Launch a digital logistics platform that connects customers with drivers, couriers, and transport providers. The solution supports parcel delivery, freight booking, commercial goods transportation, truck rental, home relocation, and scheduled delivery services.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h4 className="lqd-highlight-underline lqd-highlight-grow-left" data-text-rotator="true">
                      <span className="ld-fh-txt">
                        {' '}
                        <TextRotator keywords={rotatingKeywords} />
                      </span>
                    </h4>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Customers can request a vehicle, receive a fare estimate, track their delivery, and complete payments through the application. Drivers can accept suitable jobs, follow navigation, update trip status, and monitor earnings, while administrators manage the entire logistics network.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="/schedule-free-demo" className="btn btn-solid btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Explore Live Demo</span>
                      <span className="btn-icon"><i className="fa fa-regular fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">View Packages</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-dollar-sign"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="iconbox iconbox-side iconbox-heading-xs" style={{ justifyContent: 'center' }}>
                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-truck-fast"></i></span></div>
                    <h3 className="font-weight-semibold">Built for Couriers & Fleets</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
        </div>
      </div>
    </section>
  )
}
