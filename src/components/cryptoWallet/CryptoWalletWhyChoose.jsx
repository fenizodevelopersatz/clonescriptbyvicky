import { siteBrand } from '../../data/siteBrand.js'
import './CryptoWalletWhyChoose.css'

// "Why choose us" band right before the FAQ: copy + proof stats on the
// left, an animated "wallet build flow" card mockup on the right. Pure
// CSS/markup, matching this codebase's established mockup convention.
export default function CryptoWalletWhyChoose() {
  return (
    <section className="cwwc-section">
      <div className="cwwc-bg" aria-hidden="true" />
      <div className="ld-container container">
        <div className="cwwc-grid">
          <div className="cwwc-copy">
            <div className="cwwc-eyebrow">Why {siteBrand.name}</div>
            <h2 className="cwwc-title">Why Choose {siteBrand.name} for Crypto Wallet Development?</h2>
            <p className="cwwc-sub">
              {siteBrand.name} is a crypto wallet development team delivering secure, scalable solutions tailored to
              modern business needs. We lean on proven blockchain engineering practices, strong security including
              encryption and key management, and a client-centric process, so every build lines up with your actual
              goals. From development through deployment and ongoing support, it&rsquo;s end-to-end.
            </p>

            <div className="cwwc-proof-grid">
              <div>
                <strong>2FA</strong>
                <span>Protected access</span>
              </div>
              <div>
                <strong>HD</strong>
                <span>Secure key flows</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Post-launch support</span>
              </div>
            </div>
          </div>

          <div className="cwwc-visual" aria-hidden="true">
            <div className="cwwc-wallet-card">
              <div className="cwwc-wallet-head">
                <span><i className="fa-solid fa-wallet" aria-hidden="true" /> Wallet build flow</span>
                <strong>Secure</strong>
              </div>
              <div className="cwwc-wallet-shield"><i className="fa-solid fa-shield-halved" aria-hidden="true" /></div>
              <div className="cwwc-wallet-lines">
                <span style={{ '--w': '78%' }} />
                <span style={{ '--w': '58%' }} />
                <span style={{ '--w': '88%' }} />
              </div>
              <div className="cwwc-wallet-modules">
                <div><i className="fa-solid fa-key" aria-hidden="true" /><span>Key management</span></div>
                <div><i className="fa-solid fa-link" aria-hidden="true" /><span>Chain integration</span></div>
                <div><i className="fa-solid fa-lock" aria-hidden="true" /><span>Encrypted transfers</span></div>
              </div>
            </div>
            <div className="cwwc-badge cwwc-badge--top"><i className="fa-solid fa-check" aria-hidden="true" /> Smart contract audit</div>
            <div className="cwwc-badge cwwc-badge--bottom"><i className="fa-solid fa-bolt" aria-hidden="true" /> Fast deployment</div>
          </div>
        </div>
      </div>
    </section>
  )
}
