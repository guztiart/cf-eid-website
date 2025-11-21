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
              <li className="current">{t('productDetails.floatingSeal.title')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('productDetails.floatingSeal.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=machinery">Machinery</Link></li>
                  <li className="nav-item"><Link to="/products?tag=undercarriage">Undercarriage</Link></li>
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
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/floating_seal.jpg`} alt="Floating Seal ES100 & ES764" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-1.jpg`} alt="Product Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-2.png`} alt="Product Image 3" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-3.png`} alt="Product Image 4" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-4.png`} alt="Product Image 5" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('productDetails.floatingSeal.title')}</h2>
                <p>
                  {t('productDetails.floatingSeal.description1')}
                </p>
                <p>
                  {t('productDetails.floatingSeal.description2')}
                </p>
                <p>
                  {t('productDetails.floatingSeal.description3')}
                </p>
                <p>
                  {t('productDetails.floatingSeal.description4')}
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>{t('productDetails.productInformation')}</h3>
                <ul>
                  <li><strong>{t('productDetails.category')}</strong> <span>{t('productDetails.floatingSeal.categoryValue')}</span></li>
                  <li><strong>{t('productDetails.sealedFluid')}</strong> <span>{t('productDetails.floatingSeal.sealedFluidValue')}</span></li>
                  <li><strong>{t('productDetails.temperature')}</strong> <span>{t('productDetails.floatingSeal.temperatureValue')}</span></li>
                  <li><strong>{t('productDetails.maximumCircumferentialVelocity')}</strong> <span>{t('productDetails.floatingSeal.maximumCircumferentialVelocityValue')}</span></li>
                  <li><strong>{t('productDetails.pressure')}</strong> <span>{t('productDetails.floatingSeal.pressureValue')}</span></li>
                  <li><strong>{t('productDetails.shaftDiameter')}</strong> <span>{t('productDetails.floatingSeal.shaftDiameterValue')}</span></li>
                  <li><strong>{t('productDetails.material')}</strong> <span>{t('productDetails.floatingSeal.materialValue')}</span></li>
                  <li><strong>{t('productDetails.applications')}</strong> <span>{t('productDetails.floatingSeal.applicationsValue')}</span></li>
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
                      <th style={{ width: '30%' }}>{t('productDetails.sealedFluid')}</th>
                      <td>
                        {(() => {
                          const sealedFluidText = t('productDetails.floatingSeal.sealedFluidValue');
                          if (sealedFluidText.includes('Bagian dalam:')) {
                            const parts = sealedFluidText.split(', Bagian luar: ');
                            return (
                              <>
                                <p>{parts[0].replace('Bagian dalam: ', '')}</p>
                                <p>{parts[1]}</p>
                              </>
                            );
                          }
                          return <p>{sealedFluidText}</p>;
                        })()}
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.temperature')}</th>
                      <td>
                        {(() => {
                          const tempText = t('productDetails.floatingSeal.temperatureValue');
                          if (tempText.includes('NBR:')) {
                            const nbrPart = tempText.split('NBR: ')[1].split(', ')[0];
                            const hnbrPart = tempText.split('H-NBR: ')[1].split(', ')[0];
                            const fkmPart = tempText.split('FKM: ')[1];
                            return (
                              <>
                                <p>NBR: {nbrPart}</p>
                                <p>H-NBR: {hnbrPart}</p>
                                <p>FKM: {fkmPart}</p>
                              </>
                            );
                          }
                          return <p>{tempText}</p>;
                        })()}
                      </td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.maximumCircumferentialVelocity')}</th>
                      <td>{t('productDetails.floatingSeal.maximumCircumferentialVelocityValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.pressure')}</th>
                      <td>{t('productDetails.floatingSeal.pressureValue')}</td>
                    </tr>
                    <tr>
                      <th>{t('productDetails.shaftDiameter')}</th>
                      <td>{t('productDetails.floatingSeal.shaftDiameterValue')}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">{t('productDetails.floatingSeal.noteText')}</p>
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
                          <span>for A/C compressor<br />Type A Mechanical seal</span>
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
                          <span>for Water Pump<br />EH795/EH790</span>
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
                          <span>for Variable Displacement A/C Compressor<br />Control Valve</span>
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
                  <li className="current">{t('productDetails.floatingSeal.title')}</li>
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
          <p className="contact-text">{t('header.inquiryForm')}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;