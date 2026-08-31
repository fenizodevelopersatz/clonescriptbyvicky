import { useState } from 'react'
import { siteContact } from '../../data/siteContact.js'

export default function LiveDemoTabs() {
  const [tab, setTab] = useState('website')

  const tabs = {
    website: { label: 'User-Facing Demo', url: siteContact.erpStoreDemoUrl, image: '/wp-content/uploads/2026/07/Online-Store.webp', alt: 'ERP online store live demo' },
    admin: { label: 'Administration Dashboard', url: siteContact.erpAdminDemoUrl, image: '/wp-content/uploads/2026/07/admin_dashboard.webp', alt: 'ERP admin dashboard live demo' },
  }

  return (
    <section id="demo" className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a668000 erp-demo-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>Explore the ERP Live Demo</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Use the demonstration platform to review modules, workflows, reports, dashboards, and everyday business processes before selecting the solution.</span>
                      </p>
                    </div>
                  </header>
                  <div className="erp-demo-captions">
                    <div className="iconbox iconbox-heading-xs" style={{ color: '#002692' }}>
                      <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-user"></i></span></div>
                      <div className="contents">
                        <h3 className="font-weight-semibold">User-Facing ERP Demo</h3>
                        <p>See how employees or customers navigate the interface and interact with available functionality.</p>
                      </div>
                    </div>
                    <div className="iconbox iconbox-heading-xs" style={{ color: '#002692' }}>
                      <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-gauge"></i></span></div>
                      <div className="contents">
                        <h3 className="font-weight-semibold">Administration Dashboard Demo</h3>
                        <p>Explore the controls used to manage users, products, inventory, orders, payments, reports, and system settings.</p>
                      </div>
                    </div>
                  </div>
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
                  <div className="tabs tabs-nav-centered tabs-nav-underlined tabs-nav-active-underlined tabs-nav-lg custom-amazon-tab custom-demo-tab">
                    <ul className="nav tabs-nav" role="tablist">
                      {Object.entries(tabs).map(([key, t]) => (
                        <li key={key} role="presentation" className={`font-weight-semibold${tab === key ? ' active' : ''}`}>
                          <a href={`#${key}`} role="tab" onClick={(e) => { e.preventDefault(); setTab(key) }}>{t.label}</a>
                        </li>
                      ))}
                    </ul>
                    <div className="tabs-content">
                      {Object.entries(tabs).map(([key, t]) => (
                        <div key={key} role="tabpanel" className={`tabs-pane fade${tab === key ? ' active in' : ''}`}>
                          {tab === key && (
                            <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex erp-demo-layout">
                              <div className="erp-demo-preview">
                                <img src={t.image} alt={t.alt} loading="lazy" decoding="async" />
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-12 text-center erp-demo-credentials">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="wpb_wrapper-inner">
                                      <div className="iconbox iconbox-inline iconbox-heading-md">
                                        <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"></span></div>
                                        <h3>{t.label}</h3>
                                      </div>
                                      <div className="iconbox iconbox-inline iconbox-circle iconbox-xs">
                                        <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-envelope"></i></span></div>
                                        <h3 className="font-weight-normal"><a href={`mailto:${siteContact.demoEmail}`}>{siteContact.demoEmail}</a></h3>
                                      </div>
                                      <div className="iconbox iconbox-inline iconbox-circle iconbox-xs">
                                        <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-key"></i></span></div>
                                        <h3 className="font-weight-normal">{siteContact.demoPassword}</h3>
                                      </div>
                                      <a href={t.url} target="_blank" rel="noreferrer" className="btn btn-solid btn-xsm round btn-bordered border-thin">
                                        <span>
                                          <span className="btn-txt">View Demo</span>
                                          <span className="btn-icon"><i className="fa fa-solid fa-eye"></i></span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
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
