import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  whyChooseUsPoints, aiFeatures, comparisonLabels, comparisonOurs, comparisonOthers,
  exclusiveBenefits, revenueBenefits, pricingPlans, screenshots, customerReviews,
} from '../../data/airbnb/airbnbData.js'

import AirbnbHero from '../../components/airbnb/AirbnbHero.jsx'
import WhyChooseChecklist from '../../components/shared/WhyChooseChecklist.jsx'
import AiFeaturesGrid from '../../components/shared/AiFeaturesGrid.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import AppDownloadBanner from '../../components/airbnb/AppDownloadBanner.jsx'
import BookDemoCta from '../../components/airbnb/BookDemoCta.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import AirbnbLiveDemo from '../../components/airbnb/AirbnbLiveDemo.jsx'
import AirbnbTestimonials from '../../components/airbnb/AirbnbTestimonials.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/airbnb/FaqServerTabs.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'
import './AirbnbClonePage.css'

export default function AirbnbClonePage() {
  usePageStylesheets(pageStylesheets.airbnbClone)

  useSeo(
    'Airbnb Clone Script | Vacation Rental Platform Solution',
    'Launch a customizable Airbnb Clone Script with property listings, guest bookings, host management, AI pricing, secure payments, and an admin dashboard.'
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section airbnb-hero-section">
          <AirbnbHero />
        </section>

        <section className="vc_section">
          <WhyChooseChecklist
            heading="Why Choose CloneScript for Your"
            accentWord="Airbnb Clone Script?"
            desc="Get a customizable vacation-rental solution designed to help startups and established businesses launch efficiently. The platform offers flexible branding, scalable architecture, mobile accessibility, installation assistance, and complete operational control."
            points={whyChooseUsPoints}
            image="/wp-content/driver.jpeg"
            imageAlt="CloneScript rental platform delivery achievements"
            color="#fe5337"
            headingIcon="/wp-content/uploads/2026/01/why-choose-star.webp"
          />

          <AiFeaturesGrid
            items={aiFeatures}
            heading="Advanced AI Features in the Airbnb Clone Script"
            desc="AI-powered functionality can simplify listing creation, improve pricing decisions, support customers, and personalize property discovery."
            columns={4}
          />

          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-7 vc_col-xs-offset-1 vc_col-xs-10 text-left">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <h2>
                          <strong><span style={{ color: '#fe5337' }}>A Smarter Choice</span> for Building a Vacation Rental Platform</strong>
                        </h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'left' }}>The Airbnb Clone Script combines ready-made marketplace functionality with flexible customization and intelligent automation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Airbnb Clone" />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-7 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <h2>
                          <span style={{ color: '#fe5337' }}>Multiple Secure Payment Options</span>
                        </h2>
                        <p><span style={{ fontWeight: 400 }}>Provide guests and hosts with reliable transaction options for property reservations, service charges, refunds, and payouts. Supported integrations may include:</span></p>
                        <ul className="custom_list_icon">
                          <li><span style={{ fontWeight: 400 }}>Credit and debit cards</span></li>
                          <li><span style={{ fontWeight: 400 }}>Digital wallets</span></li>
                          <li><span style={{ fontWeight: 400 }}>Regional payment gateways</span></li>
                          <li><span style={{ fontWeight: 400 }}>Bank-based payments</span></li>
                          <li><span style={{ fontWeight: 400 }}>Multi-currency transactions</span></li>
                          <li><span style={{ fontWeight: 400 }}>Host payout methods</span></li>
                          <li><span style={{ fontWeight: 400 }}>Secure refund processing</span></li>
                        </ul>
                        <p><span style={{ fontWeight: 400 }}>Payment options should be selected according to the target country, currency, customer preferences, and business requirements.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2026/01/payment.webp" width="300" height="263" className="vc_single_image-img attachment-medium" alt="payment" title="payment" loading="lazy" />
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="vc_section">
          <AppDownloadBanner />
          <BookDemoCta />
        </section>

        <section className="vc_section">
          <AiFeaturesGrid items={exclusiveBenefits} heading="Exclusive Benefits of the Airbnb Clone Script" columns={3} />

          <RevenueBenefits
            heading="Revenue Opportunities for an Airbnb-Style App"
            subheading="The vacation-rental marketplace can support several monetization methods for administrators and property owners."
            items={revenueBenefits}
            image="/wp-content/uploads/2026/01/revenue.webp"
            color="rgb(250, 16, 35)"
          />
        </section>

        <section className="vc_section">
          <AirbnbLiveDemo />
        </section>

        <section className="vc_section">
          <AirbnbTestimonials />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2023/03/Group-726.webp" className="vc_single_image-img attachment-large" alt="google review" title="google review" loading="lazy" />
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PricingPlans plans={pricingPlans} heading="Choose the Right Vacation Rental Package" />
          <MoneyBackGuarantee />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid">
            <div className="ld-container container-fluid">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading">
                          <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Airbnb Clone App Screens</span>
                          </h2>
                        </div>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>Preview important interfaces available across the website and mobile applications.</p>
                        </div>
                        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
                          {screenshots.map((src, i) => (
                            <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                  <img src={src} alt={`Airbnb Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
                                </div>
                              </figure>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <FaqServerTabs />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
