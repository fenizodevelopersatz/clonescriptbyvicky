import { useCallback, useEffect, useState } from 'react'

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('mobile-nav-activated', isOpen)
    document.documentElement.classList.toggle('overflow-hidden', isOpen)

    // Without this, navigating straight from an open mobile menu to a route
    // that renders MinimalLayout (no Header, e.g. /schedule-free-demo)
    // unmounts this hook mid-transition with isOpen still true -- the
    // effect above never gets to run again with isOpen=false (no Header
    // left to own it), so overflow-hidden stayed stuck on <html> forever
    // and the new page couldn't scroll at all. This cleanup fires on
    // unmount regardless, closing that gap.
    return () => {
      document.documentElement.classList.remove('mobile-nav-activated')
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  const toggle = useCallback(() => setIsOpen((open) => !open), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, toggle, close }
}
