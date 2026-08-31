import { Link } from 'react-router-dom'
import './LaunchCta.css'

export default function LaunchCta({ heading, desc, image, imageAlt = '', variant, badge }) {
  const isDark = variant === 'dark'
  return (
    <section className={`clonescript-launch-cta vc_row wpb_row vc_row-fluid liquid-row-shadowbox${image ? '' : ' clonescript-launch-cta--text-only'}${isDark ? ' clonescript-launch-cta--dark' : ''}`}>
      <div className="ld-container container">
        <div className="clonescript-launch-cta__panel row ld-row">
          {image && (
            <div className="clonescript-launch-cta__image-col wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 vc_hidden-sm vc_hidden-xs">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="wpb_single_image wpb_content_element vc_align_left">
                      <figure className="wpb_wrapper vc_figure">
                    <div className="clonescript-launch-cta__image vc_single_image-wrapper vc_box_border_grey">
                      <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={`clonescript-launch-cta__content wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 ${image ? 'vc_col-md-6' : 'vc_col-md-12'} vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill`}>
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  {badge && <span className="clonescript-launch-cta__badge">{badge}</span>}
                  <header className="fancy-title">
                    <h3>{heading}</h3>
                    {desc && <div className="st-desc"><p>{desc}</p></div>}
                  </header>
                  <Link to="/schedule-free-demo" target="_blank" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                    <span>
                      <span className="btn-txt">Schedule now</span>
                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
