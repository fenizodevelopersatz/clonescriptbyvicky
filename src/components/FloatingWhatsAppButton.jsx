import { siteContact } from '../data/siteContact.js'

export default function FloatingWhatsAppButton() {
  return (
    <div className="float_social">
      <div className="flt-icon">
        <a
          className="whatlink"
          href={`https://api.whatsapp.com/send?phone=${siteContact.whatsappApiNumber}&text=Hello,%20I%20am%20interested%20with%20this%20product`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with us on WhatsApp at ${siteContact.whatsappNumberDisplay}`}
          title={`Chat with us on WhatsApp: ${siteContact.whatsappNumberDisplay}`}
        >
          <span className="btn-icon">
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            <span className="clonescript-whatsapp-badge" aria-hidden="true">2</span>
          </span>
          <span className="mob_schedule_wa slide-left">
            Chat with us <span style={{ fontSize: 20 }}>👋</span>
          </span>
        </a>
      </div>
    </div>
  )
}
