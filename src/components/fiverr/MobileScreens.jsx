import { mobileScreens, mobileScreensAlt } from '../../data/fiverr/fiverrData.js'

export default function MobileScreens() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container-fluid">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-8 vc_col-sm-offset-1 vc_col-xs-offset-1 vc_col-xs-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Fiverr Clone Mobile Application Screens</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container-fluid">
        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 20 }}>
          {mobileScreens.map((src, i) => (
            <div className="wpb_single_image wpb_content_element vc_align_left" key={i}>
              <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper vc_box_border_grey">
                  <img src={src} className="vc_single_image-img attachment-full" alt={mobileScreensAlt[i] || `Fiverr Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
