import { Link } from 'react-router-dom'
import { useInView } from '../../hooks/useInView.js'
import './AchievementBanner.css'

export default function AchievementBanner() {
  const [imgRef, imgInView] = useInView()

  return (
    <section className="clonescript-reveal-x-row vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40a6e93 vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading ld-fh-has-fill text-left">
                    <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Achievement</span>
                    </p>
                  </div>
                  <header className="fancy-title">
                    <h3>Achievements Built on Trust</h3>
                    <div className="st-desc">
                      <p>
                        Every milestone reflects the Trust of Our Clients and the value created through successful
                        digital projects. Our achievements demonstrate our commitment to quality, innovation,
                        reliable technology, customer satisfaction, and sustainable business relationships.
                      </p>
                    </div>
                  </header>
                  <Link to="/schedule-free-demo" target="_blank" className="btn btn-solid btn-md circle btn-bordered border-thin btn-icon-circle" style={{ marginRight: 15 }}>
                    <span>
                      <span className="btn-txt">Schedule now</span>
                      <span className="btn-icon"><i className="far fa-calendar-alt"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div
                className="wpb_wrapper"
                ref={imgRef}
                style={{
                  opacity: imgInView ? 1 : 0,
                  transform: imgInView ? 'translateX(0)' : 'translateX(150px)',
                  transition: 'opacity 1.6s cubic-bezier(0.23,1,0.32,1) 0.25s, transform 1.6s cubic-bezier(0.23,1,0.32,1) 0.25s',
                }}
              >
                <div className="wpb_wrapper-inner">
                  <div className="achievement-photo-frame">
                    <span className="achievement-photo-frame__ring cs-hover-zoom">
                      <img
                        src="/wp-content/uploads/2026/08/home-achievement-photo.webp"
                        width="1920"
                        height="1587"
                        className="achievement-photo-frame__img"
                        alt="CloneScript: serving 20+ countries with 24+ happy clients worldwide"
                        title="clonescript-achievements"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span
                      className="achievement-badge achievement-badge--tl cs-hover-lift"
                      style={{ opacity: imgInView ? 1 : 0, transform: imgInView ? 'none' : 'translateY(14px) scale(0.9)', transition: 'opacity 0.6s var(--clonescript-ease) 0.9s, transform 0.6s var(--clonescript-ease) 0.9s' }}
                    >
                      <strong>13+</strong>
                      <span>Year Experience</span>
                    </span>
                    <span
                      className="achievement-badge achievement-badge--tr cs-hover-lift"
                      style={{ opacity: imgInView ? 1 : 0, transform: imgInView ? 'none' : 'translateY(14px) scale(0.9)', transition: 'opacity 0.6s var(--clonescript-ease) 1.05s, transform 0.6s var(--clonescript-ease) 1.05s' }}
                    >
                      <strong>60+</strong>
                      <span>Products</span>
                    </span>
                    <span
                      className="achievement-badge achievement-badge--bl cs-hover-lift"
                      style={{ opacity: imgInView ? 1 : 0, transform: imgInView ? 'none' : 'translateY(14px) scale(0.9)', transition: 'opacity 0.6s var(--clonescript-ease) 1.2s, transform 0.6s var(--clonescript-ease) 1.2s' }}
                    >
                      <strong>50+</strong>
                      <span>Countries</span>
                    </span>
                    <span
                      className="achievement-badge achievement-badge--br cs-hover-lift"
                      style={{ opacity: imgInView ? 1 : 0, transform: imgInView ? 'none' : 'translateY(14px) scale(0.9)', transition: 'opacity 0.6s var(--clonescript-ease) 1.35s, transform 0.6s var(--clonescript-ease) 1.35s' }}
                    >
                      <strong>500+</strong>
                      <span>Customers</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
