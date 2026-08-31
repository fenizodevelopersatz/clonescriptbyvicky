import { recentBlogPosts } from '../../data/recentBlogPosts.js'
import './JournalTeaser.css'

export default function BlogTeaser() {
  return (
    <section id="blog" className="vc_row wpb_row vc_row-fluid vc_custom_1540648603831 row-contains-padding-top row-contains-padding-bottom liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-sm-offset-2 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Our journal</span>
                    </h2>
                  </div>
                  <div className="ld-fancy-heading">
                    <p className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Explore interesting articles updated daily</span>
                    </p>
                  </div>
                  <div className="vc_empty_space" style={{ height: 50 }}><span className="vc_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="liquid-blog-posts journal-teaser">
                    <div className="liquid-blog-grid row journal-teaser__grid">
                      {recentBlogPosts.map((post, i) => (
                        <div className="col-md-4" key={i}>
                          <article className="liquid-lp post type-post status-publish format-standard has-post-thumbnail hentry journal-teaser__card">
                            <figure className="liquid-lp-media rounded journal-teaser__media">
                              <a href="#"><img src={post.image} width="740" height="500" className="attachment-liquid-rounded-blog size-liquid-rounded-blog wp-post-image journal-teaser__image" alt={post.alt} loading="lazy" decoding="async" /></a>
                            </figure>
                            <header className="liquid-lp-header journal-teaser__header">
                              <h2 className="entry-title liquid-lp-title h5"><a href="#" rel="bookmark">{post.title}</a></h2>
                              <time className="liquid-lp-date font-style-italic size-lg">{post.date}</time>
                            </header>
                          </article>
                        </div>
                      ))}
                    </div>
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
