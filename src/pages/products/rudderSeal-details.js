import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useGLightbox, useSwiper } from '../../hooks/useExternalLibs';
import { setDefaultFavicon } from '../../utils/setFavicon';
import { useLanguage } from '../../contexts/LanguageContext';

const ProjectDetails = () => {
  const { t, language } = useLanguage();
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
          <h1>{t('productDetails.products')}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">{t('productDetails.home')}</Link></li>
              <li><Link to="/products">{t('productDetails.productBreadcrumb')}</Link></li>
              <li className="current">{t('productDetails.rudderSeal.breadcrumb')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.rudderSeal.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=marine">{t('products.marine')}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=stern-tube-seals">{language === 'id' ? 'Segel Kemudi' : 'Rudder Seals'}</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/rudder-3.png`} alt="Product Image 2" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-center gy-4 mt-4">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.rudderSeal.title')}</h2>
                <p>
                  Rudder seal manufacture with high-performance, self-lubricating lip seals designed to be mounted above the rudder bearing to prevent the ingress of sea water into the hull. Manufactured from a special rubber, provide long wear life with no need for periodic adjustments, operate with less drag and reduced shaft/liner wear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Features</h2>
                <p>Key features and benefits of the Rudder Seal</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4>1. High-Performance Self-Lubricating Design</h4>
                  <p>Manufactured from special rubber compounds that provide excellent self-lubricating properties, reducing friction and extending service life.</p>
                </div>
                <div className="feature-item">
                  <h4>2. Superior Water Ingress Protection</h4>
                  <p>Designed to be mounted above the rudder bearing to effectively prevent the ingress of sea water into the hull, protecting critical components.</p>
                </div>
                <div className="feature-item">
                  <h4>3. Long Wear Life</h4>
                  <p>The special rubber formulation ensures extended wear life with no need for periodic adjustments, reducing maintenance requirements.</p>
                </div>
                <div className="feature-item">
                  <h4>4. Reduced Drag and Shaft Wear</h4>
                  <p>Operates with less drag and significantly reduces shaft/liner wear, improving overall efficiency and extending component life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Documents */}
      <section className="product-downloads section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Documents</h2>
                <p>Access product catalogs and manuals for detailed information</p>
              </div>
              <div className="downloads-container" data-aos="fade-up" data-aos-delay="100">
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className="download-info">
                    <h4>Product Catalog</h4>
                    <p>Complete catalog with technical specifications and details</p>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Catalogue - Rudder Seal.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="bi bi-download"></i> Download PDF
                  </a>
                </div>
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className="download-info">
                    <h4>Manual Instruction</h4>
                    <p>Installation and operation manual for Rudder Seal</p>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Manual Instruction - Rudder Seal.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="bi bi-download"></i> Download PDF
                  </a>
                </div>
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
                  <h3 className="contact-title">{t('productDetails.contactUs')}</h3>
                  <p className="contact-text">{t('productDetails.contactViaEmail')}</p>
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
            <h2>{t('productDetails.relatedProducts')}</h2>
            <p>Other products in the Water Lubricated Stern Tube Seal category</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/products/evk2rv-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/EVK2RV-1.png`} className="card-image" alt="EVK2RV" />
                  </div>
                  <div className="card-caption">
                    <span>{t('products.waterLubricatedSternTubeSeal')}<br />{t('products.evk2rv')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/products/evk2rt-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/evk2rt-2.png`} className="card-image" alt="EVK2RT" />
                  </div>
                  <div className="card-caption">
                    <span>{t('products.waterLubricatedSternTubeSeal')}<br />{t('products.evk2rt')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/products/mas-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/mas-1.png`} className="card-image" alt="Marine Ace Seal" />
                  </div>
                  <div className="card-caption">
                    <span>{t('products.waterLubricatedSternTubeSeal')}<br />{t('products.mas')}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
              <Link to="/products" className="btn btn-primary">{t('productDetails.toProductsTop')}</Link>
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
                  <li><Link to="/">{t('productDetails.home')}</Link></li>
                  <li><Link to="/products">{t('productDetails.productBreadcrumb')}</Link></li>
                  <li className="current">{t('productDetails.rudderSeal.breadcrumb')}</li>
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
          <p className="contact-text">{t('productDetails.contactUs')}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;