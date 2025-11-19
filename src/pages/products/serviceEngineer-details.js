import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useGLightbox, useSwiper } from '../../hooks/useExternalLibs';
import { setDefaultFavicon } from '../../utils/setFavicon';

const ProjectDetails = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  useGLightbox();
  useSwiper('.portfolio-details-slider', {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Load custom CSS and set favicon
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL}/assets/css/product-details.css`;
    document.head.appendChild(link);
    
    // Set the favicon
    setDefaultFavicon();
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="project-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>PRODUCTS</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Products</Link></li>
              <li className="current">Service Engineer</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Service Engineer</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=service">Service</Link></li>
                  <li className="nav-item"><Link to="/products?tag=engineering">Engineering</Link></li>
                  <li className="nav-item"><Link to="/products?tag=maintenance">Maintenance</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section - Original Layout */}
      <section id="project-details" className="project-details section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Enginer.png`} alt="Service Engineer 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/marine ace 2.png`} alt="Service Engineer 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-1.png`} alt="Service Engineer 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>Service Engineer</h2>
                <p>
                  Our service engineering team provides comprehensive technical support and maintenance solutions for all Eagle Industry products worldwide. 
                  With extensive knowledge and experience in marine sealing systems, our engineers ensure optimal performance and longevity of your equipment.
                </p>
                <p>
                  KEMEL EAGLE INDUSTRY offers a global service network with trained professionals across Asia, Europe, North America, South America, and Oceania. 
                  Our service engineers are equipped with the latest tools and technologies to diagnose, repair, and maintain sealing systems in various marine applications.
                </p>
                <p>
                  From routine maintenance to emergency repairs, our service engineering team delivers prompt and reliable support to minimize downtime and maximize operational efficiency. 
                  We provide on-site services, technical consultations, and training programs to ensure your crew can properly maintain and operate our sealing systems.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>Service Information</h3>
                <ul>
                  <li><strong>Service Type</strong> <span>Technical Support & Maintenance</span></li>
                  <li><strong>Service Area</strong> <span>Worldwide Coverage</span></li>
                  <li><strong>Response Time</strong> <span>24-48 hours (Emergency)</span></li>
                  <li><strong>Service Availability</strong> <span>24/7 Support</span></li>
                  <li><strong>Specialization</strong> <span>Marine Sealing Systems</span></li>
                  <li><strong>Service Centers</strong> <span>Global Network</span></li>
                </ul>
                              
                <div className="pt-3">
                  <Link to="/contact" className="btn-visit">Contact Service Engineer</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Network */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Global Service Network</h2>
                <p>Our service engineering team is available worldwide</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>Asia</th>
                      <td>
                        <p>Japan (Tokyo, Kobe, Hiroshima)</p>
                        <p>China, Singapore, Taiwan, South Korea</p>
                        <p>Indonesia, Philippines, Thailand, India</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Europe</th>
                      <td>
                        <p>United Kingdom, Germany, Greece</p>
                        <p>Norway, Sweden, Denmark, Finland</p>
                        <p>Italy, France, Portugal, Poland, Netherlands</p>
                        <p>Russia, Bulgaria, Spain</p>
                      </td>
                    </tr>
                    <tr>
                      <th>North America</th>
                      <td>
                        <p>USA, Canada, Mexico, Caribbean Sea</p>
                      </td>
                    </tr>
                    <tr>
                      <th>South America</th>
                      <td>
                        <p>Chile, Brazil</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Oceania</th>
                      <td>
                        <p>Australia</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Middle East</th>
                      <td>
                        <p>UAE & Gulf</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: Our service engineers are available 24/7 for emergency support. Contact us for immediate assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Elegant and Modern */}
      <section className="contact-section section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-box" data-aos="fade-up">
                <Link to="/contact" className="contact-link">
                  <h3 className="contact-title">Contact Service Engineer</h3>
                  <p className="contact-text">Please contact us via our email form for technical support</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section id="related-products" className="related-products section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Related Products</h2>
            <p>Explore our other similar products</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/project-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="card-image" alt="Compressor Lip Seal" />
                  </div>
                  <div className="card-caption">
                    <span>for A/C compressor<br />Type A Mechanical seal</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/project-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} className="card-image" alt="WP Compact Mechanical Seal" />
                  </div>
                  <div className="card-caption">
                    <span>for Water Pump<br />EH795/EH790</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/project-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/acv-1.png`} className="card-image" alt="Control Valve" />
                  </div>
                  <div className="card-caption">
                    <span>for Variable Displacement A/C Compressor<br />Control Valve</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
              <Link to="/projects" className="btn btn-primary">To Products TOP</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Breadcrumb */}
      <section className="bottom-breadcrumb section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="breadcrumbs">
                <ol>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/projects">Products</Link></li>
                  <li className="current">Service Engineer</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button - Adjusted Position */}
      <div className="floating-contact-button">
        <Link to="/contact" className="contact-button">
          <div className="contact-icon">
            <i className="bi bi-envelope"></i>
          </div>
          <p className="contact-text">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;