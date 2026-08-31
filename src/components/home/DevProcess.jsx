import { useInView } from '../../hooks/useInView.js'
import { devProcessSteps } from '../../data/devProcessSteps.js'

function ProcessStep({ step, index, flowIndex, inView }) {
  // --cs-step-delay: entrance draw-in stagger (per column). Inherits into the
  // connecting-line :after too, so line and step reveal in sync.
  // --cs-line-delay: the always-on flowing pulse travels down the line; a
  // negative delay offset by the *global* step number (0-5) makes the pulse
  // read as one continuous 1 -> 6 wave rather than each segment pulsing alone.
  const stepDelay = inView ? `${index * 0.12}s` : '0s'
  const lineDelay = `${flowIndex * -0.4}s`
  return (
    <div
      className="iconbox iconbox-side iconbox-icon-hover-shadow iconbox-circle iconbox-sm iconbox-heading-sm iconbox-icon-linked cs-proc-step"
      data-plugin-options='{"color":"rgb(51, 51, 51)","hoverColor":"rgb(255, 255, 255)"}'
      data-shape-border="1"
      data-in-view={inView}
      style={{ paddingBottom: 30, '--cs-step-delay': stepDelay, '--cs-line-delay': lineDelay }}
    >
      <div className="iconbox-icon-wrap">
        <span className="iconbox-icon-container">
          <span className="iconbox-icon-hover-bg"></span>
          <i className={step.icon}></i>
        </span>
      </div>
      <div className="contents">
        <h3 className="font-weight-semibold">{step.title}</h3>
        <p>{step.desc}</p>
      </div>
    </div>
  )
}

function StepColumn({ steps, startIndex }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="wpb_wrapper-inner" ref={ref}>
            {steps.map((step, i) => (
              <ProcessStep step={step} index={i} flowIndex={startIndex + i} inView={inView} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DevProcess() {
  const [left, right] = [devProcessSteps.slice(0, 3), devProcessSteps.slice(3, 6)]

  return (
    <section className="clonescript-process-section">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40be25f">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-10 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Web &amp; App Development Process</span>
                      </p>
                    </div>
                    <header className="fancy-title text-center">
                      <h3>Our Proven Approach to Product Development</h3>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>
                          We follow a structured Development Process combining business analysis, thoughtful design,
                          quality development, and thorough testing. Our approach helps us deliver secure, scalable,
                          and user-friendly platforms aligned with specific business requirements.
                        </p>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40beff7 vc_row-o-content-middle vc_row-flex">
        <div className="ld-container container">
          <div className="row ld-row">
            <StepColumn steps={left} startIndex={0} />
            <div className="wpb_column vc_column_container vc_col-sm-4 vc_hidden-sm vc_hidden-xs">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <img
                            src="/wp-content/uploads/2026/08/dev-process-showcase.webp"
                            width="1920"
                            height="2220"
                            className="vc_single_image-img attachment-full"
                            alt="CloneScript app and platform showcase across services, e-commerce, and rentals"
                            title="dev-process-showcase"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <StepColumn steps={right} startIndex={3} />
          </div>
        </div>
      </section>
    </section>
  )
}
