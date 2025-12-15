import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';
import { useLanguage } from '../../contexts/LanguageContext';
import ImageSlider from '../../components/ImageSlider';

const SocialContributionInitiatives = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  const { t } = useLanguage();

  // Load custom CSS
  useEffect(() => {
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
    <div className="project-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>{t('sustainability.title')}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">{t('socialContributionInitiatives.breadcrumbHome')}</Link></li>
              <li><Link to="/sustainability">{t('socialContributionInitiatives.breadcrumbSustainability')}</Link></li>
              <li className="current">{t('socialContributionInitiatives.breadcrumbCurrent')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Social Contribution Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('socialContributionInitiatives.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">{t('socialContributionInitiatives.sustainability')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/concept-of-sustainability">{t('socialContributionInitiatives.conceptOfSustainability')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/environmental-initiatives">{t('socialContributionInitiatives.environmentalInitiatives')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/occupational-health-safety">{t('socialContributionInitiatives.occupationalHealthSafety')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Contribution Details Section */}
      <section id="social-contribution-details" className="sustainability-content section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2 className="content-title">{t('socialContributionInitiatives.socialContributionTitle')}</h2>
                <div className="content-body">
                  <p>
                    {t('socialContributionInitiatives.socialContributionDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Activities Section */}
      <section className="product-specifications section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>{t('socialContributionInitiatives.csrActivitiesTitle')}</h2>
                <p>{t('socialContributionInitiatives.csrActivitiesSubtitle')}</p>
              </div>
            </div>
          </div>
          
          <div className="row gy-4">
            {/* Qurban Activity */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <div className="csr-activity-card">
                <div className="csr-activity-header">
                  <div className="csr-activity-icon">
                    <i className="bi bi-gift"></i>
                  </div>
                  <div className="csr-activity-number">01</div>
                </div>
                <div className="csr-activity-body">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <h3 className="csr-activity-title">{t('socialContributionInitiatives.qurbanTitle')}</h3>
                      <p className="csr-activity-description">
                        {t('socialContributionInitiatives.qurbanDesc')}
                      </p>
                      <div className="csr-activity-highlights">
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.qurbanHighlight1')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.qurbanHighlight2')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.qurbanHighlight3')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.qurbanHighlight4')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ImageSlider
                        images={[
                          `${process.env.PUBLIC_URL}/assets/img/activities/qurban-1.jpeg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/qurban-2.jpg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/qurban-3.jpeg`
                        ]}
                        caption={t('socialContributionInitiatives.qurbanCaption')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ramadhan Charity Activity */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="csr-activity-card">
                <div className="csr-activity-header">
                  <div className="csr-activity-icon">
                    <i className="bi bi-heart"></i>
                  </div>
                  <div className="csr-activity-number">02</div>
                </div>
                <div className="csr-activity-body">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <h3 className="csr-activity-title">{t('socialContributionInitiatives.ramadhanTitle')}</h3>
                      <p className="csr-activity-description">
                        {t('socialContributionInitiatives.ramadhanDesc')}
                      </p>
                      <div className="csr-activity-highlights">
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.ramadhanHighlight1')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.ramadhanHighlight2')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.ramadhanHighlight3')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.ramadhanHighlight4')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ImageSlider
                        images={[
                          `${process.env.PUBLIC_URL}/assets/img/activities/santunan-1.jpg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/santunan-2.jpg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/santunan-3.jpg`
                        ]}
                        caption={t('socialContributionInitiatives.ramadhanCaption')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Flood Victim Support Activity */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="csr-activity-card">
                <div className="csr-activity-header">
                  <div className="csr-activity-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="csr-activity-number">03</div>
                </div>
                <div className="csr-activity-body">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <h3 className="csr-activity-title">{t('socialContributionInitiatives.floodVictimTitle')}</h3>
                      <p className="csr-activity-description">
                        {t('socialContributionInitiatives.floodVictimDesc')}
                      </p>
                      <div className="csr-activity-highlights">
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.floodVictimHighlight1')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.floodVictimHighlight2')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.floodVictimHighlight3')}</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>{t('socialContributionInitiatives.floodVictimHighlight4')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ImageSlider
                        images={[
                          `${process.env.PUBLIC_URL}/assets/img/activities/banjir-1.jpg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/banjir-2.jpg`
                        ]}
                        caption={t('socialContributionInitiatives.floodVictimCaption')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sustainability Topics */}
      <section id="related-topics" className="related-products section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>{t('socialContributionInitiatives.relatedTopicsTitle')}</h2>
            <p>{t('socialContributionInitiatives.relatedTopicsSubtitle')}</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/sustainability/concept-of-sustainability" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Concept of Sustainability" />
                  </div>
                  <div className="card-caption">
                    <span>{t('socialContributionInitiatives.conceptOfSustainabilityCard')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/sustainability/environmental-initiatives" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Environmental Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>{t('socialContributionInitiatives.environmentalInitiativesCard')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/sustainability/occupational-health-safety" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Occupational Health & Safety" />
                  </div>
                  <div className="card-caption">
                    <span>{t('socialContributionInitiatives.occupationalHealthSafetyCard')}</span>
                  </div>
                </Link>
              </div>
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
                  <li><Link to="/">{t('socialContributionInitiatives.breadcrumbHome')}</Link></li>
                  <li><Link to="/sustainability">{t('socialContributionInitiatives.breadcrumbSustainability')}</Link></li>
                  <li className="current">{t('socialContributionInitiatives.breadcrumbCurrent')}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialContributionInitiatives;