import { useEffect, useState } from 'react'
import { getCurrency, setCurrency, subscribeToCurrency } from '../lib/currency.js'

// Thin React binding over lib/currency.js -- same round-trip-through-
// localStorage pattern as useCart, so the footer selector, pricing cards on
// every page, and the cart dropdown all stay in sync with one click.
export function useCurrency() {
  const [currency, setCurrencyState] = useState(getCurrency)

  useEffect(() => subscribeToCurrency(setCurrencyState), [])

  return { currency, setCurrency }
}
