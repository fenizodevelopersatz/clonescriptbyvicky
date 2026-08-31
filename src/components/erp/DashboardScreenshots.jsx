import { useEffect, useState } from 'react'
import { dashboardScreenshots, erpDashboardScreens } from '../../data/erp/coreModules.js'
import Dashboard3DPreview from './Dashboard3DPreview.jsx'
import DashboardMockup from '../shared/DashboardMockup.jsx'
import '../shared/SimpleListSection.css'

export default function DashboardScreenshots() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % dashboardScreenshots.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a668890 erp-dashboard-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>ERP Dashboard and Interface Screens</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Preview important parts of the ERP software, including:</span>
                      </p>
                    </div>
                  </header>
                  <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': 2, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
                    {erpDashboardScreens.map((item, i) => (
                      <li key={i}>
                        <i className="fa fa-solid fa-check" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                  <div className="lqd-mockup-device lqd-mockup-imac-style-1 pos-rel erp-dashboard-mockup">
                    <img src="/wp-content/themes/ave/assets/img/mockups/imac/mockup-1.webp" alt="iMac" width="3888" height="3218" style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" decoding="async" />
                    <div style={{ position: 'absolute', top: '4.97%', left: '3.81%', width: '92.36%', height: '62.62%', overflow: 'hidden', containerType: 'inline-size' }}>
                      {dashboardScreenshots[active].type === '3d' ? (
                        <Dashboard3DPreview />
                      ) : (
                        <DashboardMockup {...dashboardScreenshots[active]} />
                      )}
                    </div>
                  </div>
                  <div className="carousel-dots" style={{ textAlign: 'center', marginTop: 16 }}>
                    {dashboardScreenshots.map((_, i) => (
                      <button type="button" key={i} className={`dot${i === active ? ' is-selected' : ''}`} aria-label={`Show screenshot ${i + 1}`} onClick={() => setActive(i)}></button>
                    ))}
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
