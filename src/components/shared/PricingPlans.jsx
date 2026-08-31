import { useLocation } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { useCart } from '../../hooks/useCart.js'
import { useCurrency } from '../../hooks/useCurrency.js'
import { requestCartOpen } from '../../lib/cart.js'
import { formatBothCurrencies } from '../../lib/currency.js'
import './PricingPlans.css'

// This component is reused across every clone-script page, each with its own
// route and <title> (set per-page via useSeo) but no "product name" prop --
// so the cart entry pulls both straight from the page itself at click time
// instead of requiring every call site to pass one.
function currentProductName() {
  return document.title.split('|')[0].trim() || document.title
}

export default function PricingPlans({ plans, heading = 'Pick Price Plan' }) {
  const { pathname } = useLocation()
  const { items, addItem } = useCart()
  const { currency } = useCurrency()
  const productSlug = pathname.replace(/^\/|\/$/g, '') || 'home'

  const handleInvest = (plan) => {
    const id = `${productSlug}:${plan.name}`
    if (!items.some((item) => item.id === id)) {
      addItem({
        id,
        productName: currentProductName(),
        productSlug,
        pageUrl: pathname,
        planName: plan.name,
        price: plan.price,
        features: plan.features,
        addedAt: Date.now(),
      })
    }
    requestCartOpen()
  }

  return (
    <section id="prices" className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2 style={{ textAlign: 'center' }} className="vc_custom_heading">{heading}</h2>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ld-row">
          {plans.map((plan, i) => {
            const id = `${productSlug}:${plan.name}`
            const inCart = items.some((item) => item.id === id)
            const price = formatBothCurrencies(plan.price, currency)
            return (
              <div className="wpb_column vc_column_container vc_col-sm-6" key={i}>
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <Reveal delay={0.15 * i}>
                        <div className={`pricing-table pricing-table-agency business${plan.featured ? ' featured native-business-plus' : ' native-business'}`}>
                          {plan.featured && (
                            <span className="pricing-table-featured-label font-weight-bold text-uppercase ltr-sp-25"><span>Popular</span></span>
                          )}
                          <div className="pricing-table-header">
                            <h5>{plan.name}</h5>
                            <p className="pricing">
                              {price.primary}
                              <span className="pricing-secondary"> ({price.secondary})</span>
                            </p>
                          </div>
                          <div className="pricing-table-body">
                            <ul style={{ textAlign: 'left' }}>
                              {plan.features.map(([label, included], j) => (
                                <li key={j} className={included ? (j === 0 ? 'bold' : '') : 'no'}>
                                  <i className={included ? 'fa fa-check' : 'fa fa-close'}></i> {label}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pricing-table-footer">
                            <button
                              type="button"
                              onClick={() => handleInvest(plan)}
                              className={`btn btn-solid text-uppercase btn-md circle btn-bordered border-thin btn-icon-left${inCart ? ' added-to-cart' : ''}`}
                            >
                              <span>
                                <span className="btn-txt">{inCart ? 'Added to Cart' : 'Invest Now'}</span>
                                <span className="btn-icon"><i className={inCart ? 'fa fa-solid fa-check' : 'fa fa-solid fa-cart-shopping'}></i></span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
