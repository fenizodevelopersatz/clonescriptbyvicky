import { useInView } from '../../hooks/useInView.js'

export default function TechStackBanner() {
  const [ref, inView] = useInView({ threshold: 0.25 })

  return (
    <section className="clonescript-tech-stack vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40bc754">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
            <div className="vc_column-inner">
              <div className="wpb_wrapper vc_custom_1745485929701">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h3>Robust Tech Stack We Used</h3>
                  </header>
                  {/* Single 3D scene now serves both desktop and mobile (it's a
                      self-contained, centered composition -- the old wide-vs-grid
                      picture swap is gone). Compact + centered via __reveal, which
                      also carries the scroll-in entrance; __media does the gentle
                      float + glow-pulse loop and the hover clarity-zoom. */}
                  <div className="clonescript-tech-stack__reveal" ref={ref} data-in-view={inView}>
                    <div className="clonescript-tech-stack__media cs-hover-zoom">
                      <img
                        src="/wp-content/uploads/2026/08/tech-stack-3d.webp"
                        width="1672"
                        height="941"
                        className="clonescript-tech-stack__art"
                        alt="CloneScript technology stack around a central code hub: React, Node.js, Vue, Flutter, WordPress, Swift, Laravel, PHP, Java, Firebase, MySQL, and Android"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
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
