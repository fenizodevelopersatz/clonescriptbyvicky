import { Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import { siteBrand } from '../data/siteBrand.js'
import PolicyList from '../components/shared/PolicyList.jsx'
import '../components/shared/LegalPage.css'

const infoWeCollect = [
  'Contact details you provide, such as your name, email address, and phone number.',
  'Billing information needed to process a purchase — payment card details themselves are handled directly by our payment providers and are not stored on our servers.',
  'Account information, such as your login credentials and purchase history.',
  'Support communications, including messages, tickets, and files you share with our team.',
  'Basic technical data, such as browser type, device type, and pages visited, used to keep the site working correctly.',
]

const howWeUse = [
  'To process your order and deliver the product or license you purchased.',
  'To provide technical support and respond to your requests.',
  'To send important account, order, and product updates.',
  'To improve our products, website, and support experience.',
  'To detect, investigate, and prevent fraud or misuse of our services.',
]

const cookiePoints = [
  'Essential cookies that keep core features like your cart and login session working.',
  'Analytics cookies that help us understand how the site is used, so we can improve it.',
  'Preference cookies that remember choices like currency or display settings.',
]

const sharingPoints = [
  'With payment providers, solely to process your transaction securely.',
  'With hosting and infrastructure providers who help us run the website and deliver products.',
  'When required by law, or to protect the rights, safety, and property of CloneScript and our customers.',
  'We do not sell your personal information to third parties for their own marketing purposes.',
]

const securityPoints = [
  'Access to customer data is restricted to staff who need it to do their job.',
  'We use encryption and secure connections (HTTPS) to protect data in transit.',
  'Payment details are handled by PCI-compliant third-party payment processors, not stored on our own servers.',
]

const rightsPoints = [
  'Request a copy of the personal information we hold about you.',
  'Ask us to correct inaccurate or incomplete information.',
  'Ask us to delete your personal information, subject to any legal or contractual retention requirements.',
  'Opt out of marketing emails at any time using the unsubscribe link, without affecting order or support communications.',
]

export default function PrivacyPolicyPage() {
  usePageStylesheets(pageStylesheets.privacyPolicy)

  useSeo(
    `Privacy Policy | ${siteBrand.name}`,
    `Learn what personal information ${siteBrand.name} collects, how it's used, and the choices you have over your data.`
  )

  return (
    <main className="content legal-page" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section legal-hero">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h1>Privacy Policy</h1>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }} className="legal-updated">Last updated: August 2026</p>
                          <p style={{ textAlign: 'center' }}>
                            This Privacy Policy explains what personal information {siteBrand.name} collects, how we
                            use it, and the choices you have. It applies to our website, digital products, and
                            support services.
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

        <section className="vc_row wpb_row vc_row-fluid legal-section">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <h2 id="information-we-collect">Information We Collect</h2>
                      <PolicyList items={infoWeCollect} />

                      <h2 id="how-we-use-it">How We Use Your Information</h2>
                      <PolicyList items={howWeUse} />

                      <h2 id="cookies">Cookies and Tracking Technologies</h2>
                      <p>
                        We use cookies and similar technologies to keep the site working smoothly and to understand
                        how it's used:
                      </p>
                      <PolicyList items={cookiePoints} />

                      <h2 id="sharing">How We Share Your Information</h2>
                      <PolicyList items={sharingPoints} />

                      <h2 id="security">Data Security</h2>
                      <PolicyList items={securityPoints} />

                      <h2 id="retention">Data Retention</h2>
                      <p>
                        We keep personal information only for as long as needed to provide our products and
                        services, comply with legal obligations, resolve disputes, and enforce our agreements.
                      </p>

                      <h2 id="your-rights">Your Rights and Choices</h2>
                      <PolicyList items={rightsPoints} />

                      <h2 id="childrens-privacy">Children&rsquo;s Privacy</h2>
                      <p>
                        Our products and services are intended for businesses and individuals over the age of 18.
                        We do not knowingly collect personal information from children.
                      </p>

                      <h2 id="changes">Changes to This Policy</h2>
                      <p>
                        We may update this Privacy Policy from time to time. Material changes will be reflected by
                        the &ldquo;last updated&rdquo; date at the top of this page.
                      </p>

                      <p className="legal-contact-note">
                        Questions about this policy? <Link to="/contact-us">Contact us</Link> and our team will be
                        glad to help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
