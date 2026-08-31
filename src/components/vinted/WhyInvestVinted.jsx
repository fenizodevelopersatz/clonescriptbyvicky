const keyBusinessBenefits = [
  'Get up and running quickly with a customizable marketplace foundation',
  'Build a recognizable fashion resale brand',
  'Cater to both buyers and sellers on a single platform',
  'Generate revenue through commissions, subscriptions, and promotions',
  'Foster a local or global resale community',
  'Monitor product demand and customer behavior',
  'Expand into new categories as your business evolves',
  'Promote more sustainable product reuse',
]

export default function WhyInvestVinted() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h2>Why You Should Consider a Vinted Clone Platform</h2>
                    <div className="st-desc">
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          The online resale model offers customers a hassle-free way to find great deals while allowing
                          sellers to give their items a second life.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          Having a dedicated marketplace empowers your business to manage its audience, branding, user
                          experience, marketplace policies, product categories, seller guidelines, and revenue strategies.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>Key Business Benefits:</span>
                        {keyBusinessBenefits.map((point, i) => (
                          <span key={i}>
                            <br />
                            <i className="fa-solid fa-caret-right" style={{ color: '#002692' }}></i> {point}
                          </span>
                        ))}
                      </p>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2026/04/why-invest-in-vinted-clone.jpg" width="780" height="698" className="vc_single_image-img attachment-full" alt="why invest in vinted clone" loading="lazy" decoding="async" />
                      </div>
                    </figure>
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
