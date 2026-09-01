import './FooterReviewLogos.css'

// Real per-platform ratings (kept in sync with the actual profile pages
// linked below). Badges are pure CSS/markup, not the platforms' own logo
// assets -- a letter or a generic icon in each brand's real color, same
// "no screenshots" approach used everywhere else on this site.
const reviewPlatforms = [
  { name: 'Google', rating: 4.3, href: 'https://bit.ly/clonescript-reviews', badge: 'letter', value: 'G', color: '#4285f4' },
  { name: 'Glassdoor', rating: 4.0, href: 'https://www.glassdoor.co.in/Overview/Working-at-CloneScript-EI_IE2904552.11,32.htm', badge: 'icon', value: 'fa-solid fa-door-open', color: '#0caa41' },
  { name: 'Trustpilot', rating: 4.0, href: 'https://www.trustpilot.com/review/clonescript.com', badge: 'icon', value: 'fa-solid fa-star', color: '#00b67a' },
  { name: 'AmbitionBox', rating: 4.9, href: 'https://www.clonescript.com', badge: 'letter', value: 'A', color: '#0768ae' },
  { name: 'Sitejabber', rating: 5, href: 'https://www.clonescript.com', badge: 'icon', value: 'fa-solid fa-rocket', color: '#7c3aed' },
  { name: 'Justdial', rating: 4.2, href: 'https://bit.ly/clonescript', badge: 'letter', value: 'Jd', color: '#e8710a' },
]

// Proportional star fill: a gray track of 5 stars with a gold copy laid on
// top and clipped to (rating/5)*100% width, so 4.3/5 shows ~86% of the 5th
// star filled instead of just rounding to whole stars.
function StarRating({ rating }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100))
  const stars = Array.from({ length: 5 })
  return (
    <span className="frl-stars" aria-hidden="true">
      <span className="frl-stars-track">
        {stars.map((_, i) => <i className="fa-solid fa-star" key={i} />)}
      </span>
      <span className="frl-stars-fill" style={{ width: `${pct}%` }}>
        {stars.map((_, i) => <i className="fa-solid fa-star" key={i} />)}
      </span>
    </span>
  )
}

export default function FooterReviewLogos() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox" style={{ backgroundColor: '#f5f7ff' }}>
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space" style={{ height: 40 }}>
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <header className="fancy-title text-center">
                    <h3>Our Client&apos;s Reviews and Ratings Across Platforms</h3>
                  </header>
                  <div className="frl-grid" aria-label="Review platforms">
                    {reviewPlatforms.map((p) => (
                      <a key={p.name} className="frl-card" href={p.href} target="_blank" rel="noreferrer">
                        <span className="frl-badge" style={{ '--frl-color': p.color }} aria-hidden="true">
                          {p.badge === 'letter' ? p.value : <i className={p.value}></i>}
                        </span>
                        <span className="frl-meta">
                          <StarRating rating={p.rating} />
                          <span className="frl-score">
                            <strong>{p.rating.toFixed(1)}</strong>/5 <span className="frl-on">on {p.name}</span>
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="ld-empty-space" style={{ height: 40 }}>
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
