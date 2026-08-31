import { Link } from 'react-router-dom'
import { walletTypes } from '../../data/cryptoWallet/cryptoWalletData.js'

export default function WalletTypesShowcase() {
  return (
    <section className="cw-wallet-types vc_row wpb_row vc_row-fluid">
      <div className="ld-container container-fluid">
        <div className="cw-wallet-types__panel">
          <div className="ld-fancy-heading text-center">
            <h2 className="cw-wallet-types__heading">Every Kind of Wallet — We Build All Four</h2>
          </div>
          <p className="cw-wallet-types__intro">
            Different products need different trade-offs between convenience and control. We design and build across
            all four major wallet categories, so the architecture matches how your users actually want to hold funds.
          </p>

          <div className="cw-wallet-types__grid">
            {walletTypes.map((type) => (
              // Wrapper owns the continuous float; the inner item owns the
              // flash-sweep + hover lift, so the two transforms never collide.
              <div className="cw-wallet-types__cell" key={type.title}>
                <div className="cw-wallet-types__item">
                  <span className="cw-wallet-types__icon"><i className={type.icon} aria-hidden="true"></i></span>
                  <h3>{type.title}</h3>
                  <p>{type.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/schedule-free-demo" className="cw-wallet-types__cta">
            <span>Discuss Your Wallet Type</span>
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}
