import { rentalCategories } from '../../data/rentalBooking/rentalBookingData.js'
import './RentalCategoriesCarousel.css'

export default function RentalCategoriesCarousel() {
  return (
    <>
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-sm-offset-1 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <header className="fancy-title text-center">
                      <h2>Solutions for Different Rental Booking Needs</h2>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>The modular platform can be adapted for different rental, reservation, and travel-related business categories.</p>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container-fluid">
          <div className="rental-categories-viewport">
            <div className="row ld-row rental-categories-grid">
              {[...rentalCategories, ...rentalCategories].map((cat, i) => (
                <div
                  id={`ld_content_box_${i}`}
                  className="fancy-box border-radius-3 scheme-light fancy-box-overlay tall"
                  key={i}
                  aria-hidden={i >= rentalCategories.length ? 'true' : undefined}
                >
                  <div className="cb-img-container border-radius-3">
                    <figure className="fancy-box-image border-radius-3">
                      <img src={cat.image} width="330" height="441" alt={cat.title} loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </figure>
                  </div>
                  <span className="cb-overlay"></span>
                  <div className="fancy-box-contents border-radius-3">
                    <div className="fancy-box-header">
                      <span className="cb-subtitle text-uppercase ltr-sp-2 border-radius-3"><p>{cat.subtitle}</p></span>
                      <h3 className="font-weight-semibold">{cat.title}</h3>
                      <p><span style={{ fontSize: 16, color: 'white' }}>{cat.desc}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
