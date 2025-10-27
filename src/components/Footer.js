import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="logo d-flex align-items-center">
              <span className="sitename">PT. Eagle Industry Indonesia</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>EJIP Industrial Park, Plot 8G, Sukaresmi</p>
              <p>Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17550</p>
              <p className="mt-3"><strong>Phone:</strong> <span> (021) 8970178</span></p>
              <p><strong>Email:</strong> <span>riyanda.senjaya@ekkeagle.com</span></p>
            </div>
            <div className="social-links d-flex mt-4 justify-content-center">
              <a href="https://www.facebook.com/EKKEagleIndustry/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/ekk_eagle_industry_official/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/company/eagle-industry-co-ltd/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href="https://www.ekkeagle.com/en/" target="_blank" rel="noopener noreferrer"><i className="bi bi-globe"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Sustainability</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Product Categories</h4>
            <ul>
              <li><Link to="/products/eh795-details">Water Pump Seals</Link></li>
              <li><Link to="/products/lipSeal-details">Lip Seals</Link></li>
              <li><Link to="/products/rudderSeal-details">Stern Tube Seals</Link></li>
              <li><Link to="/products/floatingSeal-details">Floating Seals</Link></li>
              <li><Link to="/products">All Products</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Marine Solutions</h4>
            <ul>
              <li><Link to="/products/evk2rv-details">Water Lubricated Seals</Link></li>
              <li><Link to="/products/evr-details">Water Lubricated Bearings</Link></li>
              <li><Link to="/products/evu-details">Poly-Urethane Bearings</Link></li>
              <li><Link to="/products/mas-details">Marine Ace Seals</Link></li>
              <li><Link to="/products/serviceEngineer-details">Service Engineering</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Automotive Solutions</h4>
            <ul>
              <li><Link to="/products/airCutValve-details">Air Cut Valves</Link></li>
              <li><Link to="/products/reedValve-details">Reed Valves</Link></li>
              <li><Link to="/products/oRing-details">SUPERIOR O-Rings</Link></li>
              <li><Link to="/products/bladder-details">Bladder Accumulators</Link></li>
              <li><Link to="/contact">Custom Solutions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>2024</span> <strong className="px-1 sitename">PT. Eagle Industry Indonesia</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          A subsidiary of <a href="https://www.eagle-e.co.jp/english/" target="_blank" rel="noopener noreferrer">Eagle Industry Co., Ltd.</a> |
          Designed by <a href="https://www.instagram.com/riyy2410/" target="_blank" rel="noopener noreferrer">Riyanda Aditiya Senjaya</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;