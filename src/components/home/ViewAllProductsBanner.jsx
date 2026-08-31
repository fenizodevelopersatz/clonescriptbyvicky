import { Link } from 'react-router-dom'

export default function ViewAllProductsBanner() {
  return (
    <section className="clonescript-products-cta-row vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40bb923">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space" style={{ height: 20 }}>
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <Link to="/#products" title="Products" className="clonescript-products-cta btn btn-solid btn-md circle btn-bordered border-thin btn-icon-circle">
                    <span>
                      <span className="btn-txt">View all products</span>
                      <span className="btn-icon"><i className="fas fa-hand-point-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
