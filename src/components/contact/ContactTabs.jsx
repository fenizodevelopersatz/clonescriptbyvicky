import { useState } from 'react'
import ContactForm from './ContactForm.jsx'
import SupportForm from './SupportForm.jsx'

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState('contact')

  return (
    <section data-bg-image="url" className="vc_row wpb_row vc_row-fluid vc_custom_1726570011140 liquid-row-shadowbox-6a665a49504d9 vc_row-has-fill vc_row-has-bg">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-2"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>

          <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-has-fill">
            <div className="vc_column-inner">
              <div className="wpb_wrapper vc_custom_1726577788907">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space">
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <div className="tabs tabs-nav-centered tabs-nav-underlined tabs-nav-active-underlined tabs-nav-lg">
                    <ul className="nav tabs-nav" role="tablist">
                      <li role="presentation" className={`font-weight-semibold${activeTab === 'contact' ? ' active' : ''}`}>
                        <a href="#contact-tab" aria-expanded={activeTab === 'contact'} role="tab" onClick={(e) => { e.preventDefault(); setActiveTab('contact') }}>
                          Contact Us
                        </a>
                      </li>
                      <li role="presentation" className={`font-weight-semibold${activeTab === 'support' ? ' active' : ''}`}>
                        <a href="#support-tab" aria-expanded={activeTab === 'support'} role="tab" onClick={(e) => { e.preventDefault(); setActiveTab('support') }}>
                          Support Us
                        </a>
                      </li>
                    </ul>
                    <div className="tabs-content">
                      <div role="tabpanel" className={`tabs-pane fade${activeTab === 'contact' ? ' active in' : ''}`}>
                        {activeTab === 'contact' && (
                          <div className="vc_row wpb_row vc_inner vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_wrapper-inner">
                                    <ContactForm />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div role="tabpanel" className={`tabs-pane fade${activeTab === 'support' ? ' active in' : ''}`}>
                        {activeTab === 'support' && (
                          <div className="vc_row wpb_row vc_inner vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_wrapper-inner">
                                    <SupportForm />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="ld-empty-space">
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wpb_column vc_column_container vc_col-sm-2"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
        </div>
      </div>
    </section>
  )
}
