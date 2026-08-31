// Plain JS + localStorage currency engine, mirroring lib/cart.js's pattern:
// one source of truth in localStorage, broadcast through a custom event so
// every price on every page (and the cart) can react without a context
// provider. All source data (pricingPlans, cart items) stores USD strings
// like "$4999" -- everything here treats USD as the canonical unit and only
// converts at display time.
const STORAGE_KEY = 'clonescript_currency'
const CHANGE_EVENT = 'clonescript:currency-change'

export const SUPPORTED_CURRENCIES = ['USD', 'INR']
const DEFAULT_CURRENCY = 'USD'

// Falls back to a reasonable fixed rate if VITE_USD_TO_INR isn't set, so
// currency switching still works out of the box in an unconfigured checkout.
const USD_TO_INR = Number(import.meta.env.VITE_USD_TO_INR) || 83

function readCurrency() {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return SUPPORTED_CURRENCIES.includes(stored) ? stored : DEFAULT_CURRENCY
}

export function getCurrency() {
  return readCurrency()
}

export function setCurrency(code) {
  if (!SUPPORTED_CURRENCIES.includes(code)) return readCurrency()
  window.localStorage.setItem(STORAGE_KEY, code)
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: code }))
  return code
}

export function subscribeToCurrency(callback) {
  const handleChange = (event) => callback(event.detail ?? readCurrency())
  const handleStorage = (event) => {
    if (!event.key || event.key === STORAGE_KEY) callback(readCurrency())
  }
  window.addEventListener(CHANGE_EVENT, handleChange)
  window.addEventListener('storage', handleStorage)
  return () => {
    window.removeEventListener(CHANGE_EVENT, handleChange)
    window.removeEventListener('storage', handleStorage)
  }
}

// Every plan/cart price is authored as a USD string, e.g. "$4999".
export function parsePrice(price) {
  return Number(String(price).replace(/[^0-9.]/g, '')) || 0
}

export function convertFromUsd(usdValue, currency) {
  return currency === 'INR' ? usdValue * USD_TO_INR : usdValue
}

const FORMATTERS = {
  USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
  INR: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }),
}

export function formatMoney(usdValue, currency) {
  const formatter = FORMATTERS[currency] || FORMATTERS[DEFAULT_CURRENCY]
  return formatter.format(convertFromUsd(usdValue, currency))
}

// Convenience for the common case of formatting a stored USD price string
// ("$4999") straight into the currently-selected display currency.
export function formatPriceString(price, currency) {
  return formatMoney(parsePrice(price), currency)
}

// Pricing cards show both currencies at once (never just one, so the amount
// is never "missing" regardless of the footer currency toggle) -- primary
// is whichever currency is currently selected, secondary is the other one.
export function formatBothCurrencies(price, primaryCurrency) {
  const secondaryCurrency = primaryCurrency === 'INR' ? 'USD' : 'INR'
  const usdValue = parsePrice(price)
  return {
    primary: formatMoney(usdValue, primaryCurrency),
    secondary: formatMoney(usdValue, secondaryCurrency),
  }
}
