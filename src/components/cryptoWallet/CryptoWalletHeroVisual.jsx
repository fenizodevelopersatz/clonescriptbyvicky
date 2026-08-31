import { useEffect, useState } from 'react'
import { siteBrand } from '../../data/siteBrand.js'
import './CryptoWalletHeroVisual.css'

// Base balance the card hovers around -- ticks by a random +/-50 amount on
// an interval so the card reads as a live feed rather than a static mock.
const BASE_BALANCE = 18240.75

function formatBalance(value) {
  const [dollars, cents] = value.toFixed(2).split('.')
  return { dollars: Number(dollars).toLocaleString('en-US'), cents }
}

// Live-looking wallet mockup for the hero's right side -- a fanned stack of
// balance cards + an animated token list + an incoming-tx pill, all pure
// CSS/markup (same "no screenshots" approach as CryptoDashMock.jsx). Modeled
// on the floating wallet-card effect pattern used across crypto product
// sites, re-themed to CloneScript's violet/pink hero palette.
const tokens = [
  { key: 'btc', name: 'Bitcoin', symbol: 'BTC', price: '$64,280', change: 3.1, icon: <i className="fa-brands fa-bitcoin" aria-hidden="true" /> },
  { key: 'eth', name: 'Ethereum', symbol: 'ETH', price: '$3,180', change: 2.4, icon: <i className="fa-brands fa-ethereum" aria-hidden="true" /> },
  { key: 'sol', name: 'Solana', symbol: 'SOL', price: '$142', change: -1.2, icon: '◎' },
]

export default function CryptoWalletHeroVisual() {
  const [balance, setBalance] = useState(BASE_BALANCE)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      const delta = Math.random() * 100 - 50 // random amount between -50 and +50
      setBalance(BASE_BALANCE + delta)
    }, 2500)

    return () => clearInterval(id)
  }, [])

  const { dollars, cents } = formatBalance(balance)

  return (
    <div className="cwhv" aria-hidden="true">
      <div className="cwhv-stack">
        <div className="cwhv-card cwhv-card--3" />
        <div className="cwhv-card cwhv-card--2" />
        <div className="cwhv-card cwhv-card--1">
          <span className="cwhv-card-glow" />
          <div className="cwhv-card-top">
            <span className="cwhv-card-chip"><i className="fa-solid fa-microchip" aria-hidden="true" /></span>
            <span className="cwhv-card-logo">{siteBrand.name} Wallet</span>
          </div>
          <div className="cwhv-card-bal">${dollars}<span>.{cents}</span></div>
          <div className="cwhv-card-bottom">
            <span className="cwhv-card-addr">0x7a3f&hellip;9c21</span>
            <i className="fa-brands fa-bitcoin" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="cwhv-tokens">
        {tokens.map((t) => (
          <div className="cwhv-token" key={t.key}>
            <span className={`cwhv-token-icon cwhv-token-icon--${t.key}`}>{t.icon}</span>
            <span className="cwhv-token-info">
              <strong>{t.name}</strong>
              <small>{t.symbol}</small>
            </span>
            <span className="cwhv-token-price">
              <strong>{t.price}</strong>
              <small className={t.change >= 0 ? 'cwhv-up' : 'cwhv-down'}>
                {t.change >= 0 ? '+' : ''}{t.change}%
              </small>
            </span>
          </div>
        ))}
      </div>

      <div className="cwhv-tx">
        <i className="fa-solid fa-arrow-down" aria-hidden="true" />
        <span>+0.05 ETH</span>
        <span className="cwhv-tx-time">just now</span>
      </div>
    </div>
  )
}
