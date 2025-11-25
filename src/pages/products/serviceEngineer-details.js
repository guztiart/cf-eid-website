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

      {/* Product Details Section - Original Layout */}
      <section id="project-details" className="project-details section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Enginer.png`} alt="Service Engineer 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Enginer.png`} alt="Service Engineer 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/productEnginer.png`} alt="Service Engineer 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.serviceEngineer.title')}</h2>
                <p>
                  {t('productDetails.serviceEngineer.description1')}
                </p>
                <p>
                  {t('productDetails.serviceEngineer.description2')}
                </p>
                <p>
                  {t('productDetails.serviceEngineer.description3')}
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>{t('productDetails.serviceEngineer.serviceInformation')}</h3>
                <ul>
                  <li><strong>{t('productDetails.serviceType')}</strong> <span>{t('productDetails.serviceEngineer.serviceTypeValue')}</span></li>
                  <li><strong>{t('productDetails.serviceArea')}</strong> <span>{t('productDetails.serviceEngineer.serviceAreaValue')}</span></li>
                  <li><strong>{t('productDetails.responseTime')}</strong> <span>{t('productDetails.serviceEngineer.responseTimeValue')}</span></li>
                  <li><strong>{t('productDetails.serviceAvailability')}</strong> <span>{t('productDetails.serviceEngineer.serviceAvailabilityValue')}</span></li>
                  <li><strong>{t('productDetails.specialization')}</strong> <span>{t('productDetails.serviceEngineer.specializationValue')}</span></li>
                  <li><strong>{t('productDetails.serviceCenters')}</strong> <span>{t('productDetails.serviceEngineer.serviceCentersValue')}</span></li>
                </ul>
                               
                <div className="pt-3">
                  <Link to="/contact" className="btn-visit">{t('productDetails.serviceEngineer.contactServiceEngineer')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Network */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>{t('productDetails.serviceEngineer.globalServiceNetwork')}</h2>
                <p>{t('productDetails.serviceEngineer.ourServiceEngineersAvailableWorldwide')}</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>{t('productDetails.serviceEngineer.asia')}</th>
                      <td>
                        <p>{t('productDetails.serviceEngineer.asiaLocations')}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.serviceEngineer.europe')}</th>
                      <td>
                        <p>{t('productDetails.serviceEngineer.europeLocations')}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.serviceEngineer.northAmerica')}</th>
                      <td>
                        <p>{t('productDetails.serviceEngineer.northAmericaLocations')}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.serviceEngineer.southAmerica')}</th>
                      <td>
                        <p>{t('productDetails.serviceEngineer.southAmericaLocations')}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.serviceEngineer.oceania')}</th>
                      <td>
                        <p>{t('productDetails.serviceEngineer.oceaniaLocations')}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.serviceEngineer.middleEast')}</th>
                      <td>
                        <p>{t('productDetails.serviceEngineer.middleEastLocations')}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">{t('productDetails.serviceEngineer.noteText')}</p>
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