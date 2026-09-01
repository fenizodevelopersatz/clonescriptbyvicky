import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { comparisonLabels } from '../../data/comparisonLabels.js'
import {
  coreModules, standardFeatures, addOnFeatures, techStack, launchSteps,
  pricingPlans, comparisonOurs, comparisonOthers, faqs, customerReviews,
  whyChoosePoints, customerAppFeatures, driverAppFeatures, adminAppFeatures, appModels,
  techArchitectureRequirements, additionalRevenueOpportunities, packageInclusions,
  applicationScreens, serverRequirements,
} from '../../data/logistics/logisticsData.js'

import LogisticsHero from '../../components/logistics/LogisticsHero.jsx'
import './LogisticsClonePage.css'
import WhatIsLogistics from '../../components/logistics/WhatIsLogistics.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import WhyChooseChecklist from '../../components/shared/WhyChooseChecklist.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import SimpleListSection from '../../components/shared/SimpleListSection.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import ProcessSteps from '../../components/shared/ProcessSteps.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

const revenueBenefits = [
  { icon: 'fa fa-solid fa-percent', title: 'Commission on Completed Deliveries', desc: 'Collect a fixed fee or percentage from every shipment successfully processed through the platform.' },
  { icon: 'fa fa-solid fa-user-plus', title: 'Customer Referral Rewards', desc: 'Encourage existing customers to introduce new users by providing eligible discounts or wallet credits.' },
  { icon: 'fa fa-solid fa-crown', title: 'Premium Subscription Plans', desc: 'Offer paid packages that provide higher booking limits, priority services, discounts, or advanced functionality.' },
  { icon: 'fa fa-solid fa-bolt', title: 'Demand-Based Fare Adjustments', desc: 'Apply additional pricing during busy periods, limited driver availability, severe weather, or high-demand conditions.' },
]

export default function LogisticsClonePage() {
  usePageStylesheets(pageStylesheets.logisticsClone)

  useSeo(
    'Logistics App | On-Demand Delivery & Transport',
    'Launch a customizable logistics app with vehicle booking, smart dispatch, live GPS tracking, driver management, and digital payments.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section logistics-hero-section">
          <LogisticsHero />
        </section>

        <section className="vc_section vc_section-has-fill">
          <TrustedByBadges heading="by Logistics & Courier Founders" />
        </section>

        <section className="vc_section">
          <WhatIsLogistics />
        </section>

        <WhyChooseChecklist
          heading="Why Choose Our"
          accentWord="Logistics Delivery Solution?"
          desc="Our logistics platform combines booking, dispatch, tracking, payments, fleet management, and reporting in one integrated system. It is designed to support reliable performance as the number of customers, drivers, vehicles, and service areas increases."
          points={whyChoosePoints}
          image="/wp-content/uploads/2026/08/logistics-why-choose-us.webp"
          imageAlt="Courier handing a wrapped delivery package to a customer at their doorstep"
        />

        <StandOutFeaturesGrid
          heading="Core Modules of the Logistics Service App"
          subheading="Everything a delivery or courier business needs to run day-to-day operations, in one connected platform."
          items={coreModules}
        />

        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Logistics App" />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Powerful Features for Customers, Drivers, and Administrators</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The logistics solution provides dedicated functionality for every participant involved in the delivery process.</p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StandOutFeaturesGrid
          heading="Customer Application Features"
          subheading="The customer application makes transport booking, payment, and shipment tracking simple and convenient."
          items={customerAppFeatures}
        />

        <StandOutFeaturesGrid
          heading="Driver and Delivery Partner Features"
          subheading="The driver application helps transport providers receive suitable bookings and manage daily delivery activity."
          items={driverAppFeatures}
        />

        <StandOutFeaturesGrid
          heading="Logistics Administrator Features"
          subheading="The administration dashboard gives the platform owner complete visibility across customers, drivers, vehicles, bookings, payments, and support activities."
          items={adminAppFeatures}
        />

        <PdfDownloadCta
          heading="Download the Logistics App Feature Guide"
          desc="Review the complete feature set before planning your logistics platform. The guide can cover customer bookings, driver workflows, vehicle management, dispatching, live tracking, payments, revenue models, and administrative functionality."
        />

        <SimpleIconGrid
          items={standardFeatures}
          title="Standard Features of the Logistics Service Platform"
          desc="The system includes essential tools that help businesses manage pricing, service areas, vehicle movement, and operational communication."
          columns={3}
          iconColor="#002692"
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Smart Logistics and Delivery Ecosystem</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>
                            <strong>Manage Complete Transport Operations Digitally</strong> — the integrated logistics
                            platform brings transport booking, fleet coordination, dispatching, live tracking, pricing,
                            payments, and driver administration together.
                          </p>
                          <p style={{ textAlign: 'center' }}>
                            Customers can book parcel or cargo transportation, drivers can manage assigned work, and
                            operations teams can oversee every active journey through a centralized interface. The
                            platform can help startups and established companies reduce manual coordination, improve
                            shipment visibility, and manage a growing delivery network.
                          </p>
                        </div>
                      </header>
                      <a href="/schedule-free-demo" className="btn btn-solid btn-sm round btn-bordered border-thin">
                        <span>
                          <span className="btn-txt">Schedule Live Demo</span>
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

        <SimpleIconGrid
          items={addOnFeatures}
          title="Additional Features for Transport and Courier Businesses"
          desc="The platform can be extended with optional capabilities according to your target market and operating model."
          columns={5}
          iconColor="#002692"
        />

        <TechStackRow items={techStack} />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Hassle-Free Launch Support</h2>
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
          heading="Revenue Opportunities for Logistics Platform Owners"
          subheading="The logistics system can support several monetization models for building a sustainable transport business."
          items={revenueBenefits}
          image="/wp-content/uploads/2026/04/revenue_benefits.webp"
        />

        <SimpleListSection
          heading="Other Possible Revenue Models"
          intro="Other possible revenue models include:"
          items={additionalRevenueOpportunities}
          columns={3}
        />

        <SimpleListSection
          heading="Technology Used for Logistics App Development"
          intro="The logistics platform can be developed using modern web, mobile, backend, database, mapping, payment, cloud, and notification technologies. The technology architecture should support:"
          items={techArchitectureRequirements}
        />

        <StandOutFeaturesGrid
          heading="Logistics Application Models for Delivery Businesses"
          subheading="The platform can be configured for different transportation and logistics business concepts."
          items={appModels}
        />

        <LaunchCta
          heading="Launch Your On-Demand Logistics Business"
          desc="Create a digital delivery service that helps customers book transportation easily, gives drivers clearer work information, and provides administrators with complete operational oversight. Start with your essential service categories and expand into new cities, vehicles, delivery types, and business partnerships as your logistics network grows."
          image="/wp-content/uploads/2026/08/logistics-launch-boxes.webp"
          imageAlt="Packed and labeled shipment boxes staged with a hand truck, ready to ship"
        />

        <SimpleListSection
          heading="Choose a Logistics App Package"
          intro="Select a development package according to your required website, customer application, driver application, admin dashboard, integrations, customization, and technical support. A logistics platform package may include:"
          items={packageInclusions}
          columns={3}
        />

        <PricingPlans plans={pricingPlans} />

        <SimpleListSection
          heading="Logistics and Transport Application Screens"
          intro="Preview the essential platform interfaces, including:"
          items={applicationScreens}
          columns={3}
        />

        <MoneyBackGuarantee />

        <FaqAccordion
          heading="Logistics Service App Frequently Asked Questions"
          subheading="Find Answers to Common Logistics Platform Questions"
          faqs={faqs}
        />

        <SimpleListSection
          heading="Logistics App Server Requirements"
          intro={`${serverRequirements.intro} Final server capacity should be selected according to:`}
          items={serverRequirements.configFactors}
        />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
