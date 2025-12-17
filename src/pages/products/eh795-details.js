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
              <li className="current">{t('productDetails.eh795.breadcrumb')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.eh795.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=oil-gas">{t('products.oilGas')}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=pumps">{language === 'id' ? 'Pompa' : 'Pumps'}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=automobile">{t('products.automobile')}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=water-pump">{language === 'id' ? 'Pompa Air' : 'Water Pump'}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=housing-equipment">{language === 'id' ? 'Peralatan Rumah' : 'Housing Equipment'}</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-1.png`} alt="Product Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-2.jpg`} alt="Product Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-3.png`} alt="Product Image 3" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-4.png`} alt="Product Image 3" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/mech-seal-5.png`} alt="Product Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-center gy-4 mt-4">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.eh795.title')}</h2>
                <p>
                  Capable for high-speed rotation.
                </p>
                <p>
                  Mass-production by fully automated assembling lines and supplied to water pump makers worldwide.
                </p>
                <p>
                  By its unitized design, EH795 supports easy installation into customer application.
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
                <p>Key features of the EH795/EH790 for Water Pump</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4>High-Speed Rotation</h4>
                  <p>These seals are suitable for high-speed rotation due to its simple and compact construction.</p>
                </div>
                <div className="feature-item">
                  <h4>Superior Materials</h4>
                  <p>The materials of the seal face are Eagle Industry's proprietary carbon components and SiC which provides high resistance to heat, wear and corrosion.</p>
                </div>
                <div className="feature-item">
                  <h4>Global Manufacturing</h4>
                  <p>These seals are manufactured by full automated assembling lines at our global production sites, and has high market share in worldwide specifically in the category of seals for automotive water pumps. These seals are also suitable for industrial pumps.</p>
                </div>
                <div className="feature-item">
                  <h4>Unitized Design</h4>
                  <p>EH795: The rotating and stationary components are unitized with the stamped sleeve, providing ease of installation as well as high reliability by protecting sliding surfaces.</p>
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
                      <th style={{ width: '30%' }}>{t('productDetails.sealedFluid')}</th>
                      <td>{t('productDetails.eh795.sealedFluidValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.temperature')}</th>
                      <td>{t('productDetails.eh795.temperatureValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.maximumCircumferentialVelocity')}</th>
                      <td>{t('productDetails.eh795.maximumCircumferentialVelocityValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.pressure')}</th>
                      <td>{t('productDetails.eh795.pressureValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.shaftDiameter')}</th>
                      <td>{t('productDetails.eh795.shaftDiameterValue')}</td>
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
                <Link to="/products/lipSeal-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="card-image" alt="Compressor Lip Seal" />
                  </div>
                  <div className="card-caption">
                    <span>{t('productDetails.lipSeal.forAcCompressor')}<br />{t('productDetails.lipSeal.typeAMechanicalSeal')}</span>
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
                    <span>{t('productDetails.lipSeal.forWaterPump')}<br />{t('productDetails.lipSeal.eh795EH790')}</span>
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
                    <span>{t('productDetails.lipSeal.forVariableDisplacementAcCompressor')}<br />{t('productDetails.lipSeal.controlValve')}</span>
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
                  <li className="current">{t('productDetails.eh795.breadcrumb')}</li>
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