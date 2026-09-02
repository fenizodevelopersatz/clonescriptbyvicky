import { Link } from 'react-router-dom'
import { footerNavColumns } from '../../data/socialLinks.js'
import { siteContact } from '../../data/siteContact.js'
import { siteBrand } from '../../data/siteBrand.js'
import CurrencySelector from './CurrencySelector.jsx'

function NavLink({ href, label }) {
  if (href === '#') return <a href={href}>{label}</a>
  return <Link to={href}>{label}</Link>
}

function FooterNavColumn({ col }) {
  if (col.hidden) return null

  const HeadingTag = col.headingTag || 'h3'
  return (
    <div className="wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="wpb_wrapper-inner">
            <div className={`ld-fancy-heading text-left text-uppercase${col.headingTag ? ' custom-footer-menu-li' : ''}`}>
              <HeadingTag className="lqd-highlight-underline lqd-highlight-grow-left">
                <span className="ld-fh-txt"> {col.title}</span>
              </HeadingTag>
            </div>
            <ul className="lqd-custom-menu reset-ul">
              {col.links.map(([href, label], j) => (
                <li key={j}><NavLink href={href} label={label} /></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FooterBottom() {
  return (
    <>
      <section className="vc_section vc_custom_1726132830590 vc_section-has-fill">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40f0e04 vc_row-o-equal-height vc_row-flex">
        <div className="ld-container container-fluid">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-4">
              <div className="vc_column-inner">
                <div className="wpb_wrapper vc_custom_1726203463031">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space" style={{ height: 25 }}>
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1773139863014">
                      <img src={siteBrand.logo} width={siteBrand.logoWidth} height={siteBrand.logoHeight} alt={siteBrand.name} loading="lazy" decoding="async" />
                    </div>
                    <div className="ld-empty-space" style={{ height: 15 }}>
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <header className="fancy-title vc_custom_1726232338760">
                      <h6>{siteContact.companyName.toUpperCase()}</h6>
                      <div className="st-desc">
                        <p style={{ margin: '0px 0px' }}>
                          <span style={{ fontSize: 14, color: '#3d3d3d' }}>Building digital products for growing businesses worldwide.</span>
                        </p>
                      </div>
                    </header>
                    <div className="iconbox text-left vc_custom_1726232017247">
                      <div className="iconbox-icon-wrap">
                        <span className="iconbox-icon-container"></span>
                      </div>
                      <div className="contents">
                        <h3 className="font-weight-semibold">Address</h3>
                        <p style={{ textAlign: 'left' }}>
                          <span style={{ color: '#3d3d3d', fontSize: 14 }}>{siteContact.addressLine1}</span>
                        </p>
                        <p style={{ textAlign: 'left' }}>
                          <span style={{ color: '#3d3d3d', fontSize: 14 }}>{siteContact.addressLine2}</span>
                        </p>
                      </div>
                    </div>
                    <div className="iconbox text-left vc_custom_1726230471562">
                      <div className="iconbox-icon-wrap">
                        <span className="iconbox-icon-container"></span>
                      </div>
                      <h3 className="font-weight-semibold">Get in Touch</h3>
                    </div>
                    <div className="wpb_raw_code wpb_raw_html wpb_content_element vc_custom_1742799354729">
                      <div className="wpb_wrapper">
                        <div className="footer-whatsapp">
                          <a href={`https://api.whatsapp.com/send?phone=${siteContact.whatsappApiNumber}&text=Hello,%20I%20am%20interested%20with%20this%20product`} target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp"></i>
                            <span>{siteContact.whatsappNumberDisplay}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="ld-empty-space" style={{ height: 10 }}>
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-5">
              <div className="vc_column-inner">
                <div className="wpb_wrapper vc_custom_1726298044719">
                  <div className="wpb_wrapper-inner">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1726298125755">
                      {footerNavColumns.slice(0, 2).map((col, i) => (
                        <FooterNavColumn col={col} key={i} />
                      ))}
                    </div>
                    <div className="ld-empty-space" style={{ height: 35 }}>
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      {footerNavColumns.slice(2, 4).map((col, i) => (
                        <FooterNavColumn col={col} key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-has-fill">
              <div className="vc_column-inner">
                <div className="wpb_wrapper vc_custom_1726203548888">
                  <div className="wpb_wrapper-inner">
                    <CurrencySelector />
                    <div className="vc_row wpb_row vc_inner vc_row-fluid liquid-row-shadowbox-6a665a4108873">
                      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper vc_custom_1726132866277">
                            <div className="wpb_wrapper-inner">
                              <div className="ld-fancy-heading text-center">
                                <p className="lqd-highlight-underline lqd-highlight-grow-left">
                                  <span className="ld-fh-txt">
                                    <span className="safensecure" style={{ fontSize: 16 }}>
                                      <strong>Safe &amp; Secure</strong> Checkout
                                    </span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a4109782">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space" style={{ height: 72 }}>
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <header className="fancy-title text-center custom-footer-title">
                      <h6 className="lined-alt">
                        <i className="line-alt"></i> Crafted with <i className="fas fa-heart"></i> <i className="line-alt"></i>
                      </h6>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid vc_custom_1718194534933 liquid-row-shadowbox-6a665a410b8e9 vc_row-has-fill">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading text-center">
                      <p className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt">
                          <span style={{ color: '#3d3d3d', fontSize: 14 }}>© {new Date().getFullYear()} {siteContact.companyName}. All Rights Reserved.</span>
                        </span>
                      </p>
                    </div>
                    <div className="ld-empty-space" style={{ height: 34 }}>
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'left' }}>
                          <span style={{ color: '#3d3d3d', fontSize: 14 }}>
                            <strong>Disclaimer:</strong> &quot;Alibaba, Amazon, YouTube, Zillow&quot; and other brand names referenced
                            on this site are trademarks of their respective owners, used only for descriptive purposes to
                            explain the type of platform each script replicates. {siteBrand.name} is not affiliated with,
                            sponsored by, or endorsed by any of these companies. All source code, design, and branding of{' '}
                            {siteBrand.name} products are independently developed and fully owned by {siteBrand.name}.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
