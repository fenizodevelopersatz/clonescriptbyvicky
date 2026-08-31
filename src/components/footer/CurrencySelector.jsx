import { useCurrency } from '../../hooks/useCurrency.js'
import './CurrencySelector.css'

const currencies = [
  { code: 'USD', label: 'USA dollar', flagClass: 'footer-currency-selector__flag--us' },
  { code: 'INR', label: 'Indian Rupee', flagClass: 'footer-currency-selector__flag--in' },
]

// Selecting a currency here persists it (localStorage) and broadcasts it to
// every pricing card and the cart dropdown across the site -- see
// hooks/useCurrency.js.
export default function CurrencySelector() {
  const { currency: selected, setCurrency } = useCurrency()

  return (
    <div className="footer-currency-selector" role="radiogroup" aria-label="Currency">
      {currencies.map((c) => (
        <button
          type="button"
          key={c.code}
          className={`footer-currency-selector__option${c.code === selected ? ' is-selected' : ''}`}
          role="radio"
          aria-checked={c.code === selected}
          onClick={() => setCurrency(c.code)}
        >
          <span className={`footer-currency-selector__flag ${c.flagClass}`} aria-hidden="true" />
          <span className="footer-currency-selector__text">
            <span className="footer-currency-selector__code">{c.code}</span>
            <span className="footer-currency-selector__label">{c.label}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
