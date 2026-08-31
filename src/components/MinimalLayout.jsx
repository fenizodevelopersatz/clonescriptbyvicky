import { Suspense, useInsertionEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import FlashSalePopup from './FlashSalePopup.jsx'
import RouteFallback from './RouteFallback.jsx'
import DecorativeBackground from './DecorativeBackground.jsx'
import { expectPageStyles } from '../hooks/usePageStylesheets.js'

// For pages that ship with no header/footer in source (e.g. schedule-free-demo.html) —
// confirmed by absence of <header id="header"> / <footer> tags in that page's raw HTML.
export default function MinimalLayout() {
  const { pathname } = useLocation()
  const routeClass = pathname.slice(1).replace(/[^a-z0-9]+/gi, '-')

  useInsertionEffect(() => {
    expectPageStyles()
  }, [pathname])

  return (
    <div id="wrap" className={`clonescript-site clonescript-site-minimal clonescript-route-${routeClass}`}>
      <DecorativeBackground />
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
      <FlashSalePopup />
    </div>
  )
}
