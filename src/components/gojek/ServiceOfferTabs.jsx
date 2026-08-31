import { useState } from 'react'
import { serviceOffers } from '../../data/gojek/gojekData.js'
import LaunchCta from '../shared/LaunchCta.jsx'

function ServiceCategory({ offer }) {
  const [tab, setTab] = useState(0)
  const active = offer.tabs[tab]
  const half = Math.ceil(active.features.length / 2)

  return (
    <section id={offer.id} className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="tabs tabs tabs-nav-side tabs-nav-side-alt tabs-nav-side-block custom-tab-mshop">
                    <ul className="nav tabs-nav" role="tablist">
                      {offer.tabs.map((t, i) => (
                        <li role="presentation" key={t.label} className={`h5${tab === i ? ' active' : ''}`}>
                          <a href={`#${offer.id}-${i}`} role="tab" onClick={(e) => { e.preventDefault(); setTab(i) }}>{t.label}</a>
                        </li>
                      ))}
                    </ul>
                    <div className="tabs-content">
                      <div role="tabpanel" className="tabs-pane fade active in">
                        <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <div className="wpb_single_image wpb_content_element vc_align_left">
                                    <figure className="wpb_wrapper vc_figure">
                                      <div className="vc_single_image-wrapper vc_box_border_grey">
                                        <img src={active.image} alt={active.label} loading="lazy" />
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {[0, 1].map((col) => (
                            <div className="wpb_column vc_column_container vc_col-sm-4" key={col}>
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_wrapper-inner">
                                    {active.features.slice(col * half, col * half + half).map((f) => (
                                      <div className="iconbox iconbox-inline iconbox-square" key={f.title} data-shape-border="1">
                                        <div className="iconbox-icon-wrap">
                                          <span className="iconbox-icon-container"><i className={f.icon}></i></span>
                                        </div>
                                        <h3 className="font-weight-normal">{f.title}</h3>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
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
        </div>
      </div>
    </section>
  )
}

export default function ServiceOfferTabs() {
  return (
    <section className="vc_section">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <header className="fancy-title text-center">
                      <h2>What Does the Gojek Clone Offer?</h2>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>The solution includes dedicated interfaces for every participant involved in the multi-service marketplace.</p>
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
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <img src="/wp-content/uploads/2025/04/What-We-Offer.webp" alt="What We Offer" loading="lazy" />
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

      <LaunchCta
        heading="Start Your All-in-One Service Business"
        desc="Launch a platform where customers can access transportation, delivery, shopping, professional assistance, parcel handling, and rental services without switching between multiple applications. Choose the modules required for your initial launch and activate additional services as your business grows."
      />

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Main Features</span>
                      </p>
                    </div>
                    <header className="fancy-title text-center">
                      <p>The platform contains separate modules for eCommerce, multi-vendor ordering, on-demand services, parcel delivery, cab booking, and vehicle rentals.</p>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid vc_row-has-fill">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div id="fixed-menu" className="lqd-custom-menu lqd-sticky-menu text-center fixed-menu">
                      <ul className="reset-ul inline-nav menu-items-have-fill">
                        {serviceOffers.map((offer) => (
                          <li key={offer.id}><a href={`#${offer.id}`}>{offer.navLabel}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {serviceOffers.map((offer) => (
        <ServiceCategory offer={offer} key={offer.id} />
      ))}
    </section>
  )
}
