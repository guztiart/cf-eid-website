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
              <li><Link to="/projects">{t('productDetails.productBreadcrumb')}</Link></li>
              <li className="current">{t('productDetails.evk2rt.breadcrumb')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.evk2rt.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=marine">{t('home.marine')}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=stern-tube">{t('products.waterLubricatedSternTubeSeal')}</Link></li>
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
                <h2>{t('productDetails.evk2rt.title')}</h2>
                <p>
                  {t('productDetails.evk2rt.spareRingActivation')}
                </p>
                <p>
                  {t('productDetails.evk2rt.featuresDescription1')}
                </p>
                <p>
                  {t('productDetails.evk2rt.featuresDescription2')}
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>{t('productDetails.evk2rt.productInformation')}</h3>
                <ul>
                  <li><strong>{t('productDetails.evk2rt.category')}</strong> <span>{t('productDetails.evk2rt.categoryValue')}</span></li>
                  <li><strong>{t('productDetails.evk2rt.industry')}</strong> <span>{t('productDetails.evk2rt.industryValue')}</span></li>
                  <li><strong>{t('productDetails.evk2rt.application')}</strong> <span>{t('productDetails.evk2rt.applicationValue')}</span></li>
                  <li><strong>{t('productDetails.evk2rt.keyFeature')}</strong> <span>{t('productDetails.evk2rt.keyFeatureValue')}</span></li>
                  <li><strong>{t('productDetails.evk2rt.material')}</strong> <span>{t('productDetails.evk2rt.materialValue')}</span></li>
                  <li><strong>{t('productDetails.evk2rt.benefits')}</strong> <span>{t('productDetails.evk2rt.benefitsValue')}</span></li>
                </ul>
                
                <div className="pt-3">
                  <Link to="/contact" className="btn-visit">{t('productDetails.inquireAboutProduct')}</Link>
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
                <h2>{t('productDetails.productSpecification')}</h2>
                <p>{t('productDetails.specificationInfo')}</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>{t('productDetails.application')}</th>
                      <td>{t('productDetails.evk2rt.typeValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evk2rt.keyFeature')}</th>
                      <td>{t('productDetails.evk2rt.spareRingActivation')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evk2rt.industry')}</th>
                      <td>{t('productDetails.evk2rt.industryValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evk2rt.material')}</th>
                      <td>{t('productDetails.evk2rt.materialValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evk2rt.benefits')}</th>
                      <td>
                        <p>{t('productDetails.evk2rt.benefitsValue')}</p>
                        <p>{t('productDetails.evk2rt.keyFeatureValue')}</p>
                        <p>{t('productDetails.longServiceLife')}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">{t('productDetails.noteText')}</p>
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
                <Link to="/products/rudderSeal-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/Rudder_seal.PNG`} className="card-image" alt="Rudder Seal" />
                  </div>
                  <div className="card-caption">
                    <span>{t('home.marine')}<br />{t('products.rudderSeal')}</span>
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
                    <span>{t('home.marine')}<br />{t('products.mas')}</span>
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
                    <span>{t('home.marine')}<br />{t('products.floatingSeal')}</span>
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
                  <li className="current">{t('productDetails.evk2rt.breadcrumb')}</li>
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
          <p className="contact-text">{language === 'en' ? 'Contact' : 'Kontak'}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;