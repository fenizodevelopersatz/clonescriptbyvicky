import Reveal from './Reveal.jsx'
import './RevenueBenefits.css'

export default function RevenueBenefits({ heading = 'Revenue Benefits', subheading, items, image, color = 'rgb(0, 38, 146)' }) {
  const [left, right] = [items.slice(0, Math.ceil(items.length / 2)), items.slice(Math.ceil(items.length / 2))]

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox revenue-benefits">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 revenue-benefits__heading">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <Reveal>
                    <div className="ld-fancy-heading text-center sv_text_super">
                      <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> <span style={{ color }}>{heading} </span></span>
                      </h2>
                    </div>
                    {subheading && (
                      <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                          <p style={{ textAlign: 'center' }}>{subheading}</p>
                        </div>
                      </div>
                    )}
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row revenue-benefits__layout">
          <div className="wpb_column vc_column_container vc_col-sm-3 revenue-benefits__column revenue-benefits__column--left">
            {left.map((f, i) => (
              <Reveal direction="left" delay={0.1 * i} key={i}>
                <div className="iconbox iconbox-shadow revenue-benefits__card" style={{ color }}>
                  <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className={f.icon} style={{ color }}></i></span></div>
                  <div className="contents revenue-benefits__content">
                    <h3>{f.title}</h3>
                    <p><span>{f.desc}</span></p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <span className="revenue-benefits__arrow revenue-benefits__arrow--left" aria-hidden="true">
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
          {image && (
            <div className="wpb_column vc_column_container vc_col-sm-6 revenue-benefits__media">
              <div className="revenue-benefits__image-wrap">
                <img src={image} alt="revenue benefits" className="revenue-benefits__image" loading="eager" decoding="async" />
              </div>
            </div>
          )}
          <span className="revenue-benefits__arrow revenue-benefits__arrow--right" aria-hidden="true">
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
          <div className="wpb_column vc_column_container vc_col-sm-3 revenue-benefits__column revenue-benefits__column--right">
            {right.map((f, i) => (
              <Reveal direction="right" delay={0.1 * i} key={i}>
                <div className="iconbox iconbox-shadow revenue-benefits__card" style={{ color }}>
                  <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className={f.icon} style={{ color }}></i></span></div>
                  <div className="contents revenue-benefits__content">
                    <h3>{f.title}</h3>
                    <p><span>{f.desc}</span></p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
