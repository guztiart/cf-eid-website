import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useGLightbox, useSwiper } from '../../hooks/useExternalLibs';

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

  // Load custom CSS
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL}/assets/css/product-details.css`;
    document.head.appendChild(link);
    
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
              <li className="current">SUPERIOR O-Ring</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">SUPERIOR O-Ring</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=semiconductor">Semiconductor</Link></li>
                  <li className="nav-item"><Link to="/products?tag=semiconductor-process">Semiconductor Process</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-1.jpg`} alt="SUPERIOR O-Ring Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-2.png`} alt="SUPERIOR O-Ring Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-3.png`} alt="SUPERIOR O-Ring Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>SUPERIOR O-Ring</h2>
                <p>
                  "SUPERIOR" series is newly developed as O-Ring material with better chemical resistance, Low outgas generation, and light heat resistance especially for semiconductor process industry.
                </p>
                <p>
                  FKM and VMQ for various applications in semiconductor manufacturing process are available. These O-rings provide exceptional performance in demanding semiconductor environments where precision and reliability are critical.
                </p>
                <p>
                  The SUPERIOR series demonstrates excellent resistance for plasma and chemicals, making it ideal for the harsh conditions encountered in semiconductor manufacturing. With small outgas generation and continuity of good resistance against photo thermal generated in manufacturing process of semiconductor, these O-rings maintain their integrity and sealing performance even in extreme conditions.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>Product Information</h3>
                <ul>
                  <li><strong>Category</strong> <span>Packing, Gasket</span></li>
                  <li><strong>Product Series</strong> <span>SUPERIOR</span></li>
                  <li><strong>Material</strong> <span>FKM and VMQ</span></li>
                  <li><strong>Key Features</strong> <span>Chemical resistance, Low outgas generation</span></li>
                  <li><strong>Special Properties</strong> <span>Plasma resistance, Light heat resistance</span></li>
                  <li><strong>Applications</strong> <span>Semiconductor process industry</span></li>
                </ul>
                
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
                <h2>Product Features</h2>
                <p>Information about SUPERIOR O-Ring features.</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>Material Options</th>
                      <td>FKM and VMQ for various applications in semiconductor manufacturing process</td>
                    </tr>
                    <tr>
                      <th>Plasma Resistance</th>
                      <td>Excellent resistance for plasma</td>
                    </tr>
                    <tr>
                      <th>Chemical Resistance</th>
                      <td>Excellent resistance for chemical</td>
                    </tr>
                    <tr>
                      <th>Outgas Generation</th>
                      <td>Small outgas generation</td>
                    </tr>
                    <tr>
                      <th>Photo Thermal Resistance</th>
                      <td>Continuity of good resistance against photo thermal generated in manufacturing process of semiconductor</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: The SUPERIOR series is specially developed for semiconductor process industry applications with superior chemical resistance and low outgas generation.</p>
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
                  <li className="current">SUPERIOR O-Ring</li>
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