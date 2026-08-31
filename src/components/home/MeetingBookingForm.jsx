import { useContactForm } from '../../hooks/useContactForm.js'

export default function MeetingBookingForm() {
  const { values, handleChange, handleSubmit, submitted, status, errorMessage } = useContactForm(
    {
      fullname: '',
      email: '',
      phone: '',
      message: '',
      consent: true,
    },
    { enableApiSend: true, subject: 'New Meeting Booking Request (Home page)' }
  )

  return (
    <div className="lqd-contact-form">
      <div className="wpcf7">
        {submitted ? (
          <div className="wpcf7-response-output" role="status">
            Thanks! We&rsquo;ve received your request and will get back to you shortly.
          </div>
        ) : (
          <form className={`wpcf7-form ${status}`} onSubmit={handleSubmit}>
            <div className="wpcf7-response-output" role="status">{errorMessage}</div>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <label htmlFor="your-fullname" className="wpcf7-inline-field">Name *</label>
                  <br />
                  <span className="wpcf7-form-control-wrap">
                    <input
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid rounded"
                      id="your-fullname"
                      required
                      placeholder="Enter Full Name"
                      type="text"
                      name="fullname"
                      value={values.fullname}
                      onChange={handleChange}
                    />
                  </span>
                </p>
              </div>
              <div className="col-sm-6">
                <p>
                  <label htmlFor="your-email" className="wpcf7-inline-field">Email *</label>
                  <br />
                  <span className="wpcf7-form-control-wrap">
                    <input
                      className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-fluid rounded"
                      id="your-email"
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
              <div className="col-sm-12">
                <p>
                  <label htmlFor="phone-number" className="wpcf7-inline-field">WhatsApp number</label>
                  <br />
                  <span className="wpcf7-form-control-wrap">
                    <input
                      className="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number form-fluid rounded"
                      id="phone-number"
                      required
                      placeholder="(eg: +91-9876543210)"
                      type="tel"
                      name="phone"
                      inputMode="tel"
                      pattern="[0-9+() -]{7,20}"
                      title="Enter a valid WhatsApp number (7 to 20 digits or common phone symbols)."
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <p>
                  <label htmlFor="your-message" className="wpcf7-inline-field">Message</label>
                  <br />
                  <span className="wpcf7-form-control-wrap">
                    <textarea
                      cols="40"
                      rows="1"
                      className="wpcf7-form-control wpcf7-textarea form-fluid rounded"
                      id="your-message"
                      placeholder="Enter your requirement"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                    ></textarea>
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p>
                <span className="wpcf7-form-control-wrap">
                  <span className="wpcf7-form-control wpcf7-acceptance">
                    <span className="wpcf7-list-item">
                      <label>
                        <input type="checkbox" name="consent" checked={values.consent} onChange={handleChange} />
                        <span className="wpcf7-list-item-label">I'm happy to receive email newsletter and updates.</span>
                      </label>
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <div>
              <p>
                <input
                  className="wpcf7-form-control wpcf7-submit has-spinner btn circle btn-accent"
                  type="submit"
                  value={status === 'submitting' ? 'Sending…' : 'Schedule Now!'}
                  disabled={status === 'submitting'}
                />
                <span className="wpcf7-spinner"></span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
