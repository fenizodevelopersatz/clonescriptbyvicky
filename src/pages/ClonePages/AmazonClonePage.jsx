import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  whyChooseUs, standardFeatureGroups, generalIconFeatures, platformRows,
  addOnFeatures, generalFeatureColumns, dashboards, pricingPlans, screenshots, customerReviews,
} from '../../data/amazon/amazonData.js'

import AmazonHero from '../../components/amazon/AmazonHero.jsx'
import WhatIsAmazon from '../../components/amazon/WhatIsAmazon.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import AmazonFeatureTabs from '../../components/amazon/AmazonFeatureTabs.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import PlatformFeatureRows from '../../components/amazon/PlatformFeatureRows.jsx'
import AiFeaturesGrid from '../../components/shared/AiFeaturesGrid.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import FaqServerTabs from '../../components/amazon/FaqServerTabs.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'
import './AmazonClonePage.css'

export default function AmazonClonePage() {
  usePageStylesheets(pageStylesheets.amazonClone)

  useSeo(
    'Amazon Clone Script | Multi-Vendor Marketplace',
    'Launch a customizable Amazon Clone with buyer, seller, and admin dashboards, product management, secure payments, commissions, and shipping tools.'
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section amazon-hero-section">
          <AmazonHero />
        </section>

        <section className="vc_section">
          <WhatIsAmazon />
        </section>

        <StandOutFeaturesGrid
          heading="Why Choose CloneScript for Your Amazon Clone?"
          subheading="Features"
          items={whyChooseUs}
        />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-sm-offset-2 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>White-Label Amazon Clone Features</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The platform includes dedicated capabilities for buyers, sellers, and marketplace administrators. Each user receives a dashboard designed around their specific responsibilities.</p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AmazonFeatureTabs groups={standardFeatureGroups} />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Highlighted Features</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-5 vc_hidden-sm vc_hidden-xs">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="wpb_single_image wpb_content_element vc_align_left">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/09/ecommerce-features.webp" alt="ecommerce-features" loading="lazy" />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-1 vc_col-md-5 vc_col-xs-offset-1 vc_col-xs-10">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <SimpleIconGrid items={generalIconFeatures} columns={1} iconColor="#002692" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PlatformFeatureRows rows={platformRows} />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <h3 style={{ textAlign: 'center' }}>Launch Your Custom Ecommerce Application</h3>
                      <a href="/schedule-free-demo" className="btn btn-solid btn-xsm circle btn-bordered border-thin">
                        <span>
                          <span className="btn-txt">Book Your Consultation</span>
                          <span className="btn-icon"><i className="far fa-calendar-check"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AiFeaturesGrid
          heading="Additional Amazon Clone Features"
          desc="Expand the marketplace with practical tools for taxation, advertising, reporting, international accessibility, and seller promotion."
          items={addOnFeatures}
          columns={4}
        />

        <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="ld-fancy-heading text-center">
                        <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                          <span className="ld-fh-txt"> General Ecommerce Marketplace Features</span>
                        </h2>
                      </div>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>The Amazon Clone includes functionality required for managing everyday ecommerce operations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ld-row">
              {generalFeatureColumns.map((column, i) => (
                <div className="wpb_column vc_column_container vc_col-sm-4" key={i}>
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <ul className="custom_list_icon">
                          {column.map((item) => (
                            <li key={item}><span style={{ fontWeight: 400 }}>{item}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PdfDownloadCta
          heading="Download the Amazon Clone Feature Guide"
          desc="Explore the complete functionality available for buyers, sellers, administrators, products, payments, shipping, commissions, and mobile applications."
        />

        <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title">
                        <h2>Grow Your Ecommerce Business with an Amazon Clone</h2>
                        <div className="st-desc">
                          <p><span style={{ color: '#8181ac' }}>Enter the multi-vendor ecommerce industry with a platform that connects customers, sellers, products, payments, and orders.</span></p>
                          <p><span style={{ color: '#8181ac' }}>Instead of developing every marketplace component separately, businesses can begin with an integrated solution and customize it according to their audience and goals.</span></p>
                          <p><span style={{ color: '#8181ac' }}>As the business grows, the platform can support additional vendors, product categories, payment options, shipping providers, languages, and service locations.</span></p>
                        </div>
                      </header>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
                        <a href="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-bordered-gradient" style={{ margin: 0 }}>
                          <span>
                            <span className="btn-txt">Schedule Demo</span>
                            <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                          </span>
                        </a>
                        <a href="#prices" data-localscroll="true" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-bordered-gradient btn-gradient" style={{ margin: 0 }}>
                          <span>
                            <span className="btn-txt">Explore Packages</span>
                            <span className="btn-icon"><i className="fas fa-dollar-sign"></i></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-5">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/09/ecommerce-business.webp" alt="ecommerce-business" loading="lazy" />
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

        <PricingPlans plans={pricingPlans} heading="Choose a Suitable Marketplace Plan" />
        <MoneyBackGuarantee />

        <LiveDemoTabs dashboards={dashboards} />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Amazon Clone Mobile Application Screens</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The marketplace can be made available through compatible Android and iOS applications.</p>
                        </div>
                      </header>
                      <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                        {screenshots.map((src, i) => (
                          <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={src} alt={`Amazon Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Technology Used for Ecommerce Development</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The Amazon Clone can be developed using suitable web, mobile, database, cloud, payment, and communication technologies.</p>
                        </div>
                      </header>
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2024/11/group-2866-6749b682190bb.webp" alt="technology stack" loading="lazy" />
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

        <FaqServerTabs />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
