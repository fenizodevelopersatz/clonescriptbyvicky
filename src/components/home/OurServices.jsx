import { ourServicesItems } from '../../data/ourServices.js'
import { useInView } from '../../hooks/useInView.js'

function ServiceCard({ service, index }) {
  const [ref, isInView] = useInView()
  const delay = 0.25 + Math.min(index, 5) * 0.12
  return (
    <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
      <div className="vc_column-inner">
        <div
          className="wpb_wrapper vc_custom_1745393448857"
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(150px)',
            transition: `opacity 1.6s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 1.6s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
          }}
        >
          <div className="wpb_wrapper-inner clonescript-service-card cs-hover-lift">
            <div className="iconbox iconbox-inline iconbox-heading-xs" style={{ color: '#006fff', marginBottom: 0 }}>
              <div className="iconbox-icon-wrap">
                <span className="iconbox-icon-container clonescript-service-card__icon">
                  <i className="far fa-check-circle"></i>
                </span>
              </div>
              <h3 className="font-weight-semibold">{service.title}</h3>
            </div>
            <p className="clonescript-service-desc">{service.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OurServices() {
  return (
    <section className="clonescript-services-section vc_section" id="services">
      <section className="clonescript-section-intro vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40a963b">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Services</span>
                      </p>
                    </div>
                    <header className="fancy-title text-center">
                      <h2>Technology Services for Growing Businesses</h2>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>
                          From Custom Web and Mobile Development to ready-made clone solutions, we deliver flexible
                          digital services tailored to your business goals. Our solutions help businesses launch
                          faster, streamline operations, adapt to market requirements, and scale confidently.
                        </p>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40aa6b7">
        <div className="ld-container container">
          <div className="row ld-row">
            {ourServicesItems.map((service, i) => (
              <ServiceCard service={service} index={i} key={i} />
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
