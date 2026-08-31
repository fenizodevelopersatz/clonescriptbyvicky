import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { useSectionMotion } from '../../hooks/useSectionMotion.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { siteContact } from '../../data/siteContact.js'
import { comparisonLabels } from '../../data/comparisonLabels.js'
import { placeholderTestimonials } from '../../data/placeholderTestimonials.js'
import {
  aiFeatures, comparisonOurs, comparisonOthers, roleTabs,
  additionalCapabilities, techStack, standOutFeatures, launchSteps, revenueBenefits,
  additionalRevenueModels, packageInclusions, pricingPlans, customerReviews,
} from '../../data/vinted/vintedData.js'

import VintedHero from '../../components/vinted/VintedHero.jsx'
import VintedReviewLogos from '../../components/vinted/VintedReviewLogos.jsx'
import BlockquoteTestimonials from '../../components/shared/BlockquoteTestimonials.jsx'
import WhatIsVintedAndVideo from '../../components/vinted/WhatIsVintedAndVideo.jsx'
import WhyChooseChecklist from '../../components/shared/WhyChooseChecklist.jsx'
import VintedIntroBanner from '../../components/vinted/VintedIntroBanner.jsx'
import WhyInvestVinted from '../../components/vinted/WhyInvestVinted.jsx'
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
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import FaqServerTabs from '../../components/vinted/FaqServerTabs.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'
import './VintedClonePage.css'

const dashboards = [
  { label: 'User/Buyer Dashboard', email: 'buyer@email.com', password: '12345678', url: siteContact.cloneDemoUrl },
  { label: 'Seller Dashboard', email: 'seller@email.com', password: '12345678', url: siteContact.cloneDemoUrl },
  { label: 'Administrator Dashboard', email: 'admin@gmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
]

const whyChoosePoints = [
  ['', 'Business-Focused Customization', ': tailor categories, listing fields, seller rules, commissions, subscription plans, currencies, languages, and delivery methods.'],
  ['', 'White-Label Branding', ': use your own business name, logo, colors, typography, banners, and email templates.'],
  ['', 'Scalable Architecture', ': begin locally and expand into new cities, countries, categories, or mobile apps.'],
  ['', 'Source-Code Access', ': granted based on your chosen license and agreement.'],
  ['', 'Deployment Assistance', ': help setting up the approved package in your hosting environment.'],
  ['', 'Post-Launch Support', ': configuration assistance, troubleshooting, maintenance, and future enhancements.'],
]

export default function VintedClonePage() {
  const stylesReady = usePageStylesheets(pageStylesheets.vintedClone)
  const motionRef = useSectionMotion(stylesReady)

  useSeo(
    'Vinted Clone Script | Fashion Resale Marketplace',
    'Launch a fashion resale marketplace with CloneScript’s Vinted Clone — secure payments, smart search, seller tools, AI features, and admin control.',
  )

  return (
    <main className="content" id="content">
      <div ref={motionRef} className="wpb-content-wrapper vinted-motion-page">
        <section className="vc_section">
          <VintedHero />
        </section>

        <section className="vc_section vc_custom_1776320292174 vc_section-has-fill">
          <VintedReviewLogos />
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
          <BlockquoteTestimonials items={placeholderTestimonials} visibleCount={2} />
        </section>

        <WhatIsVintedAndVideo />

        <section className="vinted-overview-group vc_section">
          <WhyChooseChecklist
            heading="Why Choose"
            accentWord="CloneScript?"
            desc="CloneScript offers a versatile marketplace foundation that you can tailor to fit your audience, categories, operating model, preferred revenue streams, and target locations."
            points={whyChoosePoints}
            image="/wp-content/uploads/2025/02/why-choose-us-vinted-clone.png"
            imageAlt="CloneScript team member"
          />

          <VintedIntroBanner />
          <WhyInvestVinted />
          <AiFeaturesGrid
            items={aiFeatures}
            heading="AI Features in the Vinted Clone"
            desc="AI-driven features can enhance product discovery, minimize manual tasks, and elevate the quality of marketplace listings."
            columns={2}
          />
          <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Vinted Clone" />
        </section>
        <PdfDownloadCta
          heading="Explore the Complete Vinted Clone Features"
          desc="Dive into the features crafted to enhance product discovery, ensure secure transactions, streamline seller operations, boost user engagement, and foster marketplace growth."
          image="/wp-content/uploads/2026/04/vinted-document.webp"
          imageAlt="Vinted clone features document"
        />

        <RoleFeatureTabs heading="Essential Features of the Vinted Clone" roles={roleTabs} />

        <StandOutFeaturesGrid
          heading="Additional Fashion Marketplace Capabilities"
          subheading="Extend the marketplace with capabilities tailored to resale, fashion, and lifestyle categories."
          items={additionalCapabilities}
        />

        <TechStackRow items={techStack} heading="Technology Used for the Vinted Clone" />

        <section className="vinted-live-demo-cta vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row vinted-live-demo-card orange_border">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="ld-fancy-heading">
                        <h2 className="lqd-highlight-underline lqd-highlight-grow-left"><span className="ld-fh-txt"> Book a Live Demo</span></h2>
                      </div>
                      <header className="fancy-title">
                        <h2>Experience the Vinted Clone in Real Time</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'left' }}>
                            <span style={{ fontWeight: 400 }}>Schedule a personalized demonstration to dive into product listings, search features, wishlists, private chat, offers, payments, shipping, seller operations, administration, and how to monetize your marketplace. Let us know your target audience, product categories, preferred locations, and revenue model so the CloneScript team can tailor the platform walkthrough just for you.</span>
                          </p>
                        </div>
                      </header>
                      <a href="#schedule_form" className="btn btn-solid btn-sm round btn-bordered border-thin btn-gradient">
                        <span>
                          <span className="btn-gradient-bg"></span>
                          <span className="btn-txt">Schedule Your Vinted Clone Demo</span>
                          <span className="btn-icon"><i className="fa fa-solid fa-calendar"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="vinted-live-demo-photo">
                        <img
                          src="/wp-content/uploads/2025/02/vinted-live-demo-host.jpg"
                          width="494"
                          height="455"
                          alt="CloneScript team member ready for your live demo"
                          loading="eager"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StandOutFeaturesGrid
          heading="Why Does Our Vinted Clone Stand Out?"
          subheading="A powerful marketplace engine that manages everything from buyers and sellers to listings, conversations, orders, payments, shipping, disputes, and revenue."
          items={standOutFeatures}
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Launch Support for Your Marketplace</h2>
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
          heading="Revenue Models for the Vinted Clone"
          items={revenueBenefits}
          image="/wp-content/uploads/2026/04/revenue_benefits.webp"
          subheading="Explore the earning models CloneScript's Vinted Clone supports to help build a sustainable resale business."
        />

        <SimpleListSection
          heading="More Ways to Earn"
          intro="Additional revenue models to consider:"
          items={additionalRevenueModels}
        />

        <LiveDemoTabs dashboards={dashboards} />

        <SimpleListSection
          heading="Vinted Clone Pricing"
          intro="When it comes to the cost of a Vinted Clone, several factors come into play, including the type of license you choose, the features you need, any customization, mobile apps, integrations, deployment, and the support plan you opt for. Your quote may cover:"
          items={packageInclusions}
          columns={3}
        />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
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
                            At CloneScript, we pride ourselves on a well-organized delivery process that includes
                            confirming requirements, configuring the marketplace, customizing features, testing,
                            preparing for deployment, and finally, handing everything over to you.
                          </p>
                          <p style={{ textAlign: 'center', fontSize: 13, color: '#666' }}>
                            Any guarantees regarding refunds, warranties, delivery times, unlimited updates, or support
                            should only be shared when they align with CloneScript&rsquo;s approved commercial terms and
                            the signed agreement.
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

        <LaunchCta
          heading="Create Your Own Vinted Clone with CloneScript"
          desc="Build a platform where users can find stylish, budget-friendly fashion, list their gently used items, chat securely, make transactions, and foster a trustworthy resale community. Share details about your target audience, the product categories you want, the features you need, any integrations you have in mind, your preferred revenue model, and your anticipated launch timeline with CloneScript."
        />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                        <strong>Trademark Disclaimer:</strong> Vinted is a trademark owned by its respective entity.
                        CloneScript is not associated with, endorsed by, or sponsored by Vinted. The term &ldquo;Vinted
                        Clone&rdquo; is used to describe a customizable solution for a fashion resale marketplace that
                        offers similar functionalities. Please refrain from copying Vinted&rsquo;s branding, copyrighted
                        materials, proprietary content, or protected interface elements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
