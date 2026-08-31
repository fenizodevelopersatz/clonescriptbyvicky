import { useState } from 'react'
import CloneScriptImage from '../shared/CloneScriptImage.jsx'

export default function MobileScreensTabs({ groups }) {
  const [active, setActive] = useState(0)
  const entries = Object.entries(groups)
  const [, group] = entries[active]

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                    <span className="ld-fh-txt"> UberEats Clone Mobile Application Screens</span>
                  </h2>
                  <div id="fixed-menu2" className="lqd-custom-menu text-center fixed-menu2">
                    <ul className="reset-ul inline-nav menu-items-have-fill">
                      {entries.map(([key, g], i) => (
                        <li key={key} className={active === i ? 'active' : ''}>
                          <a href={`#${key}-mobile`} onClick={(e) => { e.preventDefault(); setActive(i) }}>
                            <i className={`${g.icon} custom-tab-icon`}></i> {g.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container-fluid">
        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
          {group.screens.map((s) => (
            <div className="wpb_single_image wpb_content_element vc_align_left" key={s.image}>
              <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper vc_box_border_grey">
                  {s.image.endsWith('/dine-in-booking.webp') ? (
                    <CloneScriptImage src={s.image} alt={s.alt} loading="lazy" style={{ maxWidth: '100%' }} />
                  ) : (
                    <img src={s.image} alt={s.alt} loading="lazy" style={{ maxWidth: '100%' }} />
                  )}
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
