import { useInView } from '../../hooks/useInView.js'

function slideStyle(isInView, from) {
  return {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateX(0)' : `translateX(${from === 'right' ? '150px' : '-150px'})`,
    transition: 'opacity 1.6s cubic-bezier(0.23,1,0.32,1) 0.25s, transform 1.6s cubic-bezier(0.23,1,0.32,1) 0.25s',
  }
}

function ImageBlock({ item }) {
  const [ref, isInView] = useInView()
  return (
    <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
      <div className="vc_column-inner">
        <div className="wpb_wrapper" ref={ref} style={slideStyle(isInView, item.imageFrom)}>
          <div className="wpb_wrapper-inner">
            <div className="wpb_single_image wpb_content_element vc_align_left">
              <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper vc_box_border_grey">
                  <img src={item.image} width={item.imageWidth} height={item.imageHeight} className="vc_single_image-img attachment-full" alt={item.imageAlt} title={item.imageAlt} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TextBlock({ item }) {
  const [ref, isInView] = useInView()
  return (
    <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
      <div className="vc_column-inner">
        <div className="wpb_wrapper" ref={ref} style={slideStyle(isInView, item.textFrom)}>
          <div className="wpb_wrapper-inner">
            <header className="fancy-title">
              <h3>{item.title}</h3>
              <div className="st-desc">
                <p>{item.desc}</p>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WhyWeStandOutRow({ item }) {
  return (
    <section className={`clonescript-reveal-x-row vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex${item.imageFirst ? '' : ' reverse-column'}`}>
      <div className="ld-container container">
        <div className="row ld-row">
          {item.imageFirst ? (
            <>
              <ImageBlock item={item} />
              <TextBlock item={item} />
            </>
          ) : (
            <>
              <TextBlock item={item} />
              <ImageBlock item={item} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
