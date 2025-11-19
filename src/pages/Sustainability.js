import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';
import { useLanguage } from '../contexts/LanguageContext';

const Sustainability = () => {
  const { t } = useLanguage();
  // Initialize external libraries using custom hooks
  useAOS();

  // Load custom CSS
  React.useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = `${process.env.PUBLIC_URL}/assets/css/product-details.css`;
    document.head.appendChild(link1);
    
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = `${process.env.PUBLIC_URL}/assets/css/sustainability.css`;
    document.head.appendChild(link2);
    
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return (
    <div className="services-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>{t('sustainability.title')}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">{t('sustainability.breadcrumbHome')}</Link></li>
              <li className="current">{t('sustainability.breadcrumbSustainability')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Our Concepts of Sustainability Section */}
      <section id="sustainability-concepts" className="sustainability-concepts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('sustainability.conceptsTitle')}</h2>
          <p>{t('sustainability.conceptsSubtitle')}</p>
        </div>
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src={`${process.env.PUBLIC_URL}/assets/img/Sustainability/skateHolder.png`} alt="Sustainability" style={{ height: 'auto', maxHeight: 'none', objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h3>{t('sustainability.visionTitle')}</h3>
              <p>{t('sustainability.visionDesc1')}</p>
              <p>{t('sustainability.visionDesc2')}</p>
              <h4 className="mt-4">{t('sustainability.corePrinciples')}</h4>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>{t('sustainability.principle1')}</span></li>
                <li><i className="bi bi-check-circle"></i> <span>{t('sustainability.principle2')}</span></li>
                <li><i className="bi bi-check-circle"></i> <span>{t('sustainability.principle3')}</span></li>
                <li><i className="bi bi-check-circle"></i> <span>{t('sustainability.principle4')}</span></li>
              </ul>
              <div className="mt-4">
                <Link to="/sustainability/concept-of-sustainability" className="btn btn-primary">{t('sustainability.learnMoreConcept')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Initiatives Section */}
      <section id="esg-initiatives" className="esg-initiatives section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('sustainability.esgTitle')}</h2>
          <p>{t('sustainability.esgSubtitle')}</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="esg-card h-100">
                <div className="icon">
                  <i className="bi bi-tree"></i>
                </div>
                <h3>{t('sustainability.environmentalTitle')}</h3>
                <p>{t('sustainability.environmentalDesc')}</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.environmentalFeature1')}</span></li>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.environmentalFeature2')}</span></li>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.environmentalFeature3')}</span></li>
                </ul>
                <div className="mt-3">
                  <Link to="/sustainability/environmental-initiatives" className="btn btn-outline-primary btn-sm">{t('sustainability.learnMore')}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="esg-card h-100">
                <div className="icon">
                  <i className="bi bi-thermometer-half"></i>
                </div>
                <h3>{t('sustainability.climateTitle')}</h3>
                <p>{t('sustainability.climateDesc')}</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.climateFeature1')}</span></li>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.climateFeature2')}</span></li>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.climateFeature3')}</span></li>
                </ul>
                <div className="mt-3">
                  <Link to="/sustainability/climate-change-disclosure" className="btn btn-outline-primary btn-sm">{t('sustainability.learnMore')}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="esg-card h-100">
                <div className="icon">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <h3>{t('sustainability.healthTitle')}</h3>
                <p>{t('sustainability.healthDesc')}</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.healthFeature1')}</span></li>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.healthFeature2')}</span></li>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.healthFeature3')}</span></li>
                </ul>
                <div className="mt-3">
                  <Link to="/sustainability/occupational-health-safety" className="btn btn-outline-primary btn-sm">{t('sustainability.learnMore')}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="esg-card h-100">
                <div className="icon">
                  <i className="bi bi-share"></i>
                </div>
                <h3>{t('sustainability.socialTitle')}</h3>
                <p>{t('sustainability.socialDesc')}</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.socialFeature1')}</span></li>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.socialFeature2')}</span></li>
                  <li><i className="bi bi-check"></i><span>{t('sustainability.socialFeature3')}</span></li>
                </ul>
                <div className="mt-3">
                  <Link to="/sustainability/social-media-contribution" className="btn btn-outline-primary btn-sm">{t('sustainability.learnMore')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section id="cta" className="cta section">
        <div className="container">
          <div className="row justify-content-between" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-7">
              <h3>{t('sustainability.ctaTitle')}</h3>
              <p>{t('sustainability.ctaDesc')}</p>
            </div>
            <div className="col-lg-5 text-center">
              <Link to="/contact" className="btn btn-primary">{t('sustainability.contactUs')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;