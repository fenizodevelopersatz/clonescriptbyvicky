import Reveal from '../shared/Reveal.jsx'

export default function WhatsappFeatures({ items }) {
  const pairs = []
  for (let i = 0; i < items.length; i += 2) pairs.push(items.slice(i, i + 2))

  return (
    <section id="standard" className="vc_section section5">
      <section className="vc_row wpb_row vc_row-fluid">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading text-center">
                      <p className="ld-gradient-heading lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Features</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <h2 style={{ textAlign: 'center' }} className="vc_custom_heading">WhatsApp Clone Features</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {pairs.map((pair, p) => (
        <section className="vc_row wpb_row vc_row-fluid vc_custom_1704959199350 liquid-row-shadowbox" key={p}>
          <div className="ld-container container">
            <div className="row ld-row">
              {pair.map((item, i) => (
                <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-6" key={i}>
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <Reveal delay={0.08 * i}>
                          <div className="iconbox iconbox-side text-left iconbox-filled iconbox-filled-hover">
                            <div className="iconbox-icon-wrap">
                              <span className="iconbox-icon-container"><i className={item.icon}></i></span>
                            </div>
                            <div className="contents">
                              <h3>{item.title}</h3>
                              <p><span style={{ fontWeight: 400 }}>{item.desc}</span></p>
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
      ))}
    </section>
  )
}
