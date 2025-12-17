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
                  <li className="nav-item"><Link to="/products?tag=marine">{t('products.marine')}</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evk2rt-1.png`} alt="Water Lubricated Stern Tube Seal - EVK2RT" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/evk2rt-2.png`} alt="EVK2RT Detail View" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-center gy-4 mt-4">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.evk2rt.title')}</h2>
                <p style={{ textAlign: 'center' }}>
                  {t('productDetails.evk2rtFeaturedDescription')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Featured Image */}
          <div className="product-featured-image" data-aos="fade-up" data-aos-delay="200">
            <img src={`${process.env.PUBLIC_URL}/assets/img/product/evk2rt-4.jpg`} alt="EVK2RT Product Feature" className="featured-product-image" />
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
                <p>Key features and benefits of the EVK2RT Water Lubricated Stern Tube Seal</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4>1. Improved wear resistance</h4>
                  <p>The active #1 seal ring is always lubricated by self-controlled clean fresh water. This results in the significant reduction in wear of the mating ring, the seal housing and the seal ring.</p>
                </div>
                <div className="feature-item">
                  <h4>2. Built in spare seal ring</h4>
                  <p>The spare #2 seal ring is incorporated in the seal housing as a spare. The #2 seal stands by in an idle condition under normal operation and is cooled, lubricated & protected by fresh water.</p>
                </div>
                <div className="feature-item">
                  <h4>3. Improved operability</h4>
                  <p>The active seal ring is easily changed from #1 to #2 spare seal by operation of valves . The #2 spare ring is activated without disassembling the seal unit should #1 seal ring shows increasing leakage.</p>
                </div>
                <div className="feature-item">
                  <h4>4. Easy upgrade form existing EVK</h4>
                  <p>By replacing the seal housing, it may be possible to convert an existing EVK seal to a Tandem type.</p>
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
                <p>Technical specifications of the EVK2RT Water Lubricated Stern Tube Seal</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>{t('productDetails.evk2rtSpecificationTable.shaftDiameterRange')}</th>
                      <td>φ101 ～ φ500 (mm)</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.evk2rtSpecificationTable.pvValue')}</th>
                      <td>Max. 0.6 (MPa・m/s)<br />(Water pressure in casing ： Max. 0.15 MPa)</td>
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
                <h2>{t('productDetails.documents')}</h2>
                <p>{t('productDetails.documentsDescription')}</p>
              </div>
              <div className="downloads-container" data-aos="fade-up" data-aos-delay="100">
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className="download-info">
                    <h4>{t('productDetails.productCatalog')}</h4>
                    <p>{t('productDetails.productCatalogDescription')}</p>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Catalogue EVK2RT.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="bi bi-download"></i> {t('productDetails.downloadPDF')}
                  </a>
                </div>
                <div className="download-item">
                  <div className="download-icon">
                    <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className="download-info">
                    <h4>{t('productDetails.manualInstruction')}</h4>
                    <p>{t('productDetails.manualInstruction')} {t('productDetails.manualInstruction')} for EVK2RV & EVK2RT</p>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/pdf/Manual Instruction - EVK2RV & EVK2RT.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="bi bi-download"></i> {t('productDetails.downloadPDF')}
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
            <p>{t('productDetails.otherProductsInCategory', { category: t('products.waterLubricatedSternTubeSeal') })}</p>
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
          <p className="contact-text">{t('productDetails.contactUs')}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;