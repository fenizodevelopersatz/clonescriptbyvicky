export default function OverviewVideo() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-1 vc_col-md-10 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> See <span style={{ color: '#002692' }}>CloneScript</span> in Action</span>
                    </h2>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>A quick walkthrough of what we build and how we work with clients.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <video
                    src="/wp-content/clonescript_overview.mp4"
                    controls
                    preload="metadata"
                    style={{ display: 'block', width: '100%', maxWidth: 960, margin: '0 auto', borderRadius: 14, boxShadow: '0 20px 55px rgba(16, 29, 75, 0.14)' }}
                  >
                    Your browser does not support embedded video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
