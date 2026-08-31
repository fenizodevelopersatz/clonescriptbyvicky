export default function ErpCtaAndImage() {
  const scrollToSection = (event, selector) => {
    event.preventDefault()
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
    const section = document.querySelector(selector)
    if (!section) return

    const header = document.querySelector('.mainbar-wrap')
    const headerHeight = header?.getBoundingClientRect().height ?? 95
    const flowOffset = header?.classList.contains('is-stuck') ? 0 : headerHeight
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - flowOffset - 50
    window.history.pushState(null, '', selector)
    window.scrollTo({ top, behavior: 'instant' })
  }

  return (
    <>
      <section className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox-6a665a663ca52 erp-hero-actions">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
            <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                    <button type="button" data-scroll-target="#demo" className="btn btn-solid btn-sm round btn-bordered border-thin btn-icon-left" onClick={(event) => scrollToSection(event, '#demo')}>
                      <span>
                        <span className="btn-txt">Explore Demo</span>
                        <span className="btn-icon"><i className="fa fa-solid fa-play"></i></span>
                      </span>
                    </button>
                    <button type="button" data-scroll-target="#prices" className="btn btn-default btn-sm round btn-bordered border-thin btn-icon-left" onClick={(event) => scrollToSection(event, '#prices')}>
                      <span>
                        <span className="btn-txt">View Plans</span>
                        <span className="btn-icon"><i className="fa fa-solid fa-dollar-sign"></i></span>
                      </span>
                    </button>
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          </div>
        </div>
      </section>

      <section data-bg-image="url" className="vc_row wpb_row vc_row-fluid vc_custom_1741592158177 liquid-row-shadowbox-6a665a663ede2 vc_row-has-fill vc_row-has-bg erp-hero-media">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-xs">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <img src="/wp-content/uploads/2026/07/erp-software.webp" width="1140" height="679" className="vc_single_image-img attachment-full" alt="ERP software product guide cover" title="erp-software" fetchPriority="high" decoding="async" />
                        </div>
                      </figure>
                    </div>
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
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
