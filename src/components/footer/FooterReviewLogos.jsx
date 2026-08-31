const reviewPlatforms = [
  ['google-clonescript.webp', 'Google reviews', 'https://bit.ly/clonescript-reviews'],
  ['glassdoor-clonescript.webp', 'Glassdoor reviews', 'https://www.glassdoor.co.in/Overview/Working-at-CloneScript-EI_IE2904552.11,32.htm'],
  ['trustpilot-clonescript.webp', 'Trustpilot reviews', 'https://www.trustpilot.com/review/clonescript.com'],
  ['ambitionbox-clonescript.webp', 'AmbitionBox reviews', 'https://www.clonescript.com'],
  ['sitejabber-clonescript.webp', 'Sitejabber reviews', 'https://www.clonescript.com'],
  ['justdial-clonescript.webp', 'Justdial reviews', 'https://bit.ly/clonescript'],
]

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
                  <div className="footer-review-platforms__logos" aria-label="Review platforms">
                    {reviewPlatforms.map(([file, label, href]) => (
                      <a key={file} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                        <img
                          src={`/wp-content/uploads/2025/01/${file}`}
                          width="165"
                          height="48"
                          alt={label}
                          loading="eager"
                          decoding="async"
                        />
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
