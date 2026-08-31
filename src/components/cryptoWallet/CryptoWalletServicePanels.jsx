import { Link } from 'react-router-dom'
import Reveal from '../shared/Reveal.jsx'
import CryptoDashMock from './CryptoDashMock.jsx'
import { servicePanels } from '../../data/cryptoWallet/cryptoWalletData.js'

// Five alternating half-text/half-visual panels -- not a new shared component, just the
// same "alternating left-right, Reveal direction alternating" markup pattern already used
// dozens of times across this codebase (e.g. components/gojek/AllInOneSuperApp.jsx,
// components/udemy/AiContentGenerator.jsx), driven off a small data array instead of five
// near-duplicate hand-written sections.
export default function CryptoWalletServicePanels() {
  return (
    <>
      {servicePanels.map((panel, i) => {
        const imageFirst = i % 2 === 1

        const textColumn = (
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-0 vc_col-xs-offset-1 vc_col-xs-10" key="text">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction={imageFirst ? 'right' : 'left'}>
                  <header className="fancy-title">
                    <h2>{panel.title}</h2>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>{panel.desc}</span></p>
                    </div>
                  </header>
                  <Link to="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                    <span>
                      <span className="btn-txt">Get a Quote</span>
                      <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        )

        const visualColumn = (
          <div className="wpb_column vc_column_container vc_col-sm-6" key="visual">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction={imageFirst ? 'left' : 'right'}>
                  {panel.image ? (
                    // Fixed rounded frame (dark bg blends the image's own dark
                    // corners) with the graphic slowly rotating inside it.
                    <span className="cw-service-panel__imgwrap">
                      <img
                        src={panel.image}
                        alt={panel.imageAlt || panel.title}
                        className="cw-service-panel__image"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  ) : (
                    <CryptoDashMock mock={panel.mock} />
                  )}
                </Reveal>
              </div>
            </div>
          </div>
        )

        return (
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex" key={panel.title}>
            <div className="ld-container container">
              <div className="row ld-row">
                {imageFirst ? [visualColumn, textColumn] : [textColumn, visualColumn]}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
