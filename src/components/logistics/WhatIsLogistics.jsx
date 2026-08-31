import { Link } from 'react-router-dom'
import './WhatIsLogistics.css'

export default function WhatIsLogistics() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> What Is an <span style={{ color: '#002692' }}>On-Demand Logistics Service App?</span></span>
                    </h2>
                  </div>
                  <header className="fancy-title text-center">
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>An On-Demand Logistics Service App is a ready-made software solution for launching and managing digital transport or delivery services. It replaces manual phone-based booking and dispatch processes with a connected system for customers, drivers, vehicles, payments, and business administrators.</span></p>
                      <p><span style={{ fontWeight: 400 }}>The platform can manage the complete delivery journey, beginning with customer booking and driver assignment and continuing through pickup, GPS tracking, payment, and proof of delivery.</span></p>
                      <p><span style={{ fontWeight: 400 }}>Using a customizable foundation can help businesses launch faster while adapting the system to their own vehicle categories, service areas, pricing model, and operational requirements.</span></p>
                    </div>
                  </header>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <Link to="/contact-us" className="btn btn-solid btn-sm round btn-bordered border-thin">
                    <span>
                      <span className="btn-txt">Schedule a Consultation</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-calendar-check"></i></span>
                    </span>
                  </Link>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="row ld-row what-is-logistics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
                    <div className="iconbox iconbox-inline iconbox-square text-center">
                      <div className="iconbox-icon-wrap"><span className="iconbox-icon-container" style={{ color: '#f59e0b' }}><i className="fa-solid fa-route"></i></span></div>
                      <h3 className="font-weight-normal">Optimized Routes</h3>
                    </div>
                    <div className="iconbox iconbox-inline iconbox-square text-center">
                      <div className="iconbox-icon-wrap"><span className="iconbox-icon-container" style={{ color: '#10b981' }}><i className="fa-solid fa-location-crosshairs"></i></span></div>
                      <h3 className="font-weight-normal">Live Tracking</h3>
                    </div>
                    <div className="iconbox iconbox-inline iconbox-square text-center">
                      <div className="iconbox-icon-wrap"><span className="iconbox-icon-container" style={{ color: '#ef4444' }}><i className="fa-solid fa-headset"></i></span></div>
                      <h3 className="font-weight-normal">Dedicated Support</h3>
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
