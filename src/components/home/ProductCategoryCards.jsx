import { Link } from 'react-router-dom'
import { readyMadeSolutions } from '../../data/readyMadeSolutions.js'
import { useInView } from '../../hooks/useInView.js'
import './ProductCategoryCards.css'

export default function ProductCategoryCards() {
  const [gridRef, gridInView] = useInView({ threshold: 0.1 })

  return (
    <section className="cs-category-cards vc_row wpb_row vc_row-fluid">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading ld-fh-has-fill text-center">
                    <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Browse by Category</span>
                    </p>
                  </div>
                  <header className="fancy-title text-center">
                    <h2>Ready-to-Launch Business Solutions</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>
                        Our Ready-to-Launch Business Solutions help entrepreneurs enter competitive markets faster
                        with customizable platforms. From eCommerce and on-demand services to taxi, rental, and
                        booking solutions, businesses can streamline operations and scale confidently.
                      </p>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="cs-category-cards__grid" ref={gridRef} data-in-view={gridInView}>
          {readyMadeSolutions.map((solution, i) => {
            const isInternal = solution.link !== '#'
            const CardLink = isInternal ? Link : 'a'
            const linkProps = isInternal
              ? { to: solution.link }
              : { href: solution.link, target: '_blank', rel: 'noreferrer' }
            return (
              <CardLink
                key={solution.title}
                {...linkProps}
                className={`cs-category-card${gridInView ? ' cs-category-card--reveal' : ''}`}
                style={gridInView ? { animationDelay: `${Math.min(i, 9) * 55}ms` } : undefined}
              >
                <span className="cs-category-card__media cs-hover-zoom">
                  <img src={solution.image} alt={solution.imageAlt} loading="lazy" decoding="async" />
                </span>
                <span className="cs-category-card__body">
                  <span className="cs-category-card__title">{solution.title}</span>
                  <span className="cs-category-card__cta">
                    Explore <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                  </span>
                </span>
              </CardLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
