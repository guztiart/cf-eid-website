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
              <li className="current">EH795/EH790 for Water Pump</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">EH795/EH790 for Water Pump</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=oil-gas">Oil & Gas</Link></li>
                  <li className="nav-item"><Link to="/products?tag=pumps">Pumps</Link></li>
                  <li className="nav-item"><Link to="/products?tag=automobile">Automobile</Link></li>
                  <li className="nav-item"><Link to="/products?tag=water-pump">Water Pump</Link></li>
                  <li className="nav-item"><Link to="/products?tag=housing-equipment">Housing Equipment</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-1.png`} alt="Product Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-2.jpg`} alt="Product Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-3.png`} alt="Product Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>EH795/EH790 for Water Pump</h2>
                <p>
                  Capable for high-speed rotation. Mass-production by fully automated assembling lines and supplied to water pump makers worldwide. 
                  By its unitized design, EH795 supports easy installation into customer application.
                </p>
                <p>
                  These seals are suitable for high-speed rotation due to its simple and compact construction. 
                  The materials of the seal face are Eagle Industry's proprietary carbon components and SiC which provides high resistance to heat, wear and corrosion. 
                  These seals are manufactured by full automated assembling lines at our global production sites, and has high market share in worldwide specifically in the category of seals for automotive water pumps. 
                  These seals are also suitable for industrial pumps. EH795: The rotating and stationary components are unitized with the stamped sleeve, providing ease of installation as well as high reliability by protecting sliding surfaces.
                </p>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    The mechanical seals from Eagle Industry Indonesia have significantly improved our water pump systems.
                    The quality and durability are exceptional.
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
                  <li><strong>Category</strong> <span>Mechanical Seals, Water Pump</span></li>
                  <li><strong>Model</strong> <span>EH795/EH790</span></li>
                  <li><strong>Sealed fluid</strong> <span>Water, Coolant, etc.</span></li>
                  <li><strong>Temperature</strong> <span>-20°C to 110°C (120°C max.)</span></li>
                  <li><strong>Maximum circumferential velocity</strong> <span>12 m/s</span></li>
                  <li><strong>Pressure</strong> <span>-67 kPa to 0.3 MPaG</span></li>
                  <li><strong>Shaft diameter</strong> <span>Up to 30 mm</span></li>
                  <li><strong>Applications</strong> <span>Water pumps for automotive and industrial applications</span></li>
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
                      <th style={{ width: '30%' }}>Sealed fluid</th>
                      <td>Water, Coolant, etc.</td>
                    </tr>
                    <tr>
                      <th>Temperature</th>
                      <td>-20°C to 110°C (120°C max.)</td>
                    </tr>
                    <tr>
                      <th>Maximum circumferential velocity</th>
                      <td>12 m/s</td>
                    </tr>
                    <tr>
                      <th>Pressure</th>
                      <td>-67 kPa to 0.3 MPaG</td>
                    </tr>
                    <tr>
                      <th>Shaft diameter</th>
                      <td>Up to 30 mm</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: Above shows typical conditions, please contact us with your specific requirements.</p>
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
                  <li className="current">EH795/EH790 for Water Pump</li>
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