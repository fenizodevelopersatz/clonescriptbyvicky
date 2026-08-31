import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { readyMadeSolutions } from '../../data/readyMadeSolutions.js'

export default function ReadyMadeSolutions() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return undefined

    const id = setInterval(() => {
      setActive((i) => (i + 1) % readyMadeSolutions.length)
    }, 5000)
    return () => clearInterval(id)
  }, [isPaused])

  const item = readyMadeSolutions[active]
  const isInternal = item.link !== '#'

  return (
    <section className="clonescript-ready-made">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40b4cac">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Premium Products</span>
                      </p>
                    </div>
                    <header className="fancy-title text-center">
                      <h2>Ready-Made Solutions</h2>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40b582b">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div
                      className="clonescript-solution-carousel carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1"
                      aria-roledescription="carousel"
                      aria-label="Ready-made solutions"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onFocusCapture={() => setIsPaused(true)}
                      onBlurCapture={() => setIsPaused(false)}
                    >
                      <div className="carousel-items row">
                        <div className="carousel-item">
                          <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex" key={active}>
                            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_wrapper-inner">
                                    <div className="wpb_single_image wpb_content_element vc_align_left">
                                      <figure className="wpb_wrapper vc_figure">
                                        <div className="vc_single_image-wrapper vc_box_border_grey">
                                          <img src={item.image} width={item.imageWidth} height={item.imageHeight} className="vc_single_image-img attachment-full" alt={item.imageAlt} title={item.imageAlt} loading="lazy" decoding="async" />
                                        </div>
                                      </figure>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_wrapper-inner">
                                    <header className="fancy-title">
                                      <h2>{item.title}</h2>
                                      <div className="st-desc">
                                        <p>{item.desc}</p>
                                      </div>
                                    </header>
                                    <p>
                                      {isInternal ? (
                                        <Link to={item.link} target="_blank" className="btn btn-naked btn-icon-left btn-icon-circle" style={{ marginRight: 15 }}>
                                          <span>
                                            <span className="btn-txt">Live Demo</span>
                                            <span className="btn-icon"><i className="far fa-play-circle"></i></span>
                                          </span>
                                        </Link>
                                      ) : (
                                        <a href={item.link} target="_blank" rel="noreferrer" className="btn btn-naked btn-icon-left btn-icon-circle" style={{ marginRight: 15 }}>
                                          <span>
                                            <span className="btn-txt">Live Demo</span>
                                            <span className="btn-icon"><i className="far fa-play-circle"></i></span>
                                          </span>
                                        </a>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clonescript-solution-carousel__dots carousel-dots" aria-label="Choose a ready-made solution">
                        {readyMadeSolutions.map((_, i) => (
                          <button
                            type="button"
                            key={i}
                            className={`dot${i === active ? ' is-selected' : ''}`}
                            aria-label={`Show ${readyMadeSolutions[i].title}`}
                            onClick={() => setActive(i)}
                          ></button>
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
    </section>
  )
}
