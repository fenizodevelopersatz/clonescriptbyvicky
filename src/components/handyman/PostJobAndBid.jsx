import DashboardMockup from '../shared/DashboardMockup.jsx'

export default function PostJobAndBid() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-sm-offset-0 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading ai-animae">
                    <p className="lqd-highlight-underline lqd-highlight-grow-left"><span className="ld-fh-txt"> New</span></p>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="iconbox iconbox-inline text-left iconbox-heading-md">
                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fas fa-gavel"></i></span></div>
                    <h3 className="font-weight-semibold">Post &amp; Bid</h3>
                  </div>
                  <header className="fancy-title">
                    <h3>Smart Bidding, Reliable Service</h3>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>Our Handyman App Like Uber lets customers post a custom job request when a required service is not available as a standard listing, describing the requirements, preferred date, location, and estimated budget. Eligible providers can review the request and submit their quotations with a proposed price, expected duration, and availability, so customers can compare offers and choose the provider that best fits their needs.</span></p>
                    </div>
                  </header>
                  <a href="#schedule_form" className="btn btn-solid btn-sm circle btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">See How It Works</span>
                      <span className="btn-icon"><i className="fas fa-eye"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <DashboardMockup
                    role="Job Requests"
                    accent="#2e86de"
                    avatarIcon="fa-file-contract"
                    stats={[{ value: '3', label: 'Bids Received' }, { value: '2h', label: 'Avg. Response' }]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
