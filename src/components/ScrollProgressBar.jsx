import { useEffect, useRef } from 'react'
import './ScrollProgressBar.css'

// Thin fixed bar at the very top of the viewport that fills left-to-right
// as the visitor scrolls down the page. Reads scroll position directly
// (not React state) so it updates every frame without triggering re-renders.
export default function ScrollProgressBar() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current

    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? window.scrollY / max : 0
      bar.style.transform = `scaleX(${ratio})`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="scroll-progress-bar" ref={barRef} aria-hidden="true" />
}
