import { useEffect, useState } from 'react'
import { addToCart, clearCart, getCart, getCartTotal, removeFromCart, subscribeToCart } from '../lib/cart.js'

// Thin React binding over lib/cart.js. State changes always flow through
// localStorage first (see writeCart), then back in via subscribeToCart --
// that round trip is what keeps every mounted instance of this hook (header
// badge, cart dropdown, pricing cards) in sync with each other.
export function useCart() {
  const [items, setItems] = useState(getCart)

  useEffect(() => subscribeToCart(setItems), [])

  return {
    items,
    count: items.length,
    total: getCartTotal(items),
    addItem: addToCart,
    removeItem: removeFromCart,
    clear: clearCart,
  }
}
