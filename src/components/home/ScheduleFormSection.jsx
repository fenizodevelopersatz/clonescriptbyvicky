import TestimonialCarousel from './TestimonialCarousel.jsx'
import MeetingBookingForm from './MeetingBookingForm.jsx'
import { videoTestimonials } from '../../data/videoTestimonials.js'

export default function ScheduleFormSection() {
  return (
    <section id="shedule_form" className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40c61e6 vc_row-o-content-top vc_row-flex">
      <div className="ld-container container-fluid">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="clonescript-meeting-visual wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2024/12/Group-15.webp" width="480" height="520" className="vc_single_image-img attachment-full" alt="Illustration of a specialist ready to discuss a software project" title="example-specialist-chat" loading="lazy" decoding="async" />
                      </div>
                    </figure>
                  </div>
                  <div className="vc_empty_space" style={{ height: 15 }}>
                    <span className="vc_empty_space_inner"></span>
                  </div>
                  <TestimonialCarousel items={videoTestimonials} />
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-0 vc_col-has-fill">
            <div className="vc_column-inner">
              <div className="wpb_wrapper vc_custom_1775890206239">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_center calendar-icon-position">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img
                          src="/wp-content/uploads/2024/06/sales-process-infographic-2-1-666feae5bbe18.webp"
                          width="144"
                          height="144"
                          className="vc_single_image-img attachment-full"
                          alt="calendar-infographic"
                          title="sales-process-infographic-2-1-666feae5bbe18"
                        />
                      </div>
                    </figure>
                  </div>
                  <header className="fancy-title text-center">
                    <h3>ReadY to Launch Your Next Big Idea? Let's Build It Together.</h3>
                  </header>
                  <MeetingBookingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
