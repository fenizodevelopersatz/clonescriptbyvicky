import TextRotator from '../shared/TextRotator.jsx'
import '../shared/SimpleListSection.css'

const rotatingKeywords = [
  { text: 'Modern UI/UX', color: 'rgb(255, 87, 87)' },
  { text: 'Secure Platform', color: 'rgb(87, 161, 255)' },
  { text: 'Fast Performance', color: 'rgb(0, 214, 53)' },
  { text: '100 % Customizable', color: 'rgb(210, 71, 204)' },
]

const heroHighlights = [
  'Secure marketplace architecture',
  'Quick product discovery',
  'Tailored business workflows',
  'Dashboards for buyers, sellers, and administrators',
  'A scalable web and mobile platform',
  'Access to source code based on your chosen license',
]

export default function VintedHero() {
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, rgb(245,247,255) 0.990099%, rgb(245,247,255) 1.65017%, rgb(238,242,255) 19.802%, rgb(224,231,255) 39.3399%, rgb(241,245,249) 60%, rgb(248,250,252) 85%, rgb(255,255,255) 99.67%)',
      }}
      className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox"
    >
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a className="btn btn-default btn-xsm circle btn-bordered border-thin btn-icon-left badge-pill-animated vinted-hero-badge" data-localscroll="true">
                    <span>
                      <span className="btn-txt">AI-Powered</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-bolt"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> <span style={{ color: '#002692' }}>Vinted Clone Script</span> for a Scalable Fashion Resale Marketplace</span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Create a trendy online marketplace where users can effortlessly buy and sell pre-loved clothing, shoes, bags, accessories, and more. With CloneScript’s Vinted Clone, you’ll have all the essential tech to handle product listings, manage buyer and seller accounts, process payments, oversee shipping, facilitate private chats, handle offers, track orders, manage refunds, and administer the marketplace.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h4 className="lqd-highlight-underline lqd-highlight-grow-left vinted-hero-rotator" data-text-rotator="true">
                      <span className="ld-fh-txt">
                        {' '}
                        <TextRotator keywords={rotatingKeywords} />
                      </span>
                    </h4>
                  </div>
                  <ul className="clonescript-simple-list vinted-hero-list" style={{ '--clonescript-list-columns': 2 }}>
                    {heroHighlights.map((item, i) => (
                      <li key={i}><i className="fa fa-solid fa-check" aria-hidden="true"></i><span>{item}</span></li>
                    ))}
                  </ul>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="#demo" className="btn btn-solid btn-sm round btn-bordered border-thin vinted-hero-primary-cta" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Request a Live Demo</span>
                      <span className="btn-icon"><i className="fa fa-regular fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Get a Custom Quote</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-dollar-sign"></i></span>
                    </span>
                  </a>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
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
