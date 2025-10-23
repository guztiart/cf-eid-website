import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className={`logo d-flex align-items-center ${isScrolled ? 'logo-scrolled' : ''}`}>
          <img className="logo-img" src={`${process.env.PUBLIC_URL}/assets/img/EKK-LOGO.jpg`} alt="Eagle Industry Indonesia" />
          <h1 className={`sitename ${isScrolled ? 'sitename-scrolled' : ''}`}>Eagle Industry Indonesia</h1>
          <span className={`dot ${isScrolled ? 'dot-scrolled' : ''}`}>.</span>
        </Link>

        <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li>
              <Link to="/" className={`${location.pathname === '/' ? 'active' : ''} ${isScrolled ? 'nav-scrolled' : ''}`} onClick={closeMobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${location.pathname === '/about' ? 'active' : ''} ${isScrolled ? 'nav-scrolled' : ''}`} onClick={closeMobileNav}>
                Company
              </Link>
            </li>
            <li>
              <Link to="/services" className={`${location.pathname === '/services' ? 'active' : ''} ${isScrolled ? 'nav-scrolled' : ''}`} onClick={closeMobileNav}>
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`${location.pathname === '/projects' ? 'active' : ''} ${isScrolled ? 'nav-scrolled' : ''}`} onClick={closeMobileNav}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/blog" className={`${location.pathname === '/blog' ? 'active' : ''} ${isScrolled ? 'nav-scrolled' : ''}`} onClick={closeMobileNav}>
                Blog/News
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${location.pathname === '/contact' ? 'active' : ''} ${isScrolled ? 'nav-scrolled' : ''}`} onClick={closeMobileNav}>
                Inquiry Form
              </Link>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'} ${isScrolled ? 'mobile-nav-scrolled' : ''}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;