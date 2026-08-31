import { siteContact } from '../../data/siteContact.js'
import GradientButton from '../GradientButton.jsx'
import CryptoWalletHeroVisual from './CryptoWalletHeroVisual.jsx'

const whatsappHref = `https://api.whatsapp.com/send?phone=${siteContact.whatsappApiNumber}&text=${encodeURIComponent('Hello, I am interested in Crypto Wallet Development')}`

export default function CryptoWalletHero() {
  return (
    <section className="cw-hero vc_row wpb_row vc_row-fluid sv_first_row vc_row-o-content-middle vc_row-flex">
      <span className="cw-hero__grid" aria-hidden="true"></span>
      <div className="ld-container container">
        <div className="cw-hero__panel">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <span className="cw-hero__eyebrow cw-hero__reveal">Crypto Wallet Development</span>
                    <div className="ld-fancy-heading text-left cw-hero__reveal" style={{ animationDelay: '0.1s' }}>
                      <h1 className="cw-hero__heading lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"><span className="cw-hero__accent-word">Crypto</span> Wallet Development Services</span>
                      </h1>
                    </div>
                    <div className="wpb_text_column wpb_content_element cw-hero__reveal" style={{ animationDelay: '0.22s' }}>
                      <div className="wpb_wrapper">
                        <p className="cw-hero__desc" style={{ textAlign: 'left' }}>
                          <span>
                            We provide secure, scalable crypto wallet development services tailored to your business
                            needs. Our solutions include multi-currency support, advanced encryption, and seamless
                            transactions. Built for performance and usability, our wallets deliver a reliable and
                            smooth user experience.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                    <div className="cw-hero__actions cw-hero__reveal" style={{ animationDelay: '0.34s' }}>
                      <GradientButton href="/schedule-free-demo" title="Get a Quote" text="Get a Quote" size="sm" svgId="svg-border-cw-hero-cta" />
                      <a href={whatsappHref} target="_blank" rel="noreferrer" className="cw-hero__btn-secondary">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_hidden-xs">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="cw-hero__visual cw-hero__visual--fx">
                      <CryptoWalletHeroVisual />
                    </div>
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
