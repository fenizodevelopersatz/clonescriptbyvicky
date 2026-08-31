import { useEffect, useRef } from 'react'

// One scroll listener and one rAF loop for the whole page, shared by every
// element that wants scroll-linked depth. Each registered node gets two custom
// properties written on it:
//
//   --tk-p  0..1  travel across the viewport (0 = element top at viewport
//                 bottom, 1 = element bottom at viewport top). Signed variant
//                 --tk-pc is -1..1, centred, which is what parallax wants.
//   --tk-pc -1..1 same thing centred on the viewport middle.
//
// Only nodes currently intersecting the viewport are computed, so a long page
// of registered sections costs no more per frame than the two or three actually
// on screen.

const active = new Set()
const registry = new Set()
let observer
let frame
let listening = false

function measure() {
  frame = undefined
  const vh = window.innerHeight || 1
  active.forEach((node) => {
    const rect = node.getBoundingClientRect()
    const span = rect.height + vh
    if (span <= 0) return
    const p = Math.min(1, Math.max(0, (vh - rect.top) / span))
    node.style.setProperty('--tk-p', p.toFixed(4))
    node.style.setProperty('--tk-pc', (p * 2 - 1).toFixed(4))
  })
}

function schedule() {
  if (frame) return
  frame = window.requestAnimationFrame(measure)
}

function ensureDriver() {
  if (listening) return
  listening = true
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) active.add(entry.target)
      else active.delete(entry.target)
    })
    schedule()
  }, { rootMargin: '10% 0px' })
  registry.forEach((node) => observer.observe(node))
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  // A page opened in a background tab gets no rAF at all, so the first measure
  // never lands and every registered element would paint at its rest value the
  // moment the tab is focused. Re-measure when it becomes visible.
  document.addEventListener('visibilitychange', schedule)
  schedule()
}

function teardownDriver() {
  if (!listening) return
  listening = false
  observer?.disconnect()
  observer = undefined
  active.clear()
  if (frame) window.cancelAnimationFrame(frame)
  frame = undefined
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  document.removeEventListener('visibilitychange', schedule)
}

export function useScrollProgress({ enabled = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !enabled) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Leave the properties at their CSS-declared rest values.
      return undefined
    }

    registry.add(node)
    ensureDriver()
    observer?.observe(node)

    return () => {
      registry.delete(node)
      active.delete(node)
      observer?.unobserve(node)
      if (registry.size === 0) teardownDriver()
    }
  }, [enabled])

  return ref
}
