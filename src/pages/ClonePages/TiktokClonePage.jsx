import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  featureGroups, standOutFeatures, addOnFeatures, revenueBenefits, screenshots, pricingPlans, customerReviews,
} from '../../data/tiktok/tiktokData.js'

import TiktokHero from '../../components/tiktok/TiktokHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import WhatIsTiktok from '../../components/tiktok/WhatIsTiktok.jsx'
import FounderExpertCta from '../../components/tiktok/FounderExpertCta.jsx'
import FaqServerTabs from '../../components/tiktok/FaqServerTabs.jsx'
import AmazonFeatureTabs from '../../components/amazon/AmazonFeatureTabs.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'
import TiktokScene from '../../components/tiktok/TiktokScene.jsx'
import TiktokPhoneStack from '../../components/tiktok/TiktokPhoneStack.jsx'
import TiltCard from '../../components/tiktok/TiltCard.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'
import './TiktokClonePage.css'

export default function TiktokClonePage() {
  usePageStylesheets(pageStylesheets.tiktokClone)

  useSeo('TikTok Clone Script | Build a Short-Video Sharing Platform', 'Launch a customizable TikTok Clone with video sharing, live streaming, creator tools, virtual gifts, monetization, smart moderation, and admin control.')

  return (
    <main className="content tiktok-clone-page" id="content">
      <div className="wpb-content-wrapper">
        <TiktokScene />

        <section className="vc_section">
          <TiktokHero />
        </section>

        <TrustedByBadges heading="by Content Entrepreneurs" />

        <section className="vc_section">
          <WhatIsTiktok />
        </section>

        <section className="vc_section">
          <FounderExpertCta />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-sm-offset-1 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading ld-fh-has-fill text-center">
                          <p className="circle lqd-highlight-underline lqd-highlight-grow-left"><span className="ld-fh-txt"> <span style={{ color: 'white' }}>Main Features</span></span></p>
                        </div>
                        <header className="fancy-title text-center">
                          <p>Main Features of Our TikTok Clone</p>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AmazonFeatureTabs groups={featureGroups} />
        </section>

        <StandOutFeaturesGrid
          heading="Standard Features of the TikTok Clone"
          subheading="Explore the standard features built into our TikTok Clone to help your short-video platform stand out from day one."
          items={standOutFeatures}
          color="rgb(6, 199, 201)"
        />

        <SimpleIconGrid
          title="Optional Add-On Features of the TikTok Clone"
          desc="Enhance your TikTok Clone with optional add-on features that extend functionality beyond the standard package."
          items={addOnFeatures}
          columns={5}
          iconColor="#06c7c9"
        />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <TiltCard className="tiktok-media-float" max={11}>
                          <div className="wpb_single_image wpb_content_element vc_align_left">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src="/wp-content/uploads/2026/01/video-sharing-app.webp" width="1031" height="1060" className="vc_single_image-img attachment-full" alt="video-sharing-app" title="video-sharing-app" loading="lazy" />
                              </div>
                            </figure>
                          </div>
                        </TiltCard>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title">
                          <h2>Create an All-in-One Short-Video Platform</h2>
                          <div className="st-desc">
                            <p>Develop a platform where creators can showcase their ideas, audiences can discover fresh content, and your business can manage the entire community from one system.</p>
                          </div>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <RevenueBenefits
          heading="Revenue Opportunities for Platform Owners"
          subheading="Our TikTok Clone is designed with multiple revenue-generating features that help you monetize your short-video platform effectively and grow your business."
          items={revenueBenefits}
          image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
          color="#06c7c9"
        />

        <section className="vc_section vc_section-has-fill">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title text-center">
                          <h2>Technology Built for Performance and Growth</h2>
                        </header>
                        <TiltCard className="tiktok-media-float" max={6}>
                          <div className="wpb_single_image wpb_content_element vc_align_center">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src="/wp-content/uploads/2026/01/Technology.webp" width="2183" height="1164" className="vc_single_image-img attachment-full" alt="Technology" title="Technology" loading="lazy" />
                              </div>
                            </figure>
                          </div>
                        </TiltCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <LaunchCta
          heading="Start Your Short-Video Business with CloneScript"
          desc="Build a branded TikTok Clone that reflects your market, audience, and long-term business direction. From interface customization and feature planning to testing, deployment, and post-launch assistance, the development process can be adapted to your specific requirements. You can begin with the essential version and introduce additional features as your community grows."
          image="/wp-content/uploads/2026/01/CTA-Design.webp"
          imageAlt="Short video clone app preview showing video feed and profile screens"
          variant="dark"
          badge="Launch in 7 Days"
        />

        <PricingPlans plans={pricingPlans} heading="Choose a Development Package" />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>TikTok Clone Mobile Application Screens</h2>
                      </header>
                      <TiktokPhoneStack screens={screenshots} altPrefix="TikTok Clone screen" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqServerTabs />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                        <strong>Trademark Disclaimer:</strong> TikTok is a trademark of its respective
                        owner. This product is an independently developed and customizable short-video
                        platform solution. It is not affiliated with, endorsed by, sponsored by, or
                        officially connected to TikTok or its parent company. Any trademark references
                        are used only to describe the general type of software functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
