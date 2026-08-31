import Reveal from '../shared/Reveal.jsx'

export default function YoutubeHero() {
  return (
    <section className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" duration={1.2}>
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt">
                        AI-Powered <span style={{ color: '#ff0022' }}>YouTube Clone</span> for Video Streaming Businesses
                      </span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Build a branded video-sharing and streaming platform with CloneScript. Allow creators to upload videos, build channels, broadcast live content, publish shorts, share music and podcasts, engage viewers, and earn revenue through multiple monetization options.</span>
                      </p>
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>The YouTube Clone can be customized around your content niche, target audience, visual identity, creator policies, subscription model, advertising strategy, and business goals.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="#schedule_form" className="btn btn-solid btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Explore Live Demo</span>
                      <span className="btn-icon"><i className="fas fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">View Packages</span>
                      <span className="btn-icon"><i className="fas fa-dollar-sign"></i></span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
        </div>
      </div>
    </section>
  )
}
