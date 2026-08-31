import CloneScriptImage from '../shared/CloneScriptImage.jsx'

export default function HowItWorks() {
  return (
    <>
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <header className="fancy-title text-center">
                      <h2>How Does the Uber Clone Work?</h2>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}><span style={{ fontWeight: 400 }}>The Solution Creates a Structured Connection Between Passengers, Drivers, and Platform Administrators,</span></p>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container-fluid">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <CloneScriptImage src="/wp-content/uploads/2025/02/uberclone-workflow-1.png" width="1440" height="2235" className="vc_single_image-img attachment-full" alt="uberclone-workflow" title="uberclone-workflow" loading="lazy" />
                        </div>
                      </figure>
                    </div>
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <CloneScriptImage src="/wp-content/uploads/2025/02/uberclone-workflow.png" width="1440" height="1466" className="vc_single_image-img attachment-full" alt="taxi-booing-workflow" title="taxi-booing-workflow" loading="lazy" />
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
    </>
  )
}
