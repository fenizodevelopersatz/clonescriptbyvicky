import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { useSectionMotion } from '../hooks/useSectionMotion.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import { advancedFeatures, powerfulFeatures, erpPackageFeatures } from '../data/erp/coreModules.js'
import ErpHero from '../components/erp/ErpHero.jsx'
import ErpCtaAndImage from '../components/erp/ErpCtaAndImage.jsx'
import TrustedByClients from '../components/erp/TrustedByClients.jsx'
import BlockquoteTestimonials from '../components/erp/BlockquoteTestimonials.jsx'
import CoreModules from '../components/erp/CoreModules.jsx'
import SimpleIconGrid from '../components/erp/SimpleIconGrid.jsx'
import WhyChooseErp from '../components/erp/WhyChooseErp.jsx'
import PdfDownloadCta from '../components/erp/PdfDownloadCta.jsx'
import DetailedFeatures from '../components/erp/DetailedFeatures.jsx'
import IndustriesCarousel from '../components/erp/IndustriesCarousel.jsx'
import StandOutFeatures from '../components/erp/StandOutFeatures.jsx'
import TechStackSection from '../components/erp/TechStackSection.jsx'
import LiveDemoTabs from '../components/erp/LiveDemoTabs.jsx'
import { LaunchCta, MoneyBackGuarantee } from '../components/erp/MoneyBackAndLaunchCta.jsx'
import DashboardScreenshots from '../components/erp/DashboardScreenshots.jsx'
import PricingPlans from '../components/erp/PricingPlans.jsx'
import FaqSection from '../components/erp/FaqSection.jsx'
import ErpBlogTeaser from '../components/erp/ErpBlogTeaser.jsx'
import SimpleListSection from '../components/shared/SimpleListSection.jsx'
import './ErpSoftwarePage.css'

export default function ErpSoftwarePage() {
  const stylesReady = usePageStylesheets(pageStylesheets.erpSoftware)
  const motionRef = useSectionMotion(stylesReady)

  useSeo(
    'ERP Software | Unified Business Management Solution',
    'Manage finance, inventory, sales, purchases, employees, customers, and store operations with flexible ERP software built for growing businesses.'
  )

  return (
    <main className="content" id="content">
      <div ref={motionRef} className="wpb-content-wrapper erp-software-page erp-motion-page">
        <section className="vc_section erp-hero-section">
          <ErpHero />
          <ErpCtaAndImage />
        </section>

        <TrustedByClients />
        <BlockquoteTestimonials />

        <CoreModules />

        <section className="vc_section erp-capabilities-section">
          <SimpleIconGrid
            items={advancedFeatures}
            title="Advanced ERP SaaS Features for Expanding Businesses"
            desc="Access practical functionality created to automate repetitive work, simplify internal coordination, and support business expansion."
            columns={3}
            variant="advanced"
          />
          <SimpleIconGrid
            items={powerfulFeatures}
            title="Practical ERP Features for Modern Commerce"
            desc="Support everyday customer and employee activities with secure, accessible, and user-friendly functionality."
            columns={3}
            variant="powerful"
          />
        </section>

        <WhyChooseErp />
        <DetailedFeatures />
        <PdfDownloadCta />

        <IndustriesCarousel />
        <StandOutFeatures />
        <TechStackSection />

        <LiveDemoTabs />
        <LaunchCta />
        <DashboardScreenshots />

        <SimpleListSection
          heading="Select the Right ERP Package"
          intro="Choose an ERP plan according to your organization's departments, locations, user count, mobile-app requirements, custom functionality, and technical-support needs. A business package may include:"
          items={erpPackageFeatures}
          columns={2}
        />

        <PricingPlans />
        <MoneyBackGuarantee />
        <FaqSection />
        <ErpBlogTeaser />
      </div>
    </main>
  )
}
