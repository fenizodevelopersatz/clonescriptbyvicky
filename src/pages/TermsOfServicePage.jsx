import { Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import { siteBrand } from '../data/siteBrand.js'
import PolicyList from '../components/shared/PolicyList.jsx'
import '../components/shared/LegalPage.css'

const overviewPoints = [
  'By clicking "I Agree" or completing a purchase, you confirm that you have read, understood, and accepted these Terms of Service in full.',
  `All digital products purchased from ${siteBrand.name}, including source code, design assets, and documentation, are protected by applicable intellectual property law.`,
  `${siteBrand.name} may update, amend, or replace these terms at any time; continued use of our products after an update constitutes acceptance of the revised terms.`,
  'You are responsible for reviewing these terms periodically to stay informed of any changes that may affect your purchase or usage rights.',
  "Our products are licensed for the use case described in each product's listing; commercial resale or redistribution beyond the stated license is not permitted.",
  'Except where explicitly stated, we are not responsible for third-party services, plugins, or integrations used alongside our products.',
]

const weMay = [
  'Modify, suspend, or discontinue any feature, page, or product listing at any time without prior notice.',
  'Restrict or suspend access for any customer found to be in violation of these terms or applicable law.',
  'Update this agreement at our discretion; material changes will be reflected by the "last updated" date on this page.',
]

const weCommitTo = [
  'Deliver purchased products promptly after your license and payment are confirmed.',
  "Maintain the quality and functionality described in each product's listing.",
  'Provide technical support for issues directly related to the product as sold.',
  'Release reasonable bug fixes and minor updates during your active support period.',
  'Respect all applicable intellectual property, patent, and trademark rights in the software and assets we provide.',
]

const customerRights = [
  "Purchase and use any product listed on this site in accordance with its stated license.",
  'Request clarification or support if a delivered product does not match its published description.',
  'Request a fix if a feature outlined in the product listing is missing at delivery.',
  'Receive support in line with the plan or package you purchased.',
]

const customerCommitments = [
  'Not resell, sublicense, or redistribute our products outside the terms of your purchased license.',
  'Review and confirm product details at the time of purchase.',
  'Keep your account and billing details accurate and up to date.',
  'Use the product in a manner consistent with this agreement and applicable law.',
]

const pricingPoints = [
  'All prices are listed in the currency shown at checkout and may be updated at any time before you complete a purchase.',
  'Payments are processed through supported third-party payment providers; we do not store your full card details.',
  'An order is considered confirmed once payment has been successfully processed and a confirmation is issued.',
  'Any changes requested to an order, such as license type or add-ons, must be submitted before the product is delivered.',
  "Charges will appear on your statement under our name or our registered payment processor's name.",
  'If you believe you were charged in error, contact our support team promptly so we can review and resolve it.',
]

const deliveryPoints = [
  'Delivery begins once your order and payment have been confirmed.',
  'Digital products are delivered via download link or email, depending on the product and package purchased.',
  'Please review your delivered files promptly and report any missing or damaged files so we can correct them.',
  'Ownership of the licensed source code transfers to you upon successful delivery, subject to the terms of your specific license.',
  "Source-code access and licensing terms vary by package — refer to the plan you purchased for specifics.",
]

const liabilityPoints = [
  'Our products are provided on an "as available" basis. While we work to keep listings accurate, we do not guarantee that every product is entirely free of defects.',
  `${siteBrand.name} is not responsible for issues arising from third-party integrations, custom modifications, or unsupported hosting environments.`,
  'Our liability for any claim relating to a purchase is limited to the amount paid for that specific product.',
  'You agree to indemnify us against claims arising from your misuse of a product or violation of these terms.',
]

const privacyPoints = [
  'We collect only the information needed to process your order, deliver support, and improve our products.',
  'Your personal and payment information is handled in line with our data-protection practices and is never sold to third parties.',
  'You may request details of the information we hold about you, or ask us to correct or delete it, by contacting our support team.',
]

const disputePoints = [
  `These terms are governed by the laws of the jurisdiction in which ${siteBrand.name} is registered.`,
  'We encourage customers to reach out to our support team first so most concerns can be resolved directly.',
  'Any dispute that cannot be resolved directly will be subject to the exclusive jurisdiction of the courts in our registered location.',
]

const miscPoints = [
  'By using this site or purchasing a product, you confirm that you have read, understood, and agreed to these terms.',
  'All notices, consents, and other communications under this agreement will be sent via email.',
  'If any provision of these terms is found unenforceable, the remaining provisions continue in full effect.',
]

export default function TermsOfServicePage() {
  usePageStylesheets(pageStylesheets.termsOfService)

  useSeo(
    `Terms of Service | ${siteBrand.name}`,
    `Read the Terms of Service governing purchases, licensing, delivery, and support for ${siteBrand.name}'s web and mobile app products.`
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
                        <h1>Terms of Service</h1>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }} className="legal-updated">Last updated: August 2026</p>
                          <p style={{ textAlign: 'center' }}>
                            These Terms of Service govern your access to and use of {siteBrand.name}&rsquo;s website,
                            digital products, and support services. By purchasing, downloading, or using any{' '}
                            {siteBrand.name} product, you agree to be bound by the terms described on this page.
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
                      <PolicyList items={overviewPoints} />

                      <h2 id="rights-and-obligations">{siteBrand.name}&rsquo;s Rights and Obligations</h2>
                      <h3>We May</h3>
                      <PolicyList items={weMay} />
                      <h3>We Commit To</h3>
                      <PolicyList items={weCommitTo} />

                      <h2 id="customer-rights">Customer&rsquo;s Rights and Obligations</h2>
                      <h3>You Have the Right To</h3>
                      <PolicyList items={customerRights} />
                      <h3>You Commit To</h3>
                      <PolicyList items={customerCommitments} />

                      <h2 id="pricing-and-payment">Pricing, Orders and Payment</h2>
                      <PolicyList items={pricingPoints} />

                      <h2 id="delivery-and-ownership">Delivery and Transfer of Ownership</h2>
                      <PolicyList items={deliveryPoints} />

                      <h2 id="liability-and-indemnity">Liability and Indemnity</h2>
                      <PolicyList items={liabilityPoints} />

                      <h2 id="privacy">Privacy and Personal Data</h2>
                      <PolicyList items={privacyPoints} />

                      <h2 id="dispute-resolution">Dispute Resolution and Applicable Law</h2>
                      <PolicyList items={disputePoints} />

                      <h2 id="miscellaneous">Miscellaneous Provisions</h2>
                      <PolicyList items={miscPoints} />

                      <p className="legal-contact-note">
                        Questions about these terms? <Link to="/contact-us">Contact us</Link> and our team will be
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
