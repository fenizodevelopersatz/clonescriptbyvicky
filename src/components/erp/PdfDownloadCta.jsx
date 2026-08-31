import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useContactForm } from '../../hooks/useContactForm.js'
import GuideCoverPreview from './GuideCoverPreview.jsx'

export default function PdfDownloadCta() {
  const [isOpen, setIsOpen] = useState(false)
  const { values, handleChange, handleSubmit, submitted } = useContactForm({ fullname: '', email: '' })

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a666a000 erp-guide-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center vc_col-sm-offset-1">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Let&rsquo;s Build Smarter<span style={{ color: '#002692' }}> Business Solutions Together</span></span>
                    </h2>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>
                          Turn your business vision into a practical solution with the help of our experienced team. Get started
                          with the best ERP software and support your business from setup to growth.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container erp-guide-container">
        <div className="row ld-row erp-guide-panel">
          <div className="erp-guide-visual">
            <GuideCoverPreview />
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center erp-guide-copy">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h3>Explore the Complete ERP Feature Set</h3>
                    <div className="st-desc">
                      <p><span style={{ color: '#161518' }}>Review the full range of ERP capabilities and understand how the platform can be adapted to different departments and business requirements.</span></p>
                    </div>
                  </header>
                  <a href="#download-pdf" className="btn btn-solid btn-sm round btn-bordered border-thin" onClick={(e) => { e.preventDefault(); setIsOpen(true) }}>
                    <span>
                      <span className="btn-txt">Download Complete Feature Guide</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-cloud-arrow-down"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && createPortal(
        <div className="lqd-modal" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setIsOpen(false)}>
          <div className="lqd-modal-inner" style={{ background: "#6DFFD8 url('/wp-content/uploads/2024/11/rectangle-39789-2-6749ac8630272.webp') center/cover no-repeat", borderRadius: 20, padding: 30, maxWidth: 480, width: '90%' }} onClick={(e) => e.stopPropagation()}>
            <div className="lqd-modal-content">
              <header className="fancy-title">
                <h6>Fill the Form to Get the Features Document</h6>
                <div className="st-desc">
                  <p><span style={{ fontSize: 14 }}>Your Document Will Be Sent Directly to Your Email</span></p>
                </div>
              </header>
              <div className="lqd-contact-form lqd-contact-form-inputs-round lqd-contact-form-button-round">
                {submitted ? (
                  <div className="wpcf7-response-output" role="status">Thanks! We&rsquo;ll send the document to your email shortly.</div>
                ) : (
                  <form className="wpcf7-form init" onSubmit={handleSubmit}>
                    <p>
                      <span className="wpcf7-form-control-wrap">
                        <input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid" required placeholder="Enter Full Name*" type="text" name="fullname" value={values.fullname} onChange={handleChange} />
                      </span>
                    </p>
                    <p>
                      <span className="wpcf7-form-control-wrap">
                        <input className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-fluid" required placeholder="Enter Valid Email Id*" type="email" name="email" value={values.email} onChange={handleChange} />
                      </span>
                    </p>
                    <p>
                      <input className="wpcf7-form-control wpcf7-submit has-spinner btn btn-accent" type="submit" value="Submit" />
                    </p>
                  </form>
                )}
              </div>
              <button type="button" className="pum-close" onClick={() => setIsOpen(false)} aria-label="Close" style={{ position: 'absolute', top: 10, right: 15, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>X</button>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </section>
  )
}
