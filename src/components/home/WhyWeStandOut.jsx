import { whyWeStandOutItems } from '../../data/whyWeStandOut.js'
import WhyWeStandOutRow from './WhyWeStandOutRow.jsx'

export default function WhyWeStandOut() {
  return (
    <section className="clonescript-why-section vc_section vc_custom_1742024412511 vc_section-has-fill">
      <section className="clonescript-section-intro vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40a0f1e">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space" style={{ height: 100 }}>
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Our Uniqueness</span>
                      </p>
                    </div>
                    <header className="fancy-title text-center vc_custom_1745238282869">
                      <h2>What Sets Us Apart?</h2>
                      <h6>Why Startups and Enterprises Choose Us</h6>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {whyWeStandOutItems.map((item, i) => (
        <WhyWeStandOutRow item={item} key={i} />
      ))}
    </section>
  )
}
