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
              <img src={`${process.env.PUBLIC_URL}/assets/img/management/mrTsuru.jpg`} alt="Management" />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center management-message" data-aos="fade-up" data-aos-delay="200">
              <h3 className='text-start'>Management Message</h3>
              <p>Our company was originally formed as the mechanical seal division of NOK Corporation
              The division became independent and incorporated under the name of Nippon Sealol Co., Ltd. in 1964, the year of the Tokyo Olympic Games, and the company name was changed to the current Eagle Industry Co., Ltd. (EKK) in 1978.

              Ever since embarking on this long journey, for a half century EKK has grown as a sealing solution provider. We have established ourselves as a comprehensive parts manufacturer in pursuit of mobility on the land, seas and in the skies, as well as a mechanical seal manufacturer offering EagleBurgmann brand products in alliance with Burgmann Industries, a German mechanical seal maker.

              EKK's products are used in a vast spectrum of mobility systems on the land, seas and in the skies. They include automobiles, motorcycles, construction machinery, and other so-called land-based "moving vehicles," tankers, container ships, bulk carriers and other ocean-going ships, as well as ferries, coastal ships, and fishing boats, rockets, jet and propeller aircraft, and helicopters.
              EagleBurgmann products are also used in pumps, compressors, blowers, and agitators mounted in production facilities at oil refineries, and in the petrochemical, steel, pulp and paper, food, pharmaceutical, electric power, and many other industries.

              No matter where they are used, one common objective of all our products is to prevent liquids, gases and other fluids from leaking from rotating machines during operation, and for this reason we can proudly say that together with our customers we have contributed to environmental protection and energy conservation. We have also developed an integrated production system that covers the entire process from the development of materials right through to production.
              This system is built around our superior seal, power transmission, valve and hydraulic technologies, as well as our special processing and welding techniques that support them. With it, we are meeting customer requirements, which are becoming increasingly demanding as rotating machines operate at higher speeds, temperature, and pressure.

              We will continue to hone our technological prowess to meet the increasingly specialized and complex needs of our customers.</p>
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
              <p>{t('company.managingDirectorDesc1')}
              
              {t('company.managingDirectorDesc2')}
              
              {t('company.managingDirectorDesc3')}
              
              {t('company.managingDirectorDesc4')}
              
              {t('company.managingDirectorDesc5')}</p>
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
              <h3>Origin and Establishment</h3>
              <p>PT Eagle Industry Indonesia was established in 1990 as a branch of Eagle Industry Co., Ltd., a Japanese company originating from the mechanical seal division of NOK Corporation. This division became independent in 1964 under the name Nippon Sealol Co., Ltd., and changed its name to Eagle Industry Co., Ltd. in 1978.</p>
              <p>In Indonesia, we began operations at EJIP Industrial Park, Cikarang, focusing on the production of mechanical seals, rubber bellows, and precision components for the automotive, aerospace, and industrial equipment industries.</p>
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
                    <td>{t('company.title')}</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.established')}</th>
                    <td>1990</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.representative')}</th>
                    <td>Mr. Mitshuhiro Kishida: President Director</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.headquarters')}</th>
                    <td>EJIP Industrial Park, Plot 8G, Sukaresmi, Cikarang Selatan, Kabupaten Bekasi, Jawa Barat 17550<br/>Tel: (021) 8970178<br/>Email: eid.sales@ekkeagle.com</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.paidInCapital')}</th>
                    <td>K USD 17.050</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.numberOfEmployees')}</th>
                    <td>196 Person ( Update on Nov 2025 ) 2 Person ( Expatriate )</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('company.businessOutline')}</th>
                    <td>Assembly of Air Induction System for Motorcycle and Manufacturing
O Ring, Floating Seal for Construction Machinery Industry & supply Accumulator</td>
                  </tr>
                  {/* <tr>
                    <th scope="row">{t('company.publicAuditingFirm')}</th>
                    <td>PRICEWATERHOUSECOOPERS Indonesia</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 features-image" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eid1.jpg`} alt="Company Overview" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;