import { useContactForm } from '../../hooks/useContactForm.js'

export default function SupportForm() {
  const { values, handleChange, handleSubmit, submitted, status, errorMessage } = useContactForm(
    {
      fullname: '',
      email: '',
      invoice: '',
      product: '',
      query: '',
      logindetails: '',
      requirement: '',
    },
    { enableApiSend: true, subject: 'New Support Request (Contact Us page)' }
  )

  if (submitted) {
    return (
      <div className="lqd-contact-form lqd-contact-form-inputs-round lqd-contact-form-button-round vc_custom_1769413486789">
        <div className="wpcf7-response-output" role="status">
          Thanks! Your support request has been received.
        </div>
      </div>
    )
  }

  return (
    <div className="lqd-contact-form lqd-contact-form-inputs-round lqd-contact-form-button-round vc_custom_1769413486789">
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
                    name="fullname"
                    value={values.fullname}
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
                    placeholder="Enter Purchase Email Id"
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
              <p>
                <span className="wpcf7-form-control-wrap">
                  <input
                    size="40"
                    maxLength="400"
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid"
                    required
                    placeholder="Enter Invoice number"
                    type="text"
                    name="invoice"
                    value={values.invoice}
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
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid"
                    required
                    placeholder="Purchased Product"
                    type="text"
                    name="product"
                    value={values.product}
                    onChange={handleChange}
                  />
                </span>
              </p>
            </div>
          </div>
          <p className="wpcf7-inline-field">Type of Query?</p>
          <div className="row">
            <div className="col-sm-12">
              <p>
                <span className="wpcf7-form-control-wrap">
                  <select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" required name="query" value={values.query} onChange={handleChange}>
                    <option value="">&mdash;Please choose an option&mdash;</option>
                    <option value="Free Installation">Free Installation</option>
                    <option value="General Support">General Support</option>
                    <option value="Customization">Customization</option>
                    <option value="Bug Report">Bug Report</option>
                  </select>
                </span>
              </p>
            </div>
            <div className="col-sm-12">
              <p>
                <span className="wpcf7-form-control-wrap">
                  <textarea
                    cols="40"
                    rows="2"
                    maxLength="2000"
                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                    required
                    placeholder="Cpanel & wp-admin Details *"
                    name="logindetails"
                    value={values.logindetails}
                    onChange={handleChange}
                  ></textarea>
                </span>
              </p>
            </div>
            <div className="col-sm-12">
              <p>
                <span className="wpcf7-form-control-wrap">
                  <textarea
                    cols="40"
                    rows="2"
                    maxLength="2000"
                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                    required
                    placeholder="Explain your query*"
                    name="requirement"
                    value={values.requirement}
                    onChange={handleChange}
                  ></textarea>
                </span>
              </p>
            </div>
          </div>
          <p>
            <input
              className="wpcf7-form-control wpcf7-submit has-spinner btn btn-accent"
              type="submit"
              value={status === 'submitting' ? 'Sending…' : 'Send Request'}
              disabled={status === 'submitting'}
            />
            <span className="wpcf7-spinner"></span>
          </p>
        </form>
      </div>
    </div>
  )
}
