import { useLayoutEffect, useState } from 'react'

const stylesheetRegistry = new Map()
const activeLoads = new Set()
let loadSequence = 0
let routeGuardToken = null

// Matches the app-shell class index.html sets on <body> by default (before
// React ever mounts) so the same spinner/hide rules cover first paint and
// later route transitions through one toggle.
function syncLoadingState() {
  if (activeLoads.size > 0) {
    document.body.classList.add('clonescript-page-styles-loading')
    document.body.setAttribute('aria-busy', 'true')
    return
  }

  document.body.classList.remove('clonescript-page-styles-loading')
  document.body.removeAttribute('aria-busy')
}

export function expectPageStyles() {
  if (routeGuardToken !== null) activeLoads.delete(routeGuardToken)
  routeGuardToken = ++loadSequence
  activeLoads.add(routeGuardToken)
  syncLoadingState()
}

function releaseRouteGuard() {
  if (routeGuardToken === null) return
  activeLoads.delete(routeGuardToken)
  routeGuardToken = null
}

function acquireStylesheet(href) {
  let record = stylesheetRegistry.get(href)

  if (!record) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.dataset.pageStylesheet = 'true'

    record = { href, link, loaded: null, references: 0, settled: false }
    record.loaded = new Promise((resolve) => {
      let fallbackTimer
      const finish = () => {
        window.clearTimeout(fallbackTimer)
        record.settled = true
        if (record.references === 0) record.link.disabled = true
        resolve()
      }

      link.addEventListener('load', finish, { once: true })
      link.addEventListener('error', finish, { once: true })
      fallbackTimer = window.setTimeout(finish, 12000)
    })

    stylesheetRegistry.set(href, record)
    document.head.appendChild(link)
  } else {
    record.link.disabled = false
    // Re-appending preserves the route bundle cascade while reusing the
    // browser's parsed stylesheet instead of downloading it again.
    document.head.appendChild(record.link)
  }

  record.references += 1
  return record
}

function releaseStylesheet(record) {
  record.references = Math.max(0, record.references - 1)
  // Do not interrupt a first load during React Strict Mode's test cleanup.
  if (record.references === 0 && record.settled) record.link.disabled = true
}

// Cache inactive route bundles but disable them so styles cannot leak between
// pages. A token set keeps Strict Mode and route cleanups from clearing another
// page's loading state.
export function usePageStylesheets(hrefs) {
  const [isReady, setIsReady] = useState(false)

  useLayoutEffect(() => {
    let cancelled = false
    let readyFrame
    let fallbackTimer
    const loadToken = ++loadSequence

    activeLoads.add(loadToken)
    syncLoadingState()
    setIsReady(false)

    const records = hrefs.map(acquireStylesheet)
    const stylesReady = Promise.all(records.map((record) => record.loaded))
    const fontsReady = document.fonts?.ready ?? Promise.resolve()

    Promise.all([stylesReady, fontsReady]).then(() => {
      if (cancelled) return

      let revealed = false
      const reveal = () => {
        if (revealed || cancelled) return
        revealed = true
        activeLoads.delete(loadToken)
        releaseRouteGuard()
        syncLoadingState()
        setIsReady(true)
      }

      readyFrame = window.requestAnimationFrame(() => {
        // A large legacy bundle can dispatch `load` before Chrome performs its
        // first complete style calculation. Force that calculation, then reveal
        // on the following frame so users never see stacked, unstyled columns.
        void document.documentElement.offsetHeight
        readyFrame = window.requestAnimationFrame(reveal)
      })
      // requestAnimationFrame is paused indefinitely by browsers for a tab that
      // never composites a frame (backgrounded on load, minimized window, some
      // embedded/automation contexts). Without this, the page would stay hidden
      // forever instead of just skipping the anti-FOUC delay.
      fallbackTimer = window.setTimeout(reveal, 300)
    })

    return () => {
      cancelled = true
      activeLoads.delete(loadToken)
      syncLoadingState()
      if (readyFrame) window.cancelAnimationFrame(readyFrame)
      if (fallbackTimer) window.clearTimeout(fallbackTimer)
      records.forEach(releaseStylesheet)
    }
  }, [hrefs])

  return isReady
}
