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
              <li className="current">EVU Valve Stem Seal</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">EVU Valve Stem Seal</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=automobile">Automobile</Link></li>
                  <li className="nav-item"><Link to="/products?tag=valve-stem-seal">Valve Stem Seal</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/EVU.png`} alt="EVU Valve Stem Seal" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evu copy.png`} alt="EVU Valve Stem Seal Detail" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>EVU Valve Stem Seal</h2>
                <p>
                  EVU valve stem seals are designed to provide excellent sealing performance for engine valve applications. 
                  These seals prevent oil from entering the combustion chamber through the valve guide while allowing proper lubrication of the valve stem.
                </p>
                <p>
                  Manufactured with high-quality materials and precision engineering, EVU valve stem seals offer superior durability and reliability. 
                  The seals are designed to withstand extreme temperature variations and harsh operating conditions in modern engines. 
                  Eagle Industry's advanced manufacturing processes ensure consistent quality and performance across all EVU products.
                </p>
                <p>
                  The EVU series features a compact design that allows for easy installation and replacement. 
                  These seals are compatible with a wide range of engine applications and provide optimal sealing efficiency throughout their service life.
                </p>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    The EVU valve stem seals from Eagle Industry Indonesia have significantly reduced oil consumption in our engines. 
                    The quality and durability are exceptional, providing reliable performance under demanding conditions.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-1.jpg`} className="testimonial-img" alt="" />
                    <h3>Eagle Industry Team</h3>
                    <h4>Product Specialist</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>Product Information</h3>
                <ul>
                  <li><strong>Category</strong> <span>Valve Stem Seals</span></li>
                  <li><strong>Model</strong> <span>EVU Series</span></li>
                  <li><strong>Material</strong> <span>High-grade Fluoroelastomer</span></li>
                  <li><strong>Temperature Range</strong> <span>-40°C to 250°C</span></li>
                  <li><strong>Pressure Rating</strong> <span>Up to 5 MPa</span></li>
                  <li><strong>Applications</strong> <span>Engine Valve Systems</span></li>
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
                <h2>Product specification example</h2>
                <p>Information about specification Product.</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>Material</th>
                      <td>High-grade Fluoroelastomer</td>
                    </tr>
                    <tr>
                      <th>Operating Temperature</th>
                      <td>-40°C to 250°C</td>
                    </tr>
                    <tr>
                      <th>Pressure Rating</th>
                      <td>Up to 5 MPa</td>
                    </tr>
                    <tr>
                      <th>Applications</th>
                      <td>Engine Valve Systems</td>
                    </tr>
                    <tr>
                      <th>Features</th>
                      <td>
                        <p>Excellent oil resistance</p>
                        <p>Superior heat resistance</p>
                        <p>Precise dimensional control</p>
                        <p>Enhanced durability</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: The above figures indicate the best conditions in individual cases and may differ according to the seal size. Contact us before use.</p>
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
                <Link to="/products/evr-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/EVR.png`} className="card-image" alt="EVR Mechanical Seal" />
                  </div>
                  <div className="card-caption">
                    <span>Mechanical Seal<br />EVR Series</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/products/evk2rt-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/EVK.jpg`} className="card-image" alt="EVK Mechanical Seal" />
                  </div>
                  <div className="card-caption">
                    <span>Mechanical Seal<br />EVK Series</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/products/lipSeal-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="card-image" alt="AC Compressor Lip Seal" />
                  </div>
                  <div className="card-caption">
                    <span>Lip Seal<br />For A/C Compressor</span>
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
                  <li className="current">EVU Valve Stem Seal</li>
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