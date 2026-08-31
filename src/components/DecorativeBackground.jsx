import { useLocation } from 'react-router-dom'
import './DecorativeBackground.css'

// Sitewide ambient backdrop -- fixed behind all page content (see .cs-decor
// z-index:-1 in the CSS, and the transparent .clonescript-site override in
// CloneScriptDesignSystem.css that lets it show through). Concentrated at
// the edges: soft central glow, a dot grid upper-left, violet-to-pink
// contour lines upper-right, and a few large soft blobs -- center stays
// clean/white. Layout.jsx mounts this once per hard page load (it lives
// above the routed <Outlet>, so client-side navigation never remounts it),
// which is what the rocket's launch-in and the curves' draw-in below key
// off of -- see index.html's own rocket keyframes for the pre-React loader
// this hands off to.

// Bottom-right decoration per product page, paired with the bottom-left
// rocket -- routes not listed here (home, contact, schedule-demo) fall back
// to the generic growth-chart glyph instead.
const pageIcons = {
  '/erp-software': 'fa-building-columns',
  '/school-crm': 'fa-school',
  '/alibaba-clone': 'fa-boxes-stacked',
  '/vinted-clone': 'fa-shirt',
  '/zillow-clone': 'fa-house',
  '/amazon-clone': 'fa-cart-shopping',
  '/youtube-clone': 'fa-circle-play',
  '/turo-clone': 'fa-car',
  '/airbnb-clone': 'fa-house-chimney',
  '/rental-booking-script': 'fa-calendar-check',
  '/uber-clone': 'fa-car-side',
  '/gojek-clone': 'fa-motorcycle',
  '/swiggy-clone': 'fa-utensils',
  '/fiverr-clone': 'fa-briefcase',
  '/udemy-clone': 'fa-graduation-cap',
  '/tinder-clone': 'fa-heart',
  '/whatsapp-clone': 'fa-comment-dots',
  '/tiktok-clone': 'fa-video',
  '/olx-clone': 'fa-tags',
  '/logistics-clone': 'fa-truck-fast',
}

export default function DecorativeBackground() {
  const { pathname } = useLocation()
  const pageIcon = pageIcons[pathname]

  return (
    <div className="cs-decor" aria-hidden="true">
      <span className="cs-decor__glow" />
      <span className="cs-decor__blob cs-decor__blob--1" />
      <span className="cs-decor__blob cs-decor__blob--2" />
      <span className="cs-decor__blob cs-decor__blob--3" />
      <span className="cs-decor__dots" />
      <svg className="cs-decor__curves" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cs-curve-a" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e83ebc" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="cs-curve-b" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6c3bff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e83ebc" stopOpacity="0.28" />
          </linearGradient>
        </defs>
        <path className="cs-decor__curve-path cs-decor__curve-path--1" d="M40,380 C160,300 220,220 260,160 C300,100 360,60 480,20" stroke="url(#cs-curve-a)" strokeWidth="4.5" fill="none" />
        <path className="cs-decor__curve-path cs-decor__curve-path--2" d="M0,300 C120,260 180,180 240,120 C300,60 380,30 500,10" stroke="url(#cs-curve-b)" strokeWidth="4" fill="none" />
        <path className="cs-decor__curve-path cs-decor__curve-path--3" d="M80,400 C200,340 260,260 320,190 C380,120 420,80 500,50" stroke="url(#cs-curve-a)" strokeWidth="2.5" fill="none" opacity="0.9" />
      </svg>

      <div className="cs-decor__rocket">
        <span className="cs-decor__rocket-glow" />
        <i className="fas fa-rocket" aria-hidden="true"></i>
      </div>
      {pageIcon ? (
        <div className="cs-decor__page-icon">
          <span className="cs-decor__page-icon-glow" />
          <i className={`fas ${pageIcon}`} aria-hidden="true"></i>
        </div>
      ) : (
        <div className="cs-decor__chart">
          <i className="fas fa-arrow-trend-up cs-decor__chart-arrow" aria-hidden="true"></i>
          <div className="cs-decor__chart-bars">
            <span style={{ height: '35%' }} />
            <span style={{ height: '55%' }} />
            <span style={{ height: '75%' }} />
            <span style={{ height: '95%' }} />
          </div>
        </div>
      )}
    </div>
  )
}
