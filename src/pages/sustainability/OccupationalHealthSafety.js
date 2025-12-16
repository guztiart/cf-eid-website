import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';
import ImageModal from '../../components/ImageModal';
import { useLanguage } from '../../contexts/LanguageContext';

const OccupationalHealthSafety = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  
  // Get translation function
  const { t } = useLanguage();
  
  // State for image modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Health promotion images array - organized by activity
  const healthPromotionImages = {
    gym: [
      `${process.env.PUBLIC_URL}/assets/img/activities/gym-1.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/activities/gym-2.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/activities/gym-3.jpg`,
      // Add more gym images here if available
    ],
    aerobic: [
      `${process.env.PUBLIC_URL}/assets/img/activities/yoga-1.jpeg`,
      `${process.env.PUBLIC_URL}/assets/img/activities/yoga-2.jpeg`,
      // Add more aerobic images here if available
    ],
    badminton: [
      `${process.env.PUBLIC_URL}/assets/img/activities/badminton.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/activities/badminton1.jpg`,
      // Add more badminton images here if available
    ],
    tableTennis: [
      `${process.env.PUBLIC_URL}/assets/img/activities/table-tennis-1.jpg`,
      // Add more table tennis images here if available
    ],
    volleyball: [
      `${process.env.PUBLIC_URL}/assets/img/activities/volleyball-1.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/activities/volleyball-2.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/activities/volleyball-3.jpg`,
      // Add more volleyball images here if available
    ],
    soccer: [
      `${process.env.PUBLIC_URL}/assets/img/activities/mini-soccer-1.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/activities/mini-soccer-2.jpg`,
      // Add more soccer images here if available
    ]
  };
  
  // Function to open image modal
  const openImageModal = (images, index = 0) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };
  
  // Function to close image modal
  const closeImageModal = () => {
    setIsModalOpen(false);
  };

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
          <h1>{t('occupationalHealthSafety.pageTitle')}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">{t('occupationalHealthSafety.breadcrumbHome')}</Link></li>
              <li><Link to="/sustainability">{t('occupationalHealthSafety.breadcrumbSustainability')}</Link></li>
              <li className="current">{t('occupationalHealthSafety.breadcrumbCurrent')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Occupational Health and Safety Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('occupationalHealthSafety.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">{t('occupationalHealthSafety.navSustainability')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/concept-of-sustainability">{t('occupationalHealthSafety.navConceptOfSustainability')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/environmental-initiatives">{t('occupationalHealthSafety.navEnvironmentalInitiatives')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/social-contribution-initiatives">{t('occupationalHealthSafety.navSocialContributionInitiatives')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occupational Health and Safety Details Section */}
      <section id="ohs-details" className="project-details section">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>{t('occupationalHealthSafety.mainTitle')}</h2>
                <p>
                  {t('occupationalHealthSafety.mainDescription')}
                </p>
                
                <h3 className="mt-4">{t('occupationalHealthSafety.healthSafetyManagementTitle')}</h3>
                <p>
                  {t('occupationalHealthSafety.healthSafetyManagementDesc')}
                </p>
                
                <h3 className="mt-4">{t('occupationalHealthSafety.ohsPoliciesTitle')}</h3>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-shield-check"></i>
                  <h4>{t('occupationalHealthSafety.basicSafetyPrincipleTitle')}</h4>
                  <p>{t('occupationalHealthSafety.basicSafetyPrincipleDesc')}</p>
                </div>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-heart-pulse"></i>
                  <h4>{t('occupationalHealthSafety.basicConceptTitle')}</h4>
                  <p>{t('occupationalHealthSafety.basicConceptDesc')}</p>
                </div>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-book"></i>
                  <h4>{t('occupationalHealthSafety.activityPolicyTitle')}</h4>
                  <div className="activity-policy-list">
                    <div className="policy-item">
                      <div className="policy-number">1</div>
                      <div className="policy-content">
                        <p>{t('occupationalHealthSafety.activityPolicy1')}</p>
                      </div>
                    </div>
                    <div className="policy-item">
                      <div className="policy-number">2</div>
                      <div className="policy-content">
                        <p>{t('occupationalHealthSafety.activityPolicy2')}</p>
                      </div>
                    </div>
                    <div className="policy-item">
                      <div className="policy-number">3</div>
                      <div className="policy-content">
                        <p>{t('occupationalHealthSafety.activityPolicy3')}</p>
                      </div>
                    </div>
                    <div className="policy-item">
                      <div className="policy-number">4</div>
                      <div className="policy-content">
                        <p>{t('occupationalHealthSafety.activityPolicy4')}</p>
                      </div>
                    </div>
                    <div className="policy-item">
                      <div className="policy-number">5</div>
                      <div className="policy-content">
                        <p>{t('occupationalHealthSafety.activityPolicy5')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>{t('occupationalHealthSafety.ohsPerformanceTitle')}</h3>
                <ul>
                  <li><strong>{t('occupationalHealthSafety.safetyCertification')}</strong> <span>ISO 45001:2018</span></li>
                  <li><strong>{t('occupationalHealthSafety.ltiRate')}</strong> <span>Zero (Target)</span></li>
                  <li><strong>{t('occupationalHealthSafety.safetyTraining')}</strong> <span>100% Coverage</span></li>
                  <li><strong>{t('occupationalHealthSafety.healthCheckups')}</strong> <span>Annual for All</span></li>
                  <li><strong>{t('occupationalHealthSafety.safetyInspections')}</strong> <span>Monthly</span></li>
                  <li><strong>{t('occupationalHealthSafety.emergencyDrills')}</strong> <span>Quarterly</span></li>
                </ul>
                
                <div className="pt-3">
                  <Link to="/sustainability" className="btn-visit">{t('occupationalHealthSafety.backToSustainability')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OHS Performance Metrics */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>{t('occupationalHealthSafety.performanceTitle')}</h2>
                <p>{t('occupationalHealthSafety.performanceSubtitle')}</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>{t('occupationalHealthSafety.performanceIndicator')}</th>
                      <th>{t('occupationalHealthSafety.target')}</th>
                      <th>{t('occupationalHealthSafety.currentPerformance')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('occupationalHealthSafety.ltiRateLabel')}</td>
                      <td>Zero</td>
                      <td>Zero for 3 consecutive years</td>
                    </tr>
                    <tr>
                      <td>{t('occupationalHealthSafety.totalRecordableInjuryRate')}</td>
                      <td>Below 0.5</td>
                      <td>0.2 achieved in 2023</td>
                    </tr>
                    <tr>
                      <td>{t('occupationalHealthSafety.safetyTrainingCompletion')}</td>
                      <td>100% of employees</td>
                      <td>100% completion rate</td>
                    </tr>
                    <tr>
                      <td>{t('occupationalHealthSafety.hazardIdentification')}</td>
                      <td>100% assessment coverage</td>
                      <td>98% coverage to date</td>
                    </tr>
                    <tr>
                      <td>{t('occupationalHealthSafety.emergencyResponseTime')}</td>
                      <td>Less than 5 minutes</td>
                      <td>3.5 minutes average</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">{t('occupationalHealthSafety.performanceNote')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Activities */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>{t('occupationalHealthSafety.safetyActivitiesTitle')}</h2>
                <p>{t('occupationalHealthSafety.safetyActivitiesSubtitle')}</p>
              </div>
              
              {/* Safety Activities Overview Image */}
              <div className="row mb-4" data-aos="fade-up" data-aos-delay="50">
                <div className="col-12">
                  <div className="activity-images">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/activities/training.jpg`}
                      className="img-fluid rounded activity-img"
                      alt="Safety Training Overview"
                      style={{
                        maxHeight: '400px',
                        width: '400px',
                        height: '400px',
                        objectFit: 'cover',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                    <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.safetyTrainingOverview')}</p>
                  </div>
                </div>
              </div>
              
              {/* Training Activity */}
              <div className="activity-item mb-5" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="activity-content">
                      <h3 className="activity-title"><i className="bi bi-mortarboard text-primary me-2"></i>{t('occupationalHealthSafety.trainingTitle')}</h3>
                      <p className="activity-description">
                        {t('occupationalHealthSafety.trainingDesc')}
                      </p>
                      <ul className="activity-highlights">
                        <li>{t('occupationalHealthSafety.trainingHighlight1')}</li>
                        <li>{t('occupationalHealthSafety.trainingHighlight2')}</li>
                        <li>{t('occupationalHealthSafety.trainingHighlight3')}</li>
                        <li>{t('occupationalHealthSafety.trainingHighlight4')}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/b3-1.jpg`} className="img-fluid rounded activity-img" alt="B3 Training" />
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.b3TrainingSession')}</p>
                        </div>
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img//activities/b3-2.jpg`} className="img-fluid rounded activity-img" alt="Hazard Identification Training" />
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.hazardIdentificationWorkshop')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Safety Patrol Activity */}
              <div className="activity-item mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="row align-items-center">
                  <div className="col-lg-6 order-lg-2">
                    <div className="activity-content">
                      <h3 className="activity-title"><i className="bi bi-shield-exclamation text-warning me-2"></i>{t('occupationalHealthSafety.safetyPatrolTitle')}</h3>
                      <p className="activity-description">
                        {t('occupationalHealthSafety.safetyPatrolDesc')}
                      </p>
                      <ul className="activity-highlights">
                        <li>{t('occupationalHealthSafety.safetyPatrolHighlight1')}</li>
                        <li>{t('occupationalHealthSafety.safetyPatrolHighlight2')}</li>
                        <li>{t('occupationalHealthSafety.safetyPatrolHighlight3')}</li>
                        <li>{t('occupationalHealthSafety.safetyPatrolHighlight4')}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/safety-patrol-3.jpg`} className="img-fluid rounded activity-img" alt="Safety Patrol" />
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.monthlySafetyPatrol')}</p>
                        </div>
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/safety-patrol-2.jpg`} className="img-fluid rounded activity-img" alt="5S Implementation" />
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.fiveSImplementationCheck')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emergency Plan Activity */}
              <div className="activity-item mb-5" data-aos="fade-up" data-aos-delay="300">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="activity-content">
                      <h3 className="activity-title"><i className="bi bi-exclamation-triangle text-danger me-2"></i>{t('occupationalHealthSafety.emergencyPlanTitle')}</h3>
                      <p className="activity-description">
                        {t('occupationalHealthSafety.emergencyPlanDesc')}
                      </p>
                      <ul className="activity-highlights">
                        <li>{t('occupationalHealthSafety.emergencyPlanHighlight1')}</li>
                        <li>{t('occupationalHealthSafety.emergencyPlanHighlight2')}</li>
                        <li>{t('occupationalHealthSafety.emergencyPlanHighlight3')}</li>
                        <li>{t('occupationalHealthSafety.emergencyPlanHighlight4')}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/apar-2.jpg`} className="img-fluid rounded activity-img" alt="APAR Training" />
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.aparTrainingSession')}</p>
                        </div>
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/erp-1.jpg`} className="img-fluid rounded activity-img" alt="Evacuation Simulation" />
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.evacuationDrill')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Safety Initiatives */}
      <section className="product-specifications section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>{t('occupationalHealthSafety.trafficSafetyTitle')}</h2>
                <p>{t('occupationalHealthSafety.trafficSafetySubtitle')}</p>
              </div>
              
              <div className="activity-item" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="activity-content">
                      <h3 className="activity-title"><i className="bi bi-bicycle text-success me-2"></i>{t('occupationalHealthSafety.safetyRidingTitle')}</h3>
                      <p className="activity-description">
                        {t('occupationalHealthSafety.safetyRidingDesc')}
                      </p>
                      <ul className="activity-highlights">
                        <li>{t('occupationalHealthSafety.safetyRidingHighlight1')}</li>
                        <li>{t('occupationalHealthSafety.safetyRidingHighlight2')}</li>
                        <li>{t('occupationalHealthSafety.safetyRidingHighlight3')}</li>
                        <li>{t('occupationalHealthSafety.safetyRidingHighlight4')}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/safetyRiding-2.jpg`} className="img-fluid rounded activity-img" alt="Safety Riding Training" />
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.safetyRidingTraining')}</p>
                        </div>
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/safetyRiding-1.jpg`} className="img-fluid rounded activity-img" alt="Vehicle Inspection" />
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.monthlyVehicleCheck')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Promotion */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>{t('occupationalHealthSafety.healthPromotionTitle')}</h2>
                <p>{t('occupationalHealthSafety.healthPromotionSubtitle')}</p>
              </div>
              
              <div className="activity-item" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="activity-content">
                      <h3 className="activity-title"><i className="bi bi-heart-pulse text-info me-2"></i>{t('occupationalHealthSafety.employeeWellnessTitle')}</h3>
                      <p className="activity-description">
                        {t('occupationalHealthSafety.employeeWellnessDesc')}
                      </p>
                      <ul className="activity-highlights">
                        <li>{t('occupationalHealthSafety.wellnessHighlight1')}</li>
                        <li>{t('occupationalHealthSafety.wellnessHighlight2')}</li>
                        <li>{t('occupationalHealthSafety.wellnessHighlight3')}</li>
                        <li>{t('occupationalHealthSafety.wellnessHighlight4')}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-md-4 col-6">
                          <div
                            className="image-container clickable-image"
                            onClick={() => openImageModal(healthPromotionImages.gym, 0)}
                            style={{ cursor: 'pointer' }}
                          >
                            <img src={`${process.env.PUBLIC_URL}/assets/img/activities/gym-2.jpg`} className="img-fluid rounded activity-img" alt="Gym" />
                            <div className="image-overlay-icon">
                              <i className="bi bi-zoom-in"></i>
                            </div>
                          </div>
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.gym')} {healthPromotionImages.gym.length > 1 ? `(${healthPromotionImages.gym.length} ${t('occupationalHealthSafety.photos')})` : ''}</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <div
                            className="image-container clickable-image"
                            onClick={() => openImageModal(healthPromotionImages.aerobic, 0)}
                            style={{ cursor: 'pointer' }}
                          >
                            <img src={`${process.env.PUBLIC_URL}/assets/img/activities/yoga-1.jpeg`} className="img-fluid rounded activity-img" alt="Aerobic" />
                            <div className="image-overlay-icon">
                              <i className="bi bi-zoom-in"></i>
                            </div>
                          </div>
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.aerobic')} {healthPromotionImages.aerobic.length > 1 ? `(${healthPromotionImages.aerobic.length} ${t('occupationalHealthSafety.photos')})` : ''}</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <div
                            className="image-container clickable-image"
                            onClick={() => openImageModal(healthPromotionImages.badminton, 0)}
                            style={{ cursor: 'pointer' }}
                          >
                            <img src={`${process.env.PUBLIC_URL}/assets/img/activities/badminton.jpg`} className="img-fluid rounded activity-img" alt="Badminton" />
                            <div className="image-overlay-icon">
                              <i className="bi bi-zoom-in"></i>
                            </div>
                          </div>
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.badminton')} {healthPromotionImages.badminton.length > 1 ? `(${healthPromotionImages.badminton.length} ${t('occupationalHealthSafety.photos')})` : ''}</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <div
                            className="image-container clickable-image"
                            onClick={() => openImageModal(healthPromotionImages.tableTennis, 0)}
                            style={{ cursor: 'pointer' }}
                          >
                            <img src={`${process.env.PUBLIC_URL}/assets/img/activities/table-tennis-1.jpg`} className="img-fluid rounded activity-img" alt="Table Tennis" />
                            <div className="image-overlay-icon">
                              <i className="bi bi-zoom-in"></i>
                            </div>
                          </div>
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.tableTennis')} {healthPromotionImages.tableTennis.length > 1 ? `(${healthPromotionImages.tableTennis.length} ${t('occupationalHealthSafety.photos')})` : ''}</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <div
                            className="image-container clickable-image"
                            onClick={() => openImageModal(healthPromotionImages.volleyball, 0)}
                            style={{ cursor: 'pointer' }}
                          >
                            <img src={`${process.env.PUBLIC_URL}/assets/img/activities/volleyball-1.jpg`} className="img-fluid rounded activity-img" alt="Volleyball" />
                            <div className="image-overlay-icon">
                              <i className="bi bi-zoom-in"></i>
                            </div>
                          </div>
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.volleyball')} {healthPromotionImages.volleyball.length > 1 ? `(${healthPromotionImages.volleyball.length} ${t('occupationalHealthSafety.photos')})` : ''}</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <div
                            className="image-container clickable-image"
                            onClick={() => openImageModal(healthPromotionImages.soccer, 0)}
                            style={{ cursor: 'pointer' }}
                          >
                            <img src={`${process.env.PUBLIC_URL}/assets/img/activities/mini-soccer-1.jpg`} className="img-fluid rounded activity-img" alt="Soccer" />
                            <div className="image-overlay-icon">
                              <i className="bi bi-zoom-in"></i>
                            </div>
                          </div>
                          <p className="img-caption text-center mt-2">{t('occupationalHealthSafety.soccer')} {healthPromotionImages.soccer.length > 1 ? `(${healthPromotionImages.soccer.length} ${t('occupationalHealthSafety.photos')})` : ''}</p>
                        </div>
                      </div>
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
            <h2>{t('occupationalHealthSafety.relatedTopicsTitle')}</h2>
            <p>{t('occupationalHealthSafety.relatedTopicsSubtitle')}</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/sustainability/concept-of-sustainability" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Concept of Sustainability" />
                  </div>
                  <div className="card-caption">
                    <span>{t('occupationalHealthSafety.conceptOfSustainability')}</span>
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
                    <span>{t('occupationalHealthSafety.environmentalInitiatives')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/sustainability/social-contribution-initiatives" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Social Contribution Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>{t('occupationalHealthSafety.socialContributionInitiatives')}</span>
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
                  <li><Link to="/">{t('occupationalHealthSafety.breadcrumbHome')}</Link></li>
                  <li><Link to="/sustainability">{t('occupationalHealthSafety.breadcrumbSustainability')}</Link></li>
                  <li className="current">{t('occupationalHealthSafety.breadcrumbCurrent')}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        images={currentImages}
        isOpen={isModalOpen}
        onClose={closeImageModal}
        initialIndex={currentImageIndex}
      />
    </div>
  );
};

export default OccupationalHealthSafety;