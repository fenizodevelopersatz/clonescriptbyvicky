import Reveal from './Reveal.jsx'

export default function ProcessSteps({ steps }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-section-spaced cs-process-steps">
      <div className="ld-container container">
        <div className="row ld-row">
          {steps.map((s, i) => (
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-sm-offset-1 vc_col-has-fill" key={i}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <Reveal delay={0.1 * (i % 3)}>
                      <div className="ld-pb text-center">
                        <div className="ld-pb-top ld-pb-icon">
                          <span className="ld-pb-icon-wrap"><i className={s.icon}></i></span>
                        </div>
                        <div className="ld-pb-content">
                          <h3>{s.title}</h3>
                          <p><span style={{ color: '#6d6d6d' }}>{s.desc}</span></p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
