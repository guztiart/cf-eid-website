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
              <li className="current">{t('productDetails.evr.title')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.evr.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=marine">{t('products.marine')}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=water-lubricated">{t('products.waterLubricatedSternTubeBearing')}</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evr-flange-1.png`} alt="Product Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evr-flange-2.png`} alt="Product Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evr-straight-1.png`} alt="Product Image 3" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evr-straight-2.png`} alt="Product Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-center gy-4 mt-4">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.evr.title')}</h2>
                <p>
                  Excellent Durability and Vibration Absorption.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  No peeling off by combination of reinforced plastics outer shell and rubber. Outstanding durability and stable performance. Effective absorption of shaft vibration. Prevention of electric corrosion on the shaft sleeve.
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Featured Image */}
          <div className="product-featured-image" data-aos="fade-up" data-aos-delay="200">
            <p className="featured-image-description">Excellent Durability and Vibration Absorption.</p>
            <img src={`${process.env.PUBLIC_URL}/assets/img/product/evr-flange-straight.png`} alt="EVR Product Feature" className="featured-product-image" />
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
                <p>Key features and benefits of the EVR</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>1. Combination of advantages of reinforced plastic with those of elastomer</h4>
                  <p style={{ textAlign: 'left' }}>Utilizes the best properties of both reinforced plastic and elastomer materials for optimal performance.</p>
                </div>
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>2. Outstanding durability and stable performance</h4>
                  <p style={{ textAlign: 'left' }}>Engineered to provide long-lasting service with consistent performance under various marine conditions.</p>
                </div>
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>3. Effective absorption of shaft vibration</h4>
                  <p style={{ textAlign: 'left' }}>Effectively absorbs and dampens shaft vibrations, reducing stress on the bearing system.</p>
                </div>
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>4. Prevention of Electrolytic Corrosion on the shaft sleeve</h4>
                  <p style={{ textAlign: 'left' }}>Special design prevents electrolytic corrosion, extending the life of the shaft sleeve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Types</h2>
                <p>Available types of EVR bearings for different applications</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>1. Straight Type Bearing</h4>
                  <p style={{ textAlign: 'left' }}>The outer shell is made of Cotton cloth Reinforced Plastic (CRP) which is impregnated by thermosetting resin. It is suitable to be installed on ships with relatively small diameters.</p>
                </div>
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>2. Flange Type Bearing</h4>
                  <p style={{ textAlign: 'left' }}>The outer shell is made of Glass cloth Reinforced Plastic (GRP), and is suitable for relatively larger diameter.</p>
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
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Catalogue - EVR.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="bi bi-download"></i> Download PDF
                  </a>
                </div>
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className="download-info">
                    <h4>Manual Instruction</h4>
                    <p>Installation and operation manual for EVR</p>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Manual Instruction - EVR.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
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
            <p>Other products in the Water Lubricated Stern Tube Bearing category</p>
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
                  <li className="current">{t('productDetails.evr.title')}</li>
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