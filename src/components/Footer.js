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
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href="https://www.facebook.com/EKKEagleIndustry/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/ekk_eagle_industry_official/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li><a href="#">Molestiae accusamus iure</a></li>
              <li><a href="#">Excepturi dignissimos</a></li>
              <li><a href="#">Suscipit distinctio</a></li>
              <li><a href="#">Dilecta</a></li>
              <li><a href="#">Sit quas consectetur</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li><a href="#">Ipsam</a></li>
              <li><a href="#">Laudantium dolorum</a></li>
              <li><a href="#">Dinera</a></li>
              <li><a href="#">Trodelas</a></li>
              <li><a href="#">Flexo</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">PT. Eagle Industry Indonesia</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="https://www.instagram.com/riyy2410/" target="_blank" rel="noopener noreferrer">Riyanda Aditiya Senjaya</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;