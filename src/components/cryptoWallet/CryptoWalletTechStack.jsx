import './CryptoWalletTechStack.css'

// Technology-stack category grid -- distinct from the existing "Coins &
// Networks" row elsewhere on this page (that one lists supported
// currencies; this one lists the actual engineering stack).
const categories = [
  { icon: 'fa-solid fa-display', name: 'Frontend', tools: ['React', 'Vue.js'] },
  { icon: 'fa-solid fa-server', name: 'Backend', tools: ['Node.js', 'Python'] },
  { icon: 'fa-solid fa-mobile-screen-button', name: 'Mobile App Development', tools: ['Swift (iOS)', 'Kotlin (Android)', 'React Native'] },
  { icon: 'fa-solid fa-link', name: 'Blockchain Networks', tools: ['Ethereum', 'BNB Chain', 'Polygon'] },
  { icon: 'fa-solid fa-file-contract', name: 'Smart Contracts', tools: ['Solidity'] },
  { icon: 'fa-solid fa-cube', name: 'Web3 Libraries', tools: ['Web3.js', 'Ethers.js'] },
  { icon: 'fa-solid fa-wallet', name: 'Wallet Integration', tools: ['WalletConnect', 'MetaMask'] },
  { icon: 'fa-solid fa-cloud', name: 'Cloud & DevOps', tools: ['AWS', 'Docker', 'Kubernetes'] },
]

const toolCount = categories.reduce((sum, c) => sum + c.tools.length, 0)

export default function CryptoWalletTechStack() {
  return (
    <section className="cwts-section">
      <div className="cwts-bg" aria-hidden="true">
        <span className="cwts-orb cwts-orb--1" />
        <span className="cwts-orb cwts-orb--2" />
        <span className="cwts-orb cwts-orb--3" />
        <span className="cwts-bg-grid" />
      </div>

      <div className="ld-container container">
        <div className="cwts-head">
          <div className="cwts-eyebrow">Technology Stack</div>
          <h2 className="cwts-title">
            Tech Stack We <em className="cwts-title-grad">Use</em>
          </h2>
          <p className="cwts-sub">
            As a crypto wallet development company, we use a modern tech stack to build secure and scalable
            solutions. It ensures high performance, seamless integration, and a smooth user experience.
          </p>
          <div className="cwts-meta">
            <span><strong>{toolCount}+</strong> tools</span>
            <span className="cwts-meta-sep" />
            <span><strong>{categories.length}</strong> categories</span>
          </div>
        </div>

        <div className="cwts-grid">
          {categories.map((cat, i) => (
            <div className="cwts-card" key={cat.name}>
              <span className="cwts-card-line" aria-hidden="true" />
              <span className="cwts-card-glow" aria-hidden="true" />
              <div className="cwts-card-head">
                <div className="cwts-cat-icon"><i className={cat.icon} aria-hidden="true" /></div>
                <div className="cwts-cat-meta">
                  <span className="cwts-cat-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cwts-cat-name">{cat.name}</span>
                </div>
                <div className="cwts-cat-count">{cat.tools.length}</div>
              </div>
              <div className="cwts-divider" />
              <div className="cwts-tags">
                {cat.tools.map((tool) => (
                  <span className="cwts-tag" key={tool}>
                    <span className="cwts-tag-dot" aria-hidden="true" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
