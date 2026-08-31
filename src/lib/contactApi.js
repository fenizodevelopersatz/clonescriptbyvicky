import { siteContact } from '../data/siteContact.js'

const API_URL = import.meta.env.VITE_CONTACT_API_URL
const API_ENABLED = import.meta.env.VITE_CONTACT_API_ENABLED !== 'false'

export const isApiConfigured = Boolean(API_URL)
export const isApiEnabled = API_ENABLED

const FRIENDLY_ERROR = `Sorry, something went wrong and your message wasn't sent. Please try again in a moment, or email us directly at ${siteContact.supportEmail}.`

export async function sendContactPayload(payload) {
  if (!isApiEnabled) {
    console.info('[contactApi] Sending is currently disabled (VITE_CONTACT_API_ENABLED=false).')
    throw new Error(FRIENDLY_ERROR)
  }

  if (!isApiConfigured) {
    console.error('[contactApi] VITE_CONTACT_API_URL is not set.')
    throw new Error(FRIENDLY_ERROR)
  }

  let response
  try {
    response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    console.error('[contactApi] Network error sending contact payload:', err)
    throw new Error(FRIENDLY_ERROR)
  }

  if (!response.ok) {
    console.error(`[contactApi] Contact API responded with ${response.status} ${response.statusText}`)
    throw new Error(FRIENDLY_ERROR)
  }
}
