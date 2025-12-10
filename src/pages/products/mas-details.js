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
              <li className="current">{t('productDetails.mas.breadcrumb')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.mas.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=marine">{t('products.marine')}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=water-lubricated-stern-tube-seal">{t('productDetails.mas.categoryValue')}</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mas-3.png`} alt="Marine Ace Seal Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mas-4.png`} alt="Marine Ace Seal Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mas-5.png`} alt="Marine Ace Seal Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-center gy-4 mt-4">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.mas.title')}</h2>
                <p>
                  We are the leading manufacturer of stern tube shaft sealing devices worldwide with our products installed on over 30,000 ship of 100 gross tonnages or more. The Marine Ace Seal (MAS) is our newly developed waterlubricated stern seal for small vessels with direct drive systems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Featured Image */}
          <div className="product-featured-image" data-aos="fade-up" data-aos-delay="200">
            <p className="featured-image-description">A compact, high performance water lubricated seal having excellent vibration resistance and sealing performance.</p>
            <img src={`${process.env.PUBLIC_URL}/assets/img/product/mas-6.jpg`} alt="Marine Ace Seal Product Feature" className="featured-product-image" />
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
                <p>Key features and benefits of the Marine Ace Seal (MAS) Water Lubricated Stern Tube Seal</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4>1. Excellent vibration resistance and sealing performance</h4>
                  <p>Due to an end-face seal structure consisting of a rubber sealing ring and a stainless steel mating ring, it is able to follow complex shaft vibration and displacements thereby demonstrating an excellent sealing performance.</p>
                </div>
                <div className="feature-item">
                  <h4>2. Excellent followability in the axial direction</h4>
                  <p>As sealing is achieved by the seal ring rotating at the same speed as the shaft and its face structure making contact against the stationary mating ring as a stopper, it is able to absorb all axial movement.</p>
                </div>
                <div className="feature-item">
                  <h4>3. Simple and robust rubber housing design</h4>
                  <p>The inner diameter of the housing is designed to the same high standard as a rubber bearing so it can withstand contact with the shaft is lowered. As the sealing area is not exposed externally as is the case with a mechanical seal, it is able to withstand 'mechanical shock' to a high degree.</p>
                </div>
                <div className="feature-item">
                  <h4>4. Easy to install</h4>
                  <p>The installation space is compact with the structure requiring only the cooling water hose to be supplied. The structure is fixed to the stern tube by means of two hose bands making it simple to install.</p>
                </div>
                <div className="feature-item">
                  <h4>5. Excellent slurry resistance</h4>
                  <p>The seal can be expected to have a long life even under dirty water conditions with a high degree of sediment as found in shallow water and rivers.</p>
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
                <h2>Specification</h2>
                <p>Technical specifications of the Marine Ace Seal (MAS)</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>Shaft Range</th>
                      <td>φ45~φ85 (5mm increment), 2"~3" (0,5"increment)</td>
                    </tr>
                    <tr>
                      <th>Allowable PV Value</th>
                      <td>0.3 MPa・m/sec P (Pressure in sealing device) : Max. 0.1 MPa<br />V (Shaft rotation speed)</td>
                    </tr>
                    <tr>
                      <th>Required amount of cooling water</th>
                      <td>Min. 3 Litter/min</td>
                    </tr>
                    <tr>
                      <th>Temperature of cooling water</th>
                      <td>0~40℃</td>
                    </tr>
                  </tbody>
                </table>
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
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Catalogue - Marine Ace Seal (MAS).pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="bi bi-download"></i> Download PDF
                  </a>
                </div>
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className="download-info">
                    <h4>Manual Instruction</h4>
                    <p>Installation and operation manual for Marine Ace Seal</p>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Manual Instruction - Marine Ace Seal.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
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
                <Link to="/products/rudderSeal-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/rudder-1.png`} className="card-image" alt="Rudder Seal" />
                  </div>
                  <div className="card-caption">
                    <span>{t('products.waterLubricatedSternTubeSeal')}<br />{t('products.rudderSeal')}</span>
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
                  <li className="current">{t('productDetails.mas.breadcrumb')}</li>
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