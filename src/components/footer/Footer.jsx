import ScheduleFormSection from '../home/ScheduleFormSection.jsx'
import FooterSitemap from './FooterSitemap.jsx'
import FooterReviewLogos from './FooterReviewLogos.jsx'
import FooterBottom from './FooterBottom.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="main-footer site-footer footer" id="footer">
      <div className="ld-empty-space" style={{ height: 90 }}>
        <span className="liquid_empty_space_inner"></span>
      </div>
      <section id="schedule_form" className="clonescript-contact-section vc_section section-box-shadow schedule-bg vc_custom_1740027174021 vc_section-has-fill">
        <div className="ld-empty-space" style={{ height: 140 }}>
          <span className="liquid_empty_space_inner"></span>
        </div>
        <ScheduleFormSection />
      </section>
      <FooterSitemap />
      <FooterReviewLogos />
      <FooterBottom />
    </footer>
  )
}
