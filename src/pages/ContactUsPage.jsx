import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import ContactHero from '../components/contact/ContactHero.jsx'
import ContactTabs from '../components/contact/ContactTabs.jsx'
import GetInTouch from '../components/contact/GetInTouch.jsx'
import './ContactUsPage.css'

export default function ContactUsPage() {
  usePageStylesheets(pageStylesheets.contactUs)

  useSeo(
    'Contact CloneScript | Get a Free Project Quote',
    'Get in touch with CloneScript to discuss custom web and mobile app development. Request a free quote and start your project today.'
  )

  return (
    <main className="content clonescript-contact-page" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <ContactHero />
          <ContactTabs />
          <GetInTouch />
        </section>
      </div>
    </main>
  )
}
