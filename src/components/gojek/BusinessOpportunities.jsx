import { useState } from 'react'
import { businessOpportunities } from '../../data/gojek/gojekData.js'

export default function BusinessOpportunities() {
  const [tab, setTab] = useState(0)
  const active = businessOpportunities[tab]

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>Business Opportunities with the Gojek Clone</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>The modular platform can support different on-demand business categories and local service models.</span>
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
                  <div className="tabs tabs custom-gojek-tab">
                    <ul className="nav tabs-nav" role="tablist">
                      {businessOpportunities.map((cat, i) => (
                        <li role="presentation" key={cat.id} className={`h5${tab === i ? ' active' : ''}`}>
                          <a href={`#biz-${cat.id}`} role="tab" onClick={(e) => { e.preventDefault(); setTab(i) }}>
                            <span className="tabs-nav-icon"><i className={cat.icon}></i></span>{cat.navLabel}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="tabs-content">
                      <div role="tabpanel" className="tabs-pane fade active in">
                        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
                          {active.items.map((item) => (
                            <div id={`ld_content_box_${active.id}_${item.title}`} className="fancy-box fancy-box-case-study scheme-light" key={item.title}>
                              <div className="fancy-box-contents border-radius-5">
                                <div className="cb-img-container border-radius-5">
                                  <figure className="fancy-box-image border-radius-5">
                                    <img src={item.image} alt={item.title} loading="lazy" style={{ width: '100%' }} />
                                  </figure>
                                </div>
                                <div className="fancy-box-header">
                                  {item.category && (
                                    <span className="ld-cb-cat font-weight-medium text-uppercase ltr-sp-15"><p>{item.category}</p></span>
                                  )}
                                  <h3>{item.title}</h3>
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
