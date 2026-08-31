import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useContactForm } from '../../hooks/useContactForm.js'
import './PdfDownloadCta.css'

export default function PdfDownloadCta({ heading, desc, image, imageAlt = '', media }) {
  const [isOpen, setIsOpen] = useState(false)
  const { values, handleChange, handleSubmit, submitted } = useContactForm({ fullname: '', email: '' })
  const hasMedia = Boolean(media || image)

  return (
    <section className={`clonescript-pdf-cta vc_row wpb_row vc_row-fluid liquid-row-shadowbox${hasMedia ? ' clonescript-pdf-cta--illustrated' : ''}`}>
      <div className="ld-container container">
        <div className="clonescript-pdf-cta__panel row ld-row">
          {hasMedia && (
            <div className="clonescript-pdf-cta__media wpb_column vc_column_container vc_col-sm-4 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  {media || <img src={image} width="300" height="300" alt={imageAlt} loading="lazy" decoding="async" />}
                </div>
              </div>
            </div>
          )}
          <div className={`wpb_column vc_column_container ${hasMedia ? 'vc_col-sm-8' : 'vc_col-sm-12 text-center'}`}>
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h3>{heading}</h3>
                    <div className="st-desc">
                      <p><span style={{ color: '#161518' }}>{desc}</span></p>
                    </div>
                  </header>
                  <a href="#download-pdf" className="btn btn-solid btn-sm round btn-bordered border-thin" onClick={(e) => { e.preventDefault(); setIsOpen(true) }}>
                    <span>
                      <span className="btn-txt">Download</span>
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
        <div className="clonescript-pdf-modal" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', zIndex: 2000000000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setIsOpen(false)}>
          <div style={{ background: "#6DFFD8 url('/wp-content/uploads/2024/11/rectangle-39789-2-6749ac8630272.webp') center/cover no-repeat", borderRadius: 20, padding: 30, maxWidth: 480, width: '90%', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
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
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close" style={{ position: 'absolute', top: 10, right: 15, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>X</button>
          </div>
        </div>,
        document.body,
      )}
    </section>
  )
}
