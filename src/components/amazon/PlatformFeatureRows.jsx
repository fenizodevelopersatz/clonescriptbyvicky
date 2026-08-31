function PlatformRow({ title, tagline, points, image, imageAlt, imagePosition }) {
  const textCol = (
    <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10" key="text">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="wpb_wrapper-inner">
            <header className="fancy-title">
              <p>{tagline}</p>
              <h3>{title}</h3>
            </header>
            {points.map((p, i) => (
              <div className="wpb_text_column wpb_content_element" key={i}>
                <div className="wpb_wrapper"><p><span style={{ fontWeight: 400 }}>{p}</span></p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const imageCol = (
    <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs" key="image">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="wpb_wrapper-inner">
            <div className="wpb_single_image wpb_content_element vc_align_center">
              <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper vc_box_border_grey">
                  <img src={image} alt={imageAlt} loading="lazy" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          {imagePosition === 'left' ? [imageCol, textCol] : [textCol, imageCol]}
        </div>
      </div>
    </section>
  )
}

export default function PlatformFeatureRows({ rows }) {
  return rows.map((row) => <PlatformRow key={row.title} {...row} />)
}
