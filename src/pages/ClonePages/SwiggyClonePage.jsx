import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  featurePanels, standardFeatures, addOnFeatures, revenueBenefits,
  pricingPlans, faqs, serverRequirements, mobileScreens, customerReviews,
} from '../../data/swiggy/swiggyData.js'

import SwiggyHero from '../../components/swiggy/SwiggyHero.jsx'
import WhatIsSwiggy from '../../components/swiggy/WhatIsSwiggy.jsx'
import WhyChooseUs from '../../components/swiggy/WhyChooseUs.jsx'
import FeaturePanels from '../../components/swiggy/FeaturePanels.jsx'
import FounderCta from '../../components/swiggy/FounderCta.jsx'
import RestaurantPos from '../../components/swiggy/RestaurantPos.jsx'
import MobileScreensTabs from '../../components/swiggy/MobileScreensTabs.jsx'
import FaqServerTabs from '../../components/swiggy/FaqServerTabs.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import CloneScriptImage from '../../components/shared/CloneScriptImage.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

export default function SwiggyClonePage() {
  usePageStylesheets(pageStylesheets.swiggyClone)

  useSeo('UberEats Clone | Multi-Vendor Food Delivery Platform', 'Launch a customizable UberEats Clone with restaurant menus, online ordering, live delivery tracking, driver tools, payments, and admin control.')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_section-has-fill">
          <SwiggyHero />

          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading text-center">
                          <p className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Trusted by<strong> Growing Businesses</strong></span>
                          </p>
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
          <WhatIsSwiggy />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title text-center">
                          <h2>How Does the UberEats Clone Work?</h2>
                          <div className="st-desc">
                            <p style={{ textAlign: 'center' }}>The UberEats Clone Connects Customers, Restaurants, and Delivery Partners Through a Structured Ordering Process!</p>
                          </div>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container-fluid">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <CloneScriptImage src="/wp-content/uploads/2025/03/how-it-works-1.png" width="1440" height="1578" className="vc_single_image-img attachment-full" alt="how it works" loading="lazy" />
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
          <WhyChooseUs />
        </section>

        <section className="vc_section vc_section-has-fill">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title text-center">
                          <h2>What Does the UberEats Clone Offer?</h2>
                          <div className="st-desc">
                            <p style={{ textAlign: 'center' }}>The UberEats Clone Offers Dedicated Interfaces for Every Participant in the Online Food-Delivery Process!</p>
                          </div>
                        </header>
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
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2025/04/Frame-10.webp" width="1023" height="606" className="vc_single_image-img attachment-full" alt="what we offer" loading="lazy" />
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
          <FounderCta />
        </section>

        <FeaturePanels roles={featurePanels} />

        <PdfDownloadCta
          heading="Download the UberEats Clone Feature Guide"
          desc="Review the Complete Feature Guide Covering Customers, Restaurants, Drivers, Administrators, Orders, Menus, Payments, Deliveries, Commissions, and Payouts."
        />

        <StandOutFeaturesGrid
          heading="Standard Features of the UberEats Clone"
          subheading="Essential Functionality to Simplify Food Discovery, Ordering, Preparation, Delivery, Payment, and Marketplace Administration."
          items={standardFeatures}
          color="#6d962c"
        />

        <section className="vc_section">
          <RestaurantPos />
        </section>

        <StandOutFeaturesGrid
          heading="Additional UberEats Clone Features"
          subheading="Extend the Food-Delivery Platform With Features for Subscriptions, Promotions, Restaurant Engagement, Customer Convenience, and Business Administration."
          items={addOnFeatures}
          color="#6d962c"
        />

        <RevenueBenefits
          heading="UberEats Clone Monetization and Revenue Streams"
          subheading="Several Earning Models for Generating Sustainable Platform Revenue."
          items={revenueBenefits}
          image="/wp-content/uploads/2025/03/Group-38.webp"
          color="#6d962c"
        />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title text-center">
                          <h2>Technology Used for Food Delivery App Development</h2>
                        </header>
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2025/01/Frame-48096569.webp" width="1339" height="550" className="vc_single_image-img attachment-full" alt="Technologies Used" loading="lazy" />
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
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <CloneScriptImage src="/wp-content/uploads/2025/03/Online-food-delivery-app.webp" width="1370" height="1244" className="vc_single_image-img attachment-full" alt="Online food delivery app" loading="lazy" />
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title">
                          <h3>Start Your Food Delivery Business With Us!</h3>
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
          </section>
        </section>

        <PricingPlans plans={pricingPlans} heading="Choose a Suitable UberEats Clone Plan" />
        <MoneyBackGuarantee />

        <section className="vc_section z-index-plus vc_section-has-fill">
          <MobileScreensTabs groups={mobileScreens} />
        </section>

        <section className="vc_section">
          <FaqServerTabs faqs={faqs} requirements={serverRequirements} />
        </section>

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                        <strong>Trademark Disclaimer:</strong> &ldquo;Uber Eats&rdquo; and related brand names are
                        trademarks owned by their respective proprietors. The product name is used only to describe
                        the general type of food-delivery marketplace functionality offered. This independently
                        developed software uses an original brand identity, interface, and source code. It is not
                        affiliated with, sponsored by, or endorsed by Uber, Uber Eats, or their trademark owners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />
      </div>
    </main>
  )
}
