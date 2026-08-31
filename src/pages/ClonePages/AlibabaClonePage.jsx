import { Link } from 'react-router-dom'
import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { siteContact } from '../../data/siteContact.js'
import {
  techStack, standOutFeatures, launchSteps, addOnFeatures, pricingPlans,
  comparisonOurs, comparisonOthers, roleTabs, revenueBenefits, customerReviews,
  whyChooseSolutionPoints, reliableApproachPoints, additionalRevenueOpportunities, marketplacePackageInclusions,
} from '../../data/alibaba/alibabaData.js'
import { comparisonLabels } from '../../data/comparisonLabels.js'
import { placeholderTestimonials } from '../../data/placeholderTestimonials.js'
import './AlibabaClonePage.css'

import AlibabaHero from '../../components/alibaba/AlibabaHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import BlockquoteTestimonials from '../../components/shared/BlockquoteTestimonials.jsx'
import WhatIsAlibaba from '../../components/alibaba/WhatIsAlibaba.jsx'
import AiFeaturesSection from '../../components/alibaba/AiFeaturesSection.jsx'
import WhyInvest from '../../components/alibaba/WhyInvest.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import GuideCoverArt from '../../components/shared/GuideCoverArt.jsx'
import RoleFeatureTabs from '../../components/shared/RoleFeatureTabs.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import ProcessSteps from '../../components/shared/ProcessSteps.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import SimpleListSection from '../../components/shared/SimpleListSection.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/alibaba/FaqServerTabs.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

const dashboards = [
  { label: 'Buyer Dashboard', email: 'buyer@gmail.com', password: 'password123', url: siteContact.cloneDemoUrl },
  { label: 'Supplier Dashboard', email: 'supplier@gmail.com', password: 'password123', url: siteContact.cloneDemoUrl },
  { label: 'Admin Dashboard', email: 'admin@gmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
]

export default function AlibabaClonePage() {
  usePageStylesheets(pageStylesheets.alibabaClone)

  useSeo(
    'Alibaba Clone Script | Launch Your Custom B2B Marketplace',
    'Build a scalable B2B marketplace with an Alibaba Clone Script featuring supplier profiles, bulk listings, RFQs, secure payments, commissions, and admin tools.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <AlibabaHero />
        </section>

        <section className="vc_section vc_custom_1776320292174 vc_section-has-fill">
          <TrustedByBadges heading="by B2B Entrepreneurs" />
          <BlockquoteTestimonials items={placeholderTestimonials} visibleCount={2} />
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading text-center">
                          <h4 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt">Recognized by <span style={{ color: '#002692' }}>clients</span></span>
                          </h4>
                        </div>
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: 'center' }}>CloneScript has years of experience in delivering high-quality product development solutions.</p>
                          </div>
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
          <WhatIsAlibaba />
        </section>

        <SimpleListSection
          heading="Why Choose Our B2B Marketplace Solution?"
          intro="Our Alibaba Clone provides a practical starting point for businesses that want to enter the B2B ecommerce market without developing every function from the beginning. The platform can be customized around your product categories, supplier network, payment process, service locations, languages, currencies, and branding requirements."
          items={whyChooseSolutionPoints}
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Create a Worldwide B2B Trading Platform</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>
                            Build a digital marketplace where verified suppliers can connect with companies looking for
                            products in large quantities. Buyers can compare listings, submit sourcing requests,
                            communicate with vendors, negotiate commercial terms, and manage purchases.
                          </p>
                          <p style={{ textAlign: 'center' }}>
                            The marketplace can be expanded with new product categories, suppliers, regions, currencies,
                            and revenue features as your business grows.
                          </p>
                        </div>
                      </header>
                      <Link to="/contact-us" className="btn btn-solid btn-sm round btn-bordered border-thin">
                        <span>
                          <span className="btn-txt">Get Professional Support</span>
                          <span className="btn-icon"><i className="fa fa-solid fa-headset"></i></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyInvest />
        <AiFeaturesSection />

        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Alibaba Clone" />

        <SimpleListSection
          heading="A Reliable Approach to Launching Your B2B Marketplace"
          intro="Choose a marketplace solution supported by organized development, transparent communication, clear timelines, and professional implementation assistance."
          items={reliableApproachPoints}
        />

        <PdfDownloadCta
          heading="Download the B2B Marketplace Feature Guide"
          desc="Review the complete buyer, supplier, administrator, AI, RFQ, payment, communication, and monetization capabilities before beginning your project."
          media={(
            <GuideCoverArt
              brand="CloneScript"
              titleLine1="B2B Marketplace Software"
              titleLine2="Smart Solution"
              tagline="Core Features &middot; Demo Version &middot; Technology"
              badge="AI Powered"
              gradientFrom="#2d5bff"
              gradientVia="#1e40d6"
              gradientTo="#0a1f6e"
              accentColor="#ffc233"
              features={[
                { icon: '≡', label: 'Core Features' },
                { icon: '▶', label: 'Demo Version' },
                { icon: '⚙', label: 'Technology' },
              ]}
            />
          )}
        />

        <RoleFeatureTabs
          heading="Features for Every B2B Marketplace Participant"
          desc="The solution provides dedicated functionality for business buyers, product suppliers, and platform administrators."
          roles={roleTabs}
        />

        <TechStackRow heading="Technology Stack for B2B Marketplace Development" items={techStack} />

        <section className="alibaba-live-demo-cta vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <img
                        src="/wp-content/uploads/2026/06/alibaba-clone-invest.webp"
                        alt="Alibaba clone platform preview"
                        width="600"
                        height="450"
                        loading="lazy"
                        decoding="async"
                        style={{ display: 'block', width: 'min(560px, 100%)', height: 'auto', margin: '0 auto' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="ld-fancy-heading">
                        <h2 className="ld-gradient-heading lqd-highlight-underline lqd-highlight-grow-left"><span className="ld-fh-txt"> Book a Live Demo</span></h2>
                      </div>
                      <header className="fancy-title">
                        <h2>Book a Personalized Alibaba Clone Demo</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'left' }}>
                            <span style={{ fontWeight: 400 }}>Explore the marketplace through a practical demonstration. Review the buyer journey, supplier workflow, RFQ process, payment management, and administrative tools. A guided session can help you identify the features and customization options required for your business model.</span>
                          </p>
                        </div>
                      </header>
                      <a href="#schedule_form" className="btn btn-solid btn-sm round btn-bordered border-thin btn-gradient">
                        <span>
                          <span className="btn-gradient-bg"></span>
                          <span className="btn-txt">Book Live Demo</span>
                          <span className="btn-icon"><i className="fa fa-solid fa-calendar"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StandOutFeaturesGrid
          heading="What Makes Our Alibaba Clone Stand Out?"
          subheading="A Customizable Marketplace for Modern Wholesale Trade — manage products, users, orders, RFQs, subscriptions, payments, commissions, and international transactions through one scalable platform."
          items={standOutFeatures}
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Marketplace Setup and Launch Support</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>Receive implementation assistance throughout the process of preparing, customizing, testing, and deploying your B2B marketplace.</p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessSteps steps={launchSteps} />

        <SimpleIconGrid
          items={addOnFeatures}
          title="Additional Alibaba Clone Capabilities"
          desc="Enhance the marketplace with supporting functionality for security, communication, payments, orders, and administration."
          columns={3}
          iconColor="#002692"
        />

        <LaunchCta
          heading="Launch Your Marketplace with Expert Assistance"
          desc="Move from planning to deployment with support for customization, configuration, installation, testing, and launch."
          image="/wp-content/uploads/2026/06/alibaba-clone-solution.webp"
          imageAlt="Alibaba clone marketplace app preview on two phones"
        />

        <RevenueBenefits
          heading="Revenue Opportunities for B2B Marketplace Owners"
          subheading="The platform supports several monetization options that can help create a sustainable marketplace business."
          items={revenueBenefits}
          image="/wp-content/uploads/2026/04/revenue_benefits.webp"
        />

        <SimpleListSection
          heading="Additional Revenue Opportunities"
          intro="Additional income opportunities may include:"
          items={additionalRevenueOpportunities}
          columns={3}
        />

        <LiveDemoTabs dashboards={dashboards} />

        <SimpleListSection
          heading="Select a Suitable Marketplace Package"
          intro="Choose a package according to your required platforms, source-code access, customization, mobile applications, integrations, and technical support. A B2B marketplace package may include:"
          items={marketplacePackageInclusions}
          columns={3}
        />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <FaqServerTabs />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
