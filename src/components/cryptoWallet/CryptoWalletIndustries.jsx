import { Link } from 'react-router-dom'
import './CryptoWalletIndustries.css'

// Infinite dual-row marquee of industries served, matching the reference
// site's composition: two rows scrolling in opposite directions (pausable
// on hover), each list duplicated once so the loop has no visible seam.
const rowA = [
  { icon: 'fa-solid fa-coins', name: 'Crypto' },
  { icon: 'fa-solid fa-building-columns', name: 'Finance' },
  { icon: 'fa-solid fa-cart-shopping', name: 'E-commerce' },
  { icon: 'fa-solid fa-gamepad', name: 'Gaming' },
  { icon: 'fa-solid fa-image', name: 'NFT Marketplaces' },
  { icon: 'fa-solid fa-link', name: 'Web3' },
  { icon: 'fa-solid fa-landmark', name: 'Public Services' },
]

const rowB = [
  { icon: 'fa-solid fa-heart-pulse', name: 'Healthcare' },
  { icon: 'fa-solid fa-graduation-cap', name: 'Education' },
  { icon: 'fa-solid fa-house', name: 'Real Estate' },
  { icon: 'fa-solid fa-store', name: 'Retail' },
  { icon: 'fa-solid fa-industry', name: 'Manufacturing' },
  { icon: 'fa-solid fa-briefcase', name: 'Enterprise' },
]

function Pill({ icon, name }) {
  return (
    <div className="cwi-pill">
      <span className="cwi-pill-icon"><i className={icon} aria-hidden="true" /></span>
      <span className="cwi-pill-name">{name}</span>
    </div>
  )
}

function Track({ items, direction }) {
  return (
    <div className="cwi-track-wrap">
      <div className={`cwi-track cwi-track--${direction}`}>
        {[...items, ...items].map((item, i) => (
          <Pill key={item.name + i} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function CryptoWalletIndustries() {
  return (
    <section className="cwi-section">
      <div className="cwi-bg" aria-hidden="true">
        <span className="cwi-orb cwi-orb--1" />
        <span className="cwi-orb cwi-orb--2" />
        <span className="cwi-bg-grid" />
      </div>

      <div className="ld-container container">
        <div className="cwi-head">
          <div className="cwi-eyebrow">Industry Expertise</div>
          <h3 className="cwi-title">
            We serve <span className="cwi-count">13+</span> industries
          </h3>
          <p className="cwi-sub">We serve 13+ industries with secure blockchain and wallet technology solutions.</p>
        </div>
      </div>

      <Track items={rowA} direction="left" />
      <Track items={rowB} direction="right" />

      <div className="ld-container container">
        <div className="cwi-strip">
          <div className="cwi-strip-stat">
            <span className="cwi-strip-num">13+</span>
            <span className="cwi-strip-lbl">Industries Served</span>
          </div>
          <span className="cwi-strip-sep" />
          <div className="cwi-strip-stat">
            <span className="cwi-strip-num">150+</span>
            <span className="cwi-strip-lbl">Projects Delivered</span>
          </div>
          <span className="cwi-strip-sep" />
          <div className="cwi-strip-stat">
            <span className="cwi-strip-num">13+</span>
            <span className="cwi-strip-lbl">Years Experience</span>
          </div>
          <span className="cwi-strip-sep" />
          <div className="cwi-strip-cta">
            <Link to="/#products" className="cwi-strip-btn">
              Start Your Project <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
