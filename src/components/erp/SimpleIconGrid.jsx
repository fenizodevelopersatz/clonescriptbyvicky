export default function SimpleIconGrid({ items, title, desc, columns = 3, variant = 'default' }) {
  return (
    <section className={`vc_row wpb_row vc_row-fluid liquid-row-shadowbox erp-simple-icon-section erp-simple-icon-section--${variant}`}>
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

      <div className="ld-container container">
        <div className="row ld-row erp-simple-icon-grid" style={{ '--erp-columns': columns }}>
          {items.map((item, i) => (
            <div className="erp-simple-icon-card" key={i}>
              <div className="iconbox iconbox-inline iconbox-square" style={{ color: '#006fff' }}>
                <div className="iconbox-icon-wrap">
                  <span className="iconbox-icon-container"><i className={item.icon}></i></span>
                </div>
                <h3 className="font-weight-normal">{item.title}</h3>
              </div>
              {item.desc && <p className="erp-simple-icon-card__desc">{item.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
