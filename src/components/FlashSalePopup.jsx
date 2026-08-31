import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './LeadPopup.css'

const FLASH_SALE_IMAGE = '/wp-content/animated_sale.gif'

export default function FlashSalePopup() {
  const { pathname } = useLocation()
  const [visiblePath, setVisiblePath] = useState(null)
  const [dismissedPath, setDismissedPath] = useState(null)
  const hasShownRef = useRef(false)

  useEffect(() => {
    const delay = hasShownRef.current ? 500 : Math.max(0, 500 - performance.now())
    const id = window.setTimeout(() => {
      hasShownRef.current = true
      setVisiblePath(pathname)
    }, delay)

    return () => window.clearTimeout(id)
  }, [pathname])

  const isOpen = visiblePath === pathname && dismissedPath !== pathname
  if (!isOpen) return null

  return (
    <aside role="dialog" aria-modal="false" aria-label="Flash sale offer" className="clonescript-flash-popup">
      <div className="clonescript-flash-popup__card">
        <img
          src={FLASH_SALE_IMAGE}
          width="420"
          height="627"
          alt="Flash Sale — 50% off limited-time offer"
          className="clonescript-flash-popup__image"
          decoding="async"
          fetchPriority="high"
        />
        <button
          type="button"
          className="clonescript-flash-popup__close"
          aria-label="Close flash sale offer"
          onClick={() => setDismissedPath(pathname)}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </aside>
  )
}
