import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standardFeatures, addOnFeatures, multimediaFeatures, revenueBenefits,
  featureGroups, pricingPlans, screenshots, customerReviews,
} from '../../data/youtube/youtubeData.js'

import YoutubeHero from '../../components/youtube/YoutubeHero.jsx'
import WhatIsYoutube from '../../components/youtube/WhatIsYoutube.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import AmazonFeatureTabs from '../../components/amazon/AmazonFeatureTabs.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/youtube/FaqServerTabs.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'
import './YoutubeClonePage.css'

export default function YoutubeClonePage() {
  usePageStylesheets(pageStylesheets.youtubeClone)

  useSeo(
    'AI-Powered YouTube Clone | Video Platform by CloneScript',
    'Launch a customizable YouTube Clone with video uploads, channels, live streaming, shorts, music, subscriptions, ads, digital wallets, and admin control.'
  )

  return (
    <main className="content youtube-clone-page" id="content">
      <div className="wpb-content-wrapper youtube-clone-page__content">
        <section className="vc_section">
          <YoutubeHero />
        </section>

        <TrustedByBadges heading="by Video Platform Entrepreneurs" />

        <section className="vc_section">
          <WhatIsYoutube />
        </section>

        <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="wpb_single_image wpb_content_element vc_align_left">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/01/Group-48096911.webp" width="1213" height="923" alt="Why choose us" loading="lazy" />
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
                        <h2>Why Choose CloneScript for Your YouTube Clone?</h2>
                        <div className="st-desc">
                          <p><span style={{ fontWeight: 400 }}>Get a customizable video-streaming solution with user and administrator dashboards, responsive web access, Android and iOS applications, secure payments, creator tools, content management, and flexible monetization.</span></p>
                          <p><span style={{ fontWeight: 400 }}>The scalable architecture can support additional users, creators, channels, videos, media formats, and revenue features as the platform grows.</span></p>
                        </div>
                      </header>
                      <a href="#schedule_form" data-localscroll="true" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                        <span>
                          <span className="btn-txt">Schedule now</span>
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

        <LaunchCta
          heading="Launch a Profitable Video-Sharing Business"
          desc="Create a digital media platform where creators can publish original content and viewers can enjoy videos according to their interests. The platform can serve general entertainment audiences or focus on a specific niche such as education, gaming, technology, fitness, business, music, news, or professional training."
          image="/wp-content/uploads/2025/01/Group-48096911.webp"
          imageAlt="CloneScript achievement stats: happy clients, years of experience, skilled employees, successful projects"
        />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Features That Make the YouTube Clone Stand Out</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The platform includes separate functionality for viewers, creators, and administrators.</p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AmazonFeatureTabs groups={featureGroups} />

        <PdfDownloadCta
          heading="Download the YouTube Clone Feature Guide"
          desc="Review the complete functionality available for viewers, creators, administrators, videos, channels, music, podcasts, live streams, payments, and monetization."
        />

        <SimpleIconGrid
          title="Standard Features of the YouTube Clone"
          desc="The platform includes practical features designed to improve content discovery, viewing convenience, international accessibility, and payment processing."
          items={standardFeatures}
          columns={3}
          iconColor="#ff0022"
        />

        <StandOutFeaturesGrid
          heading="Additional YouTube Clone Features"
          subheading=""
          items={addOnFeatures}
          color="rgb(255, 71, 0)"
        />

        <SimpleIconGrid
          title="All-in-One Multimedia Super App"
          desc="The YouTube Clone can be developed as a wider multimedia platform that brings different formats together within one application and website. Users can switch between videos, live content, music, podcasts, radio, and short-form media without relying on separate platforms."
          items={multimediaFeatures}
          columns={3}
          iconColor="#002692"
        />

        <RevenueBenefits
          heading="YouTube Clone Monetization and Revenue Streams"
          subheading="The video platform can support several business models for generating sustainable income."
          items={revenueBenefits}
          image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
          color="#FF0022"
        />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Technology Used for Video Platform Development</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The YouTube Clone can use modern web, mobile, database, cloud, storage, payment, and streaming technologies.</p>
                        </div>
                      </header>
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/04/utube-clone-tech.webp" alt="technologies-used" loading="lazy" />
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

        <LaunchCta
          heading="Start Your Video-Streaming Business"
          desc="Turn your video-platform concept into a customizable web and mobile product. Begin with essential video-sharing functionality and introduce music, podcasts, live streaming, premium content, and additional revenue options as the audience grows."
          image="/wp-content/uploads/2025/09/all-in-one-media.webp"
          imageAlt="YouTube clone app preview showing video library and home feed"
        />

        <PricingPlans plans={pricingPlans} heading="Choose a Suitable YouTube Clone Plan" />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>YouTube Clone Mobile Application Screens</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>Preview the important interfaces available in the Android and iOS applications.</p>
                        </div>
                      </header>
                      <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                        {screenshots.map((src, i) => (
                          <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={src} alt={`YouTube Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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

        <FaqServerTabs />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
