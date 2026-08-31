import './ComparisonTable.css'

export default function ComparisonTable({ labels, ours, others, cloneName }) {
  return (
    <section className="comparison-table-section vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-3">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="pricing-table pricing-table-default sv_custom_price1 sv_text_top">
                    <div className="pricing-table-header"><h5>Features</h5></div>
                    <div className="pricing-table-body">
                      <ul style={{ textAlign: 'left' }}>
                        {labels.map((l, i) => (
                          <li key={i} className={i === 0 ? 'bold' : ''}><span style={{ fontWeight: 400 }}>{l}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-table-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-5">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="pricing-table pricing-table-default sv_custom_price2">
                    <div className="pricing-table-header"><h5>Our {cloneName}</h5></div>
                    <div className="pricing-table-body">
                      <ul style={{ textAlign: 'left' }}>
                        {ours.map((l, i) => (
                          <li key={i} className={i < 2 ? 'bold' : ''}>
                            <i className="fas fa-gem" style={{ marginRight: 10, fontSize: 18, color: '#002692' }}></i> {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-table-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-4">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="pricing-table pricing-table-default sv_custom_price3">
                    <div className="pricing-table-header"><h5>Other Clone Features</h5></div>
                    <div className="pricing-table-body">
                      <ul style={{ textAlign: 'left' }}>
                        {others.map((l, i) => (
                          <li key={i} className={i === 0 ? 'bold' : ''}><span style={{ fontWeight: 400 }}>{l}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-table-footer"></div>
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
