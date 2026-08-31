import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import SocialProofPanel from '../components/schedule/SocialProofPanel.jsx'
import DemoForm from '../components/schedule/DemoForm.jsx'

export default function ScheduleFreeDemoPage() {
  usePageStylesheets(pageStylesheets.scheduleFreeDemo)

  useSeo(
    'Schedule a Free Demo | CloneScript',
    'Book a free live demo with CloneScript to see our web and mobile app solutions in action before you commit to a project.'
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a44f1aa7">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="ld-empty-space">
                        <span className="liquid_empty_space_inner"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a44f20ca vc_row-o-full-height vc_row-o-columns-top vc_row-o-content-top vc_row-flex">
          <div className="ld-container container-fluid">
            <div className="row ld-row">
              <SocialProofPanel />
              <DemoForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
