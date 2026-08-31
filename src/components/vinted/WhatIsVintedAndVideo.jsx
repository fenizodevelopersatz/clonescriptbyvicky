import '../shared/SimpleListSection.css'

const tailoredFor = [
  'Pre-owned fashion',
  'Vintage clothing',
  'Shoes and footwear',
  'Bags and accessories',
  'Children’s clothing',
  'Designer resale',
  'Handmade products',
  'Local classified ads',
  'Sustainable fashion',
  'Multi-category resale marketplaces',
]

export default function WhatIsVintedAndVideo() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-left">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> What Is a <span style={{ color: '#002692' }}>Vinted Clone?</span></span>
                    </h2>
                  </div>
                  <header className="fancy-title">
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>A Vinted Clone is a customizable marketplace solution that lets users list, discover, buy, and sell pre-owned fashion items all in one digital space. Users can set up profiles, upload products, add images and descriptions, set prices, chat privately, make offers, complete purchases, track deliveries, and leave reviews on completed transactions.</span></p>
                      <p><span style={{ fontWeight: 400 }}>This platform can be tailored for:</span></p>
                      <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': 2, margin: '12px 0' }}>
                        {tailoredFor.map((item, i) => (
                          <li key={i}><i className="fa fa-solid fa-check" aria-hidden="true"></i><span>{item}</span></li>
                        ))}
                      </ul>
                      <p><span style={{ fontWeight: 400 }}>CloneScript’s Vinted Clone empowers both startups and established businesses to kickstart a branded resale marketplace without the hassle of building every feature from scratch.</span></p>
                      <p>
                        <i className="fa-solid fa-key" style={{ color: '#f59e0b', padding: 8, borderRadius: '50%', marginTop: 6 }}></i>Complete <span style={{ color: '#f59e0b', fontWeight: 'bold' }}> Control</span>
                        <br />
                        <i className="fa-solid fa-chart-line" style={{ color: '#10b981', borderRadius: '50%', padding: 8, marginTop: 6 }}></i>Unlimited<span style={{ color: '#10b981', fontWeight: 'bold' }}> Growth</span>
                        <br />
                        <i className="fa-solid fa-headset" style={{ color: '#ef4444', borderRadius: '50%', padding: 8, marginTop: 6 }}></i>Expert <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Support</span>
                      </p>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h4 className="ld-gradient-heading lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Explore Live Demo Video</span>
                    </h4>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Discover features and customization in our demo video</span>
                      </p>
                    </div>
                  </div>
                  <div className="liquid-img-group-container">
                    <div className="liquid-img-group-inner">
                      <div className="liquid-img-group-single" data-shadow-style="3" data-roundness="8">
                        <div className="liquid-img-group-img-container">
                          <div className="liquid-img-group-content content-floated-mid">
                            <a href="https://youtu.be/#" target="_blank" rel="noreferrer" className="btn btn-naked fresco btn-icon-block btn-icon-top btn-icon-lg btn-icon-circle btn-icon-solid btn-icon-ripple">
                              <span>
                                <span className="btn-icon"><i className="fa fa-solid fa-play"></i></span>
                              </span>
                            </a>
                          </div>
                          <div className="liquid-img-container-inner">
                            <figure>
                              <img src="/wp-content/uploads/2026/04/vinted-clone.jpg" width="1024" height="583" alt="vinted-clone" loading="lazy" decoding="async" />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
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
