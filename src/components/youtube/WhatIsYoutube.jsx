import Reveal from '../shared/Reveal.jsx'

export default function WhatIsYoutube() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="left">
                  <header className="fancy-title">
                    <h2>What Is a YouTube Clone?</h2>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>A YouTube Clone is a ready-made software solution for building a video-sharing and multimedia-streaming platform. It gives creators the tools to publish content while viewers can discover, stream, react to, comment on, save, and share videos.</span></p>
                      <p><span style={{ fontWeight: 400 }}>The platform can support long-form videos, short clips, live broadcasts, music, podcasts, playlists, subscriptions, advertisements, and premium content.</span></p>
                      <p><span style={{ fontWeight: 400 }}>Starting with an established software foundation can reduce the time required to develop essential video-platform functionality from the beginning.</span></p>
                    </div>
                  </header>
                  <a href="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                    <span>
                      <span className="btn-txt">Schedule a Platform Demo</span>
                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="right">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2025/08/youtube-app-2-scaled.webp" width="307" height="640" alt="youtube app" loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
