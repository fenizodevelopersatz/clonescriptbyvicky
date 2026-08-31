import { useLocation, useNavigate } from 'react-router-dom'
import { useContactForm } from '../../hooks/useContactForm.js'
import { useCart } from '../../hooks/useCart.js'
import { demoProducts } from '../../data/demoProducts.js'
import { siteContact } from '../../data/siteContact.js'
import { clearCart, getCart, getCartTotal } from '../../lib/cart.js'
import { formatMoney, getCurrency, parsePrice } from '../../lib/currency.js'

export default function DemoForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { items: cartItems, total: cartTotalUsd } = useCart()

  // This page runs under MinimalLayout (no site header/nav) to keep focus on
  // the form, so it needs its own way out: return to wherever the visitor
  // came from inside the app, or home if they landed here directly (no prior
  // in-app history entry to go back to).
  const goBack = () => {
    if (location.key !== 'default') navigate(-1)
    else navigate('/')
  }

  const { values, handleChange, handleSubmit, submitted, status, errorMessage } = useContactForm(
    {
      name: '',
      email: '',
      phone: '',
      product: demoProducts[0],
      consent: true,
    },
    {
      enableApiSend: true,
      subject: 'New Demo Request (Schedule Free Demo page)',
      // Read straight from localStorage at submit time (not the render-time
      // cart hook) so the payload always reflects whatever is in the cart
      // the instant "Schedule Now" is clicked.
      getExtraPayload: () => {
        const cart = getCart()
        const currency = getCurrency()
        return {
          cart,
          cartTotalUsd: getCartTotal(cart),
          currency,
        }
      },
      // The cart only clears once the demo request has actually reached the
      // API -- a failed send (e.g. offline) leaves it intact so nothing is
      // silently lost.
      onSuccess: clearCart,
    }
  )

  return (
    <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div
            className="wpb_wrapper-inner"
            style={{
              background: 'linear-gradient(135deg, #efeafe 0%, #eef2ff 100%)',
              borderRadius: 24,
              padding: '32px',
            }}
          >
            <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1740121483577 vc_row-has-fill vc_row-o-content-middle vc_row-flex">
              <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-8 text-left text-sm-left text-xs-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <button
                        type="button"
                        onClick={goBack}
                        className="btn btn-naked btn-icon-left"
                        style={{ paddingLeft: 0 }}
                      >
                        <span>
                          <span className="btn-txt">Back</span>
                          <span className="btn-icon"><i className="fas fa-arrow-left"></i></span>
                        </span>
                      </button>
                      <header className="fancy-title vc_custom_1739606732549">
                        <h3>Pick A Time That Suits You!</h3>
                        <div className="st-desc">
                          <p style={{ textAlign: 'left', margin: 0 }}>Select A Convenient Time for A One-On-One Meeting With Our Expert, or use Back if you&rsquo;d like to tour more products first.</p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 text-center text-xs-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper vc_custom_1739607427981">
                    <div className="wpb_wrapper-inner">
                      <div className="header-module">
                        <a href={siteContact.calendlyUrl} target="_blank" rel="noreferrer" className="btn btn-solid text-capitalize btn-xsm circle btn-bordered border-thick btn-bordered-gradient btn-icon-left btn-icon-circle pulse-btn">
                          <span>
                            <span className="btn-txt">Pick A Time</span>
                            <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {cartItems.length > 0 && (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: '20px 24px',
                  margin: '20px 0',
                  border: '1px solid #e1defe',
                }}
              >
                <h4 style={{ margin: '0 0 12px', fontSize: 16 }}>Your Investment</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 12,
                        padding: '8px 0',
                        borderBottom: '1px solid #f0f0f5',
                        fontSize: 14,
                      }}
                    >
                      <span>{item.productName} &mdash; {item.planName}</span>
                      <span style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
                        {formatMoney(parsePrice(item.price), 'USD')} <span style={{ color: '#767676', fontWeight: 400 }}>({formatMoney(parsePrice(item.price), 'INR')})</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, fontWeight: 700 }}>
                  <span>Total</span>
                  <span>
                    {formatMoney(cartTotalUsd, 'USD')} <span style={{ color: '#767676', fontWeight: 400 }}>({formatMoney(cartTotalUsd, 'INR')})</span>
                  </span>
                </div>
              </div>
            )}

            <div className="ld-empty-space">
              <span className="liquid_empty_space_inner"></span>
            </div>

            <header className="fancy-title text-center vc_custom_1739963917506">
              <h2 className="lined-alt">
                <i className="line-alt"></i> OR <i className="line-alt"></i>
              </h2>
            </header>

            <div className="vc_row wpb_row vc_inner vc_row-fluid liquid-row-shadowbox-6a665a450be70">
              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper vc_custom_1740121497676">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Get Exclusive Demo Details !</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>Fill Out the Form Now to Explore the Demo Instantly</p>
                        </div>
                      </header>

                      <div className="lqd-contact-form lqd-contact-form-inputs-round lqd-contact-form-button-round">
                        {submitted ? (
                          <div className="wpcf7-response-output" role="status">
                            Thanks! We&rsquo;ll be in touch to confirm your demo.
                          </div>
                        ) : (
                          <div className="wpcf7">
                            <form className={`wpcf7-form ${status}`} onSubmit={handleSubmit}>
                              <div className="wpcf7-response-output" role="status">{errorMessage}</div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <p>
                                    <label htmlFor="demo-name" className="wpcf7-inline-field">Name *</label>
                                    <br />
                                    <span className="wpcf7-form-control-wrap">
                                      <input
                                        size="40"
                                        maxLength="400"
                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid"
                                        id="demo-name"
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
                                    <label htmlFor="demo-email" className="wpcf7-inline-field">Email *</label>
                                    <br />
                                    <span className="wpcf7-form-control-wrap">
                                      <input
                                        size="40"
                                        maxLength="400"
                                        className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-fluid"
                                        id="demo-email"
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
                                    <label htmlFor="demo-phone" className="wpcf7-inline-field">WhatsApp/ Mobile number *</label>
                                    <br />
                                    <span className="wpcf7-form-control-wrap">
                                      <input
                                        size="40"
                                        className="wpcf7-form-control wpcf7-phonetext wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-phonetext form-fluid"
                                        id="demo-phone"
                                        required
                                        placeholder="Ex:+912143658798"
                                        type="text"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                      />
                                    </span>
                                  </p>
                                </div>
                                <div className="col-sm-12">
                                  <p>
                                    <label htmlFor="demo-product" className="wpcf7-inline-field">Select Product*</label>
                                    <br />
                                    <span className="wpcf7-form-control-wrap">
                                      <select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" id="demo-product" required name="product" value={values.product} onChange={handleChange}>
                                        {demoProducts.map((p) => (
                                          <option value={p} key={p}>{p}</option>
                                        ))}
                                      </select>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  <p>
                                    <span className="wpcf7-form-control-wrap">
                                      <span className="wpcf7-form-control wpcf7-acceptance optional">
                                        <span className="wpcf7-list-item">
                                          <label>
                                            <input type="checkbox" name="consent" checked={values.consent} onChange={handleChange} />
                                            <span className="wpcf7-list-item-label">I'm happy to receive email newsletters and updates.</span>
                                          </label>
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div>
                                <p>
                                  <input
                                    className="wpcf7-form-control wpcf7-submit has-spinner btn btn-accent"
                                    type="submit"
                                    value={status === 'submitting' ? 'Sending…' : 'Schedule Now'}
                                    disabled={status === 'submitting'}
                                  />
                                  <span className="wpcf7-spinner"></span>
                                </p>
                              </div>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
