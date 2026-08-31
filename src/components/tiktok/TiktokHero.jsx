import Reveal from '../shared/Reveal.jsx'
import ProductShowcase from '../shared/ProductShowcase.jsx'
import TiltCard from './TiltCard.jsx'

// Feature labels lifted from this page's own copy (tiktokData.js) rather than
// invented stats -- the hero render already contains its own demo numbers.
const heroChips = [
  { icon: 'fa-satellite-dish', label: 'Live Streaming', pos: 'tl', color: '#06c7c9' },
  { icon: 'fa-gift', label: 'Virtual Gifts', pos: 'bl', color: '#fe3b6c' },
]

export default function TiktokHero() {
  return (
    <section className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" duration={1.2}>
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt">
                        <span style={{ color: '#031833' }}>Build an Engaging</span>
                        <span style={{ color: '#06c7c9' }}> TikTok Clone</span>
                        <span style={{ color: '#031833' }}> for</span>
                        <span style={{ color: '#fe3b6c' }}> Short-Video Communities</span>
                      </span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>Turn your short-video platform idea into a feature-rich digital product with CloneScript. Our TikTok Clone gives users an enjoyable space to record, edit, publish, and discover entertaining videos while providing creators with practical tools to grow their audiences. The platform combines short-video sharing, personalized content discovery, live streaming, social interactions, virtual gifting, private messaging, and flexible monetization options. It can be customized to suit entertainment communities, creator networks, educational platforms, talent discovery applications, and niche video-sharing businesses. With dedicated interfaces for users, creators, and administrators, you can manage your entire platform through one connected ecosystem.</p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="#schedule_form" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-gradient" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Schedule Demo</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm circle btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">View Prices</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-dollar-sign"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2025/01/Container.webp" width="425" height="110" className="vc_single_image-img attachment-full" alt="reviews" loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <TiltCard className="wpb_wrapper-inner tiktok-hero-stage" max={7}>
                  <ProductShowcase
                    image="/wp-content/uploads/2026/01/tiktok-clone-1.webp"
                    imageAlt="tiktok-clone"
                    imageTitle="tiktok-clone"
                    imageWidth={1625}
                    imageHeight={1008}
                    chips={heroChips}
                    glowColorA="rgba(6, 199, 201, 0.18)"
                    glowColorB="rgba(254, 59, 108, 0.16)"
                  />
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
