import { useRef, useState } from 'react'
import './RoleFeatureTabs.css'

function preloadFeatureImage(src) {
  const image = new Image()
  image.src = src
}

function RoleGroup({ roleKey, role, sectionRef }) {
  const [activeTab, setActiveTab] = useState(0)
  const activeFeature = role.tabs[activeTab]
  const panelId = `${roleKey}-feature-panel`

  return (
    <section
      id={roleKey}
      ref={sectionRef}
      className="role-feature-group vc_row wpb_row vc_row-fluid liquid-row-shadowbox"
      aria-label={`${role.label} features`}
    >
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="role-feature-group__spacer" aria-hidden="true"></div>
                  <div className="vc_tta-container">
                    <div className="vc_general vc_tta vc_tta-tabs vc_tta-color-white vc_tta-style-flat vc_tta-shape-round vc_tta-spacing-20 vc_tta-gap-35 feature-tour role-feature-tabs vc_tta-tabs-position-left vc_tta-controls-align-left vc_tta-controls-size-md">
                      <div className="vc_tta-tabs-container">
                        <ul className="vc_tta-tabs-list" role="tablist" aria-label={`${role.label} feature list`}>
                          {role.tabs.map((feature, index) => {
                            const tabId = `${roleKey}-feature-tab-${index}`

                            return (
                              <li key={feature.title} className={`vc_tta-tab${activeTab === index ? ' vc_active' : ''}`} role="presentation">
                                <a
                                  href={`#${panelId}`}
                                  id={tabId}
                                  role="tab"
                                  aria-controls={panelId}
                                  aria-selected={activeTab === index}
                                  tabIndex={activeTab === index ? 0 : -1}
                                  onPointerEnter={() => preloadFeatureImage(feature.image)}
                                  onFocus={() => preloadFeatureImage(feature.image)}
                                  onClick={(event) => {
                                    event.preventDefault()
                                    setActiveTab(index)
                                  }}
                                >
                                  <i className={`vc_tta-icon ${feature.icon}`} aria-hidden="true"></i>
                                  <span className="vc_tta-title-text">{feature.title}</span>
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <div className="vc_tta-panels-container">
                        <div className="vc_tta-panels">
                          <div
                            id={panelId}
                            key={`${roleKey}-${activeTab}`}
                            className="vc_tta-panel vc_active role-feature-panel"
                            role="tabpanel"
                            aria-labelledby={`${roleKey}-feature-tab-${activeTab}`}
                          >
                            <div className="vc_tta-panel-body">
                              <div className="wpb_single_image wpb_content_element vc_align_left">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <img
                                      src={activeFeature.image}
                                      width="1366"
                                      height="768"
                                      className="vc_single_image-img attachment-full"
                                      alt={activeFeature.title}
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  </div>
                                </figure>
                              </div>
                              {activeFeature.desc ? (
                                <div className="wpb_text_column wpb_content_element role-feature-description">
                                  <div className="wpb_wrapper">
                                    <p>{activeFeature.desc}</p>
                                  </div>
                                </div>
                              ) : null}
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
  )
}

export default function RoleFeatureTabs({ heading, desc, roles }) {
  const roleSections = useRef({})
  const roleEntries = Object.entries(roles)
  const [activeRole, setActiveRole] = useState(roleEntries[0]?.[0])

  const scrollToRole = (event, roleKey) => {
    event.preventDefault()
    setActiveRole(roleKey)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    roleSections.current[roleKey]?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="role-feature-section vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container role-feature-heading">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <h3 style={{ textAlign: 'center' }} className="vc_custom_heading">{heading}</h3>
                  {desc ? (
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'center' }}>{desc}</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="role-feature-navigation" aria-label="Marketplace feature roles">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="lqd-custom-menu lqd-sticky-menu text-center fixed-menu role-feature-role-menu">
                      <ul className="reset-ul inline-nav menu-items-have-fill">
                        {roleEntries.map(([key, role]) => (
                          <li key={key} className={activeRole === key ? 'is-active' : ''}>
                            <a href={`#${key}`} aria-current={activeRole === key ? 'location' : undefined} onClick={(event) => scrollToRole(event, key)}>
                              <i className={`${role.icon} custom-tab-icon`} aria-hidden="true"></i> {role.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {roleEntries.map(([key, role]) => (
        <RoleGroup
          roleKey={key}
          role={role}
          key={key}
          sectionRef={(element) => { roleSections.current[key] = element }}
        />
      ))}
    </section>
  )
}
