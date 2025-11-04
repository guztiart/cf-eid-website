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
              <li className="current">Marine Ace Seal (MAS)</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Marine Ace Seal (MAS)</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=marine">Marine</Link></li>
                  <li className="nav-item"><Link to="/products?tag=water-lubricated-stern-tube-seal">Water Lubricated Stern Tube Seal</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/marine ace.png`} alt="Marine Ace Seal Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/marine ace 2.png`} alt="Marine Ace Seal Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Marine Ace Seal (MAS).jpg`} alt="Marine Ace Seal Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>Marine Ace Seal (MAS)</h2>
                <p>
                  We are the leading manufacturer of stern tube shaft sealing devices worldwide with our products installed on over 30,000 ships of 100 gross tonnages or more. The Marine Ace Seal (MAS) is our newly developed water-lubricated stern seal for small vessels with direct drive systems.
                </p>
                <p>
                  Due to an end-face seal structure consisting of a rubber sealing ring and a stainless steel mating ring, it is able to follow complex shaft vibration and displacements thereby demonstrating an excellent sealing performance. As sealing is achieved by the seal ring rotating at the same speed as the shaft and its face structure making contact against the stationary mating ring as a stopper, it is able to absorb all axial movement.
                </p>
                <p>
                  The inner diameter of the housing is designed to the same high standard as a rubber bearing so it can withstand contact with the shaft. As the sealing area is not exposed externally as is the case with a mechanical seal, it is able to withstand 'mechanical shock' to a high degree. The installation space is compact with the structure requiring only the cooling water hose to be supplied.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>Product Information</h3>
                <ul>
                  <li><strong>Category</strong> <span>Water Lubricated Stern Tube Seal</span></li>
                  <li><strong>Shaft Range</strong> <span>φ45~φ85 (5mm increment), 2"~3" (0.5" increment)</span></li>
                  <li><strong>Allowable PV Value</strong> <span>0.3 MPa・m/sec</span></li>
                  <li><strong>Pressure (P)</strong> <span>Max. 0.1 MPa</span></li>
                  <li><strong>Required Cooling Water</strong> <span>Min. 3 Liter/min</span></li>
                  <li><strong>Cooling Water Temperature</strong> <span>0~40°C</span></li>
                  <li><strong>Applications</strong> <span>Small vessels with direct drive systems</span></li>
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
                      <th style={{ width: '30%' }}>Shaft Range</th>
                      <td>φ45~φ85 (5mm increment), 2"~3" (0.5" increment)</td>
                    </tr>
                    <tr>
                      <th>Allowable PV Value</th>
                      <td>0.3 MPa・m/sec</td>
                    </tr>
                    <tr>
                      <th>Pressure (P)</th>
                      <td>Max. 0.1 MPa</td>
                    </tr>
                    <tr>
                      <th>Required amount of cooling water</th>
                      <td>Min. 3 Liter/min</td>
                    </tr>
                    <tr>
                      <th>Temperature of cooling water</th>
                      <td>0~40°C</td>
                    </tr>
                    <tr>
                      <th>V (Shaft rotation speed)</th>
                      <td>Varies by application</td>
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
                  <li className="current">Marine Ace Seal (MAS)</li>
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