import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs } from '../../data/olx/olxData.js'

export default function OlxFaqSection() {
  const [tab, setTab] = useState('faq')
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="tabs tabs-nav-centered tabs-nav-underlined tabs-nav-active-underlined tabs-nav-lg">
                    <ul className="nav tabs-nav" role="tablist">
                      <li role="presentation" className={`font-weight-semibold${tab === 'faq' ? ' active' : ''}`}>
                        <a href="#faq" role="tab" onClick={(e) => { e.preventDefault(); setTab('faq') }}>FAQ</a>
                      </li>
                      <li role="presentation" className={`font-weight-semibold${tab === 'server' ? ' active' : ''}`}>
                        <a href="#server-requirements" role="tab" onClick={(e) => { e.preventDefault(); setTab('server') }}>Server Requirements</a>
                      </li>
                    </ul>

                    <div className="tabs-content">
                      {tab === 'faq' ? (
                        <div className="row ld-row vc_row-o-content-middle vc_row-flex">
                          <div className="wpb_column vc_column_container vc_col-sm-5">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <header className="fancy-title">
                                    <p>Questions and Answers</p>
                                    <h3>Have Doubts? Get Answers Right Here!</h3>
                                  </header>
                                  <header className="fancy-title">
                                    <p>Best OLX Clone FAQ</p>
                                    <h3>Get proper answers for all your queries about the OLX Clone with our complete FAQ section.</h3>
                                  </header>
                                  <Link to="/contact-us" target="_blank" className="btn btn-solid text-uppercase circle btn-bordered border-thin">
                                    <span><span className="btn-txt">Contact</span></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-7">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  {faqs.map((faq, i) => (
                                    <div className={`vc_do_toggle vc_toggle vc_toggle_simple vc_toggle_color_black vc_toggle_size_sm${openIndex === i ? ' vc_toggle_active' : ''}`} key={i}>
                                      <div className="vc_toggle_title" onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{ cursor: 'pointer' }}>
                                        <h5 style={{ fontSize: 18, color: '#111111', textAlign: 'left' }} className="vc_custom_heading">{faq.q}</h5>
                                        <i className="vc_toggle_icon"></i>
                                      </div>
                                      {openIndex === i && (
                                        <div className="vc_toggle_content">
                                          <p><span style={{ fontWeight: 400 }}>{faq.a}</span></p>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="row ld-row vc_row-o-content-middle vc_row-flex">
                          <div className="wpb_column vc_column_container vc_col-sm-6">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <div className="wpb_single_image wpb_content_element vc_align_left">
                                    <figure className="wpb_wrapper vc_figure">
                                      <div className="vc_single_image-wrapper vc_box_border_grey">
                                        <img src="/wp-content/uploads/2024/12/image-778.webp" className="vc_single_image-img attachment-full" alt="Server Requirement" title="Server Requirement" />
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-6">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <div className="wpb_text_column wpb_content_element">
                                    <div className="wpb_wrapper">
                                      <p><strong>For Web,</strong></p>
                                      <p><strong>Server:</strong> Virtual Private Server (VPS) ( Node.js Supported) Memory Requirements: at least 3-4 GB<br /><strong>SSH Root Access:</strong> To execute Node.js commands</p>
                                      <p><strong>For Admin Panel:</strong></p>
                                      <p><strong>PHP Version:</strong> Min 8.1.0 for Laravel Framework 10.0</p>
                                      <p><strong>For App:</strong></p>
                                      <p><strong>Flutter Version:</strong> Flutter stable channel latest sdk version Java Version: JDK version 22</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
