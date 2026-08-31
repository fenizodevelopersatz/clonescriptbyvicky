import { siteContact } from '../../data/siteContact.js'

export default function GetInTouch() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a49532ef vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Get In Touch</span>
                    </h2>
                  </div>

                  <div className="iconbox iconbox-side iconbox-square iconbox-heading-md" data-plugin-options='{"color":"rgb(255, 255, 255)"}' data-shape-border="1">
                    <div className="iconbox-icon-wrap">
                      <span className="iconbox-icon-container">
                        <span className="iconbox-icon-hover-bg"></span>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                    </div>
                    <div className="contents">
                      <h3 className="font-weight-normal">Location</h3>
                      <p style={{ textAlign: 'left' }}>
                        <span style={{ color: '#808080' }}>{siteContact.indiaAddress}</span>
                      </p>
                    </div>
                  </div>

                  <div className="iconbox iconbox-side iconbox-square iconbox-sm iconbox-heading-md" data-plugin-options='{"color":"rgb(255, 255, 255)"}' data-shape-border="1">
                    <div className="iconbox-icon-wrap">
                      <span className="iconbox-icon-container">
                        <span className="iconbox-icon-hover-bg"></span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                    </div>
                    <div className="contents">
                      <h3 className="font-weight-normal">Call Us</h3>
                      <p>
                        {siteContact.indiaPhones.map((phone, i) => (
                          <span style={{ color: '#808080' }} key={i}>
                            <a style={{ color: '#808080' }} href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                            {i < siteContact.indiaPhones.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="iconbox iconbox-side iconbox-square iconbox-heading-md skypelink" data-plugin-options='{"color":"rgb(255, 255, 255)"}' data-shape-border="1">
                    <div className="iconbox-icon-wrap">
                      <span className="iconbox-icon-container">
                        <span className="iconbox-icon-hover-bg"></span>
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <div className="contents">
                      <h3 className="font-weight-normal">Mail Us</h3>
                      <p>
                        <b>Email: </b>
                        <a href={`mailto:${siteContact.supportEmail}`}>{siteContact.supportEmail}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_raw_code wpb_raw_html wpb_content_element">
                    <div className="wpb_wrapper">
                      {siteContact.mapsEmbedSrc ? (
                        <iframe
                          src={siteContact.mapsEmbedSrc}
                          width="100%"
                          height="600"
                          style={{ border: 0, borderRadius: 20 }}
                          allowFullScreen
                          loading="lazy"
                          title="Office location"
                        ></iframe>
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: 600,
                            borderRadius: 20,
                            background: '#f0f2f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            color: '#9aa0a6',
                            gap: 12,
                          }}
                        >
                          <i className="fas fa-map-marked-alt" style={{ fontSize: 40 }}></i>
                          <span>Map embed pending — add CloneScript&rsquo;s office location</span>
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
