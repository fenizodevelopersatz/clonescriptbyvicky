import { useCallback, useEffect, useState } from 'react'

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('mobile-nav-activated', isOpen)
    document.documentElement.classList.toggle('overflow-hidden', isOpen)
  }, [isOpen])

  const toggle = useCallback(() => setIsOpen((open) => !open), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, toggle, close }
}
