import { useEffect, useRef } from 'react'

// Pointer-driven 3D tilt. Writes --tk-rx / --tk-ry / --tk-px / --tk-py onto the
// node instead of going through React state -- a setState per pointermove would
// re-render the whole subtree ~120x/sec.
//
// No-ops on coarse pointers (a touch device has no hover, so the tilt would
// only ever fire mid-tap) and under prefers-reduced-motion.
export function usePointerTilt({ max = 9, enabled = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !enabled) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    let frame

    const apply = (event) => {
      frame = undefined
      const rect = node.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      // -0.5 .. 0.5 from the element's centre
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      node.style.setProperty('--tk-ry', `${(px * max).toFixed(2)}deg`)
      node.style.setProperty('--tk-rx', `${(-py * max).toFixed(2)}deg`)
      node.style.setProperty('--tk-px', px.toFixed(3))
      node.style.setProperty('--tk-py', py.toFixed(3))
    }

    const handleMove = (event) => {
      if (frame) return
      frame = window.requestAnimationFrame(() => apply(event))
    }

    const handleLeave = () => {
      if (frame) window.cancelAnimationFrame(frame)
      frame = undefined
      node.style.setProperty('--tk-rx', '0deg')
      node.style.setProperty('--tk-ry', '0deg')
      node.style.setProperty('--tk-px', '0')
      node.style.setProperty('--tk-py', '0')
    }

    node.addEventListener('pointermove', handleMove)
    node.addEventListener('pointerleave', handleLeave)
    // Focusing a control inside a tilted card would distort its focus ring.
    node.addEventListener('focusin', handleLeave)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      node.removeEventListener('pointermove', handleMove)
      node.removeEventListener('pointerleave', handleLeave)
      node.removeEventListener('focusin', handleLeave)
    }
  }, [max, enabled])

  return ref
}
