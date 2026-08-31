import Reveal from './Reveal.jsx'

export default function WhyChooseChecklist({ heading, accentWord, desc, points, image, imageAlt, color = '#002692', headingIcon }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced wcc-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <Reveal direction="left">
                    <div className="ld-fancy-heading text-left sv_text_top">
                      <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt">
                          {headingIcon && <img src={headingIcon} width="30" height="30" alt="" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} loading="eager" decoding="async" />}
                          {' '}{heading}<span style={{ color }}> {accentWord}</span>
                        </span>
                      </h2>
                    </div>
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'left' }}>{desc}</p>
                      </div>
                    </div>
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  </Reveal>
                  {/* Each point reveals on its own with a staggered slide-in. */}
                  {points.map((parts, i) => (
                    <Reveal direction="left" delay={0.08 * i} key={i}>
                      <div className="ld-fancy-heading text-left sv_border_why_choose_us" style={{ borderBottom: '1px solid #ececec', paddingBottom: 10, marginBottom: 10 }}>
                        <p className="lqd-highlight-underline lqd-highlight-grow-left">
                          <span className="ld-fh-txt">
                            <i className="fa-solid fa-circle-check wcc-check" style={{ color: 'black' }}></i>{' '}
                            {parts[0]}<span style={{ color, fontWeight: 'bold' }}>{parts[1]}</span>{parts[2] || ''}
                          </span>
                        </p>
                      </div>
                    </Reveal>
                  ))}
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <Reveal direction="right">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey wcc-image">
                          <img src={image} width="650" height="583" className="vc_single_image-img attachment-full" alt={imageAlt} loading="eager" decoding="async" />
                        </div>
                      </figure>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
