import { Link } from 'react-router-dom'
import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  aiFeatures, roleTabs, techStack, standOutFeatures, revenueBenefits, additionalRevenueModels,
  launchSteps, dashboards, packageInclusions, pricingPlans, comparisonOurs, comparisonOthers,
  customerReviews,
} from '../../data/zillow/zillowData.js'
import { comparisonLabels } from '../../data/comparisonLabels.js'
import { placeholderTestimonials } from '../../data/placeholderTestimonials.js'
import './ZillowClonePage.css'

import ZillowHero from '../../components/zillow/ZillowHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import BlockquoteTestimonials from '../../components/shared/BlockquoteTestimonials.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'
import WhatIsZillow from '../../components/zillow/WhatIsZillow.jsx'
import WhyChooseChecklist from '../../components/shared/WhyChooseChecklist.jsx'
import AiFeaturesGrid from '../../components/shared/AiFeaturesGrid.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import RoleFeatureTabs from '../../components/shared/RoleFeatureTabs.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import ProcessSteps from '../../components/shared/ProcessSteps.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import SimpleListSection from '../../components/shared/SimpleListSection.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/zillow/FaqServerTabs.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

export default function ZillowClonePage() {
  usePageStylesheets(pageStylesheets.zillowClone)

  useSeo(
    'Zillow Clone Script | Real Estate Marketplace',
    'Kickstart a real estate marketplace with CloneScript’s Zillow Clone Script, featuring advanced property search, AI tools, and admin controls.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section zillow-hero-section">
          <ZillowHero />
        </section>

        <section className="vc_section vc_custom_1776320292174 vc_section-has-fill">
          <TrustedByBadges heading="by Real Estate Founders" />
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
          <WhatIsZillow />
        </section>

        <WhyChooseChecklist
          heading="Why Choose"
          accentWord="CloneScript?"
          desc="CloneScript empowers businesses to turn their real estate visions into scalable digital platforms. Our Zillow Clone can be tailored to meet your operational needs, target market, preferred revenue streams, and long-term growth strategies."
          points={[
            ['', 'Business-Focused Customization', ': customize property types, listing fields, user roles, subscription packages, commissions, service areas, currencies, languages, and approval workflows.'],
            ['', 'Complete Source-Code Access', ': gain enhanced control over branding, customization, integrations, and future development.'],
            ['', 'Scalable Architecture', ': branch out into new locations, property categories, mobile apps, and enterprise-level workflows.'],
            ['', 'Deployment Assistance', ': set up the application in your chosen hosting environment and get everything ready for launch.'],
            ['', 'Reliable Technical Support', ': configuration, troubleshooting, maintenance, updates, and future enhancements.'],
          ]}
          image="/wp-content/uploads/2025/02/why-choose.webp"
          imageAlt="CloneScript real estate platform delivery achievements"
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Turn Your Real Estate Idea into a Market-Ready Platform</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>
                            Build a branded digital marketplace that makes property discovery a breeze and equips every
                            participant with the right tools. Buyers and renters can easily search, shortlist, compare, and
                            inquire about properties. Owners and agents can publish listings, manage leads, and schedule
                            visits. Administrators can oversee users, listings, subscriptions, transactions, advertisements,
                            and platform settings all from one centralized dashboard.
                          </p>
                        </div>
                      </header>
                      <Link to="/contact-us" className="btn btn-solid btn-sm round btn-bordered border-thin">
                        <span>
                          <span className="btn-txt">Discuss Your Zillow Clone Requirements with CloneScript</span>
                          <span className="btn-icon"><i className="fa fa-solid fa-arrow-right"></i></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced zillow-why-invest">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Why Invest in a Zillow Clone Platform?</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>
                            More and more property searches start online. Buyers and renters want accurate listings,
                            advanced filters, location maps, property images, virtual tours, and quick communication with
                            owners or agents.
                          </p>
                          <p style={{ textAlign: 'center' }}>
                            Having your own dedicated real estate marketplace means your business can own its audience,
                            manage the entire customer experience, and create multiple revenue opportunities without
                            relying solely on third-party property portals.
                          </p>
                        </div>
                      </header>
                      <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': 2, margin: '24px auto 0', maxWidth: 780, textAlign: 'left' }}>
                        {[
                          'Launch faster with a customizable software foundation',
                          'Serve buyers, renters, sellers, builders, and agents',
                          'Create multiple revenue streams in real estate',
                          'Track property demand and user behavior',
                          'Manage all your listings and inquiries from a single platform',
                          'Expand your reach into new cities and explore different property categories',
                          'Create a brand that stands out in the real estate marketplace',
                        ].map((item, i) => (
                          <li key={i}><i className="fa fa-solid fa-check" aria-hidden="true"></i><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AiFeaturesGrid
          items={aiFeatures}
          heading="Cutting-Edge AI Features in the Zillow Clone"
          desc="With AI-driven features, you can enhance property discovery, minimize manual tasks, and empower users to make quicker decisions."
          columns={2}
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2><strong><span style={{ color: '#002692' }}>Why Choose CloneScript?</span> Here&rsquo;s the Smarter Option!</strong></h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Zillow Clone" />

        <PdfDownloadCta
          heading="Discover Complete Features of Our Zillow Clone"
          desc="Experience the latest features crafted for scalability, high performance, user engagement, and business success. Download the Complete Product Features Guide."
        />

        <RoleFeatureTabs heading="Complete Zillow Clone Features" roles={roleTabs} />

        <StandOutFeaturesGrid
          heading="Platform-Wide Capabilities"
          subheading="Core systems that keep property discovery, security, and performance running smoothly across every role."
          items={standOutFeatures}
        />

        <TechStackRow items={techStack} heading="Technology Stack" />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Launch Support for Your Zillow Clone</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessSteps steps={launchSteps} />

        <RevenueBenefits
          heading="Revenue Models for Your Zillow Clone"
          subheading="Explore the monetization strategies CloneScript's Zillow Clone supports to help you build a sustainable real estate business."
          items={revenueBenefits}
          image="/wp-content/uploads/2026/04/revenue_benefits.webp"
        />

        <SimpleListSection
          heading="More Ways to Earn"
          intro="Additional revenue models to consider:"
          items={additionalRevenueModels}
        />

        <LiveDemoTabs dashboards={dashboards} />

        <LaunchCta
          heading="Book a Live Product Demonstration"
          desc="Discover how property discovery, listing creation, agent management, seller workflows, administration, monetization, and reporting all come together in real time. Share your business model and target market with the CloneScript team so they can tailor the demonstration to highlight the features that matter most to your project."
          image="/wp-content/uploads/2026/04/zillow-clone-invest.webp"
          imageAlt="Zillow clone property-search experience displayed on a laptop"
        />

        <SimpleListSection
          heading="Zillow Clone Pricing"
          intro="The price for a Zillow Clone can vary based on your chosen license, the modules you need, any custom design requests, mobile app development, third-party integrations, data migration, deployment, and the support plan you select. Your final quote may include:"
          items={packageInclusions}
          columns={3}
        />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Quality and Delivery Commitment</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>
                            At CloneScript, we take pride in our organized approach to development and delivery. This
                            includes everything from confirming requirements and configuring the platform to customizing
                            features, testing thoroughly, preparing for deployment, and ensuring a smooth operational
                            handover.
                          </p>
                          <p style={{ textAlign: 'center', fontSize: 13, color: '#666' }}>
                            Any policies regarding refunds, warranties, delivery guarantees, or support commitments will
                            align with the terms outlined in the signed project agreement.
                          </p>
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
        
        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
