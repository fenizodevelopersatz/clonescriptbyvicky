export default function MoneyBackGuarantee() {
  return (
    <section className="money-back-section vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper money-back-panel">
                <img
                  src="/wp-content/uploads/money-back-badge.svg"
                  alt="7 day money back guarantee seal"
                  width="90"
                  height="90"
                  loading="lazy"
                  decoding="async"
                  style={{ flexShrink: 0, objectFit: 'contain' }}
                />
                <header className="fancy-title" style={{ flex: 1, minWidth: 220 }}>
                  <h2>100% Money Back Guaranteed</h2>
                  <div className="st-desc">
                    <p><span style={{ color: '#222222', fontSize: 14 }}>If our product doesn&rsquo;t work well we&rsquo;ll refund 100% of your money within 7 days.</span></p>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
