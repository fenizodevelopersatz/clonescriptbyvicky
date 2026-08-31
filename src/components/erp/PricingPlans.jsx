import { pricingPlans } from '../../data/erp/coreModules.js'
import { useCart } from '../../hooks/useCart.js'
import { useCurrency } from '../../hooks/useCurrency.js'
import { requestCartOpen } from '../../lib/cart.js'
import { formatBothCurrencies } from '../../lib/currency.js'
import '../shared/PricingPlans.css'

const PRODUCT_NAME = 'ERP Software'
const PRODUCT_SLUG = 'erp-software'
const PAGE_URL = '/erp-software'

export default function PricingPlans() {
  const { items, addItem } = useCart()
  const { currency } = useCurrency()

  const handleInvest = (plan) => {
    const id = `${PRODUCT_SLUG}:${plan.name}`
    if (!items.some((item) => item.id === id)) {
      addItem({
        id,
        productName: PRODUCT_NAME,
        productSlug: PRODUCT_SLUG,
        pageUrl: PAGE_URL,
        planName: plan.name,
        price: plan.price,
        features: plan.features,
        addedAt: Date.now(),
      })
    }
    requestCartOpen()
  }

  return (
    <section id="prices" className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a668d000 erp-pricing-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2 style={{ textAlign: 'center' }} className="vc_custom_heading">Pick Price Plan</h2>
                    <p className="erp-section-description">Pick the plan that suits your business needs and get started with ease.</p>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ld-row">
          {pricingPlans.map((plan, i) => {
            const id = `${PRODUCT_SLUG}:${plan.name}`
            const inCart = items.some((item) => item.id === id)
            const price = formatBothCurrencies(plan.price, currency)
            return (
              <div className="wpb_column vc_column_container vc_col-sm-6" key={i}>
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
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
