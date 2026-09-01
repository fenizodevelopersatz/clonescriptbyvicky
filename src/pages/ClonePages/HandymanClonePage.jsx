import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { siteContact } from '../../data/siteContact.js'
import {
  standOutFeatures, addOnFeatures, revenueBenefits, pricingPlans, customerReviews,
  processSteps, technicalArchitectureItems,
} from '../../data/handyman/handymanData.js'
import './HandymanClonePage.css'

import HandymanHero from '../../components/handyman/HandymanHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import WhatIsHandyman from '../../components/handyman/WhatIsHandyman.jsx'
import ProcessSteps from '../../components/shared/ProcessSteps.jsx'
import WhyChooseHandyman from '../../components/handyman/WhyChooseHandyman.jsx'
import LaunchWhatsappCta from '../../components/handyman/LaunchWhatsappCta.jsx'
import HandymanRoleFeatures from '../../components/handyman/HandymanRoleFeatures.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import PostJobAndBid from '../../components/handyman/PostJobAndBid.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import SimpleListSection from '../../components/shared/SimpleListSection.jsx'
import DashboardMockup from '../../components/shared/DashboardMockup.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/handyman/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

// Explore the Platform Experience: the copy's 4 demo walkthroughs (Customer/Provider/
// Professional/Admin) mapped onto the same LiveDemoTabs + placeholder-credential
// convention already established on SchoolCrmPage.jsx / VintedClonePage.jsx. No real
// screenshots exist for this product, so every tab uses DashboardMockup (see
// components/shared/DashboardMockup.jsx) instead of a fabricated image.
const dashboards = [
  {
    label: 'Customer Application',
    email: 'customer@gmail.com',
    password: 'password123',
    url: siteContact.cloneDemoUrl,
    visual: <DashboardMockup role="Customer" accent="#2e86de" avatarIcon="fa-user" stats={[{ value: '23+', label: 'App Features' }, { value: '4.8★', label: 'Avg. Rating' }]} />,
  },
  {
    label: 'Provider Dashboard',
    email: 'provider@gmail.com',
    password: 'password123',
    url: siteContact.cloneDemoUrl,
    visual: <DashboardMockup role="Provider" accent="#e2711d" avatarIcon="fa-toolbox" stats={[{ value: '18+', label: 'Provider Tools' }, { value: '92%', label: 'Acceptance Rate' }]} />,
  },
  {
    label: 'Professional Application',
    email: 'professional@gmail.com',
    password: 'password123',
    url: siteContact.cloneDemoUrl,
    visual: <DashboardMockup role="Professional" accent="#1f9d55" avatarIcon="fa-hard-hat" stats={[{ value: '6', label: 'Job Stages' }, { value: 'Live', label: 'Arrival Tracking' }]} />,
  },
  {
    label: 'Admin Panel',
    email: 'admin@gmail.com',
    password: '12345678',
    url: siteContact.cloneDemoUrl,
    visual: <DashboardMockup role="Admin" accent="#5a2ea6" avatarIcon="fa-user-shield" stats={[{ value: '17+', label: 'Admin Modules' }, { value: '100%', label: 'Platform Control' }]} />,
  },
]

export default function HandymanClonePage() {
  usePageStylesheets(pageStylesheets.handymanClone)

  useSeo(
    'Handyman App Development | On-Demand Service Platform',
    'Launch a customizable Handyman App Like Uber with service booking, provider management, live tracking, secure payments, job bidding, and admin control.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_custom_1738736124508 vc_section-has-fill handyman-hero-section">
          <HandymanHero />
          <TrustedByBadges heading="by Service Entrepreneurs" />
        </section>

        <section className="vc_section">
          <WhatIsHandyman />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title text-center">
                          <h2>How Does an On-Demand Handyman App Work?</h2>
                          <div className="st-desc">
                            <p style={{ textAlign: 'center' }}><span style={{ fontWeight: 400 }}>The platform creates a structured connection between customers, service providers, professionals, and administrators.</span></p>
                          </div>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ProcessSteps steps={processSteps} />
        </section>

        <section className="vc_section">
          <WhyChooseHandyman />
          <LaunchWhatsappCta />
        </section>

        <section className="vc_section">
          <HandymanRoleFeatures />
        </section>

        <section className="vc_section vc_custom_1740035291295 vc_section-has-fill">
          <PdfDownloadCta
            heading="Main Features of the Handyman App Like Uber"
            desc="The platform includes separate capabilities for customers, providers, individual professionals, and administrators."
          />
        </section>

        <section className="vc_section">
          <StandOutFeaturesGrid
            heading="Standard Features of the Handyman App"
            subheading="Our Handyman App Like Uber With Robust Features For A Seamless Experience,"
            items={standOutFeatures}
          />
        </section>

        <section className="vc_section">
          <PostJobAndBid />
          <SimpleIconGrid
            items={addOnFeatures}
            title="Optional Add-On Features of the Handyman App"
            desc="Our Handyman App Like Uber Has Multiple Add-on Features, Which Are Different From Competitors."
            columns={3}
            iconColor="#d79800"
          />
        </section>

        <section className="vc_section vc_custom_1738821922373 vc_section-has-fill">
          <RevenueBenefits
            heading="Revenue Opportunities for the Handyman Platform"
            subheading="Explore the Revenue Opportunities That Help You Build a Profitable Handyman App Like Uber"
            items={revenueBenefits}
            image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
            color="rgb(215, 152, 0)"
          />
        </section>

        <section className="vc_section">
          <SimpleListSection
            heading="Technology for a Scalable Handyman Marketplace"
            intro="The platform can be developed using modern technologies selected according to its expected traffic, required applications, integrations, and long-term expansion plans. The technical architecture may include:"
            items={technicalArchitectureItems}
            closing="The final technology stack should be selected after reviewing the required functionality, target audience, service locations, and expected booking volume."
            columns={3}
          />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-2 vc_col-sm-offset-2 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title text-center">
                          <h3>Start Your Handyman Marketplace with CloneScript</h3>
                          <div className="st-desc">
                            <p style={{ textAlign: 'center' }}><span style={{ fontWeight: 400 }}>Transform your service-business concept into a customizable on-demand platform for customers, providers, and skilled professionals. The solution can be adapted for local service businesses, multi-city marketplaces, specialized professional networks, maintenance companies, franchise operations, and multi-service platforms.</span></p>
                          </div>
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

        <LiveDemoTabs dashboards={dashboards} />

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

          <PricingPlans plans={pricingPlans} heading="Choose a Suitable Development Package" />
          <MoneyBackGuarantee />
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
                        <strong>Trademark Disclaimer:</strong> Uber and related names are trademarks of their respective owners. This Handyman App Like Uber is an independently developed, customizable on-demand service solution. It is not affiliated with, sponsored by, endorsed by, or officially connected with Uber. Trademark references are used only to explain the general nature and functionality of the platform.
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
