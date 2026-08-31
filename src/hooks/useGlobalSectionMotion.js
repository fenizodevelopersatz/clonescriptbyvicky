import { useEffect } from 'react'

const SECTION_SELECTOR = '.content > .wpb-content-wrapper > section'

export function useGlobalSectionMotion(routeKey) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let observer
    let mutationObserver
    let scrollFrame
    let handleScroll
    const observed = new WeakSet()
    const pending = new Set()
    const frame = window.requestAnimationFrame(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('clonescript-section-visible')
          pending.delete(entry.target)
          observer.unobserve(entry.target)
        })
      }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.04,
      })

      const scan = () => {
        document.querySelectorAll(SECTION_SELECTOR).forEach((section) => {
          if (observed.has(section)) return
          observed.add(section)
          section.classList.add('clonescript-section-observed')
          if (section.getBoundingClientRect().top < window.innerHeight * 0.92) {
            section.classList.add('clonescript-section-visible')
            return
          }
          pending.add(section)
          observer.observe(section)
        })
      }

      const revealPassedSections = () => {
        scrollFrame = undefined
        pending.forEach((section) => {
          if (section.getBoundingClientRect().top >= window.innerHeight * 0.96) return
          section.classList.add('clonescript-section-visible')
          pending.delete(section)
          observer.unobserve(section)
        })
      }

      handleScroll = () => {
        if (scrollFrame) return
        scrollFrame = window.requestAnimationFrame(revealPassedSections)
      }

      scan()
      mutationObserver = new MutationObserver(scan)
      mutationObserver.observe(document.getElementById('wrap'), { childList: true, subtree: true })
      window.addEventListener('scroll', handleScroll, { passive: true })
    })

    return () => {
      window.cancelAnimationFrame(frame)
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
      if (handleScroll) window.removeEventListener('scroll', handleScroll)
      observer?.disconnect()
      mutationObserver?.disconnect()
    }
  }, [routeKey])
}
