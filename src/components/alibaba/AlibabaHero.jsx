import TextRotator from '../shared/TextRotator.jsx'

const rotatingKeywords = [
  { text: 'Responsive Design', color: 'rgb(255, 87, 87)' },
  { text: 'Secure Transactions', color: 'rgb(87, 161, 255)' },
  { text: 'Scalable Performance', color: 'rgb(0, 214, 53)' },
  { text: 'Flexible Customization', color: 'rgb(210, 71, 204)' },
]

export default function AlibabaHero() {
  return (
    <section className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space" style={{ height: 80 }}><span className="liquid_empty_space_inner"></span></div>
                  <a href="#demo" className="btn btn-default btn-xsm circle btn-bordered border-thin btn-icon-left badge-pill-animated" data-localscroll="true">
                    <span>
                      <span className="btn-txt">AI-Powered</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-bolt"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space" style={{ height: 20 }}><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt">
                        <span style={{ color: '#002692' }}>AI-Enabled Alibaba Clone</span>
                        <br />
                        <span className="hero-heading">for Global B2B Commerce</span>
                        <br />
                      </span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Create a professional online marketplace that connects manufacturers, wholesalers, distributors, suppliers, and business buyers. Our customizable Alibaba Clone Script brings product sourcing, bulk enquiries, quotation management, online payments, supplier operations, and marketplace administration into one connected platform.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space" style={{ height: 40 }}><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h4 className="lqd-highlight-underline lqd-highlight-grow-left" data-text-rotator="true">
                      <span className="ld-fh-txt">
                        {' '}
                        <TextRotator keywords={rotatingKeywords} />
                      </span>
                    </h4>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Deliver a reliable buying and selling experience with modern interfaces, protected user accounts, scalable technology, and complete branding flexibility.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space" style={{ height: 40 }}><span className="liquid_empty_space_inner"></span></div>
                  <a href="#demo" className="btn btn-solid btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Explore Live Demo</span>
                      <span className="btn-icon"><i className="fa fa-regular fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">View Packages</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-dollar-sign"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space" style={{ height: 120 }}><span className="liquid_empty_space_inner"></span></div>
                  <div className="iconbox iconbox-side iconbox-heading-xs">
                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-wand-sparkles"></i></span></div>
                    <h3 className="font-weight-semibold">AI-Powered</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
        </div>
      </div>
    </section>
  )
}
