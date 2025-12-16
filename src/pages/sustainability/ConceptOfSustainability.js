import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';
import { useLanguage } from '../../contexts/LanguageContext';

const ConceptOfSustainability = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  
  // Get translation function and current language
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
          <h1>{t('conceptOfSustainability.pageTitle')}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">{t('conceptOfSustainability.breadcrumbHome')}</Link></li>
              <li><Link to="/sustainability">{t('conceptOfSustainability.breadcrumbSustainability')}</Link></li>
              <li className="current">{t('conceptOfSustainability.breadcrumbCurrent')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Concept Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('conceptOfSustainability.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/environmental-initiatives">Environmental Initiatives</Link></li>
                  <li className="nav-item"><Link to="/sustainability/occupational-health-safety">Occupational Health & Safety</Link></li>
                  <li className="nav-item"><Link to="/sustainability/social-contribution-initiatives">Social Contribution Initiatives</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Details Section */}
      <section id="concept-details" className="sustainability-content section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2 className="content-title">{t('conceptOfSustainability.conceptTitle')}</h2>
                <div className="content-body">
                  <p>{t('conceptOfSustainability.conceptDesc1')}</p>
                  <p>{t('conceptOfSustainability.conceptDesc2')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">{t('conceptOfSustainability.visionTitle')}</h3>
                <div className="content-body">
                  <p>{t('conceptOfSustainability.visionDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">{t('conceptOfSustainability.principlesTitle')}</h3>
                <div className="content-body">
                  <div className="principles-grid">
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>{t('conceptOfSustainability.principle1Title')}</h4>
                        <p>{t('conceptOfSustainability.principle1Desc')}</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>{t('conceptOfSustainability.principle2Title')}</h4>
                        <p>{t('conceptOfSustainability.principle2Desc')}</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>{t('conceptOfSustainability.principle3Title')}</h4>
                        <p>{t('conceptOfSustainability.principle3Desc')}</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>{t('conceptOfSustainability.principle4Title')}</h4>
                        <p>{t('conceptOfSustainability.principle4Desc')}</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>{t('conceptOfSustainability.principle5Title')}</h4>
                        <p>{t('conceptOfSustainability.principle5Desc')}</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>{t('conceptOfSustainability.principle6Title')}</h4>
                        <p>{t('conceptOfSustainability.principle6Desc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">{t('conceptOfSustainability.goalsTitle')}</h3>
                <div className="content-body">
                  <p>{t('conceptOfSustainability.goalsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <div className="quote-section">
                  <blockquote className="sustainability-quote">
                    <p>"{t('conceptOfSustainability.quoteText')}"</p>
                    <cite>— {t('conceptOfSustainability.quoteAuthor')}</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="sustainability-pillars section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>{t('conceptOfSustainability.pillarsTitle')}</h2>
                <p>{t('conceptOfSustainability.pillarsSubtitle')}</p>
              </div>
              <div className="pillars-container" data-aos="fade-up" data-aos-delay="100">
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <i className="bi bi-tree"></i>
                  </div>
                  <div className="pillar-content">
                    <h3>{t('conceptOfSustainability.pillar1Title')}</h3>
                    <p>{t('conceptOfSustainability.pillar1Desc')}</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="pillar-content">
                    <h3>{t('conceptOfSustainability.pillar2Title')}</h3>
                    <p>{t('conceptOfSustainability.pillar2Desc')}</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="pillar-content">
                    <h3>{t('conceptOfSustainability.pillar3Title')}</h3>
                    <p>{t('conceptOfSustainability.pillar3Desc')}</p>
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
            <h2>{t('conceptOfSustainability.relatedTitle')}</h2>
            <p>{t('conceptOfSustainability.relatedSubtitle')}</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/sustainability/environmental-initiatives" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Environmental Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>{t('conceptOfSustainability.related1Title')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/sustainability/climate-change-disclosure" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Social Contribution Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>{t('conceptOfSustainability.related2Title')}</span>
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
                    <span>{t('conceptOfSustainability.related3Title')}</span>
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
                  <li><Link to="/">{t('conceptOfSustainability.breadcrumbHome')}</Link></li>
                  <li><Link to="/sustainability">{t('conceptOfSustainability.breadcrumbSustainability')}</Link></li>
                  <li className="current">{t('conceptOfSustainability.breadcrumbCurrent')}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptOfSustainability;