import React from 'react';
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

  return (
    <div className="project-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Product Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Products</Link></li>
              <li className="current">Floating Seal</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Project Details Section */}
      <section id="project-details" className="project-details section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-1.jpg`} alt="Product Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-2.png`} alt="Product Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-3.png`} alt="Product Image 3" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-4.png`} alt="Product Image 4" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-5.png`} alt="Product Image 5" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>Floating Seal</h2>
                <p>
                  Seals for undercarriages of construction machinery (track rollers, final drives, axles and idlers). 
                  Simple structure consisting of an O-ring and a seal ring made of special cast iron. 
                  Optimum seals for undercarriages of bulldozers and hydraulic excavators frequently exposed to sand, dirt and other foreign matter.
                </p>
                <p>
                  Robust design ensures longevity in harsh environments, protecting critical components from contaminants.
                </p>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Ideal for heavy-duty construction equipment undercarriages.
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
                  <li><strong>Category</strong> <span>Mechanical Seals</span></li>
                  <li><strong>Model</strong> <span>EH795</span></li>
                  <li><strong>Material</strong> <span>High-grade Stainless Steel</span></li>
                  <li><strong>Temperature Range</strong> <span>-40°C to 200°C</span></li>
                  <li><strong>Pressure Rating</strong> <span>Up to 10 MPa</span></li>
                  <li><strong>Applications</strong> <span>Water Pumps</span></li>
                </ul>
                
                <div className="pt-3">
                  <h3>Product Features</h3>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>Self-lubricating design</span></li>
                    <li><i className="bi bi-check"></i> <span>Low friction coefficient</span></li>
                    <li><i className="bi bi-check"></i> <span>High wear resistance</span></li>
                    <li><i className="bi bi-check"></i> <span>Easy installation</span></li>
                    <li><i className="bi bi-check"></i> <span>Long service life</span></li>
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

      {/* Related Products Section */}
      <section id="related-products" className="related-products section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Related Products</h2>
            <p>Explore our other similar products</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-content h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Compressor Lip Seal</h4>
                  <p>High-quality lip seals for AC compressors</p>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} title="Product 1" data-gallery="related-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/project-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-content h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Mechanical Seal</h4>
                  <p>Durable mechanical seals for various applications</p>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} title="Product 2" data-gallery="related-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/project-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="portfolio-content h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Rudder_seal.PNG`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Rudder Seal</h4>
                  <p>Specialized seals for marine rudder applications</p>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/product/Rudder_seal.PNG`} title="Product 3" data-gallery="related-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/project-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;