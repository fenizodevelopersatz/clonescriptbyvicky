import { mobileScreens } from '../../data/olx/olxData.js'

export default function MobileScreens() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-sm-offset-2">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> OLX Clone Mobile Application Screens</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container-fluid">
        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, alignItems: 'start' }}>
          {mobileScreens.map((src, i) => (
            <div className="wpb_single_image wpb_content_element vc_align_left" key={i}>
              <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper vc_box_border_grey">
                  <img src={src} className="vc_single_image-img attachment-full" alt={`OLX Clone screen ${i + 1}`} loading="eager" decoding="async" style={{ maxWidth: '100%' }} />
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
