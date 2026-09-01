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
        <div className="pdf-cta-card">
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
                    <a href="#download-pdf" className="pdf-cta-btn" onClick={(e) => { e.preventDefault(); setIsOpen(true) }}>
                      Download
                      <i className="fa fa-solid fa-cloud-arrow-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && createPortal(
        <div className="pdf-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="pdf-modal" role="dialog" aria-modal="true" aria-labelledby="pdfModalTitle" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pdf-modal-close" onClick={() => setIsOpen(false)} aria-label="Close">
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>

            <header className="pdf-modal-head">
              <h6 id="pdfModalTitle">Fill the Form to Get the Features Document</h6>
              <p>Your Document Will Be Sent Directly to Your Email</p>
            </header>

            {submitted ? (
              <div className="pdf-modal-success" role="status">Thanks! We&rsquo;ll send the document to your email shortly.</div>
            ) : (
              <form className="pdf-modal-form" onSubmit={handleSubmit}>
                <input
                  className="pdf-modal-input"
                  required
                  placeholder="Enter Full Name*"
                  type="text"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                />
                <input
                  className="pdf-modal-input"
                  required
                  placeholder="Enter Valid Email Id*"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <button type="submit" className="pdf-modal-submit">Submit</button>
              </form>
            )}
          </div>
        </div>,
        document.body,
      )}
    </section>
  )
}
