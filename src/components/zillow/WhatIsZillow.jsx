import Reveal from '../shared/Reveal.jsx'
import '../shared/SimpleListSection.css'

const idealFor = [
  'Real estate startups',
  'Property agencies',
  'Independent brokers',
  'Builders and developers',
  'Rental businesses',
  'Property managers',
  'Commercial property companies',
  'Multi-location real estate marketplaces',
]

export default function WhatIsZillow() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex clonescript-section-spaced">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="left">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-left">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> What Is a <span style={{ color: '#002692' }}>Zillow Clone?</span></span>
                    </h2>
                  </div>
                  <header className="fancy-title">
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>A Zillow Clone is a customizable real estate marketplace solution that comes packed with all the essential features you need to list, discover, compare, sell, and rent properties online. Instead of starting from scratch and building every single feature, entrepreneurs and real estate businesses can kick off with a solid software foundation and tailor it to fit their brand, location, audience, and business model. CloneScript’s Zillow Clone combines property listings, advanced filters, interactive maps, buyer profiles, agent dashboards, seller tools, inquiries, visit scheduling, monetization options, and platform administration.</span></p>
                      <p><span style={{ fontWeight: 400 }}>This solution is perfect for:</span></p>
                      <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': 2, margin: '12px 0' }}>
                        {idealFor.map((item, i) => (
                          <li key={i}><i className="fa fa-solid fa-check" aria-hidden="true"></i><span>{item}</span></li>
                        ))}
                      </ul>
                      <p>
                        <i className="fa-solid fa-key" style={{ color: '#f59e0b', padding: 8, borderRadius: '50%', marginTop: 6 }}></i>Complete <span style={{ color: '#f59e0b', fontWeight: 'bold' }}> Ownership</span>
                        <br />
                        <i className="fa-solid fa-chart-line" style={{ color: '#10b981', borderRadius: '50%', padding: 8, marginTop: 6 }}></i>High <span style={{ color: '#10b981', fontWeight: 'bold' }}> Scalability</span>
                        <br />
                        <i className="fa-solid fa-headset" style={{ color: '#ef4444', borderRadius: '50%', padding: 8, marginTop: 6 }}></i>Reliable <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Technical Support</span>
                      </p>
                    </div>
                  </header>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="right">
                  <div className="ld-fancy-heading text-center">
                    <h4 className="ld-gradient-heading lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Explore Live Demo Video</span>
                    </h4>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}><span style={{ fontWeight: 400 }}>Discover features and customization in our demo video</span></p>
                    </div>
                  </div>
                  <div className="liquid-img-group-container">
                    <div className="liquid-img-group-inner">
                      <div className="liquid-img-group-single" data-shadow-style="3" data-roundness="8">
                        <div className="liquid-img-group-img-container">
                          <div className="liquid-img-group-content content-floated-mid">
                            <a href="https://youtu.be/#" target="_blank" rel="noreferrer" className="btn btn-naked fresco btn-icon-block btn-icon-top btn-icon-lg btn-icon-circle btn-icon-solid btn-icon-ripple">
                              <span><span className="btn-icon"><i className="fa fa-solid fa-play"></i></span></span>
                            </a>
                          </div>
                          <div className="liquid-img-container-inner">
                            <figure>
                              <img src="/wp-content/uploads/2026/04/zillow-clone-invest.webp" width="4059" height="2280" alt="user_dashboard" loading="lazy" />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
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
