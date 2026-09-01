import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useContactForm } from '../../hooks/useContactForm.js'
import { demoProducts } from '../../data/demoProducts.js'
import { clearCart, getCart, getCartTotal } from '../../lib/cart.js'
import { getCurrency } from '../../lib/currency.js'
import './DemoRequestPopup.css'

// Sitewide "Get Exclusive Demo Details" popup -- the same lead form as the
// dedicated /schedule-free-demo page, offered as a timed popup on every
// other clone page so visitors don't have to go find it. Skipped on the
// homepage (its own hero/CTAs already carry this job) and never rendered on
// /schedule-free-demo itself (that route mounts MinimalLayout, which doesn't
// render this component -- showing the same form as a popup over the form's
// own page would be redundant). Replaces the old FlashSalePopup/
// CryptoWalletLeadPopup pair so only one popup policy exists sitewide.
const SKIP_KEY = 'clonescript_demo_popup_skip'
const SKIP_MS = 30 * 60 * 1000
const SHOW_DELAY_MS = 30000
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}

export default function DemoRequestPopup() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [validationError, setValidationError] = useState('')
  const dialogRef = useRef(null)
  const lastFocusedRef = useRef(null)

  const { values, handleChange, handleSubmit, submitted, status, errorMessage } = useContactForm(
    { name: '', email: '', phone: '', product: demoProducts[0], consent: true },
    {
      enableApiSend: true,
      subject: 'New Demo Request (Site Popup)',
      // Read straight from localStorage at submit time so the payload
      // always reflects whatever is in the cart the instant this is sent.
      getExtraPayload: () => {
        const cart = getCart()
        return { cart, cartTotalUsd: getCartTotal(cart), currency: getCurrency() }
      },
      onSuccess: clearCart,
    }
  )

  function skip() {
    setOpen(false)
    localStorage.setItem(SKIP_KEY, String(Date.now()))
  }

  // Timed trigger, re-armed on every route change: dismissing it on one
  // page starts a fresh timer on the next, but a skip is honored for
  // SKIP_MS regardless of how many pages the visitor moves through.
  useEffect(() => {
    setOpen(false)
    if (pathname === '/') return undefined

    const skippedAt = Number(localStorage.getItem(SKIP_KEY) || 0)
    if (Date.now() - skippedAt < SKIP_MS) return undefined

    const id = setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => clearTimeout(id)
  }, [pathname])

  useEffect(() => {
    if (!submitted) return undefined
    const id = setTimeout(() => setOpen(false), 3000)
    return () => clearTimeout(id)
  }, [submitted])

  // Focus trap: while open, Tab/Shift+Tab cycle inside the dialog only and
  // Escape closes it; focus returns to whatever had it before opening.
  useEffect(() => {
    if (!open) return undefined

    lastFocusedRef.current = document.activeElement
    const dialog = dialogRef.current
    const getFocusable = () => Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR))
    const initial = dialog.querySelector('#drpName') || getFocusable()[0] || dialog
    initial.focus()

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        skip()
        return
      }
      if (e.key !== 'Tab') return
      const items = getFocusable()
      if (!items.length) return
      const firstEl = items[0]
      const lastEl = items[items.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      lastFocusedRef.current?.focus?.()
    }
  }, [open])

  function onSubmit(e) {
    e.preventDefault()
    if (!values.name.trim()) {
      setValidationError('Please enter your name.')
      return
    }
    if (!isValidEmail(values.email)) {
      setValidationError('Please enter a valid email address.')
      return
    }
    if (!isValidPhone(values.phone)) {
      setValidationError('Please enter a valid mobile number (7–15 digits).')
      return
    }
    setValidationError('')
    handleSubmit(e)
  }

  if (!open) return null

  const displayedError = validationError || (status === 'failed' ? errorMessage : '')

  return (
    <>
      <div className="drp-overlay" onClick={skip} aria-hidden="true" />
      <div className="drp" role="dialog" aria-modal="true" aria-labelledby="drpTitle" ref={dialogRef} tabIndex={-1}>
        <button type="button" className="drp-close" aria-label="Close" onClick={skip}>
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="drp-success">
            <div className="drp-success-icon"><i className="fa-solid fa-check" aria-hidden="true" /></div>
            <p className="drp-success-title">You&rsquo;re all set!</p>
            <p className="drp-success-sub">We&rsquo;ll be in touch to confirm your demo.</p>
          </div>
        ) : (
          <>
            <div className="drp-header">
              <h3 id="drpTitle" className="drp-title">Get Exclusive Demo Details!</h3>
              <p className="drp-sub">Fill out the form now to explore the demo instantly.</p>
            </div>

            <form onSubmit={onSubmit} noValidate>
              <div className="drp-row">
                <div className="drp-field">
                  <label className="drp-label" htmlFor="drpName">Name <span className="drp-req">*</span></label>
                  <input
                    id="drpName"
                    name="name"
                    className="drp-input"
                    type="text"
                    placeholder="Enter Full Name"
                    autoComplete="name"
                    required
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="drp-field">
                  <label className="drp-label" htmlFor="drpEmail">Email <span className="drp-req">*</span></label>
                  <input
                    id="drpEmail"
                    name="email"
                    className="drp-input"
                    type="email"
                    placeholder="Enter Valid Email Id"
                    autoComplete="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="drp-field">
                <label className="drp-label" htmlFor="drpPhone">WhatsApp / Mobile Number <span className="drp-req">*</span></label>
                <input
                  id="drpPhone"
                  name="phone"
                  className="drp-input"
                  type="tel"
                  placeholder="Ex:+912143658798"
                  autoComplete="tel-national"
                  required
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="drp-field">
                <label className="drp-label" htmlFor="drpProduct">Select Product <span className="drp-req">*</span></label>
                <select
                  id="drpProduct"
                  name="product"
                  className="drp-input drp-select"
                  required
                  value={values.product}
                  onChange={handleChange}
                >
                  {demoProducts.map((p) => (
                    <option value={p} key={p}>{p}</option>
                  ))}
                </select>
              </div>

              <label className="drp-consent" htmlFor="drpConsent">
                <input id="drpConsent" type="checkbox" name="consent" checked={values.consent} onChange={handleChange} />
                <span>I&rsquo;m happy to receive email newsletters and updates.</span>
              </label>

              {displayedError && <div className="drp-error">{displayedError}</div>}

              <div className="drp-actions">
                <button type="submit" className="drp-btn-submit" disabled={status === 'submitting'}>
                  <i className={`fa-solid ${status === 'submitting' ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`} aria-hidden="true" />
                  {status === 'submitting' ? 'Sending…' : 'Schedule Now'}
                </button>
                <button type="button" className="drp-btn-skip" onClick={skip}>Maybe later</button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  )
}
