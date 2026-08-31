import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standOutFeatures, addOnFeatures, revenueBenefits, pricingPlans, screenshots, customerReviews,
} from '../../data/uber/uberData.js'

import UberHero from '../../components/uber/UberHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import WhatIsUber from '../../components/uber/WhatIsUber.jsx'
import HowItWorks from '../../components/uber/HowItWorks.jsx'
import WhyChooseUber from '../../components/uber/WhyChooseUber.jsx'
import LaunchWhatsappCta from '../../components/uber/LaunchWhatsappCta.jsx'
import UberRoleFeatures from '../../components/uber/UberRoleFeatures.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import BookByBid from '../../components/uber/BookByBid.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/uber/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

// Closest-matching names from the "Uber Clone Mobile Application Screens" list, one per
// entry in uberData.js's `screenshots` array (same order) -- picked by inspecting what each
// screenshot actually shows rather than guessing from the filename.
const screenshotLabels = [
  'Pickup and Destination',
  'Saved Locations',
  'Signup and Login',
  'Passenger Home',
  'Live Tracking',
  'Vehicle Selection',
]

export default function UberClonePage() {
  usePageStylesheets(pageStylesheets.uberClone)

  useSeo(
    'Uber Clone App | Build a Scalable Taxi Booking Platform',
    'Launch a customizable Uber Clone with ride booking, live tracking, driver management, multiple payments, safety tools, commissions, and admin control.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_custom_1738736124508 vc_section-has-fill">
          <UberHero />
          <TrustedByBadges heading="by Mobility Entrepreneurs" />
        </section>

        <section className="vc_section">
          <WhatIsUber />
        </section>

        <section className="vc_section">
          <HowItWorks />
        </section>

        <section className="vc_section">
          <WhyChooseUber />
          <LaunchWhatsappCta />
        </section>

        <section className="vc_section">
          <UberRoleFeatures />
        </section>

        <section className="vc_section vc_custom_1740035291295 vc_section-has-fill">
          <PdfDownloadCta
            heading="Main Features of the Uber Clone"
            desc="The platform includes separate functionality for passengers, drivers, and administrators. Download the complete feature breakdown to explore everything included."
          />
        </section>

        <section className="vc_section">
          <StandOutFeaturesGrid
            heading="Standard Features of the Uber Clone"
            subheading="Explore the Standard Feature Set Included With Every Uber Clone"
            items={standOutFeatures}
          />
        </section>

        <section className="vc_section">
          <BookByBid />
          <SimpleIconGrid
            items={addOnFeatures}
            title="Add on Features of the Uber Clone App"
            desc="Our App Like Uber Has Multiple Add-on Features, Which Are Different From Competitors."
            columns={3}
            iconColor="#d79800"
          />
        </section>

        <section className="vc_section vc_custom_1738821922373 vc_section-has-fill">
          <RevenueBenefits
            heading="Revenue Opportunities for the Taxi Platform"
            subheading="Discover the Revenue Streams Built Into Your Uber Clone Taxi Platform"
            items={revenueBenefits}
            image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
            color="rgb(215, 152, 0)"
          />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title text-center">
                          <h2>Technology for a Scalable Taxi Platform</h2>
                        </header>
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2025/02/Group-48097145-scaled.webp" className="vc_single_image-img attachment-full" alt="technologies-used" title="technologies-used" loading="lazy" style={{ maxWidth: '100%' }} />
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
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 vc_hidden-sm vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2025/08/taxi-booking-app-solution.webp" width="938" height="903" className="vc_single_image-img attachment-full" alt="taxi-booking-app-solution" title="taxi-booking-app-solution" loading="lazy" />
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
                          <h3>Start Your Taxi Platform with CloneScript Today!</h3>
                        </header>
                        <a href="/schedule-free-demo" target="_blank" rel="noreferrer" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                          <span>
                            <span className="btn-txt">Schedule now</span>
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

        <section className="vc_section section10">
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

          <PricingPlans plans={pricingPlans} heading="Choose a Development Package" />
          <MoneyBackGuarantee />
        </section>

        <section className="vc_section z-index-plus vc_custom_1738232840684 vc_section-has-fill">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading text-center">
                          <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Uber Clone Mobile Application Screens</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container-fluid">
              <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
                {screenshots.map((src, i) => (
                  <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src={src} width="458" height="953" className="vc_single_image-img attachment-full" alt={`Uber Clone App Screen – ${screenshotLabels[i]}`} loading="lazy" style={{ maxWidth: '100%' }} />
                      </div>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        <section className="vc_section">
          <FaqServerTabs />
        </section>

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                        <strong>Trademark Disclaimer:</strong> Uber is a trademark of its respective owner. This
                        Uber Clone is an independently developed and customizable taxi-booking solution. It is not
                        affiliated with, endorsed by, sponsored by, or officially connected with Uber. The
                        trademark is referenced only to explain the general nature and functionality of the
                        software.
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
