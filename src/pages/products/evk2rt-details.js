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
              <li className="current">Water Lubricated Stern Tube Seal - EVK2RT</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Water Lubricated Stern Tube Seal - EVK2RT</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=marine">Marine</Link></li>
                  <li className="nav-item"><Link to="/products?tag=stern-tube">Stern Tube</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/EVK2RT.jpg`} alt="Water Lubricated Stern Tube Seal - EVK2RT" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Detail EVK_xxx.jpg`} alt="EVK2RT Detail View" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Detail EVK.jpg`} alt="EVK Series Detail" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>Water Lubricated Stern Tube Seal - EVK2RT</h2>
                <p>
                  Spare ring is easily activated without disassembling.
                </p>
                <p>
                  Features quick spare ring activation for minimal downtime in marine operations. The EVK2RT is designed to provide reliable sealing performance in water-lubricated stern tube applications, ensuring optimal protection against water ingress and oil leakage.
                </p>
                <p>
                  Our EVK2RT seals are manufactured with high-quality materials that offer excellent resistance to marine environments. The innovative design allows for easy maintenance and extended service life, reducing operational costs and vessel downtime. The simple spare ring activation mechanism enables quick replacement without the need for complete disassembly, making it an ideal solution for marine vessels requiring minimal maintenance intervals.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>Product Information</h3>
                <ul>
                  <li><strong>Category</strong> <span>Marine Seals</span></li>
                  <li><strong>Industry</strong> <span>Marine</span></li>
                  <li><strong>Application</strong> <span>Stern Tube</span></li>
                  <li><strong>Key Feature</strong> <span>Quick spare ring activation without disassembly</span></li>
                  <li><strong>Material</strong> <span>High-grade marine-resistant components</span></li>
                  <li><strong>Benefits</strong> <span>Minimal downtime, easy maintenance</span></li>
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
                      <th style={{ width: '30%' }}>Application</th>
                      <td>Water Lubricated Stern Tube</td>
                    </tr>
                    <tr>
                      <th>Key Feature</th>
                      <td>Spare ring is easily activated without disassembling</td>
                    </tr>
                    <tr>
                      <th>Industry</th>
                      <td>Marine</td>
                    </tr>
                    <tr>
                      <th>Material</th>
                      <td>High-grade marine-resistant components</td>
                    </tr>
                    <tr>
                      <th>Benefits</th>
                      <td>
                        <p>Minimal downtime during maintenance</p>
                        <p>Quick spare ring activation</p>
                        <p>Extended service life</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: The above figures indicate the best conditions in individual cases and may differ according to the seal size and application. Contact us before use.</p>
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
                <Link to="/products/rudderSeal-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/Rudder_seal.PNG`} className="card-image" alt="Rudder Seal" />
                  </div>
                  <div className="card-caption">
                    <span>for Marine<br />Rudder Seal</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/products/mas-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/Marine Ace Seal (MAS).jpg`} className="card-image" alt="Marine Ace Seal" />
                  </div>
                  <div className="card-caption">
                    <span>for Marine<br />Marine Ace Seal</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/products/floatingSeal-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/floating_seal.jpg`} className="card-image" alt="Floating Seal" />
                  </div>
                  <div className="card-caption">
                    <span>for Marine<br />Floating Seal</span>
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
                  <li className="current">Water Lubricated Stern Tube Seal - EVK2RT</li>
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