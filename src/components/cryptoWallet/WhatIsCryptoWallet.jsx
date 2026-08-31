import Reveal from '../shared/Reveal.jsx'
import { walletConcepts } from '../../data/cryptoWallet/cryptoWalletData.js'

export default function WhatIsCryptoWallet() {
  return (
    <section className="cw-whatis vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-1 vc_col-md-10 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <Reveal>
                    <div className="ld-fancy-heading text-center">
                      <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> What Is a <span className="cw-whatis__accent">Crypto Wallet?</span></span>
                      </h2>
                    </div>
                    <div className="cw-whatis__intro">
                      <p>A crypto wallet is software that lets a person or business store, send, and receive digital assets on the blockchain.</p>
                      <p>It does not hold coins the way a physical wallet holds cash — it holds the cryptographic keys that prove ownership and authorize every transaction.</p>
                      <p className="cw-whatis__lead">Every wallet is built around three core concepts:</p>
                    </div>
                  </Reveal>

                  <div className="cw-concepts">
                    {walletConcepts.map((concept, i) => (
                      <Reveal delay={0.12 * i} className="cw-concept-cell" key={concept.term}>
                        <div className="cw-concept-card">
                          <span className="cw-concept-card__icon">
                            <i className={concept.icon} aria-hidden="true"></i>
                          </span>
                          <h3 className="cw-concept-card__term">{concept.term}</h3>
                          <p className="cw-concept-card__desc">{concept.desc}</p>
                        </div>
                      </Reveal>
                    ))}
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
