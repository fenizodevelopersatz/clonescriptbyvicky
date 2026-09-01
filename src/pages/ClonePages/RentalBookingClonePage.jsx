import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standOutFeatures, addOnFeatures, revenueBenefits, pricingPlans, faqs, customerReviews, serverRequirements,
} from '../../data/rentalBooking/rentalBookingData.js'
import './RentalBookingClonePage.css'

import RentalBookingHero from '../../components/rentalBooking/RentalBookingHero.jsx'
import TrustedByBuyers from '../../components/rentalBooking/TrustedByBuyers.jsx'
import WhatIsRentalBooking from '../../components/rentalBooking/WhatIsRentalBooking.jsx'
import WhyChooseUsRental from '../../components/rentalBooking/WhyChooseUsRental.jsx'
import ChatWithExpertCta from '../../components/rentalBooking/ChatWithExpertCta.jsx'
import MainFeaturesRoles from '../../components/rentalBooking/MainFeaturesRoles.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import RentalEcosystem from '../../components/rentalBooking/RentalEcosystem.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import RentalCategoriesCarousel from '../../components/rentalBooking/RentalCategoriesCarousel.jsx'
import TechWeUsed from '../../components/rentalBooking/TechWeUsed.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import AppScreens from '../../components/rentalBooking/AppScreens.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import SimpleListSection from '../../components/shared/SimpleListSection.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

export default function RentalBookingClonePage() {
  usePageStylesheets(pageStylesheets.rentalBookingScript)

  useSeo(
    'Rental Booking Script | Rental Management Platform',
    'Launch a customizable Rental Booking Script with listings, availability calendars, instant reservations, secure payments, and admin controls.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_section-has-fill rental-hero-section">
          <RentalBookingHero />
          <TrustedByBuyers />
        </section>

        <section className="vc_section">
          <WhatIsRentalBooking />
        </section>

        <section className="vc_section">
          <WhyChooseUsRental />
        </section>

        <section className="vc_section">
          <ChatWithExpertCta />
        </section>

        <section className="vc_section">
          <MainFeaturesRoles />
        </section>

        <PdfDownloadCta
          heading="Download the Rental Booking Feature Guide"
          desc="Review the complete functionality available for customers, hosts, vendors, administrators, listings, reservations, availability, payments, commissions, and payouts. The feature guide can help identify the standard capabilities suitable for your business and the additional customization required for your rental model."
        />

        <section className="vc_section vc_section-has-fill">
          <StandOutFeaturesGrid
            heading="Standard Features of the Rental Booking Script"
            subheading="The platform includes essential functionality designed to simplify rental discovery, reservations, availability, communication, and payments."
            items={standOutFeatures}
            color="#0077ff"
          />
        </section>

        <section className="vc_section">
          <RentalEcosystem />
        </section>

        <section className="vc_section vc_section-has-fill">
          <SimpleIconGrid
            items={addOnFeatures}
            title="Additional Rental Booking Features"
            desc="Extend the rental marketplace with advanced functionality for search, communication, verification, payments, pricing, and business management."
            columns={5}
            iconColor="#0077ff"
          />
        </section>

        <section className="vc_section vc_section-has-fill">
          <RevenueBenefits
            heading="Rental Booking Monetization and Revenue Streams"
            subheading="The rental platform can support different earning models for generating sustainable business revenue."
            items={revenueBenefits}
            image="/wp-content/uploads/2026/01/revenue.webp"
            color="#0077ff"
          />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-5 vc_hidden-sm vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2026/01/rental-booking-solution.webp" width="1422" height="1458" className="vc_single_image-img attachment-full" alt="rental-booking-solution" title="rental-booking-solution" loading="lazy" />
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title">
                          <h3>Plan Your Rental Booking Platform with Our Experts Today.</h3>
                        </header>
                        <a href="/schedule-free-demo" target="_blank" rel="noreferrer" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                          <span>
                            <span className="btn-txt">Schedule a Consultation</span>
                            <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="vc_section">
          <RentalCategoriesCarousel />
        </section>

        <section className="vc_section">
          <TechWeUsed />
        </section>

        <section id="prices" className="vc_section section10">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2023/03/Group-726-1024x92.webp" width="780" height="70" className="vc_single_image-img attachment-large" alt="google review" title="google review" loading="lazy" />
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <MoneyBackGuarantee />
          <PricingPlans plans={pricingPlans} heading="Choose a Suitable Rental Booking Plan" />
        </section>

        <section className="vc_section vc_section-has-fill">
          <AppScreens />
        </section>

        <section className="vc_section">
          <FaqAccordion
            heading="Frequently Asked Questions About the Rental Booking Script"
            subheading="Find Answers to Common Rental Platform Questions"
            faqs={faqs}
          />
        </section>

        <SimpleListSection
          heading="Rental Booking Script Server Requirements"
          intro={serverRequirements.intro}
          items={serverRequirements.items}
          closing={serverRequirements.outro}
          columns={3}
        />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                        <strong>Platform Disclaimer:</strong> The platform provides the technical infrastructure required
                        to manage rental listings and reservations. Rental providers remain responsible for the accuracy,
                        legality, availability, condition, insurance, and safety of the assets they publish. Business
                        owners should establish clear rental policies, cancellation terms, user-verification procedures,
                        payment rules, and dispute-resolution processes that comply with the laws applicable to their
                        operating locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />
      </div>
    </main>
  )
}
