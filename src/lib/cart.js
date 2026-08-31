// Plain JS + localStorage cart engine. No context/provider: every reader
// (header badge, cart dropdown, pricing cards on any page) re-reads
// localStorage as the single source of truth and re-syncs through the
// events below, so cart state stays consistent across the whole app without
// prop drilling.
import { parsePrice } from './currency.js'

const STORAGE_KEY = 'clonescript_cart'
const CHANGE_EVENT = 'clonescript:cart-change'
const OPEN_REQUEST_EVENT = 'clonescript:cart-open-request'

function readCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeCart(items) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: items }))
  return items
}

export function getCart() {
  return readCart()
}

export function isInCart(id) {
  return readCart().some((item) => item.id === id)
}

// Adds one pricing card's full details to the cart. These are one-time
// software licenses, not stackable goods, so re-"investing" in a plan
// that's already in the cart is a no-op rather than a duplicate line item.
export function addToCart(item) {
  const items = readCart()
  if (items.some((existing) => existing.id === item.id)) return items
  return writeCart([...items, item])
}

// Removes a single cart entry by id, leaving every other item untouched.
export function removeFromCart(id) {
  return writeCart(readCart().filter((item) => item.id !== id))
}

// Empties the whole cart in one action (distinct from removeFromCart above).
export function clearCart() {
  return writeCart([])
}

export function getCartTotal(items = readCart()) {
  return items.reduce((sum, item) => sum + parsePrice(item.price), 0)
}

// Notifies subscribers whenever the cart changes -- including from another
// component tree (a pricing card on the current page) or another browser
// tab (the native `storage` event, which only fires cross-tab).
export function subscribeToCart(callback) {
  const handleChange = (event) => callback(event.detail ?? readCart())
  const handleStorage = (event) => {
    if (!event.key || event.key === STORAGE_KEY) callback(readCart())
  }
  window.addEventListener(CHANGE_EVENT, handleChange)
  window.addEventListener('storage', handleStorage)
  return () => {
    window.removeEventListener(CHANGE_EVENT, handleChange)
    window.removeEventListener('storage', handleStorage)
  }
}

// Lets an "Invest Now" click ask the header's cart dropdown to slide open,
// so adding a plan gives immediate visual confirmation.
export function requestCartOpen() {
  window.dispatchEvent(new Event(OPEN_REQUEST_EVENT))
}

export function subscribeToCartOpenRequests(callback) {
  window.addEventListener(OPEN_REQUEST_EVENT, callback)
  return () => window.removeEventListener(OPEN_REQUEST_EVENT, callback)
}
