import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { megaMenuColumns } from '../data/megaMenu.js'

function MegaMenuItem({ item, onNavigate }) {
  const isDisabled = item.enabled === false

  return (
    <div
      className={`iconbox iconbox-side text-left iconbox-circle iconbox-filled iconbox-filled-hover${item.isNew ? ' newtag' : ''}${isDisabled ? ' menu-item-disabled' : ''} ${item.id}`}
      id={item.id}
      data-plugin-options='{"color":"rgb(14, 14, 14)","hoverColor":"rgb(0, 0, 0)"}'
      data-shape-border="1"
      style={{ marginTop: 10, paddingTop: 5, paddingBottom: 5, borderRadius: 10 }}
    >
      {item.isNew && <span className="iconbox-label">new</span>}
      <div className="iconbox-icon-wrap">
        <span className="iconbox-icon-container" style={{ background: item.gradient, color: 'rgb(14, 14, 14)', width: 50, height: 50, fontSize: 20 }}>
          <i className={item.icon}></i>
        </span>
      </div>
      <div className="contents">
        <h3 className="font-weight-semibold">{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
      {isDisabled ? (
        <span className="liquid-overlay-link z-index-2" role="link" aria-disabled="true" title={`${item.title} - coming soon`}></span>
      ) : (
        <Link to={item.link} title={item.title} className="liquid-overlay-link z-index-2" onClick={onNavigate}></Link>
      )}
    </div>
  )
}

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const liRef = useRef(null)

  function close() {
    setIsOpen(false)
  }

  useEffect(() => {
    close()
  }, [location.pathname])

  useEffect(() => {
    function handlePointerDown(e) {
      if (liRef.current && !liRef.current.contains(e.target)) close()
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <li
      id="menu-item-54901"
      className={`menu-item menu-item-type-post_type menu-item-object-page megamenu menu-item-has-children menu-item-54901${isOpen ? ' position-applied' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={liRef}
    >
      <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen((o) => !o) }}>
        <span className="link-icon"></span>
        <span className="link-txt">
          <span className="link-ext"></span>
          <span className="txt">
            Products<i className="fa fa-angle-down"></i>
            <span className="submenu-expander"> <i className="fa fa-angle-down"></i> </span>
          </span>
        </span>
      </a>
      <div
        className="nav-item-children mega-dropdown-panel"
        style={{
          display: isOpen ? 'block' : 'none',
          visibility: isOpen ? 'visible' : 'hidden',
          left: '50%',
          right: 'auto',
          transform: 'translateX(-50%)',
          width: 'min(1170px, calc(100vw - 40px))',
        }}
      >
        <div className="lqd-megamenu-rows-wrap megamenu-container container">
          <section className="vc_row wpb_row vc_row-fluid megamenu-products vc_custom_1773740224502 liquid-row-shadowbox-6a665a408be06 vc_row-has-fill vc_row-has-bg vc_column-gap-10">
            <div className="ld-container container-fluid">
              <div className="row ld-row">
                {megaMenuColumns.map((column, i) => (
                  <div className="megamenu-column wpb_column vc_column_container vc_col-sm-3" key={i}>
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_wrapper-inner">
                          {column.filter((item) => item.featured).map((item) => (
                            <MegaMenuItem item={item} key={item.id} onNavigate={close} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix"></div>
          </section>
        </div>
      </div>
    </li>
  )
}
