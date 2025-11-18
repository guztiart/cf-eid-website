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
              <a href="https://www.ekkeagle.com/en/" target="_blank" rel="noopener noreferrer"><i className="bi bi-globe"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4 className="text-center">Quick Links</h4>
            <ul className="quick-links-horizontal">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/company">Company</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/contact">Inquiry Form</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-info">
            <h4 className="text-center">Office Hours</h4>
            <div className="footer-hours text-center">
              <p><strong>Monday - Friday:</strong> 07:00 - 16:00</p>
              <p><strong>Saturday:</strong> Closed</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-certifications">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center mb-3">Our Certifications</h4>
            <div className="certifications-list d-flex justify-content-center flex-wrap">
              <div className="certification-item mx-3 mb-2">
                <i className="bi bi-award-fill text-primary me-2"></i>
                <span>ISO 14001:2015</span>
              </div>
              <div className="certification-item mx-3 mb-2">
                <i className="bi bi-shield-check text-success me-2"></i>
                <span>ISO 45001:2018</span>
              </div>
              <div className="certification-item mx-3 mb-2">
                <i className="bi bi-patch-check-fill text-info me-2"></i>
                <span>PROPER Blue</span>
              </div>
            </div>
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