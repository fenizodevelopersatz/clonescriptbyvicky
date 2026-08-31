import DashboardMockup from '../shared/DashboardMockup.jsx'
import { serviceCategories } from '../../data/handyman/handymanData.js'
import '../shared/SimpleListSection.css'

export default function WhatIsHandyman() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 text-left">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h2>What Is a Handyman App Like Uber?</h2>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>A Handyman App Like Uber is an on-demand service marketplace that connects people who need household or professional assistance with qualified local service providers.</span></p>
                      <p><span style={{ fontWeight: 400 }}>Customers can search for a required service, check availability, review pricing, choose a suitable professional, book an appointment, and monitor the service status through the application.</span></p>
                      <p><span style={{ fontWeight: 400 }}>The platform can support a variety of service categories, including:</span></p>
                      <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': 2 }}>
                        {serviceCategories.map((item) => (
                          <li key={item}>
                            <i className="fa fa-solid fa-check" aria-hidden="true"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p><span style={{ fontWeight: 400 }}>Businesses can customize the platform&rsquo;s appearance, features, commission structure, payment methods, service categories, and operating regions.</span></p>
                    </div>
                  </header>
                  <a href="#schedule_form" className="btn btn-solid btn-sm circle btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Schedule now</span>
                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <DashboardMockup
                    role="Service Booking"
                    accent="#e2711d"
                    avatarIcon="fa-user"
                    stats={[{ value: '14+', label: 'Service Categories' }, { value: '24/7', label: 'Booking Access' }]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
