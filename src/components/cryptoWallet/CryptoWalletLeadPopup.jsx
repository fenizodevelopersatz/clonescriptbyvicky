import { useEffect, useRef, useState } from 'react'
import { useContactForm } from '../../hooks/useContactForm.js'
import './CryptoWalletLeadPopup.css'

// Scroll-triggered consultation popup, matching the reference site's
// behavior: appears once the visitor has scrolled ~3 viewport heights
// (an engagement signal, not an immediate interruption), and stays
// dismissed for 30 minutes once skipped. Submits through the same
// useContactForm/sendContactPayload pipeline every other form on this
// site already uses.
const SKIP_KEY = 'clonescript_wallet_lead_popup_skip'
const SKIP_MS = 30 * 60 * 1000
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}

export default function CryptoWalletLeadPopup() {
  const [open, setOpen] = useState(false)
  const [validationError, setValidationError] = useState('')
  const dialogRef = useRef(null)
  const lastFocusedRef = useRef(null)

  const { values, handleChange, handleSubmit, submitted, status, errorMessage } = useContactForm(
    { name: '', phone: '' },
    { enableApiSend: true, subject: 'New Consultation Request (Crypto Wallet popup)' }
  )

  function skip() {
    setOpen(false)
    localStorage.setItem(SKIP_KEY, String(Date.now()))
  }

  useEffect(() => {
    const skippedAt = Number(localStorage.getItem(SKIP_KEY) || 0)
    if (Date.now() - skippedAt < SKIP_MS) return

    let shown = false
    const onScroll = () => {
      if (!shown && window.scrollY >= window.innerHeight * 3) {
        shown = true
        setOpen(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!submitted) return
    const id = setTimeout(() => setOpen(false), 3000)
    return () => clearTimeout(id)
  }, [submitted])

  // Focus trap: while open, keyboard focus cycles inside the dialog only
  // (Tab/Shift+Tab wrap at its edges, Escape closes it) -- the rest of the
  // page never receives focus until it's dismissed, when focus returns to
  // whatever the visitor was on before it opened.
  useEffect(() => {
    if (!open) return undefined

    lastFocusedRef.current = document.activeElement
    const dialog = dialogRef.current
    const getFocusable = () => Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR))
    const initial = dialog.querySelector('#cwlpName') || getFocusable()[0] || dialog
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
      <div className="cwlp-overlay" onClick={skip} aria-hidden="true" />
      <div className="cwlp" role="dialog" aria-modal="true" aria-labelledby="cwlpTitle" ref={dialogRef} tabIndex={-1}>
        <button type="button" className="cwlp-close" aria-label="Close" onClick={skip}>
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="cwlp-success">
            <div className="cwlp-success-icon"><i className="fa-solid fa-check" aria-hidden="true" /></div>
            <p className="cwlp-success-title">You&rsquo;re all set!</p>
            <p className="cwlp-success-sub">We&rsquo;ll reach out within 2 hours.</p>
          </div>
        ) : (
          <>
            <div className="cwlp-header">
              <div className="cwlp-badge-row">
                <span className="cwlp-badge-dot" aria-hidden="true" />
                Currently accepting new projects
              </div>
              <h3 id="cwlpTitle" className="cwlp-title">
                Let&rsquo;s build something <span className="cwlp-title-accent">great</span>
              </h3>
              <p className="cwlp-sub">Free consultation &middot; No commitment &middot; Reply within 2 hours</p>
            </div>

            <form onSubmit={onSubmit} noValidate>
              <div className="cwlp-field">
                <label className="cwlp-label" htmlFor="cwlpName">Your Name <span className="cwlp-req">*</span></label>
                <input
                  id="cwlpName"
                  name="name"
                  className="cwlp-input"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="cwlp-field">
                <label className="cwlp-label" htmlFor="cwlpPhone">Mobile Number <span className="cwlp-req">*</span></label>
                <input
                  id="cwlpPhone"
                  name="phone"
                  className="cwlp-input"
                  type="tel"
                  placeholder="Ex:+912143658798"
                  autoComplete="tel-national"
                  required
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>

              {displayedError && <div className="cwlp-error">{displayedError}</div>}

              <div className="cwlp-actions">
                <button type="submit" className="cwlp-btn-submit" disabled={status === 'submitting'}>
                  <i className={`fa-solid ${status === 'submitting' ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`} aria-hidden="true" />
                  {status === 'submitting' ? 'Sending…' : 'Get Free Consultation'}
                </button>
                <button type="button" className="cwlp-btn-skip" onClick={skip}>Maybe later</button>
              </div>

              <p className="cwlp-foot"><i className="fa-solid fa-lock" aria-hidden="true" /> Your details stay private &middot; 50+ clients</p>
            </form>
          </>
        )}
      </div>
    </>
  )
}
