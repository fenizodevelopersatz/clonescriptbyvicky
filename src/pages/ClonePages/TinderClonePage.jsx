import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  featureGroups, standardFeatures, addOnFeatures, revenueBenefits, pricingPlans, screenshots, customerReviews,
} from '../../data/tinder/tinderData.js'

import TinderHero from '../../components/tinder/TinderHero.jsx'
import WhatIsTinder from '../../components/tinder/WhatIsTinder.jsx'
import WhyChooseUsTinder from '../../components/tinder/WhyChooseUsTinder.jsx'
import ExpertCtaBanner from '../../components/tinder/ExpertCtaBanner.jsx'
import TinderFeatureTabs from '../../components/tinder/TinderFeatureTabs.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import FaqServerTabs from '../../components/tinder/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

export default function TinderClonePage() {
  usePageStylesheets(pageStylesheets.tinderClone)

  useSeo(
    'Online Dating Script | Build a Secure Matchmaking Platform',
    'Launch a customizable adults-only Dating Script with profile discovery, matching, real-time chat, verification, subscriptions, moderation, and admin control.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <TinderHero />

        <section className="vc_section">
          <WhatIsTinder />
        </section>

        <section className="vc_section">
          <WhyChooseUsTinder />
        </section>

        <section className="vc_section">
          <ExpertCtaBanner />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading ld-fh-has-fill text-center">
                          <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Main Features</span>
                          </p>
                        </div>
                        <header className="fancy-title text-center">
                          <p>Discover the robust features of the Online Dating Platform</p>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <TinderFeatureTabs groups={featureGroups} />
        </section>

        <PdfDownloadCta
          heading="Explore the Complete Features of Our Online Dating Script!"
          desc="See the complete set of user and admin tools included in our adults-only matchmaking platform."
        />

        <StandOutFeaturesGrid
          heading="Standard Features of the Dating Script"
          subheading="Essential Features of a Dating Script for a Seamless Matchmaking Experience"
          items={standardFeatures}
          color="#ff9b99"
        />

        <StandOutFeaturesGrid
          heading="Add-On Features"
          subheading="Additional Features That Can Further Enhance Your Online Dating Script Solution"
          items={addOnFeatures}
          color="#ff9b99"
        />

        <RevenueBenefits
          heading="Revenue Opportunities"
          subheading="Explore the Revenue Streams Built Into Your Online Dating Script"
          items={revenueBenefits}
          image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
          color="#ff9b99"
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Technology Used for the Dating Platform</h2>
                      </header>
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/08/technologies.webp" width="1120" height="677" alt="technologies" title="technologies" loading="lazy" />
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

        <LaunchCta
          heading="Start Your Dating Platform with CloneScript"
          desc="Launch a branded adults-only matchmaking platform with profile discovery, mutual matching, real-time communication, subscriptions, privacy tools, and admin management. The platform can be expanded with new features, languages, communities, payment methods, and membership plans as your business grows."
          image="/wp-content/uploads/2025/09/best-dating-script.webp"
          imageAlt="Dating clone app preview showing post creation and profile screens"
        />

        <PricingPlans plans={pricingPlans} heading="Choose a Development Plan" />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container-fluid">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-sm-offset-1 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="ld-fancy-heading">
                        <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                          <span className="ld-fh-txt"> Dating Script Mobile Application Screens</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
              {screenshots.map((s, i) => (
                <div className="wpb_single_image wpb_content_element vc_align_left" key={i}>
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper vc_box_border_grey">
                      <img src={s.image} alt={s.alt} title={s.alt} loading="lazy" style={{ maxWidth: '100%' }} />
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqServerTabs />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                        <strong>Adults-Only Disclaimer:</strong> This platform is intended exclusively for adults
                        aged 18 or older. Registration and dating functionality must not be made available to
                        minors. Any third-party trademarks mentioned for descriptive purposes belong to their
                        respective owners, and this independently developed platform is not affiliated with those
                        companies.
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
