import './SimpleIconGrid.css'

export default function SimpleIconGrid({ items, title, desc, columns = 3, iconColor = '#006fff' }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      {title && (
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-sm-offset-1 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                    <header className="fancy-title text-center">
                      <h2>{title}</h2>
                      {desc && (
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>{desc}</p>
                        </div>
                      )}
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="ld-container container">
        <div className="row ld-row simple-icon-grid__row" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '10px 20px' }}>
          {items.map((item, i) => (
            <div className="iconbox iconbox-inline iconbox-square" key={i} style={{ color: iconColor }}>
              <div className="iconbox-icon-wrap">
                <span className="iconbox-icon-container"><i className={item.icon}></i></span>
              </div>
              <h3 className="font-weight-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
