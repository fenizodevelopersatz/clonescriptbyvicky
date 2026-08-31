import { heroStats } from '../../data/cryptoWallet/cryptoWalletData.js'
import './CryptoWalletStats.css'

// Light "achievements" band right after the dark hero -- gradient-accented
// numbers in bordered cards over a dot-grid + glow-orb backdrop. Reuses the
// same heroStats data the hero's stat strip used to render inline.
export default function CryptoWalletStats() {
  return (
    <section className="cws-section">
      <div className="cws-bg" aria-hidden="true">
        <span className="cws-bg-grid" />
        <span className="cws-orb cws-orb--1" />
        <span className="cws-orb cws-orb--2" />
      </div>
      <div className="ld-container container">
        <div className="cws-head">
          <h2 className="cws-title">
            The Track Record Behind <span className="cws-title-accent">Every Wallet We Build</span>
          </h2>
          <p className="cws-sub">
            These numbers aren&rsquo;t projections &mdash; they&rsquo;re what happens once a wallet built by us goes live.
          </p>
        </div>

        <div className="cws-grid">
          {heroStats.map((stat) => (
            <div className="cws-card" key={stat.label}>
              <span className="cws-card-glow" aria-hidden="true" />
              <div className="cws-num">{stat.value}</div>
              <div className="cws-label">{stat.label}</div>
              <p className="cws-desc">{stat.desc}</p>
              <span className="cws-card-line" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
