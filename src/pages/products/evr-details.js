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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evr-flange-straight.png`} alt="Product Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evr-flange-1.png`} alt="Product Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evr-straight-1.png`} alt="Product Image 3" />
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
                <p style={{ textAlign: 'justify' }}>
                  {t('productDetails.evr.description2')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Featured Image */}
          <div className="product-featured-image" data-aos="fade-up" data-aos-delay="200">
            <p className="featured-image-description">{t('productDetails.evr.featuredDescription')}</p>
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
                <h2>{t('productDetails.evr.features')}</h2>
                <p>{t('productDetails.evr.featuresSubtitle')}</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>{t('productDetails.evr.combinationOfAdvantages')}</h4>
                  <p style={{ textAlign: 'left' }}>{t('productDetails.evr.combinationOfAdvantagesDescription')}</p>
                </div>
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>{t('productDetails.evr.outstandingDurability')}</h4>
                  <p style={{ textAlign: 'left' }}>{t('productDetails.evr.outstandingDurabilityDescription')}</p>
                </div>
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>{t('productDetails.evr.effectiveAbsorption')}</h4>
                  <p style={{ textAlign: 'left' }}>{t('productDetails.evr.effectiveAbsorptionDescription')}</p>
                </div>
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>{t('productDetails.evr.preventionOfCorrosion')}</h4>
                  <p style={{ textAlign: 'left' }}>{t('productDetails.evr.preventionOfCorrosionDescription')}</p>
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
                <h2>{t('productDetails.evr.types')}</h2>
                <p>{t('productDetails.evr.typesSubtitle')}</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>{t('productDetails.evr.straightTypeBearing')}</h4>
                  <p style={{ textAlign: 'left' }}>{t('productDetails.evr.straightTypeBearingDescription')}</p>
                </div>
                <div className="feature-item">
                  <h4 style={{ textAlign: 'left' }}>{t('productDetails.evr.flangeTypeBearing')}</h4>
                  <p style={{ textAlign: 'left' }}>{t('productDetails.evr.flangeTypeBearingDescription')}</p>
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
                <h2>{t('productDetails.evr.specifications')}</h2>
                <p>{t('productDetails.evr.specificationsSubtitle')}</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>{t('productDetails.evr.sizeRange')}</th>
                      <td>φ50 ～ φ500 (mm)</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evr.shaftSpeed')}</th>
                      <td>Generally Max.6 [m/sec]<br />(possible to use higher speed)</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evr.bearingLoad')}</th>
                      <td>Max.0.25 MPa</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evr.quantityOfCoolingWater')}</th>
                      <td>
                        Ds＜φ35 [cm]<br />
                        (5～5.5) Ds²×10⁻³ [m³/h]<br /><br />
                        Ds≧φ35 [cm]<br />
                        (6～7) Ds²×10⁻³ [m³/h]<br /><br />
                        Ds : Shaft Diameter [cm]
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evr.temperatureOfCoolingWater')}</th>
                      <td>Max.45 [℃]</td>
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
                <h2>{t('productDetails.evr.documents')}</h2>
                <p>{t('productDetails.evr.documentsSubtitle')}</p>
              </div>
              <div className="downloads-container" data-aos="fade-up" data-aos-delay="100">
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className="download-info">
                    <h4>{t('productDetails.evr.productCatalog')}</h4>
                    <p>{t('productDetails.evr.productCatalogDescription')}</p>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Catalogue - EVR.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="bi bi-download"></i> {t('productDetails.evr.downloadPDF')}
                  </a>
                </div>
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className="download-info">
                    <h4>{t('productDetails.evr.manualInstruction')}</h4>
                    <p>{t('productDetails.evr.manualInstructionDescription')}</p>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Manual Instruction - EVR.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="bi bi-download"></i> {t('productDetails.evr.downloadPDF')}
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
            <p>{t('productDetails.otherProductsInWaterLubricatedCategory')}</p>
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