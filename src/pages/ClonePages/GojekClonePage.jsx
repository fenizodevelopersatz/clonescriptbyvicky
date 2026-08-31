import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standardFeatures, addOnFeatures, revenueBenefits, pricingPlans, appScreens, customerReviews,
} from '../../data/gojek/gojekData.js'

import GojekHero from '../../components/gojek/GojekHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import WhatIsGojek from '../../components/gojek/WhatIsGojek.jsx'
import ServiceOfferTabs from '../../components/gojek/ServiceOfferTabs.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import AllInOneSuperApp from '../../components/gojek/AllInOneSuperApp.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import BusinessOpportunities from '../../components/gojek/BusinessOpportunities.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/gojek/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

export default function GojekClonePage() {
  usePageStylesheets(pageStylesheets.gojekClone)

  useSeo(
    'Gojek Clone | Multi-Service Super App by CloneScript',
    'Launch a customizable Gojek Clone with ride booking, eCommerce, food delivery, parcel services, professional bookings, vehicle rentals, and payments.'
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <GojekHero />
        </section>

        <TrustedByBadges heading="by Super App Entrepreneurs" />

        <section className="vc_section">
          <WhatIsGojek />
        </section>

        <ServiceOfferTabs />

        <PdfDownloadCta
          heading="Download the Gojek Clone Feature Guide"
          desc="Review the complete functionality available for customers, vendors, drivers, delivery partners, providers, workers, vehicle owners, and administrators."
        />

        <StandOutFeaturesGrid
          heading="Standard Features of the Gojek Clone"
          subheading="The solution includes essential functions designed to improve communication, convenience, accessibility, order management, and service delivery."
          items={standardFeatures}
        />

        <section className="vc_section">
          <AllInOneSuperApp />
        </section>

        <StandOutFeaturesGrid
          heading="Additional Gojek Clone Features"
          subheading="Extend the platform with advanced tools for branding, analytics, promotions, rewards, module management, and merchant operations."
          items={addOnFeatures}
        />

        <RevenueBenefits
          heading="Gojek Clone Monetization and Revenue Streams"
          subheading="The multi-service platform can support several earning methods for building sustainable business revenue."
          items={revenueBenefits}
          image="/wp-content/uploads/2025/04/Group-48098091.png"
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Technology Used for Gojek Clone Development</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The solution can use modern web, mobile, database, cloud, mapping, payment, communication, and reporting technologies.</p>
                        </div>
                      </header>
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/04/gojek-clone-technology.webp" width="1292" height="600" className="vc_single_image-img attachment-full" alt="gojek-clone-technology" title="gojek-clone-technology" loading="lazy" />
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

        <section className="vc_section">
          <BusinessOpportunities />
          <LaunchCta
            heading="Start Your Multi-Service Business"
            desc="Turn your super-app concept into a customizable web and mobile platform. Start with essential services and introduce more categories as your users, providers, vendors, and operating locations increase."
            image="/wp-content/uploads/2025/08/gojek-today.webp"
            imageAlt="Gojek clone app preview"
          />
        </section>

        <PricingPlans plans={pricingPlans} heading="Choose a Suitable Gojek Clone Plan" />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Gojek Clone Mobile Application Screens</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>Preview the important interfaces available across customer, merchant, driver, delivery, worker, provider, and rental applications.</p>
                        </div>
                      </header>
                      <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
                        {appScreens.map((src, i) => (
                          <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={src} alt={`Gojek Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
                              </div>
                            </figure>
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

        <FaqServerTabs />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />
      </div>
    </main>
  )
}
