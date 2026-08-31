import { useState } from 'react'

export default function FaqAccordion({ heading, subheading, faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <h3 className="">{heading}</h3>
                  <h3 className="">{subheading}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  {faqs.map((faq, i) => (
                    <div className={`vc_do_toggle vc_toggle vc_toggle_simple vc_toggle_color_black vc_toggle_size_sm${openIndex === i ? ' vc_toggle_active' : ''}`} key={i}>
                      <div className="vc_toggle_title" onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{ cursor: 'pointer' }}>
                        <h5 style={{ fontSize: 18, color: '#111111', textAlign: 'left' }} className="vc_custom_heading">{faq.q}</h5>
                        <i className="vc_toggle_icon"></i>
                      </div>
                      {openIndex === i && (
                        <div className="vc_toggle_content">
                          <p><span style={{ fontWeight: 400 }}>{faq.a}</span></p>
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
    </section>
  )
}
