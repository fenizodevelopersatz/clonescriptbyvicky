import Reveal from '../shared/Reveal.jsx'
import TextRotator from '../shared/TextRotator.jsx'
import '../shared/SimpleListSection.css'

const rotatingKeywords = [
  { text: 'Modern UI/UX', color: 'rgb(255, 87, 87)' },
  { text: 'Secure Platform', color: 'rgb(87, 161, 255)' },
  { text: 'Fast Performance', color: 'rgb(0, 214, 53)' },
  { text: '100 % Customizable', color: 'rgb(210, 71, 204)' },
]

const heroHighlights = [
  '100% customizable business workflows',
  'Secure role-based platform',
  'Fast and responsive performance',
  'Advanced property search',
  'Complete source-code access',
  'Scalable marketplace architecture',
]

export default function ZillowHero() {
  return (
    <section className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" duration={1.2}>
                  <div className="iconbox iconbox-inline iconbox-heading-xs" style={{ justifyContent: 'center' }}>
                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-wand-sparkles"></i></span></div>
                    <h3 className="font-weight-semibold">AI-Powered</h3>
                  </div>
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt">
                        <span style={{ color: '#002692' }}>Zillow Clone Script</span> for a Scalable Real Estate Marketplace
                      </span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Establish a cutting-edge property marketplace where buyers, renters, owners, and agents can seamlessly connect on a secure digital platform. CloneScript’s Zillow Clone offers a comprehensive solution that includes property discovery, listing management, map-based searches, lead management, visit scheduling, payment processing, and business analytics—all tailored for your growth.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h4 className="lqd-highlight-underline lqd-highlight-grow-left" data-text-rotator="true">
                      <span className="ld-fh-txt">
                        {' '}
                        <TextRotator keywords={rotatingKeywords} />
                      </span>
                    </h4>
                  </div>
                  <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': 2, margin: '20px auto', maxWidth: 680 }}>
                    {heroHighlights.map((item, i) => (
                      <li key={i}><i className="fa fa-solid fa-check" aria-hidden="true"></i><span>{item}</span></li>
                    ))}
                  </ul>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="#demo" className="btn btn-solid btn-sm round btn-bordered border-thin" data-localscroll="true">
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
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
        </div>
      </div>
    </section>
  )
}
