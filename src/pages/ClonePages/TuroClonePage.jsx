import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { siteContact } from '../../data/siteContact.js'
import {
  upcomingAiFeature, roleShowcase, standOutFeatures, addOnFeatures, revenueBenefits,
  techStack, pricingPlans, screenshots, customerReviews,
} from '../../data/turo/turoData.js'

import TuroHero from '../../components/turo/TuroHero.jsx'
import WhatIsTuro from '../../components/turo/WhatIsTuro.jsx'
import WhyChooseTuro from '../../components/turo/WhyChooseTuro.jsx'
import UpcomingAiFeature from '../../components/turo/UpcomingAiFeature.jsx'
import RoleShowcase from '../../components/turo/RoleShowcase.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/turo/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

const dashboards = [
  { label: 'Renter Dashboard', email: 'user@yopmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
  { label: 'Vehicle Owner Dashboard', email: 'hostuser123@yopmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
  { label: 'Administration Dashboard', email: 'admin@gmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
]

const screenshotAlts = [
  'Vehicle information screen',
  'Customer bookings screen',
  'Favourite vehicles screen',
  'Vehicle management screen',
  'Search and filtering screen',
  'Fleet dashboard screen',
]

export default function TuroClonePage() {
  usePageStylesheets(pageStylesheets.turoClone)

  useSeo(
    'Car Rental Script | Online Vehicle Rental Platform',
    'Launch a customizable car rental platform with vehicle listings, availability management, instant reservations, secure payments, and owner earnings.',
  )

  return (
    <main className="content turo-clone-page" id="content">
      <div className="wpb-content-wrapper turo-clone-page__content">
        <section className="vc_section">
          <TuroHero />
        </section>

        <section className="vc_section">
          <WhatIsTuro />
        </section>

        <section className="vc_section">
          <WhyChooseTuro />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-empty-space" style={{ height: 50 }}><span className="liquid_empty_space_inner"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-empty-space" style={{ height: 20 }}><span className="liquid_empty_space_inner"></span></div>
                        <div className="ld-fancy-heading text-center">
                          <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Ready-to-Launch <span style={{ color: '#0077ff' }}> Car Rental</span> Platform</span>
                          </h2>
                        </div>
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: 'center' }}>
                              <span style={{ fontWeight: 400 }}>Launch and manage your vehicle-rental business through a centralized digital platform. Handle reservations, payment collection, customer accounts, vehicle availability, and owner settlements without depending on disconnected applications.</span>
                            </p>
                          </div>
                        </div>
                        <div className="ld-empty-space" style={{ height: 40 }}><span className="liquid_empty_space_inner"></span></div>
                        <a href={`https://api.whatsapp.com/send?phone=${siteContact.whatsappApiNumber}&text=${encodeURIComponent('Hello, I am interested with this product Car Rental Script')}`} target="_blank" rel="noreferrer" className="footer-whatsapp page-whatsapp-light">
                          <i className="fab fa-whatsapp"></i>
                          <span>Get Professional Assistance</span>
                        </a>
                        <div className="ld-empty-space" style={{ height: 20 }}><span className="liquid_empty_space_inner"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-empty-space" style={{ height: 50 }}><span className="liquid_empty_space_inner"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="vc_section">
          <UpcomingAiFeature feature={upcomingAiFeature} />
        </section>

        <section className="vc_section">
          <RoleShowcase roles={roleShowcase} />
        </section>

        <PdfDownloadCta
          heading="Download the Complete Car Rental Feature Guide"
          desc="Explore the full platform functionality to understand how renters, vehicle owners, and administrators manage everyday rental operations."
        />

        <StandOutFeaturesGrid
          heading="Standard Features of the Car Rental Platform"
          subheading="The platform includes practical tools that improve communication, booking control, payments, and customer convenience."
          items={standOutFeatures}
          color="#0077ff"
        />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title">
                          <h2>Advanced Car Rental Management Platform</h2>
                          <h3 className="">Manage Your Rental Operations from One Place</h3>
                          <div className="st-desc">
                            <p>The car rental management system brings vehicle listings, booking calendars, customer details, trip records, payments, and owner earnings into a single workspace.</p>
                            <p>Rental businesses can use the platform to reduce repetitive administrative work, monitor vehicle availability, coordinate pickups and returns, and respond to customers more efficiently. The flexible infrastructure can support a growing number of vehicles, owners, bookings, service areas, and platform users.</p>
                          </div>
                        </header>
                        <a href="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-gradient">
                          <span>
                            <span className="btn-txt">Schedule a Platform Demo</span>
                            <span className="btn-icon"><i className="fa fa-solid fa-calendar"></i></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2026/05/rental-car-script.webp" width="1024" height="871" className="vc_single_image-img attachment-full" alt="rental-car-script" title="rental-car-script" loading="lazy" />
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

        <SimpleIconGrid
          title="Additional Car Rental Features"
          desc="Optional features can be introduced according to your services, operating locations, and business model."
          items={addOnFeatures}
          columns={5}
          iconColor="#0077ff"
        />

        <RevenueBenefits
          heading="Revenue Opportunities"
          subheading="The car rental platform can support several earning methods for marketplace administrators and vehicle owners."
          items={revenueBenefits}
          image="/wp-content/uploads/2026/04/revenue_benefits.webp"
          color="#0077ff"
        />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 vc_hidden-sm vc_hidden-xs">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <div className="wpb_single_image wpb_content_element vc_align_left">
                                    <figure className="wpb_wrapper vc_figure">
                                      <div className="vc_single_image-wrapper vc_box_border_grey">
                                        <img src="/wp-content/uploads/2026/05/car-rental-solution.webp" width="1001" height="1024" className="vc_single_image-img attachment-full" alt="car-rental-solution" title="car-rental-solution" loading="lazy" />
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <header className="fancy-title">
                                    <h3>Launch Your Car Rental Business with Professional Support</h3>
                                  </header>
                                  <a href="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                                    <span>
                                      <span className="btn-txt">Schedule a Consultation</span>
                                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <TechStackRow items={techStack} heading="Technologies Used for Car Rental Development" />

        <LiveDemoTabs dashboards={dashboards} />

        <PricingPlans plans={pricingPlans} heading="Choose a Suitable Development Plan" />
        <MoneyBackGuarantee />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container-fluid">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading">
                          <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Car Rental Application Screens</span>
                          </h2>
                        </div>
                        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                          {screenshots.map((src, i) => (
                            <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                  <img src={src} alt={screenshotAlts[i] || `Car Rental Script screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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
      </div>
    </main>
  )
}
