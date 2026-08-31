import { useLayoutEffect, useRef } from 'react'

const VIEWPORT_ENTRY_MARGIN = '0px 0px -12% 0px'

export function useSectionMotion(isReady = true) {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container || !isReady) return undefined

    const sections = Array.from(container.children).filter((child) => child.tagName === 'SECTION')
    let scrollFrame = 0
    let observer
    const reveal = (section) => {
      section.dataset.clonescriptReveal = 'visible'
      section.classList.add('is-section-visible')
      observer?.unobserve(section)
    }

    sections.forEach((section) => {
      section.classList.add('clonescript-section-motion')
      section.dataset.clonescriptReveal = 'pending'
    })

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      sections.forEach(reveal)
      return undefined
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        reveal(entry.target)
      })
    }, { rootMargin: VIEWPORT_ENTRY_MARGIN, threshold: 0.08 })

    const revealReachedSections = () => {
      sections.forEach((section) => {
        if (section.dataset.clonescriptReveal !== 'pending') return
        if (section.getBoundingClientRect().top < window.innerHeight * 1.12) reveal(section)
      })
    }

    const scheduleRevealCheck = () => {
      if (scrollFrame) return
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0
        revealReachedSections()
      })
    }

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) reveal(section)
      else observer.observe(section)
    })

    window.addEventListener('scroll', scheduleRevealCheck, { passive: true })
    window.addEventListener('resize', scheduleRevealCheck)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', scheduleRevealCheck)
      window.removeEventListener('resize', scheduleRevealCheck)
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
    }
  }, [isReady])

  return containerRef
}
