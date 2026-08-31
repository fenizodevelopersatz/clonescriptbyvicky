const revenueWaysToEarn = [
  'Start your marketplace in no time with an established business model.',
  'Earn money by subscription, commission and featured listings.',
  'Offer supplier membership plans with tiered pricing and benefits.',
  'Collect transaction commissions on completed marketplace orders.',
  'Charge suppliers for featured product placements.',
  'Sell sponsored supplier profiles and advertising space.',
  'Generate income through lead-generation services for suppliers.',
]

export default function WhyInvest() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h2>Why Invest in an Alibaba-Style Marketplace?</h2>
                    <div className="st-desc">
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          Digital procurement gives businesses a faster way to discover suppliers, compare wholesale products,
                          request commercial quotations, and manage bulk purchasing.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          A ready-made Alibaba Clone helps entrepreneurs begin with an established B2B marketplace model. It
                          reduces the time required to create foundational features and allows more focus on supplier
                          acquisition, customer experience, marketing, and marketplace growth.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>Platform owners can generate revenue through:</span>
                        {revenueWaysToEarn.map((point, i) => (
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
                        <img src="/wp-content/uploads/2026/06/alibaba-clone-demo.webp" width="600" height="400" className="vc_single_image-img attachment-full" alt="Two business partners shaking hands over a signed agreement, representing an Alibaba-style B2B marketplace deal" />
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
