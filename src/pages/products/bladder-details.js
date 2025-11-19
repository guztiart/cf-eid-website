import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useGLightbox, useSwiper } from '../../hooks/useExternalLibs';
import { setDefaultFavicon } from '../../utils/setFavicon';

const BladderDetails = () => {
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
              <li className="current">Bladder Type Accumulator</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Bladder Type Accumulator</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=industrial">Industrial</Link></li>
                  <li className="nav-item"><Link to="/products?tag=hydraulic-components">Hydraulic Components</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/bladder_type_accumulators.jpeg`} alt="Bladder Type Accumulator" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/acv-1.png`} alt="Bladder Type Accumulator Detail 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/acv-2.jpg`} alt="Bladder Type Accumulator Detail 2" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>Bladder Type Accumulator</h2>
                <p>
                  These standard bladder accumulators are manufactured based on years of experience and proven performance.
                  They are designed to store energy under pressure in the form of compressed gas, providing hydraulic power
                  when needed in various industrial applications.
                </p>
                <p>
                  The bladder accumulator consists of a high-strength pressure vessel containing an elastic bladder
                  that separates the hydraulic fluid from the gas pre-charge. When hydraulic fluid enters the accumulator,
                  the bladder compresses the gas, storing energy. When the system requires additional power, the compressed
                  gas expands, pushing the fluid back into the system.
                </p>
                <p>
                  Eagle Industry Indonesia's bladder type accumulators feature superior construction with high-quality
                  materials ensuring durability and reliability in demanding industrial environments. These accumulators
                  are suitable for applications requiring energy storage, shock absorption, pulsation dampening, and
                  emergency power supply.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>Product Information</h3>
                <ul>
                  <li><strong>Category</strong> <span>Industrial, Hydraulic Components</span></li>
                  <li><strong>Type</strong> <span>Bladder Type Accumulator</span></li>
                  <li><strong>Material</strong> <span>High-grade Steel Shell, Nitrile Bladder</span></li>
                  <li><strong>Temperature Range</strong> <span>-20°C to 120°C</span></li>
                  <li><strong>Max Pressure</strong> <span>Up to 350 bar</span></li>
                  <li><strong>Volume Range</strong> <span>0.5 to 50 liters</span></li>
                  <li><strong>Applications</strong> <span>Hydraulic Systems</span></li>
                </ul>
                
                <div className="pt-3">
                  <h3>Product Features</h3>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>High energy storage capacity</span></li>
                    <li><i className="bi bi-check"></i> <span>Excellent response time</span></li>
                    <li><i className="bi bi-check"></i> <span>Low gas permeability</span></li>
                    <li><i className="bi bi-check"></i> <span>Easy maintenance</span></li>
                    <li><i className="bi bi-check"></i> <span>Long service life</span></li>
                    <li><i className="bi bi-check"></i> <span>Wide temperature range</span></li>
                  </ul>
                </div>
                
                <div className="pt-3">
                  <Link to="/contact" className="btn-visit">Inquire About This Product</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Product specification example</h2>
                <p>Information about specification Product.</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>Category</th>
                      <td>Industrial, Hydraulic Components</td>
                    </tr>
                    <tr>
                      <th>Type</th>
                      <td>Bladder Type Accumulator</td>
                    </tr>
                    <tr>
                      <th>Material</th>
                      <td>High-grade Steel Shell, Nitrile Bladder</td>
                    </tr>
                    <tr>
                      <th>Temperature Range</th>
                      <td>-20°C to 120°C</td>
                    </tr>
                    <tr>
                      <th>Max Pressure</th>
                      <td>Up to 350 bar</td>
                    </tr>
                    <tr>
                      <th>Volume Range</th>
                      <td>0.5 to 50 liters</td>
                    </tr>
                    <tr>
                      <th>Applications</th>
                      <td>
                        <p>Energy storage in hydraulic systems</p>
                        <p>Shock absorption</p>
                        <p>Pulsation dampening</p>
                        <p>Emergency power supply</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Benefits</th>
                      <td>
                        <p>High energy storage capacity</p>
                        <p>Excellent response time</p>
                        <p>Low gas permeability</p>
                        <p>Easy maintenance</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: The above figures indicate the best conditions in individual cases and may differ according to the accumulator size and application. Contact us before use.</p>
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
                  <h3 className="contact-title">Contact Us</h3>
                  <p className="contact-text">Please contact us via our email form</p>
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
                <Link to="/products/airCutValve-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/AirCutValve.jpg`} className="card-image" alt="Air Cut Valve" />
                  </div>
                  <div className="card-caption">
                    <span>Automobile<br />Air Cut Valve</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/products/reedValve-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/reed_valve_double.jpg`} className="card-image" alt="Reed Valve" />
                  </div>
                  <div className="card-caption">
                    <span>Automobile<br />Reed Valve</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/products/oRing-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-2.png`} className="card-image" alt="SUPERIOR O-Ring" />
                  </div>
                  <div className="card-caption">
                    <span>Sealing Solutions<br />SUPERIOR O-Ring</span>
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
                  <li className="current">Bladder Type Accumulator</li>
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

export default BladderDetails;