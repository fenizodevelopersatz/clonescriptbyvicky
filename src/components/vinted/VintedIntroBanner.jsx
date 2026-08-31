import { Link } from 'react-router-dom'
import '../shared/SimpleListSection.css'

const marketplaceFeatures = [
  'Simple product listings',
  'Advanced search options and filters',
  'Secure communication between buyers and sellers',
  'Offers and price negotiations',
  'Online payment processing',
  'Shipping and delivery tracking',
  'Management of seller performance',
  'Marketplace commissions',
  'Business analytics',
  'Centralized administration',
]

export default function VintedIntroBanner() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center vc_col-sm-offset-1">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Build a Powerful<span style={{ color: '#002692' }}> Fashion Resale Marketplace</span></span>
                    </h2>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>
                          Turn your resale business idea into a thriving digital marketplace where buyers can find great
                          deals and sellers can turn their unused fashion items into fresh opportunities. The platform
                          offers:
                        </span>
                      </p>
                    </div>
                  </div>
                  <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': 2, margin: '24px auto 0', maxWidth: 720 }}>
                    {marketplaceFeatures.map((item, i) => (
                      <li key={i}><i className="fa fa-solid fa-check" aria-hidden="true"></i><span>{item}</span></li>
                    ))}
                  </ul>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <Link to="/contact-us" className="btn btn-solid btn-sm round btn-bordered border-thin">
                    <span>
                      <span className="btn-txt">Let&rsquo;s Talk About Your Vinted Clone Needs with CloneScript</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
