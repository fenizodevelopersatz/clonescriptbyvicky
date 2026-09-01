import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  features, whyChooseIntro, whyChooseItems, userFeatures, adminFeatures, standardFeatures,
  privacySecurityFeatures, addOnFeatures, revenueBenefits, technologyList, packagePlanIntro,
  packageInclusions, pricingPlans, customerReviews,
} from '../../data/whatsapp/whatsappData.js'
import './WhatsappClonePage.css'

import WhatsappHero from '../../components/whatsapp/WhatsappHero.jsx'
import WhatIsWhatsapp from '../../components/whatsapp/WhatIsWhatsapp.jsx'
import SimpleListSection from '../../components/shared/SimpleListSection.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import WhatWeOffer from '../../components/whatsapp/WhatWeOffer.jsx'
import WhatsappFeatures from '../../components/whatsapp/WhatsappFeatures.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/whatsapp/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

export default function WhatsappClonePage() {
  usePageStylesheets(pageStylesheets.whatsappClone)

  useSeo(
    'WhatsApp Clone Script | Build a Real-Time Messaging Platform',
    'Launch a customizable WhatsApp Clone with private chats, groups, channels, voice and video calls, multimedia sharing, and admin control.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section section1 vc_custom_1710218341756 vc_section-has-fill whatsapp-hero-section">
          <WhatsappHero />
        </section>

        <WhatIsWhatsapp />

        <SimpleListSection
          heading="Why Choose CloneScript for Your WhatsApp Clone?"
          intro={whyChooseIntro}
          items={whyChooseItems}
          columns={3}
        />

        <LaunchCta
          heading="Connect with a Messaging App Expert"
          desc="Discuss your messaging-platform requirements, preferred applications, communication features, integrations, branding, security expectations, and deployment environment. A consultation can help identify the standard features available and any additional customization required for your project."
          variant="dark"
        />

        <WhatWeOffer />

        <WhatsappFeatures items={features} />

        <StandOutFeaturesGrid
          heading="User Features"
          subheading="The user application provides tools for managing conversations, calls, contacts, media, privacy, and account preferences."
          items={userFeatures}
        />

        <StandOutFeaturesGrid
          heading="Administration Features"
          subheading="The administration panel helps platform owners manage users, public content, reports, configuration, and application performance."
          items={adminFeatures}
        />

        <PdfDownloadCta
          heading="Download the WhatsApp Clone Feature Guide"
          desc="Review the complete functionality available for users, groups, channels, calls, media sharing, notifications, privacy controls, and platform administration. The feature guide can help you identify the standard capabilities and additional functionality required for your messaging-app project."
        />

        <StandOutFeaturesGrid
          heading="Standard Features of the WhatsApp Clone"
          subheading="The application includes essential functionality designed to provide convenient and accessible communication."
          items={standardFeatures}
        />

        <StandOutFeaturesGrid
          heading="Privacy and Security Features"
          subheading="Privacy and security should be considered throughout account registration, message delivery, media storage, calling, and administration."
          items={privacySecurityFeatures}
        />

        <StandOutFeaturesGrid
          heading="Additional WhatsApp Clone Features"
          subheading="Extend the messaging platform with functionality for communities, organizations, businesses, and growing user networks."
          items={addOnFeatures}
        />

        <RevenueBenefits
          heading="WhatsApp Clone Monetization and Revenue Streams"
          subheading="The messaging platform can support different revenue models depending on its audience and purpose."
          items={revenueBenefits}
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Technology Used for Messaging App Development</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The WhatsApp Clone can use modern mobile, web, database, cloud, real-time communication, storage, notification, and security technologies. The technical architecture should support:</p>
                        </div>
                      </header>
                      <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                          <ul style={{ textAlign: 'left' }}>
                            {technologyList.map((t) => (
                              <li key={t}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LaunchCta
          heading="Start Your Instant Messaging Business"
          desc="Turn your communication-platform idea into a customizable web and mobile product. Begin with essential private messaging, group communication, media sharing, calling, and privacy features. Add channels, communities, business tools, subscriptions, and other advanced functionality as the platform grows."
          variant="dark"
        />

        <SimpleListSection
          heading="Choose a Suitable WhatsApp Clone Plan"
          intro={packagePlanIntro}
          items={packageInclusions}
          columns={3}
        />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading text-center">
                          <h3 className="ld-gradient-heading lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Prices</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PricingPlans plans={pricingPlans} />
        </section>

        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Purchase Protection Policy</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>Review the applicable payment, development, delivery, support, cancellation, and refund conditions before selecting a package.</p>
                          <p style={{ textAlign: 'center', fontSize: 13, color: '#666' }}>Eligibility requirements, coverage periods, exclusions, and refund procedures should be clearly explained in the official service agreement.</p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
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
                        <strong>Trademark Disclaimer:</strong> &ldquo;WhatsApp&rdquo; is a trademark owned by its
                        respective proprietor. The product name is used only to describe the general type of
                        messaging functionality offered. This independently developed software is not affiliated
                        with, sponsored by, or endorsed by WhatsApp, Meta, or their respective trademark owners.
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
