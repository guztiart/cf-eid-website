import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, usePureCounter, useGLightbox } from '../hooks/useExternalLibs';
import { useLanguage } from '../contexts/LanguageContext';

const Company = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  usePureCounter();
  useGLightbox();
  
  // Get translation function
  const { t } = useLanguage();
  
  // Additional initialization for PureCounter to ensure it works properly
  useEffect(() => {
    // Reinitialize PureCounter when component mounts
    const timer = setTimeout(() => {
      if (window.PureCounter) {
        // Initialize new instance
        new window.PureCounter();
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>{t('company.pageTitle')}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">{t('company.breadcrumbHome')}</Link></li>
              <li className="current">{t('company.breadcrumbCompany')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/building/building-ekk.png`} alt="About Eagle Industry Indonesia" />
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h2 className="inner-title">{t('company.title')}</h2>
              <div className="our-story">
                <h4>{t('company.establishedSince')}</h4>
                <h3>{t('company.ourHistory')}</h3>
                <p>{t('company.historyDesc1')}</p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> <span>{t('company.qualityFeature')}</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>{t('company.innovationFeature')}</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>{t('company.sustainabilityFeature')}</span></li>
                </ul>
                <p>{t('company.historyDesc2')}</p>
                <div className="watch-video d-flex align-items-center position-relative">
                  <i className="bi bi-play-circle"></i>
                  <a href="https://youtu.be/Ep1aIVjRWLU?si=UTIcLpgOteLg_hhe" className="glightbox stretched-link">{t('company.watchVideo')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section id="stats-counter" className="stats-counter section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('company.ourStatistics')}</h2>
          <p>{t('company.statisticsDesc')}</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="130" data-purecounter-duration="2" className="purecounter"></span>
                  <p>{t('company.globalCustomers')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="2" className="purecounter"></span>
                  <p>{t('company.millionProducts')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
                  <p>{t('company.yearsExcellence')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="196" data-purecounter-duration="2" className="purecounter"></span>
                  <p>{t('company.dedicatedEmployees')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alt Services Section */}
      <section id="alt-services" className="alt-services section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src={`${process.env.PUBLIC_URL}/assets/img/management/mr-tetsuji-tsuru.png`} alt="Management" />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center management-message" data-aos="fade-up" data-aos-delay="200">
              <h3 className='text-start'>{t('company.managementMessageTitle')}</h3>
              <p>{t('company.managementMessageText1')}</p>
              <p>{t('company.managementMessageText2')}</p>
              <p>{t('company.managementMessageText3')}</p>
              <p>{t('company.managementMessageText4')}</p>
              <p>{t('company.managementMessageText5')}</p>
              <p>{t('company.managementMessageText6')}</p>
              <p>{t('company.managementMessageText7')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alt Services 2 Section */}
      <section id="alt-services-2" className="alt-services-2 section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1 management-message" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-start">{t('company.managingDirectorMessage')}</h3>
              <p>{t('company.managingDirectorText1')}</p>
              <p>{t('company.managingDirectorText2')}</p>
              <p>{t('company.managingDirectorText3')}</p>
              <div className="row">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4 className="text-start">{t('company.qualityExcellence')}</h4>
                    <p>{t('company.qualityExcellenceDesc')}</p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4 className="text-start">{t('company.technicalInnovation')}</h4>
                    <p>{t('company.technicalInnovationDesc')}</p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4 className="text-start">{t('company.customerFocus')}</h4>
                    <p>{t('company.customerFocusDesc')}</p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4 className="text-start">{t('company.sustainableGrowth')}</h4>
                    <p>{t('company.sustainableGrowthDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/management/mrKishida1.jpg`} alt="Managing Director" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="history section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('company.ourHistoryTitle')}</h2>
          <p>{t('company.historyTitleDesc')}</p>
        </div>
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <h3>{t('company.originEstablishmentTitle')}</h3>
              <p>{t('company.originEstablishmentText1')}</p>
              <p>{t('company.originEstablishmentText2')}</p>
            </div>
            <div className="features-image col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eidOld.webp`} alt="Origin and Establishment" />
            </div>
          </div>
          <div className="row justify-content-around gy-4 mt-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h3>{t('company.growthInnovation')}</h3>
              <p>{t('company.growthDesc1')}</p>
              <p>{t('company.growthDesc2')}</p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>{t('company.factoryExpansion')}</span></li>
                <li><i className="bi bi-check-circle"></i> <span>{t('company.qualityStandards')}</span></li>
                <li><i className="bi bi-check-circle"></i> <span>{t('company.envProtection')}</span></li>
              </ul>
            </div>
            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eid2.jpg`} alt="Growth and Innovation" />
            </div>
          </div>
          <div className="row justify-content-around gy-4 mt-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <h3>{t('company.presentFuture')}</h3>
              <p>{t('company.presentDesc1')}</p>
              <p>{t('company.presentDesc2')}</p>
              <div className="watch-video d-flex align-items-center position-relative">
                <i className="bi bi-play-circle"></i>
                <a href="https://youtu.be/FW3e8x1CNEo?si=B8lB0Svd3DXW3A11" className="glightbox stretched-link">{t('company.watchHistoryVideo')}</a>
              </div>
            </div>
            <div className="features-image col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eid1.jpg`} alt="Present and Future" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="company-overview" className="company-overview section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('company.companyOverview')}</h2>
          <p>{t('company.companyOverviewDesc')}</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">{t('company.name')}</th>
                    <td>{t('company.companyOverviewName')}</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.established')}</th>
                    <td>{t('company.companyOverviewEstablished')}</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.representative')}</th>
                    <td>{t('company.companyOverviewRepresentative')}</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.headquarters')}</th>
                    <td>{t('company.companyOverviewHeadquarters')}</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.paidInCapital')}</th>
                    <td>{t('company.companyOverviewPaidInCapital')}</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.numberOfEmployees')}</th>
                    <td>{t('company.companyOverviewNumberOfEmployees')}</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.businessOutline')}</th>
                    <td>{t('company.companyOverviewBusinessOutline')}</td>
                  </tr>
                  {/* <tr>
                    <th scope="row">{t('company.publicAuditingFirm')}</th>
                    <td>PRICEWATERHOUSECOOPERS Indonesia</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 features-image" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/building/building-ekk.png`} alt="Company Overview" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;