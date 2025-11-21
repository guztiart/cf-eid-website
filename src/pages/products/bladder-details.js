import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useGLightbox, useSwiper } from '../../hooks/useExternalLibs';
import { setDefaultFavicon } from '../../utils/setFavicon';
import { useLanguage } from '../../contexts/LanguageContext';

const BladderDetails = () => {
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
              <li className="current">{t('productDetails.bladderAccumulator.breadcrumb')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.bladderAccumulator.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=industrial">Industrial</Link></li>
                  <li className="nav-item"><Link to="/products?tag=hydraulic-components">Hydraulic Components</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/bladder_type_accumulators.jpeg`} alt="Bladder Type Accumulator" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/acv-1.png`} alt="Bladder Type Accumulator Detail 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/acv-2.jpg`} alt="Bladder Type Accumulator Detail 2" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.bladderAccumulator.title')}</h2>
                <p>
                  {t('productDetails.bladderAccumulator.description1')}
                </p>
                <p>
                  {t('productDetails.bladderAccumulator.description2')}
                </p>
                <p>
                  {t('productDetails.bladderAccumulator.description3')}
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>{t('productDetails.productInformation')}</h3>
                <ul>
                  <li><strong>{t('productDetails.category')}</strong> <span>{t('productDetails.bladderAccumulator.categoryValue')}</span></li>
                  <li><strong>{t('productDetails.type')}</strong> <span>{t('productDetails.bladderAccumulator.typeValue')}</span></li>
                  <li><strong>{t('productDetails.material')}</strong> <span>{t('productDetails.bladderAccumulator.materialValue')}</span></li>
                  <li><strong>{t('productDetails.temperatureRange')}</strong> <span>{t('productDetails.bladderAccumulator.temperatureRangeValue')}</span></li>
                  <li><strong>{t('productDetails.maxPressure')}</strong> <span>{t('productDetails.bladderAccumulator.maxPressureValue')}</span></li>
                  <li><strong>{t('productDetails.volumeRange')}</strong> <span>{t('productDetails.bladderAccumulator.volumeRangeValue')}</span></li>
                  <li><strong>{t('productDetails.applications')}</strong> <span>{t('productDetails.bladderAccumulator.applicationsValue')}</span></li>
                </ul>
                
                <div className="pt-3">
                  <h3>{t('productDetails.productFeatures')}</h3>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.highEnergyStorageCapacity')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.excellentResponseTime')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.lowGasPermeability')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.easyMaintenance')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.longServiceLife')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.wideTemperatureRange')}</span></li>
                  </ul>
                </div>
                
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
                      <th style={{ width: '30%' }}>{t('productDetails.category')}</th>
                      <td>{t('productDetails.bladderAccumulator.categoryValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.type')}</th>
                      <td>{t('productDetails.bladderAccumulator.typeValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.material')}</th>
                      <td>{t('productDetails.bladderAccumulator.materialValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.temperatureRange')}</th>
                      <td>{t('productDetails.bladderAccumulator.temperatureRangeValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.maxPressure')}</th>
                      <td>{t('productDetails.bladderAccumulator.maxPressureValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.volumeRange')}</th>
                      <td>{t('productDetails.bladderAccumulator.volumeRangeValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.applications')}</th>
                      <td>
                        <p>{t('productDetails.energyStorageInHydraulicSystems')}</p>
                        <p>{t('productDetails.shockAbsorption')}</p>
                        <p>{t('productDetails.pulsationDampening')}</p>
                        <p>{t('productDetails.emergencyPowerSupply')}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.benefits')}</th>
                      <td>
                        <p>{t('productDetails.highEnergyStorageCapacity')}</p>
                        <p>{t('productDetails.excellentResponseTime')}</p>
                        <p>{t('productDetails.lowGasPermeability')}</p>
                        <p>{t('productDetails.easyMaintenance')}</p>
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
                <Link to="/products/airCutValve-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/AirCutValve.jpg`} className="card-image" alt="Air Cut Valve" />
                  </div>
                  <div className="card-caption">
                    <span>Automobile<br />Air Cut Valve</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/products/reedValve-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/reed_valve_double.jpg`} className="card-image" alt="Reed Valve" />
                  </div>
                  <div className="card-caption">
                    <span>Automobile<br />Reed Valve</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/products/oRing-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-2.png`} className="card-image" alt="SUPERIOR O-Ring" />
                  </div>
                  <div className="card-caption">
                    <span>Sealing Solutions<br />SUPERIOR O-Ring</span>
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
                  <li className="current">{t('productDetails.bladderAccumulator.breadcrumb')}</li>
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
          <p className="contact-text">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default BladderDetails;