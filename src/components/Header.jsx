import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useStickyHeader } from '../hooks/useStickyHeader.js'
import { useMobileNav } from '../hooks/useMobileNav.js'
import MegaMenu from './MegaMenu.jsx'
import CartDropdown from './CartDropdown.jsx'
import GradientButton from './GradientButton.jsx'
import { siteBrand } from '../data/siteBrand.js'
import './Header.css'

export default function Header() {
  const isStuck = useStickyHeader()
  const { isOpen: isNavOpen, toggle: toggleNav, close: closeNav } = useMobileNav()
  const location = useLocation()
  // Every page except home, contact-us, and schedule-free-demo fills the
  // header black while un-stuck (see .header-dark-top in Header.css) -- the
  // default dark-navy wordmark disappears on that fill, so swap in the light
  // variant. Once scrolled past the trigger offset the header goes back to
  // its normal white .is-stuck background (that state isn't overridden), so
  // the light logo only applies while un-stuck; stuck reverts to the normal one.
  const hasDarkTopHeader = !['/', '/contact-us', '/schedule-free-demo'].includes(location.pathname)
  const logoSrc = (hasDarkTopHeader && !isStuck) ? siteBrand.logoDark : siteBrand.logo

  // Collapse the mobile hamburger menu whenever the route changes (the
  // mega menu already closes itself the same way).
  useEffect(() => {
    closeNav()
  }, [closeNav, location.pathname])

  return (
    <header
      className="header site-header main-header"
      data-sticky-header="true"
      id="header"
    >
      <div className="secondarybar-wrap vc_custom_1739518650347" style={{ background: 'linear-gradient(152deg, rgb(238,11,196) 0%, rgb(225,29,29) 100%)' }}>
        <div className="container-fluid secondarybar-container">
          <div className="secondarybar">
            <div className="row secondarybar-row align-items-center">
              <div className="col vc_col-sm-2 vc_hidden-sm vc_hidden-xs text-center">
                <div className="wpb_single_image wpb_content_element vc_align_left">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper vc_box_border_grey">
                      <img
                        src="/wp-content/uploads/2025/02/center-image-150x92.webp"
                        className="vc_single_image-img"
                        width="150"
                        height="92"
                        alt="Valentines Day Sale"
                        title="Valentines Day Sale"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className="col vc_col-sm-8 text-center text-xs-center">
                <div className="header-module">
                  <h3 className="blinks" style={{ margin: 'auto', color: '#ffffff', textAlign: 'center' }}>💖 Valentine's Day Sale!</h3>
                  <h6 style={{ margin: 0, color: '#ffffff', textAlign: 'center' }}>
                    <span style={{ color: '#ffffff', background: '#000', padding: '0 5px', fontWeight: 'bold' }}> Flat 70% OFF on Price Plans</span>
                  </h6>
                </div>
              </div>
              <div className="col vc_col-sm-2 text-center text-xs-center">
                <div className="header-module">
                  <Link to="/schedule-free-demo" title="Check Offers" className="btn btn-solid btn-xsm circle btn-bordered border-thin reflect-btn">
                    <span>
                      <span className="btn-txt">Check Offers</span>
                      <span className="btn-icon"><i className="fas fa-chevron-circle-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mainbar-wrap custom-header-bg vc_custom_1732278024061${isStuck ? ' is-stuck' : ''}${hasDarkTopHeader ? ' header-dark-top' : ''}`}>
        <span className="megamenu-hover-bg"></span>
        <div className="container-fluid mainbar-container">
          <div className="mainbar">
            <div className="row mainbar-row align-items-lg-stretch">
              <div className="col vc_col-sm-3">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">
                    <span className="navbar-brand-inner">
                      <img
                        src={logoSrc}
                        alt={siteBrand.name}
                        className="logo-default"
                        width={siteBrand.logoWidth}
                        height={siteBrand.logoHeight}
                      />
                    </span>
                  </Link>
                  <button
                    type="button"
                    className={`navbar-toggle nav-trigger style-mobile${isNavOpen ? '' : ' collapsed'}`}
                    aria-expanded={isNavOpen}
                    onClick={toggleNav}
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="bars">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </span>
                  </button>
                </div>
              </div>

              <div className="col vc_col-sm-6 text-left">
                <div className={`collapse navbar-collapse${isNavOpen ? ' in show' : ''}`} id="main-header-collapse">
                  <ul id="primary-nav" className="main-nav main-nav-hover-underline-4 nav align-items-lg-stretch justify-content-lg-start">
                    <MegaMenu />
                    <li id="menu-item-63677" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63677">
                      <Link to="/schedule-free-demo">
                        <span className="link-icon"></span>
                        <span className="link-txt">
                          <span className="link-ext"></span>
                          <span className="txt">
                            <span className="custom-border-glow pulse-gold"><i className="fa fa-crown"></i> VIP Club</span>
                            <span className="submenu-expander"> <i className="fa fa-angle-down"></i> </span>
                          </span>
                        </span>
                      </Link>
                    </li>
                    <li id="menu-item-64042" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64042">
                      <Link to="/#products">
                        <span className="link-icon"></span>
                        <span className="link-txt">
                          <span className="link-ext"></span>
                          <span className="txt">Portfolio<span className="submenu-expander"> <i className="fa fa-angle-down"></i> </span></span>
                        </span>
                      </Link>
                    </li>
                    <li id="menu-item-54903" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54903">
                      <Link to="/contact-us">
                        <span className="link-icon"></span>
                        <span className="link-txt">
                          <span className="link-ext"></span>
                          <span className="txt">Contact<span className="submenu-expander"> <i className="fa fa-angle-down"></i> </span></span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <div className="header-module">
                    <GradientButton href="/schedule-free-demo" title="Schedule Demo Tour" text="Schedule Demo Tour" size="xsm" className="btn-icon-left" svgId="svg-border-nav-cta" />
                  </div>
                </div>
              </div>

              <div className="col vc_col-sm-3 text-right text-lg-right">
                <CartDropdown />
                <div className="header-module">
                  <Link to="/schedule-free-demo" title="my-account" className="btn btn-naked btn-icon-left">
                    <span>
                      <span className="btn-icon"><i className="fas fa-circle-user"></i></span>
                    </span>
                  </Link>
                </div>
                <div className="header-module">
                  <GradientButton href="/schedule-free-demo" title="Schedule Free Demo" text="Schedule Demo Tour" size="sm" svgId="svg-border-header-cta" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
