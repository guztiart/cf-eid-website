import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useGLightbox, useSwiper } from '../../hooks/useExternalLibs';
import { setDefaultFavicon } from '../../utils/setFavicon';
import { useLanguage } from '../../contexts/LanguageContext';

const ProjectDetails = () => {
  const { t } = useLanguage();
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
    
    // Set favicon
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
              <li><Link to="/projects">{t('productDetails.productBreadcrumb')}</Link></li>
              <li className="current">{t('productDetails.oRing.breadcrumb')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.oRing.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=semiconductor">{t('productDetails.oRing.semiconductor')}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=semiconductor-process">{t('productDetails.oRing.semiconductorProcess')}</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-1.jpg`} alt="SUPERIOR O-Ring Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-2.png`} alt="SUPERIOR O-Ring Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-3.png`} alt="SUPERIOR O-Ring Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.oRing.productTitle')}</h2>
                <p>
                  {t('productDetails.oRing.descriptionParagraph1')}
                </p>
                <p>
                  {t('productDetails.oRing.descriptionParagraph2')}
                </p>
                <p>
                  {t('productDetails.oRing.descriptionParagraph3')}
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>{t('productDetails.oRing.productInformation')}</h3>
                <ul>
                  <li><strong>{t('productDetails.oRing.category')}</strong> <span>{t('productDetails.oRing.categoryValue')}</span></li>
                  <li><strong>{t('productDetails.oRing.productSeries')}</strong> <span>{t('productDetails.oRing.productSeriesValue')}</span></li>
                  <li><strong>{t('productDetails.oRing.material')}</strong> <span>{t('productDetails.oRing.materialValue')}</span></li>
                  <li><strong>{t('productDetails.oRing.keyFeatures')}</strong> <span>{t('productDetails.oRing.keyFeaturesValue')}</span></li>
                  <li><strong>{t('productDetails.oRing.specialProperties')}</strong> <span>{t('productDetails.oRing.specialPropertiesValue')}</span></li>
                  <li><strong>{t('productDetails.oRing.applications')}</strong> <span>{t('productDetails.oRing.applicationsValue')}</span></li>
                </ul>
                
                <div className="pt-3">
                  <Link to="/contact" className="btn-visit">{t('productDetails.oRing.inquireAboutThisProduct')}</Link>
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
                <h2>{t('productDetails.oRing.productFeatures')}</h2>
                <p>{t('productDetails.oRing.featuresInfo')}</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>{t('productDetails.oRing.materialOptions')}</th>
                      <td>{t('productDetails.oRing.materialOptionsValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.oRing.plasmaResistance')}</th>
                      <td>{t('productDetails.oRing.plasmaResistanceValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.oRing.chemicalResistance')}</th>
                      <td>{t('productDetails.oRing.chemicalResistanceValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.oRing.outgasGeneration')}</th>
                      <td>{t('productDetails.oRing.outgasGenerationValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.oRing.photoThermalResistance')}</th>
                      <td>{t('productDetails.oRing.photoThermalResistanceValue')}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">{t('productDetails.oRing.noteText')}</p>
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
            <p>{t('productDetails.exploreSimilarProducts')}</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/project-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="card-image" alt="Compressor Lip Seal" />
                  </div>
                  <div className="card-caption">
                    <span>{t('productDetails.oRing.forAcCompressor')}<br />{t('productDetails.oRing.typeAMechanicalSeal')}</span>
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
                    <span>{t('productDetails.oRing.forWaterPump')}<br />{t('productDetails.oRing.eh795EH790')}</span>
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
                    <span>{t('productDetails.oRing.forVariableDisplacementAcCompressor')}<br />{t('productDetails.oRing.controlValve')}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
              <Link to="/projects" className="btn btn-primary">{t('productDetails.toProductsTop')}</Link>
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
                  <li><Link to="/projects">{t('productDetails.productBreadcrumb')}</Link></li>
                  <li className="current">{t('productDetails.oRing.breadcrumb')}</li>
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
          <p className="contact-text">{t('productDetails.oRing.contact')}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;