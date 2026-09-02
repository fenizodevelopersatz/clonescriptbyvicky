import { Link } from 'react-router-dom'
import TestimonialCarousel from '../home/TestimonialCarousel.jsx'
import { trustCategories } from '../../data/trustedByLogos.js'
import { siteBrand } from '../../data/siteBrand.js'
import { videoTestimonials } from '../../data/videoTestimonials.js'
import './SocialProofPanel.css'

export default function SocialProofPanel() {
  return (
    <div className="sfd-social-proof-col wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
      <div className="vc_column-inner">
        <div className="wpb_wrapper vc_custom_1738575156836">
          <div className="wpb_wrapper-inner">
            <div className="ld-empty-space">
              <span className="liquid_empty_space_inner"></span>
            </div>
            <div className="wpb_single_image wpb_content_element vc_align_center vc_custom_1726564743253 sfd-top-strip">
              <Link to="/" className="sfd-logo-chip">
                <img src={siteBrand.logo} width={siteBrand.logoWidth} height={siteBrand.logoHeight} alt={siteBrand.name} style={{ width: 210, height: 'auto' }} />
              </Link>
            </div>
            <div className="wpb_text_column wpb_content_element">
              <div className="wpb_wrapper">
                <div className="banner_wrapper">
                  <div className="banner banner-65734 bottom vert custom-banners-theme-standard custom-banners-theme-standard-white">
                    <img
                      src="/wp-content/uploads/2023/04/clonescript-price-banner.webp"
                      width="1140"
                      height="321"
                      className="attachment-full size-full"
                      alt="VIP pack"
                    />
                    <a className="custom_banners_big_link" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ld-empty-space">
              <span className="liquid_empty_space_inner"></span>
            </div>
            <header className="fancy-title text-center">
              <h4 className="lined-alt">
                <i className="line-alt"></i> <i className="fas fa-heart"></i> Trusted By <i className="line-alt"></i>
              </h4>
            </header>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
              {trustCategories.map((cat, i) => (
                <div className="iconbox iconbox-inline iconbox-heading-xs" key={i} style={{ color: '#0030b8' }}>
                  <div className="iconbox-icon-wrap">
                    <span className="iconbox-icon-container">
                      <i className={cat.icon}></i>
                    </span>
                  </div>
                  <h3 className="font-weight-semibold" style={{ fontSize: 14 }}>{cat.label}</h3>
                </div>
              ))}
            </div>
            <TestimonialCarousel cardBg="#ffffff" items={videoTestimonials} />
            <div className="ld-empty-space">
              <span className="liquid_empty_space_inner"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
