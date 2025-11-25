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

  // Set favicon
  useEffect(() => {
    setDefaultFavicon();
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

      {/* Project Details Section */}
      <section id="project-details" className="project-details section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/floating_seal.jpg`} alt="Product Image 1" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} alt="Product Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} alt="Product Image 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>EH795 EH790 for Water Pump</h2>
                <p>
                   Capable for high-speed rotation. Mass-production by fully automated assembling lines and supplied to water pump makers worldwide. 
                   By its unitized design, EH795 supports easy installation into customer application.
                </p>
                <p>
                  These seals are suitable for high-speed rotation due to its simple and compact construction. 
                  The materials of the seal face are Eagle Industry’s proprietary carbon components and ceramics which provides high resistance to heat, wear and corrosion. 
                  These seals are manufactured by full automated assembling lines at our global production sites, and has high market share in worldwide specifically in the category of seals for automotive water pumps. 
                  These seals are also suitable for industrial pumps. EH795: The rotating and stationary components are unitized with the stamped sleeve, providing ease of installation as well as high reliability by protecting sliding surfaces.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>{t('productDetails.productInformation')}</h3>
                <ul>
                  <li><strong>{t('productDetails.category')}</strong> <span>{t('productDetails.eh795.categoryValue')}</span></li>
                  <li><strong>{t('productDetails.model')}</strong> <span>{t('productDetails.eh795.modelValue')}</span></li>
                  <li><strong>{t('productDetails.material')}</strong> <span>{t('productDetails.eh795.materialValue')}</span></li>
                  <li><strong>{t('productDetails.temperatureRange')}</strong> <span>{t('productDetails.eh795.temperatureValue')}</span></li>
                  <li><strong>{t('productDetails.maxPressure')}</strong> <span>{t('productDetails.eh795.maxPressureValue')}</span></li>
                   
                  <li><strong>{t('productDetails.applications')}</strong> <span>{t('productDetails.eh795.applicationsValue')}</span></li>
                </ul>
               
                <div className="pt-3">
                  <h3>{t('productDetails.productFeatures')}</h3>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.improvedFuelEconomy')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.reducedEmissions')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.enhancedACSystemEfficiency')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.easyMaintenance')}</span></li>
                    <li><i className="bi bi-check"></i> <span>{t('productDetails.longServiceLife')}</span></li>
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

      {/* Related Products Section */}
      <section id="related-products" className="related-products section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>{t('productDetails.relatedProducts')}</h2>
            <p>{t('productDetails.exploreSimilarProducts')}</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-content h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{t('products.lipSealAc')}</h4>
                  <p>{language === 'id' ? 'Segel bibir berkualitas tinggi untuk kompresor AC' : 'High-quality lip seals for AC compressors'}</p>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} title="Product 1" data-gallery="related-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/project-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-content h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{t('products.mechanicalSeals')}</h4>
                  <p>{language === 'id' ? 'Segel mekanis yang tahan lama untuk berbagai aplikasi' : 'Durable mechanical seals for various applications'}</p>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} title="Product 2" data-gallery="related-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/project-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="portfolio-content h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Rudder_seal.PNG`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{t('products.rudderSeal')}</h4>
                  <p>{language === 'id' ? 'Segel khusus untuk aplikasi kemudi maritim' : 'Specialized seals for marine rudder applications'}</p>
                  <a href={`${process.env.PUBLIC_URL}/assets/img/product/Rudder_seal.PNG`} title="Product 3" data-gallery="related-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/project-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;