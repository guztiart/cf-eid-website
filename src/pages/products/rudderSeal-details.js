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
              <li className="current">Stern Tube Seal</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Stern Tube Seal</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=marine">Marine</Link></li>
                  <li className="nav-item"><Link to="/products?tag=stern-tube-seals">Stern Tube Seals</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/rudder-1.png`} alt="Product Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/rudder-2.png`} alt="Product Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Rudder_seal.png`} alt="Product Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>Stern Tube Seal</h2>
                <p>
                  Stern tube seals with lip seals designed to prevent the leakage of lubricant and the ingress of seawater. 
                  They are approved by classification societies of each country. Their comprehensive lineup includes the standard CX type, 
                  the DX type with an additional standby seal, the pollution-free AX type, and the EVA type equipped with face seals.
                </p>
                <p>
                  As the Seto Inland Sea has long been a prosperous shipping area, we manufacture marine related products such as 
                  vulcanization molding of rubber for stern tube sealing, intermediate bearings for propeller shafts, etc. 
                  Our stern tube seals are engineered with precision to provide optimal performance in marine applications, ensuring 
                  maximum durability and efficiency in preventing oil leakage while maintaining smooth operation of the vessel's propulsion system.
                </p>
                <p>
                  Our stern tube seals undergo rigorous quality control processes to meet international maritime standards. 
                  The specialized materials used in manufacturing offer excellent resistance to seawater corrosion and various lubricants, 
                  ensuring long service life even under extreme operating conditions in marine environments.
                </p>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    The stern tube seals from Eagle Industry Indonesia have significantly improved our marine vessels' performance.
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
                  <li><strong>Category</strong> <span>Marine, Stern Tube Seals</span></li>
                  <li><strong>Sealed fluid</strong> <span>Oil & Seawater</span></li>
                  <li><strong>Operating Temperature</strong> <span>-20°C to 120°C</span></li>
                  <li><strong>Maximum circumferential velocity</strong> <span>15 m/s (approx. 5,000 rpm)</span></li>
                  <li><strong>Fluid Pressure Range</strong> <span>0 to 0.5 MPaG</span></li>
                  <li><strong>Shaft diameter</strong> <span>100 to 800 mm</span></li>
                  <li><strong>Material</strong> <span>Special rubber compound for marine applications</span></li>
                  <li><strong>Applications</strong> <span>Marine vessels, commercial ships, coastal vessels</span></li>
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
                      <td>Oil & Seawater</td>
                    </tr>
                    <tr>
                      <th>Operating Temperature</th>
                      <td>-20°C to 120°C</td>
                    </tr>
                    <tr>
                      <th>Maximum circumferential velocity</th>
                      <td>15 m/s (approx. 5,000 rpm)</td>
                    </tr>
                    <tr>
                      <th>Fluid Pressure Range</th>
                      <td>0 to 0.5 MPaG</td>
                    </tr>
                    <tr>
                      <th>Shaft diameter</th>
                      <td>100 to 800 mm</td>
                    </tr>
                    <tr>
                      <th>Types Available</th>
                      <td>
                        <p>CX Type: Standard model</p>
                        <p>DX Type: With additional standby seal</p>
                        <p>AX Type: Pollution-free model</p>
                        <p>EVA Type: Equipped with face seals</p>
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
                  <li className="current">Stern Tube Seal</li>
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