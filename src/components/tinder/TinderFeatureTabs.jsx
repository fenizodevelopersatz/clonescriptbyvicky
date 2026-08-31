import { useState } from 'react'

export default function TinderFeatureTabs({ groups }) {
  const [active, setActive] = useState(0)
  const group = groups[active]

  return (
    <section className="vc_row wpb_row vc_row-fluid vc_custom_1741591083338 liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div id="fixed-menu" className="lqd-custom-menu text-center fixed-menu">
                    <ul className="reset-ul inline-nav menu-items-have-fill">
                      {groups.map((g, i) => (
                        <li key={g.id}>
                          <a href={`#${g.id}`} onClick={(e) => { e.preventDefault(); setActive(i) }}>
                            <i className={`${g.icon} custom-tab-icon`}></i>{g.label}
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

      <div className="ld-container container">
        <div className="row ld-row vc_row-o-content-middle vc_row-flex">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src={group.image} className="vc_single_image-img attachment-full" alt={group.imageAlt} loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 20px' }}>
                    {group.features.map((f, i) => (
                      <header className="fancy-title" key={i}>
                        <h4>{f.title}</h4>
                        <div className="st-desc">
                          <p><span style={{ fontWeight: 400 }}>{f.desc}</span></p>
                        </div>
                      </header>
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
