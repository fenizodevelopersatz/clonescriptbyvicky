import './FeaturePanels.css'
import CloneScriptImage from '../shared/CloneScriptImage.jsx'

function Panel({ roleKey, role }) {
  const left = role.features.slice(0, 3)
  const right = role.features.slice(3, 6)

  return (
    <section id={roleKey} className="swiggy-feature-panel vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-offset-0 vc_col-md-3 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <CloneScriptImage src={role.image} width="300" height="615" className="vc_single_image-img attachment-full" alt={role.imageAlt} loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-1 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  {left.map((f) => (
                    <header className="fancy-title" key={f.title}>
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
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  {right.map((f) => (
                    <header className="fancy-title" key={f.title}>
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
    </section>
  )
}

export default function FeaturePanels({ roles }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading ld-fh-has-fill text-center">
                    <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Main Features</span>
                    </p>
                  </div>
                  <header className="fancy-title text-center">
                    <p>Explore Our Best UberEats Clone Script Robust Features!</p>
                  </header>
                  <div id="fixed-menu" className="lqd-custom-menu lqd-sticky-menu text-center fixed-menu swiggy-fixed-menu">
                    <ul className="reset-ul inline-nav menu-items-have-fill">
                      {Object.entries(roles).map(([key, role]) => (
                        <li key={key}><a href={`#${key}`} data-localscroll="true"><i className={`${role.icon} custom-tab-icon`}></i> {role.label}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {Object.entries(roles).map(([key, role]) => (
        <Panel roleKey={key} role={role} key={key} />
      ))}
    </section>
  )
}
