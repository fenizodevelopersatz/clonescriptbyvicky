import { mainFeaturesRoles } from '../../data/rentalBooking/rentalBookingData.js'

function FeatureColumn({ items }) {
  return (
    <div className="wpb_column vc_column_container vc_col-sm-4">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="wpb_wrapper-inner">
            {items.map((item, i) => (
              <div className="iconbox iconbox-inline iconbox-square" key={i}>
                <div className="iconbox-icon-wrap">
                  <span className="iconbox-icon-container"><i className={item.icon}></i></span>
                </div>
                <h3 className="font-weight-normal">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureRole({ roleKey, role }) {
  const half = Math.ceil(role.items.length / 2)
  const left = role.items.slice(0, half)
  const right = role.items.slice(half)

  return (
    <section id={roleKey} className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_wrapper-inner">
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                  <img src={role.image} className="vc_single_image-img attachment-full" alt={role.imageAlt} loading="lazy" />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FeatureColumn items={left} />
                    <FeatureColumn items={right} />
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

export default function MainFeaturesRoles() {
  return (
    <>
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> <span style={{ color: 'white' }}>Main Features</span></span>
                      </p>
                    </div>
                    <header className="fancy-title text-center">
                      <p>Main Features of the Rental Booking Script &mdash; Dedicated Functionality for Customers, Hosts, and Administrators</p>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div id="fixed-menu" className="lqd-custom-menu text-center fixed-menu">
                      <ul className="reset-ul inline-nav menu-items-have-fill">
                        {Object.entries(mainFeaturesRoles).map(([key, role]) => (
                          <li key={key}><a href={`#${key}`}><i className={`${role.icon} custom-tab-icon`}></i> {role.label}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {Object.entries(mainFeaturesRoles).map(([key, role]) => (
        <FeatureRole roleKey={key} role={role} key={key} />
      ))}
    </>
  )
}
