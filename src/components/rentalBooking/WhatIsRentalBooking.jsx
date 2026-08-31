import Reveal from '../shared/Reveal.jsx'

export default function WhatIsRentalBooking() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 text-left">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="left">
                  <header className="fancy-title">
                    <h2>What Is a Rental Booking Script?</h2>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>A Rental Booking Script is a ready-made software solution for developing an online rental website and mobile application. It allows rental providers to create listings, define availability, set prices, manage reservations, communicate with customers, and receive payments.</span></p>
                      <p><span style={{ fontWeight: 400 }}>Customers can search for suitable rentals, compare options, select dates, check availability, complete payments, monitor reservations, and submit reviews. The solution can support different rental industries, including vacation stays, houses, vehicles, boats, event spaces, workspaces, equipment, and other bookable assets. Starting with an established software foundation can reduce the time and resources required to develop core rental functionality from the beginning.</span></p>
                      <p><span style={{ fontWeight: 400 }}>The platform creates an organized booking process for customers, hosts, and administrators: customers and providers create accounts, hosts publish listings with pricing and availability, and customers search and confirm bookings through a supported payment method. Both sides stay connected through notifications, messaging, and reviews, while administrators oversee listings, reservations, commissions, and payments.</span></p>
                    </div>
                  </header>
                  <a href="/schedule-free-demo" target="_blank" rel="noreferrer" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-gradient">
                    <span>
                      <span className="btn-txt">Schedule a Rental Platform Demo</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-calendar"></i></span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="right">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2026/01/rental-booking-clone.webp" width="1386" height="1416" className="vc_single_image-img attachment-full" alt="rental-booking-clone" title="rental-booking-clone" loading="lazy" />
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
