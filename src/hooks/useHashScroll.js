import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router never scrolls to a URL hash on its own -- that's browser-native
// behavior for full page loads only, and SPA navigation via <Link> doesn't
// trigger it. Every "#products"/"#services"/"#demo"-style anchor link in this
// app relied on that native behavior and silently did nothing (stayed at
// scroll position 0) until this ran. Retries because the target element may
// not exist yet: navigating here from another route first has to mount this
// route's lazy-loaded chunk.
export function useHashScroll() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return undefined
    const id = decodeURIComponent(hash.slice(1))
    let attempts = 0
    let timer

    function tryScroll() {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      attempts += 1
      if (attempts < 20) timer = window.setTimeout(tryScroll, 100)
    }

    tryScroll()
    return () => window.clearTimeout(timer)
  }, [hash])
}
