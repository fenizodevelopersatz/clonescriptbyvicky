import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { standardFeatures, revenueBenefits, pricingPlans, customerReviews } from '../../data/fiverr/fiverrData.js'

import FiverrHero from '../../components/fiverr/FiverrHero.jsx'
import TrustedByBuyers from '../../components/fiverr/TrustedByBuyers.jsx'
import WhatIsFiverr from '../../components/fiverr/WhatIsFiverr.jsx'
import HowItWorks from '../../components/fiverr/HowItWorks.jsx'
import WhyChooseUs from '../../components/fiverr/WhyChooseUs.jsx'
import FounderCta from '../../components/fiverr/FounderCta.jsx'
import MainFeaturesRoles from '../../components/fiverr/MainFeaturesRoles.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import AddOnFeaturesFlip from '../../components/fiverr/AddOnFeaturesFlip.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import TechWeUsed from '../../components/fiverr/TechWeUsed.jsx'
import ScheduleServiceCta from '../../components/fiverr/ScheduleServiceCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MobileScreens from '../../components/fiverr/MobileScreens.jsx'
import FaqServerTabs from '../../components/fiverr/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

export default function FiverrClonePage() {
  usePageStylesheets(pageStylesheets.fiverrClone)

  useSeo(
    'Fiverr Clone | Freelance Marketplace by CloneScript',
    'Launch a customizable Fiverr Clone with gigs, projects, freelancer profiles, secure payments, messaging, reviews, commissions, withdrawals, and admin control.',
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_section-has-fill">
          <FiverrHero />
        </section>

        <section className="vc_section">
          <TrustedByBuyers />
        </section>

        <section className="vc_section">
          <WhatIsFiverr />
        </section>

        <section className="vc_section">
          <HowItWorks />
        </section>

        <section className="vc_section">
          <WhyChooseUs />
        </section>

        <section className="vc_section">
          <FounderCta />
        </section>

        <section className="vc_section">
          <MainFeaturesRoles />
        </section>

        <section className="vc_section vc_section-has-fill">
          <PdfDownloadCta
            heading="Download the Fiverr Clone Feature Guide"
            desc="Review the complete functionality available for clients, freelancers, administrators, service listings, projects, payments, communication, reviews, commissions, and withdrawals. The feature guide can help identify which standard functions meet your requirements and which areas may need additional customization."
          />
        </section>

        <section className="vc_section vc_section-has-fill">
          <StandOutFeaturesGrid
            heading="Standard Features of the Fiverr Clone"
            subheading="The platform includes essential tools designed to simplify service discovery, project management, communication, transactions, and marketplace administration."
            items={standardFeatures}
            color="#aa67ee"
          />
        </section>

        <section className="vc_section vc_section-has-fill">
          <AddOnFeaturesFlip />
        </section>

        <section className="vc_section vc_section-has-fill">
          <RevenueBenefits
            heading="Fiverr Clone Monetization and Revenue Streams"
            subheading="The freelance marketplace can support different income models for building sustainable platform revenue."
            items={revenueBenefits}
            image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
            color="#aa67ee"
          />
        </section>

        <section className="vc_section vc_section-has-fill">
          <TechWeUsed />
        </section>

        <section className="vc_section">
          <ScheduleServiceCta />
        </section>

        <section className="vc_section">
          <PricingPlans plans={pricingPlans} heading="Choose a Suitable Fiverr Clone Plan" />
        </section>

        <section className="vc_section z-index-plus vc_section-has-fill">
          <MobileScreens />
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
                        <strong>Trademark Disclaimer:</strong> &ldquo;Fiverr&rdquo; is a trademark owned by its
                        respective proprietor. The product name is used only to describe the general type of
                        freelance marketplace functionality offered. This independently developed software is not
                        affiliated with, sponsored by, or endorsed by Fiverr or its trademark owner.
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
