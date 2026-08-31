import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import Hero from '../components/home/Hero.jsx'
import OverviewVideo from '../components/home/OverviewVideo.jsx'
import StarRatingBanner from '../components/home/StarRatingBanner.jsx'
import TrustedByLogos from '../components/home/TrustedByLogos.jsx'
import WhyWeStandOut from '../components/home/WhyWeStandOut.jsx'
import AchievementBanner from '../components/home/AchievementBanner.jsx'
import OurServices from '../components/home/OurServices.jsx'
import TeamToolsBanner from '../components/home/TeamToolsBanner.jsx'
import ProductCategoryCards from '../components/home/ProductCategoryCards.jsx'
import ViewAllProductsBanner from '../components/home/ViewAllProductsBanner.jsx'
import TechStackBanner from '../components/home/TechStackBanner.jsx'
import ProcessSnapshot from '../components/home/ProcessSnapshot.jsx'
import DevProcess from '../components/home/DevProcess.jsx'
import ConnectWithUs from '../components/home/ConnectWithUs.jsx'
import './HomePage.css'

export default function HomePage() {
  usePageStylesheets(pageStylesheets.home)

  useSeo(
    'Custom Web & Mobile App Development Solutions | Clone Script',
    'We deliver custom web and mobile app development solutions with modern design, advanced technology, scalable performance, and secure business solutions.'
  )

  return (
    <main className="content clonescript-homepage" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <Hero />
        </section>
        <section className="clonescript-milestones-section clonescript-milestones-section--after-hero vc_section">
          <AchievementBanner />
        </section>
        <section className="clonescript-intro-section vc_section">
          <StarRatingBanner />
          <TrustedByLogos />
        </section>
        <OverviewVideo />
        <WhyWeStandOut />
        <section className="clonescript-showcase-section vc_section vc_custom_1745486374572 vc_section-has-fill">
          <TeamToolsBanner />
        </section>
        <OurServices />
        <section className="clonescript-solutions-section vc_section">
          <ProductCategoryCards />
          <ViewAllProductsBanner />
          <TechStackBanner />
          <ProcessSnapshot />
          <DevProcess />
        </section>
        <section className="clonescript-connect-section vc_section vc_custom_1745486388430 vc_section-has-fill">
          <ConnectWithUs />
        </section>
      </div>
    </main>
  )
}
