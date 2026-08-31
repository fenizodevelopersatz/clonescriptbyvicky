import { useState } from 'react'
import { siteContact } from '../../data/siteContact.js'

export default function LiveDemoTabs({ dashboards }) {
  const [tab, setTab] = useState(0)
  const active = dashboards[tab]
  const hasVisual = Boolean(active.visual || active.image)

  return (
    <section id="demo" className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>Live Demo</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Explore the live demo and see how the platform works from every user&rsquo;s perspective.</span>
                      </p>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="tabs tabs-nav-centered tabs-nav-underlined tabs-nav-active-underlined tabs-nav-lg custom-demo-tab">
                    <ul className="nav tabs-nav" role="tablist">
                      {dashboards.map((d, i) => (
                        <li key={i} role="presentation" className={`font-weight-semibold${tab === i ? ' active' : ''}`}>
                          <a href={`#dash-${i}`} role="tab" onClick={(e) => { e.preventDefault(); setTab(i) }}>{d.label}</a>
                        </li>
                      ))}
                    </ul>
                    <div className="tabs-content">
                      <div role="tabpanel" className="tabs-pane fade active in">
                        <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                          <div className={`wpb_column vc_column_container text-center ${hasVisual ? 'vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10' : 'vc_col-sm-12'}`}>
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <div className="iconbox iconbox-inline iconbox-heading-md">
                                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"></span></div>
                                    <h3>{active.label}</h3>
                                  </div>
                                  <div className="iconbox iconbox-inline iconbox-circle iconbox-xs">
                                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-envelope"></i></span></div>
                                    <h3 className="font-weight-normal"><a href={`mailto:${active.email || siteContact.demoEmail}`}>{active.email || siteContact.demoEmail}</a></h3>
                                  </div>
                                  <div className="iconbox iconbox-inline iconbox-circle iconbox-xs">
                                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-key"></i></span></div>
                                    <h3 className="font-weight-normal">{active.password || siteContact.demoPassword}</h3>
                                  </div>
                                  <a href="#" className="btn btn-solid btn-xsm round btn-bordered border-thin">
                                    <span>
                                      <span className="btn-txt">View Demo</span>
                                      <span className="btn-icon"><i className="fa fa-solid fa-eye"></i></span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          {hasVisual && (
                            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="clonescript-demo-tab__visual">
                                    {active.visual || (
                                      <img src={active.image} alt={active.imageAlt || `${active.label} preview`} loading="lazy" decoding="async" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
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
