import './SimpleListSection.css'

export default function SimpleListSection({ heading, intro, items, closing, columns = 2 }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox clonescript-simple-list-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>{heading}</h2>
                    {intro && (
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>{intro}</p>
                      </div>
                    )}
                  </header>
                  <ul className="clonescript-simple-list" style={{ '--clonescript-list-columns': columns }}>
                    {items.map((item, i) => (
                      <li key={i}>
                        <i className="fa fa-solid fa-check" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {closing && (
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>{closing}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
