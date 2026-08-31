const trustPlatforms = [
  ['google-clonescript.webp', 'Google reviews'],
  ['glassdoor-clonescript.webp', 'Glassdoor reviews'],
  ['trustpilot-clonescript.webp', 'Trustpilot reviews'],
  ['ambitionbox-clonescript.webp', 'AmbitionBox reviews'],
  ['sitejabber-clonescript.webp', 'Sitejabber reviews'],
  ['justdial-clonescript.webp', 'Justdial reviews'],
]

export default function TrustedByClients() {
  return (
    <section className="vc_section vc_custom_1776320292174 vc_section-has-fill erp-trusted-section">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a663fd23">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a664047a">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading text-center">
                      <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> <span style={{ color: '#002692' }}>Trusted </span>by Our Clients</span>
                      </h2>
                    </div>
                    <div className="vc_empty_space" style={{ height: 67 }}><span className="vc_empty_space_inner"></span></div>
                    <div className="erp-trust-logos" aria-label="Independent review platforms">
                      {trustPlatforms.map(([file, label]) => (
                        <img
                          key={file}
                          src={`/wp-content/uploads/2025/01/${file}`}
                          alt={label}
                          loading="lazy"
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

      <section className="vc_row wpb_row vc_row-fluid vc_custom_1775820376024 liquid-row-shadowbox-6a665a664ca04 vc_column-gap-35">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="vc_empty_space erp-recognition-space" style={{ height: 20 }}><span className="vc_empty_space_inner"></span></div>
                    <div className="ld-fancy-heading text-center">
                      <h4 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt">Recognized by <span style={{ color: '#002692' }}>clients</span></span>
                      </h4>
                    </div>
                    <div className="vc_empty_space" style={{ height: 20 }}><span className="vc_empty_space_inner"></span></div>
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'center' }}>CloneScript has years of experience in delivering high-quality product development solutions.</p>
                      </div>
                    </div>
                    <div className="vc_empty_space" style={{ height: 40 }}><span className="vc_empty_space_inner"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
