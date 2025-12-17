import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useGLightbox, useSwiper } from '../../hooks/useExternalLibs';
import { setDefaultFavicon } from '../../utils/setFavicon';
import { useLanguage } from '../../contexts/LanguageContext';

const BladderDetails = () => {
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
                  <li className="nav-item"><Link to="/products?tag=industrial">{language === 'id' ? 'Industri' : 'Industrial'}</Link></li>
                  <li className="nav-item"><Link to="/products?tag=hydraulic-components">{language === 'id' ? 'Komponen Hidrolik' : 'Hydraulic Components'}</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/bladder-type-accumulator-1.png`} alt="Bladder Type Accumulator" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/bladder-type-accumulator-1.png`} alt="Bladder Type Accumulator Detail 1" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-center gy-4 mt-4">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.bladderAccumulator.title')}</h2>
                <p>
                  These standard bladder accumulators are manufactured based on years of experience and proven performance.
                  Bladders are replaceable and available in various sizes up to large-volume ones.
                  Their extensive applications include general industrial machineries, construction machineries, power plants and chemical plants.
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
                <p>Key features of the Bladder Type Accumulator</p>
              </div>
              <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <h4>Large Gas Volume</h4>
                  <p>The maximum available gas volume is 160 L.</p>
                </div>
                <div className="feature-item">
                  <h4>Superior Bladder Material</h4>
                  <p>Bladders made of rubber offer excellent tension fatigue resistance and very low gas permeability.</p>
                </div>
                <div className="feature-item">
                  <h4>High Flow Rate</h4>
                  <p>The Ultrahigh Flow (UH) series is adapted to a maximum discharge flow rate of 4,800 L/min.</p>
                </div>
                <div className="feature-item">
                  <h4>Compliance with International Standards</h4>
                  <p>Can be arranged to conform to the High Pressure Gas Safety Low (Japan), ASME U Stamp (American Society of Mechanical Engineers), CE Marking (European Pressure Equipment Directive) and Regulation for Boiler and Pressure Vessel Manufacture Licensing (China).</p>
                </div>
                <div className="feature-item">
                  <h4>Various Components Available</h4>
                  <p>Various liquid-end joints (bushings and flanges), accumulator main valves, gas control valves, and charging assemblies are available.</p>
                </div>
                <div className="feature-item">
                  <h4>After-Sales Support</h4>
                  <p>We provide maintenance and support services for our customers for peace of mind after purchasing our products.</p>
                </div>
                <div className="feature-item">
                  <h4>Important Note</h4>
                  <p>* Some models are exempt from the requirements of laws and regulations or not designed by us to meet those requirements.</p>
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
                <h2>Product specification example</h2>
                <p>Technical specifications of the Bladder Type Accumulator</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <div className="type-descriptions" style={{ marginBottom: '20px', textAlign: 'left' }}>
                  <p><strong>AL:</strong> With this type, the bladder is replaceable only from the fluid side (the accumulator needs to be removed).</p>
                  <p><strong>AT:</strong> This type enables the bladder to be replaced either from the gas or liquid end (with the accumulator installed).</p>
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Type</th>
                      <th>Max. Working Pressure (MPa)</th>
                      <th>Nominal Gas Volume (L)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AL</td>
                      <td>14.7</td>
                      <td>1 2.4 4 5</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>29.4</td>
                      <td>1 2.4 4 5</td>
                    </tr>
                    <tr>
                      <td>AT</td>
                      <td>16</td>
                      <td>10 20 30 50</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>20.6</td>
                      <td>30 40 50 60 80 120 150 160</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>22.6</td>
                      <td>10 20 30 50</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>34.3</td>
                      <td>10 20 30</td>
                    </tr>
                  </tbody>
                </table>
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
                    <span>{t('products.automobile')}<br />{t('productDetails.airCutValve.title')}</span>
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
                    <span>{t('products.automobile')}<br />{t('productDetails.reedValve.title')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/products/floatingSeal-details" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-1.png`} className="card-image" alt="Floating Seal" />
                  </div>
                  <div className="card-caption">
                    <span>{language === 'id' ? 'Mesin' : 'Machinery'}<br />{t('productDetails.floatingSeal.title')}</span>
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
          <p className="contact-text">{t('productDetails.contactUs')}</p>
        </Link>
      </div>
    </div>
  );
};

export default BladderDetails;