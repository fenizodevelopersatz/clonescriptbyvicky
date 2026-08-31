import { roleFeatures } from '../../data/udemy/udemyData.js'

function RoleSection({ roleKey, role }) {
  return (
    <section id={roleKey} className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src={role.image} width="254" height="529" className="vc_single_image-img attachment-full" alt={role.imageAlt} title={role.imageAlt} loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-8 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px 30px' }}>
                    {role.items.map((item, i) => (
                      <div className="iconbox iconbox-side iconbox-icon-hover-shadow iconbox-sm iconbox-heading-sm" key={i}>
                        <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"></span></div>
                        <div className="contents">
                          <h3 className="font-weight-semibold">{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
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

export default function UdemyRoleFeatures() {
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
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left"><span className="ld-fh-txt"> Main Features</span></p>
                    </div>
                    <header className="fancy-title text-center">
                      <p>The platform includes dedicated functionality for students, instructors, organizations, and administrators.</p>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-has-fill">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div id="fixed-menu" className="lqd-custom-menu text-center fixed-menu">
                      <ul className="reset-ul inline-nav menu-items-have-fill">
                        {Object.entries(roleFeatures).map(([key, role]) => (
                          <li key={key}><a href={`#${key}`} data-localscroll="true"><i className={`${role.navIcon} custom-tab-icon`}></i>{role.label}</a></li>
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

      {Object.entries(roleFeatures).map(([key, role]) => (
        <RoleSection roleKey={key} role={role} key={key} />
      ))}
    </>
  )
}
