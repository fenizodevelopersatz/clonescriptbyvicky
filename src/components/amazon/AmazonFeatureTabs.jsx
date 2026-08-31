import { useState } from 'react'

export default function AmazonFeatureTabs({ groups }) {
  const [active, setActive] = useState(0)
  const group = groups[active]

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="tabs tabs-nav-centered tabs-nav-underlined tabs-nav-active-underlined tabs-nav-lg custom-demo-tab">
                    <ul className="nav tabs-nav" role="tablist">
                      {groups.map((g, i) => (
                        <li key={g.id} role="presentation" className={`font-weight-semibold${active === i ? ' active' : ''}`}>
                          <a href={`#${g.id}`} role="tab" onClick={(e) => { e.preventDefault(); setActive(i) }}>
                            <i className={g.icon}></i> {g.label}
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
          <div className="wpb_column vc_column_container vc_col-sm-5 vc_hidden-sm vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src={group.image} width="1440" height="1200" className="vc_single_image-img attachment-full" alt={group.imageAlt} loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-1 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  {group.features.map((f, i) => (
                    <div className="iconbox iconbox-side iconbox-heading-xs" key={i}>
                      <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-circle-check"></i></span></div>
                      <div className="contents">
                        <h3 className="font-weight-semibold">{f.title}</h3>
                        <p><span style={{ fontSize: 14 }}>{f.desc}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
