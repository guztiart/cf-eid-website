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
              <li className="current">{t('productDetails.serviceEngineer.breadcrumb')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.serviceEngineer.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                <li className="nav-item"><Link to="/products?tag=service">{language === 'id' ? 'Layanan' : 'Service'}</Link></li>
                <li className="nav-item"><Link to="/products?tag=engineering">{language === 'id' ? 'Teknik' : 'Engineering'}</Link></li>
                <li className="nav-item"><Link to="/products?tag=maintenance">{language === 'id' ? 'Pemeliharaan' : 'Maintenance'}</Link></li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section - Updated Layout */}
      <section id="project-details" className="project-details section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Enginer.png`} alt="Service Engineer 1" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-center gy-4 mt-4">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.serviceEngineer.title')}</h2>
                <p>
                  Professional engineering services for your ship's sealing systems.
                </p>
                <p>
                  We provide highly skilled and experienced service engineers to handle all aspects of marine sealing — from bonding and assembling to inspection and on-site supervision.
                </p>
                <p>
                  With a deep understanding of maritime environments and adherence to the highest industry standards, we ensure each seal is installed with precision and delivers optimal performance to prevent leakage, enhance efficiency, and extend equipment spare parts.
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Featured Image */}
          <div className="product-featured-image" data-aos="fade-up" data-aos-delay="200">
            <p className="featured-image-description">Expert service engineers providing professional installation and maintenance for marine sealing systems worldwide.</p>
            <img src={`${process.env.PUBLIC_URL}/assets/img/product/Enginer.png`} alt="Service Engineer Feature" className="featured-product-image" />
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Features</h2>
                <p>Key features and benefits of our Service Engineer solutions</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4>1. Professional Installation Services</h4>
                  <p>Our highly skilled service engineers specialize in the precise installation of marine sealing systems, ensuring optimal performance and longevity of your equipment.</p>
                </div>
                <div className="feature-item">
                  <h4>2. Expert Bonding and Assembly</h4>
                  <p>With extensive experience in marine sealing technology, our engineers handle complex bonding and assembly processes with meticulous attention to detail.</p>
                </div>
                <div className="feature-item">
                  <h4>3. Comprehensive Inspection Services</h4>
                  <p>Thorough inspection of sealing systems to identify potential issues before they become problems, ensuring reliable operation and preventing costly downtime.</p>
                </div>
                <div className="feature-item">
                  <h4>4. On-site Supervision</h4>
                  <p>Our service engineers provide expert on-site supervision for critical sealing operations, ensuring compliance with industry standards and manufacturer specifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="product-downloads section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Service Information</h2>
                <p>Details about our service engineer offerings</p>
              </div>
              <div className="downloads-container" data-aos="fade-up" data-aos-delay="100">
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="download-info">
                    <h4>{t('productDetails.serviceEngineer.globalServiceNetwork')}</h4>
                    <p>{t('productDetails.serviceEngineer.ourServiceEngineersAvailableWorldwide')}</p>
                  </div>
                  <Link to="/contact" className="btn-download">
                    <i className="bi bi-envelope"></i> Contact Us
                  </Link>
                </div>
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div className="download-info">
                    <h4>{t('productDetails.responseTime')}</h4>
                    <p>{t('productDetails.serviceEngineer.responseTimeValue')}</p>
                  </div>
                  <Link to="/contact" className="btn-download">
                    <i className="bi bi-envelope"></i> Request Service
                  </Link>
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
                  <h3 className="contact-title">{t('productDetails.serviceEngineer.contactServiceEngineerSection')}</h3>
                  <p className="contact-text">{t('productDetails.serviceEngineer.pleaseContactUsViaOurEmailForm')}</p>
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
            <p>{t('productDetails.exploreSimilarProducts')}</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/products/lipSeal-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="card-image" alt="Compressor Lip Seal" />
                  </div>
                  <div className="card-caption">
                    <span>{t('productDetails.serviceEngineer.forAcCompressor')}<br />{t('productDetails.serviceEngineer.typeAMechanicalSeal')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/products/eh795-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} className="card-image" alt="WP Compact Mechanical Seal" />
                  </div>
                  <div className="card-caption">
                    <span>{t('productDetails.serviceEngineer.forWaterPump')}<br />{t('productDetails.serviceEngineer.eh795EH790')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/products/airCutValve-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/acv-1.png`} className="card-image" alt="Control Valve" />
                  </div>
                  <div className="card-caption">
                    <span>{t('productDetails.serviceEngineer.forVariableDisplacementAcCompressor')}<br />{t('productDetails.serviceEngineer.controlValve')}</span>
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
                  <li className="current">{t('productDetails.serviceEngineer.breadcrumb')}</li>
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