import { useRef, useState } from 'react'
import { sendContactPayload } from '../lib/contactApi.js'

export function useContactForm(initialValues, { enableApiSend = false, subject = '', getExtraPayload, onSuccess } = {}) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('init')
  const [errorMessage, setErrorMessage] = useState('')
  const submittingRef = useRef(false)

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!enableApiSend) {
      setStatus('sent')
      return
    }

    // A ref (not the status state) guards against duplicate submits: state updates
    // are batched, so rapid clicks within the same tick would all still read the
    // old status. The ref updates synchronously, so the second click sees it immediately.
    if (submittingRef.current) return
    submittingRef.current = true

    setStatus('submitting')
    setErrorMessage('')

    try {
      const extra = getExtraPayload ? getExtraPayload() : undefined
      await sendContactPayload({ ...values, subject, ...extra })
      setValues(initialValues)
      setStatus('sent')
      onSuccess?.()
    } catch (err) {
      setStatus('failed')
      setErrorMessage(err.message)
    } finally {
      submittingRef.current = false
    }
  }

  return { values, handleChange, handleSubmit, submitted: status === 'sent', status, errorMessage }
}
