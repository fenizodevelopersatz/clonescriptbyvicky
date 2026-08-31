const points = [
  'Centralized operational information',
  'Reduced repetitive data entry',
  'Better communication between departments',
  'Clearer performance reporting',
  'Faster access to business records',
  'Flexible user permissions',
  'Support for multiple branches',
  'Scalable system architecture',
]

export default function WhyChooseErp() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a665f000 erp-why-section">
      <div className="ld-container container">
        <div className="row ld-row erp-why-layout">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-left sv_text_top">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Why Choose Our<span style={{ color: '#002692' }}> ERP SaaS Platform?</span></span>
                    </h2>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'left' }}>
                        Our ERP software connects finance, inventory, sales, purchasing, employees, customers, and store
                        operations through one centralized system.
                      </p>
                      <p style={{ textAlign: 'left' }}>
                        By giving departments access to consistent business information, the solution can reduce duplicated
                        work, improve reporting accuracy, and help employees complete daily responsibilities efficiently.
                      </p>
                      <p style={{ textAlign: 'left' }}>
                        The platform can also be configured around your organizational structure, operating process, number
                        of branches, product categories, and future development plans.
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  {points.map((point, i) => (
                    <div className="ld-fancy-heading text-left sv_border_why_choose_us" key={i}>
                      <p className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt">
                          <i className="fa-solid fa-circle-check" style={{ color: 'black' }}></i>{' '}
                          {point}
                        </span>
                      </p>
                    </div>
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
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/5.webp" width="585" height="841" style={{ maxWidth: '100%', height: 'auto' }} className="vc_single_image-img attachment-full" alt="Girl giving thumbs up" title="girl-thumbs-up" loading="eager" decoding="async" />
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
  )
}
