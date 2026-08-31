import { Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import { siteBrand } from '../data/siteBrand.js'
import PolicyList from '../components/shared/PolicyList.jsx'
import '../components/shared/LegalPage.css'

const eligiblePoints = [
  'Your product was not delivered within 7 days of purchase, and the non-delivery was reported to our billing team within that window.',
  'A verified technical fault on our end prevented delivery, and it was reported to our support team within 3 days of purchase.',
]

const notEligiblePoints = [
  'You changed your mind after purchase.',
  'The product did not turn out to fit your specific business idea or use case.',
  'You modified the core script or theme files after delivery.',
  'An issue was found after purchase but was not reported through our support ticket system within a reasonable time.',
  'Your business plans changed, or you no longer need the product.',
  'You purchased the product by mistake.',
  'The product is missing a feature that was not listed in its original description.',
  'You purchased the product during a discount or promotional sale.',
  'The product has already been installed, customized, or modified.',
  'The issue was caused by your own server or hosting environment rather than the product itself.',
]

const malfunctionPoints = [
  "If a product isn't working as advertised, we want to help you fix it — open a support ticket describing the issue and give our team a reasonable amount of time to resolve it before requesting a refund.",
  'Refunds are not issued in place of support: if a fix is available, we will provide it rather than process a refund.',
]

const invalidRequestPoints = [
  'Simply deciding you no longer want to use a product, or that you prefer a different script or theme, does not qualify for a refund.',
  "We're committed to helping you resolve genuine issues with a product — we do expect customers to review a product's description and live demo carefully before purchasing.",
]

const compatibilityPoints = [
  'We do not guarantee compatibility with third-party plugins, extensions, modules, or custom code that is not part of the original product.',
  'Refund or exchange requests based solely on incompatibility with unsupported third-party software are not honored.',
]

export default function RefundPolicyPage() {
  usePageStylesheets(pageStylesheets.refundPolicy)

  useSeo(
    `Refund and Returns Policy | ${siteBrand.name}`,
    `Learn when a purchase from ${siteBrand.name} qualifies for a refund, how our support process works, and what our refund policy does not cover.`
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
                        <h1>Refund and Returns Policy</h1>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }} className="legal-updated">Last updated: August 2026</p>
                          <p style={{ textAlign: 'center' }}>
                            Our refund policy is straightforward: because our products are digital downloads, a
                            purchase gives you access to the product along with our ongoing support and updates. We
                            stand behind the quality of what we build, and every product listing includes a live
                            demo so you can evaluate it before you buy.
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
                      <p>
                        We recommend testing the live demo of any product before purchasing to confirm it fits your
                        needs — once a product is delivered, refunds are only available in the specific situations
                        outlined below.
                      </p>

                      <h2 id="eligible">When You Qualify for a Refund</h2>
                      <PolicyList items={eligiblePoints} />

                      <h2 id="not-eligible">When You Don&rsquo;t Qualify for a Refund</h2>
                      <PolicyList items={notEligiblePoints} />

                      <h2 id="malfunctions">Malfunctions and Bugs</h2>
                      <PolicyList items={malfunctionPoints} />

                      <h2 id="invalid-requests">Invalid Refund Requests</h2>
                      <PolicyList items={invalidRequestPoints} />

                      <h2 id="third-party-compatibility">Third-Party Compatibility</h2>
                      <PolicyList items={compatibilityPoints} />

                      <h2 id="how-to-request">How to Request a Refund</h2>
                      <p>
                        If you believe your purchase qualifies under one of the conditions above, contact our
                        support team with your order details and a description of the issue. We aim to review every
                        request promptly and fairly.
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
