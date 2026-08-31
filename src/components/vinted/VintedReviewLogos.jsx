const reviewPlatforms = [
  ['google-clonescript.webp', 'Google reviews'],
  ['glassdoor-clonescript.webp', 'Glassdoor reviews'],
  ['trustpilot-clonescript.webp', 'Trustpilot reviews'],
  ['ambitionbox-clonescript.webp', 'AmbitionBox reviews'],
  ['sitejabber-clonescript.webp', 'Sitejabber reviews'],
  ['justdial-clonescript.webp', 'Justdial reviews'],
]

export default function VintedReviewLogos() {
  return (
    <section className="vinted-review-platforms vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"><span style={{ color: '#002692' }}>Trusted </span>by Our Clients</span>
                    </h2>
                  </div>
                  <div className="vinted-review-platforms__logos" aria-label="Review platforms">
                    {reviewPlatforms.map(([file, label]) => (
                      <img
                        key={file}
                        src={`/wp-content/uploads/2025/01/${file}`}
                        width="165"
                        height="48"
                        alt={label}
                        loading="eager"
                        decoding="async"
                      />
                    ))}
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
