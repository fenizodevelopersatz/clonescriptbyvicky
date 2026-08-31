import { useContactForm } from '../../hooks/useContactForm.js'

export default function ContactForm() {
  const { values, handleChange, handleSubmit, submitted, status, errorMessage } = useContactForm(
    {
      name: '',
      email: '',
      phone: '',
      country: '',
      message: '',
      consent: true,
    },
    { enableApiSend: true, subject: 'New Contact Form Submission (Contact Us page)' }
  )

  if (submitted) {
    return (
      <div className="lqd-contact-form lqd-contact-form-inputs-round lqd-contact-form-button-round vc_custom_1769413463558">
        <div className="wpcf7-response-output" role="status">
          Thanks for reaching out! We&rsquo;ll get back to you shortly.
        </div>
      </div>
    )
  }

  return (
    <div className="lqd-contact-form lqd-contact-form-inputs-round lqd-contact-form-button-round vc_custom_1769413463558">
      <div className="wpcf7">
        <form className={`wpcf7-form ${status}`} onSubmit={handleSubmit}>
          <div className="wpcf7-response-output" role="status">{errorMessage}</div>
          <div className="row">
            <div className="col-sm-6">
              <p>
                <span className="wpcf7-form-control-wrap">
                  <input
                    size="40"
                    maxLength="400"
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid"
                    required
                    placeholder="Enter Full Name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </span>
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <span className="wpcf7-form-control-wrap">
                  <input
                    size="40"
                    maxLength="400"
                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                    required
                    placeholder="Enter Valid Email Id*"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p className="wpcf7-inline-field">WhatsApp / mobile number *</p>
              <p>
                <span className="wpcf7-form-control-wrap">
                  <input
                    size="40"
                    className="wpcf7-form-control wpcf7-phonetext wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-phonetext form-fluid"
                    required
                    placeholder="9876543210"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </span>
              </p>
            </div>
            <div className="col-sm-6">
              <p className="wpcf7-inline-field">Select Your Country*</p>
              <p>
                <span className="wpcf7-form-control-wrap">
                  <input
                    size="40"
                    className="wpcf7-form-control wpcf7-countrytext wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-countrytext form-fluid"
                    required
                    type="text"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                  />
                </span>
              </p>
            </div>
          </div>
          <p>&nbsp;</p>
          <div className="row">
            <div className="col-sm-12">
              <p>
                <span className="wpcf7-form-control-wrap">
                  <textarea
                    cols="40"
                    rows="2"
                    maxLength="2000"
                    className="wpcf7-form-control wpcf7-textarea"
                    placeholder="Enter your requirement"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                </span>
              </p>
            </div>
          </div>
          <p>
            <span className="wpcf7-form-control-wrap">
              <span className="wpcf7-form-control wpcf7-acceptance optional">
                <span className="wpcf7-list-item">
                  <label>
                    <input type="checkbox" name="consent" checked={values.consent} onChange={handleChange} />
                    <span className="wpcf7-list-item-label">Subscribe on Email Newsletter Contact list for Updates and Offers!</span>
                  </label>
                </span>
              </span>
            </span>
            <br />
            <input
              className="wpcf7-form-control wpcf7-submit has-spinner btn btn-accent"
              type="submit"
              value={status === 'submitting' ? 'Sending…' : 'Submit'}
              disabled={status === 'submitting'}
            />
            <span className="wpcf7-spinner"></span>
          </p>
        </form>
      </div>
    </div>
  )
}
