export default function TestimonialRotatorSection({
  image = '/wp-content/reviews/clonescript_reviews.png',
  imageAlt = 'Five CloneScript customer testimonials',
  width = 1536,
  height = 1024,
  /* Pages that render their reviews as real markup instead of one flat collage
     image pass the markup here; it takes the image's place in the same section
     so the section count (and SchoolCrmPage.css's nth-child rhythm) is unchanged. */
  content = null,
}) {
  return (
    <>
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40d1c33">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space">
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <div className="ld-fancy-heading text-center">
                      <h3 className="lqd-highlight-underline lqd-highlight-grow-left" data-text-rotator="true">
                        <span className="ld-fh-txt">
                          {' '}
                          Testimonial{' '}
                          <span className="txt-rotate-keywords">
                            <span className="keyword active" style={{ color: 'rgb(255, 87, 87)' }}>Beyond Expectations</span>
                            <span className="keyword" style={{ color: 'rgb(87, 161, 255)' }}>Celebrating Excellence</span>
                            <span className="keyword" style={{ color: 'rgb(0, 214, 53)' }}>Outstanding Performance</span>
                          </span>
                        </span>
                      </h3>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-3 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="wpb_wrapper-inner">
                              <div className="wpb_single_image wpb_content_element vc_align_center">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <img src="/wp-content/uploads/2023/03/Group-726-1024x92.webp" width="780" height="70" className="vc_single_image-img attachment-large" alt="google review" title="google review" />
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ld-empty-space">
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40d33ea">
        <div className="ld-container container-fluid">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    {content ?? (
                      <figure style={{ margin: 0 }}>
                        <img
                          src={image}
                          alt={imageAlt}
                          width={width}
                          height={height}
                          loading="lazy"
                          decoding="async"
                          style={{ display: 'block', width: `min(${width}px, 100%)`, height: 'auto', margin: '0 auto' }}
                        />
                      </figure>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
