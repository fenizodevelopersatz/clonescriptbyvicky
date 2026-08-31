import { useEffect, useState } from 'react'

export function useStickyHeader(triggerOffset = 120) {
  const [isStuck, setIsStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > triggerOffset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [triggerOffset])

  return isStuck
}
