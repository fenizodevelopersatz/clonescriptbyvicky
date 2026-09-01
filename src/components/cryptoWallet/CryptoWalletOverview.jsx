import { Link } from 'react-router-dom'
import Reveal from '../shared/Reveal.jsx'
import './CryptoWalletOverview.css'

// "What We Do" overview: numbered wallet-type timeline (left) + a live
// product-dashboard card (right) -- avatars, stat counters, a success-rate
// bar chart, a recent-deliveries feed, and a CTA strip. Pure CSS/markup,
// same "no screenshots" approach as the other crypto-wallet mockups.
const points = [
  { num: '01', text: 'DeFi wallets' },
  { num: '02', text: 'Multi-sig wallets' },
  { num: '03', text: 'Cold storage' },
  { num: '04', text: 'Cross-chain & NFT wallet support' },
]

const bars = [
  { label: 'Q1', h: 68 },
  { label: 'Q2', h: 80 },
  { label: 'Q3', h: 76 },
  { label: 'Q4', h: 88 },
  { label: 'Now', h: 100 },
]

export default function CryptoWalletOverview() {
  return (
    <section className="cwov-section">
      <span className="cwov-glow" aria-hidden="true" />
      <div className="ld-container container">
        <div className="cwov-grid">
          <Reveal direction="left" className="cwov-text">
            <div className="cwov-eyebrow">
              <span className="cwov-eyebrow-dot" aria-hidden="true" />
              What We Do
            </div>
            <h2 className="cwov-title">
              Our Comprehensive
              <br />
              <span className="cwov-title-grad">Crypto Wallet Development Services</span>
            </h2>
            <p className="cwov-body">
              We handle every layer of wallet development, from key management and chain integration to the
              interface your users actually touch, so you launch with a product built to scale, not a prototype.
            </p>

            <ul className="cwov-points">
              {points.map((p) => (
                <li key={p.num}>
                  <span className="cwov-point-icon">{p.num}</span>
                  <span className="cwov-point-text">{p.text}</span>
                  <span className="cwov-point-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right" /></span>
                </li>
              ))}
            </ul>

            <div className="cwov-actions">
              <Link to="/#products" className="cwov-btn-primary">
                Start Your Project <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link to="/#products" className="cwov-btn-ghost">View our work</Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="cwov-visual">
            <div className="cwov-card">
              <span className="cwov-ring" aria-hidden="true" />
              <span className="cwov-blob" aria-hidden="true" />

              <div className="cwov-card-header">
                <div className="cwov-avatars">
                  <span className="cwov-avatar" style={{ background: '#6c3bff' }}>S</span>
                  <span className="cwov-avatar" style={{ background: '#10b981' }}>R</span>
                  <span className="cwov-avatar" style={{ background: '#38bdf8' }}>M</span>
                  <span className="cwov-avatar cwov-avatar--more">+62</span>
                </div>
                <div className="cwov-header-text">
                  <div className="cwov-header-title">Trusted by 60+ clients</div>
                  <div className="cwov-header-sub">worldwide</div>
                </div>
                <div className="cwov-live"><span /> Active</div>
              </div>

              <div className="cwov-stats">
                <div className="cwov-stat">
                  <div className="cwov-stat-icon"><i className="fa-solid fa-layer-group" /></div>
                  <div className="cwov-stat-num">150+</div>
                  <div className="cwov-stat-lbl">Projects</div>
                </div>
                <div className="cwov-stat-sep" />
                <div className="cwov-stat">
                  <div className="cwov-stat-icon"><i className="fa-solid fa-star" /></div>
                  <div className="cwov-stat-num">4.8<span className="cwov-stat-denom">/5</span></div>
                  <div className="cwov-stat-lbl">Rating</div>
                </div>
                <div className="cwov-stat-sep" />
                <div className="cwov-stat">
                  <div className="cwov-stat-icon"><i className="fa-solid fa-trophy" /></div>
                  <div className="cwov-stat-num">97%</div>
                  <div className="cwov-stat-lbl">Satisfaction</div>
                </div>
              </div>

              <div className="cwov-chart">
                <div className="cwov-chart-header">
                  <span className="cwov-chart-label">Project Success Rate</span>
                  <span className="cwov-chart-badge"><i className="fa-solid fa-arrow-trend-up" /> +6% this quarter</span>
                </div>
                <div className="cwov-bars">
                  {bars.map((b) => (
                    <div className={`cwov-bar${b.h === 100 ? ' cwov-bar--peak' : ''}`} key={b.label}>
                      <div className="cwov-bar-fill" style={{ height: `${b.h}%` }} />
                      <span>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cwov-feed">
                <div className="cwov-feed-label">Recent deliveries</div>
                {points.slice(0, 3).map((p) => (
                  <div className="cwov-feed-item" key={p.num}>
                    <span className="cwov-feed-dot" aria-hidden="true" />
                    <span className="cwov-feed-text">{p.text}</span>
                    <span className="cwov-feed-check" aria-hidden="true"><i className="fa-solid fa-check" /></span>
                  </div>
                ))}
              </div>

              <Link to="/schedule-free-demo" className="cwov-cta-strip">
                <i className="fa-solid fa-rocket" aria-hidden="true" />
                <span>150+ projects delivered on time</span>
                <span className="cwov-cta-arr" aria-hidden="true"><i className="fa-solid fa-arrow-right" /></span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
