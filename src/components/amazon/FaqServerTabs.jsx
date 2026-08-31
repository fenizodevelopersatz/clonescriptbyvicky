import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs, serverRequirements, changeLog } from '../../data/amazon/amazonData.js'

function FaqPanel() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="row ld-row vc_row-o-content-middle vc_row-flex">
      <div className="wpb_column vc_column_container vc_col-sm-5">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="wpb_wrapper-inner">
              <header className="fancy-title">
                <p>FAQ and Version History</p>
                <h3>Find Answers and Review Platform Updates</h3>
              </header>
              <header className="fancy-title">
                <p>Frequently Asked Questions</p>
                <h3>Learn more about marketplace functionality, customization, user roles, licensing, technical support, source-code access, and product changes.</h3>
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
  )
}

function ServerPanel() {
  return (
    <div className="row ld-row vc_row-o-content-middle vc_row-flex">
      <div className="wpb_column vc_column_container vc_col-sm-6">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="wpb_wrapper-inner">
              <div className="wpb_single_image wpb_content_element vc_align_left">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper vc_box_border_grey">
                    <img src="/wp-content/uploads/2024/12/image-778.webp" className="vc_single_image-img attachment-full" alt="Server Requirement" title="Server Requirement" loading="lazy" />
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
              <div className="iconbox iconbox-inline iconbox-heading-md">
                <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fas fa-server"></i></span></div>
                <h3 className="font-weight-normal">Server Requirements:</h3>
                <div className="contents">
                  {serverRequirements.intro && <p style={{ fontWeight: 400 }}>{serverRequirements.intro}</p>}
                  <ul>
                    {serverRequirements.items.map((item) => (
                      <li key={item} style={{ fontWeight: 400 }}><span style={{ fontWeight: 400 }}>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChangeLogPanel() {
  return (
    <div className="row ld-row">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="wpb_wrapper-inner">
              {changeLog.map((entry, i) => (
                <div className="vc_do_toggle vc_toggle vc_toggle_default vc_toggle_color_black vc_toggle_size_sm" key={i}>
                  <div className="vc_toggle_title">
                    <p style={{ fontSize: 20, color: '#111111', textAlign: 'left' }} className="vc_custom_heading">
                      Version {entry.version}
                      {entry.date ? ` (${entry.date}${entry.title ? ' - ' + entry.title : ''})` : ''}
                    </p>
                  </div>
                  <div className="vc_toggle_content">
                    <ul>
                      {entry.items.map((item, j) => (
                        <li key={j}><span style={{ fontWeight: 400 }}>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FaqServerTabs() {
  const [tab, setTab] = useState('faq')

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
                      <li role="presentation" className={`font-weight-semibold${tab === 'changelog' ? ' active' : ''}`}>
                        <a href="#change-log" role="tab" onClick={(e) => { e.preventDefault(); setTab('changelog') }}>Change Log</a>
                      </li>
                    </ul>
                    <div className="tabs-content">
                      <div role="tabpanel" className="tabs-pane fade active in">
                        {tab === 'faq' && <FaqPanel />}
                        {tab === 'server' && <ServerPanel />}
                        {tab === 'changelog' && <ChangeLogPanel />}
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
  )
}
