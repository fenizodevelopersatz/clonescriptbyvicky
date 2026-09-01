import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { standOutFeatures, revenueBenefits, pricingPlans, customerReviews } from '../../data/olx/olxData.js'

import OlxHero from '../../components/olx/OlxHero.jsx'
import TrustedByBuyers from '../../components/olx/TrustedByBuyers.jsx'
import WhatIsOlx from '../../components/olx/WhatIsOlx.jsx'
import WhyChooseUsOlx from '../../components/olx/WhyChooseUsOlx.jsx'
import EnhanceBusinessCta from '../../components/olx/EnhanceBusinessCta.jsx'
import MainFeaturesTabs from '../../components/olx/MainFeaturesTabs.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import AddOnFeaturesFlip from '../../components/olx/AddOnFeaturesFlip.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import TechWeUsed from '../../components/olx/TechWeUsed.jsx'
import StartCta from '../../components/olx/StartCta.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MobileScreens from '../../components/olx/MobileScreens.jsx'
import OlxFaqSection from '../../components/olx/OlxFaqSection.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'
import './OlxClonePage.css'

export default function OlxClonePage() {
  usePageStylesheets(pageStylesheets.olxClone)

  useSeo(
    'OLX Clone Script | Build an Online Classified Marketplace',
    'Launch a customizable OLX Clone with classified listings, advanced search, buyer-seller chat, subscriptions, featured ads, secure payments, and admin control.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_section-has-fill olx-hero-section">
          <OlxHero />
        </section>

        <section className="vc_section">
          <TrustedByBuyers />
        </section>

        <section className="vc_section">
          <WhatIsOlx />
        </section>

        <section className="vc_section">
          <WhyChooseUsOlx />
        </section>

        <section className="vc_section">
          <EnhanceBusinessCta />
        </section>

        <section className="vc_section">
          <MainFeaturesTabs />
        </section>

        <section className="vc_section vc_section-has-fill">
          <PdfDownloadCta
            heading="Main Features of the OLX Clone"
            desc="From easy registration and effortless ad listings to buyer-seller chat and a centralized admin dashboard, explore every user and admin capability built into your classified marketplace."
          />
        </section>

        <section className="vc_section">
          <StandOutFeaturesGrid
            heading="Standard Features of the OLX Clone"
            subheading="Our OLX Clone is a Feature-Rich Classified Marketplace Solution for Buying and Selling."
            items={standOutFeatures}
            color="#101b48"
          />
        </section>

        <section className="vc_section vc_section-has-fill">
          <AddOnFeaturesFlip />
        </section>

        <section className="vc_section vc_section-has-fill">
          <RevenueBenefits
            heading="Revenue Opportunities"
            subheading="Revenue Depends on User Activity, Listing Quality, Marketplace Trust, Pricing, Competition, and Promotional Reach."
            items={revenueBenefits}
            image="/wp-content/uploads/2025/02/Group-48096884.webp"
            color="rgb(71, 185, 228)"
          />
        </section>

        <section className="vc_section">
          <TechWeUsed />
        </section>

        <section className="vc_section">
          <StartCta />
        </section>

        <section className="vc_section">
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
                              <img src="/wp-content/uploads/2023/03/Group-726-1024x92.webp" width="780" height="70" className="vc_single_image-img attachment-large" alt="google review" title="google review" />
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
          <PricingPlans plans={pricingPlans} heading="Choose a Development Plan" />
        </section>

        <section className="vc_section vc_section-has-fill">
          <MobileScreens />
        </section>

        <section className="vc_section">
          <OlxFaqSection />
        </section>

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                        <strong>Trademark Disclaimer:</strong> OLX is a trademark of its respective owner. This
                        OLX Clone is an independently developed and customizable classified marketplace solution.
                        It is not affiliated with, endorsed by, sponsored by, or officially connected with OLX.
                        The trademark is referenced only to explain the general nature of the software.
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
