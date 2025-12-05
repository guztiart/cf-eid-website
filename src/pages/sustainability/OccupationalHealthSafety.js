import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const OccupationalHealthSafety = () => {
  // Initialize external libraries using custom hooks
  useAOS();

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
          <h1>Sustainability</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li className="current">Occupational Health and Safety Initiatives</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Occupational Health and Safety Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Occupational Health and Safety Initiatives</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/concept-of-sustainability">Concept of Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/environmental-initiatives">Environmental Initiatives</Link></li>
                  <li className="nav-item"><Link to="/sustainability/climate-change-disclosure">Climate Change Disclosure</Link></li>
                  <li className="nav-item"><Link to="/sustainability/social-media-contribution">Social Media Contribution</Link></li>
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
                <h2>Occupational Health and Safety at Eagle Industry Indonesia</h2>
                <p>
                  The EKK Group always strives to build a work environment that supports the physical and mental well-being of employees.
                  The principle of Safety underlies that safety is not only a pillar of the company, but also of individuals within the Group.
                </p>
                
                <h3 className="mt-4">Our Health and Safety Management</h3>
                <p>
                  Occupational safety is our top priority. The EKK Group manages OHS through a structured organization led directly by top management.
                  By implementing the international standard ISO 45001:2018 (Occupational Health and Safety), we ensure that all operational activities
                  run safely, healthily, and sustainably.
                </p>
                
                <h3 className="mt-4">EKK Occupational Health and Safety Policies</h3>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-shield-check"></i>
                  <h4>Basic Group Safety Principle</h4>
                  <p>Safety is not only fundamental for management that respects human dignity, but also the personal desire and mission of all Group employees.</p>
                </div>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-heart-pulse"></i>
                  <h4>Basic Concept</h4>
                  <p>Based on the Group's Basic Safety Principle, the EKK Group develops human resources who are healthy physically and mentally.
                  At the same time, improving the OHS management system and involving relevant parties to create a comfortable, safe, and motivating work environment.</p>
                </div>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-book"></i>
                  <h4>Activity Policy</h4>
                  <div className="activity-policy-list">
                    <div className="policy-item">
                      <div className="policy-number">1</div>
                      <div className="policy-content">
                        <p>Properly identify hazards related to business activities, assess risks, and control hazards by considering the hierarchy of controls to reduce risks with the participation and cooperation of all employees.</p>
                      </div>
                    </div>
                    <div className="policy-item">
                      <div className="policy-number">2</div>
                      <div className="policy-content">
                        <p>Establish occupational health and safety targets and pursue better performance through continuous improvement.</p>
                      </div>
                    </div>
                    <div className="policy-item">
                      <div className="policy-number">3</div>
                      <div className="policy-content">
                        <p>Comply with applicable laws and regulations as well as other requirements.</p>
                      </div>
                    </div>
                    <div className="policy-item">
                      <div className="policy-number">4</div>
                      <div className="policy-content">
                        <p>Value active discussions in the workplace, recognizing that good communication is an integral part of occupational health and safety.</p>
                      </div>
                    </div>
                    <div className="policy-item">
                      <div className="policy-number">5</div>
                      <div className="policy-content">
                        <p>Provide necessary education and training to ensure occupational health and safety while increasing employee awareness of the importance of health and safety.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="testimonial-item mt-4">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Safety is not only fundamental for management that respects human dignity, but also the personal desire and mission of all Group employees.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/management/mrTsuru.webp`} className="testimonial-img" alt="" />
                    <h3>EKK Group Safety Policy</h3>
                    <h4>Eagle Industry Indonesia</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>OHS Performance</h3>
                <ul>
                  <li><strong>Safety Certification</strong> <span>ISO 45001:2018</span></li>
                  <li><strong>LTI Rate</strong> <span>Zero (Target)</span></li>
                  <li><strong>Safety Training</strong> <span>100% Coverage</span></li>
                  <li><strong>Health Check-ups</strong> <span>Annual for All</span></li>
                  <li><strong>Safety Inspections</strong> <span>Monthly</span></li>
                  <li><strong>Emergency Drills</strong> <span>Quarterly</span></li>
                </ul>
                
                <div className="pt-3">
                  <Link to="/sustainability" className="btn-visit">Back to Sustainability</Link>
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
                <h2>OHS Performance and Targets</h2>
                <p>Our commitment to measurable safety improvements</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Performance Indicator</th>
                      <th>Target</th>
                      <th>Current Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lost Time Injury (LTI) Rate</td>
                      <td>Zero</td>
                      <td>Zero for 3 consecutive years</td>
                    </tr>
                    <tr>
                      <td>Total Recordable Injury Rate</td>
                      <td>Below 0.5</td>
                      <td>0.2 achieved in 2023</td>
                    </tr>
                    <tr>
                      <td>Safety Training Completion</td>
                      <td>100% of employees</td>
                      <td>100% completion rate</td>
                    </tr>
                    <tr>
                      <td>Hazard Identification</td>
                      <td>100% assessment coverage</td>
                      <td>98% coverage to date</td>
                    </tr>
                    <tr>
                      <td>Emergency Response Time</td>
                      <td>Less than 5 minutes</td>
                      <td>3.5 minutes average</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: Performance indicators are monitored monthly and reviewed annually for continuous improvement.</p>
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
                <h2>Safety Activities</h2>
                <p>Our commitment to safety through various programs and initiatives</p>
              </div>
              
              {/* Training Activity */}
              <div className="activity-item mb-5" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="activity-content">
                      <h3 className="activity-title"><i className="bi bi-mortarboard text-primary me-2"></i>Training</h3>
                      <p className="activity-description">
                        Training with topics on B3 Information System and Environmental Aspect Identification in the Workplace is routinely conducted every year to maintain understanding and increase employee awareness. These training sessions are designed to ensure all employees are equipped with the necessary knowledge to identify and handle hazardous materials safely.
                      </p>
                      <ul className="activity-highlights">
                        <li>Annual B3 (Hazardous Materials) Information System training</li>
                        <li>Environmental Aspect Identification in Workplace sessions</li>
                        <li>Continuous education to maintain safety awareness</li>
                        <li>Practical demonstrations and hands-on exercises</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/b3-1.jpg`} className="img-fluid rounded activity-img" alt="B3 Training" />
                          <p className="img-caption text-center mt-2">B3 Training Session</p>
                        </div>
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img//activities/b3-2.jpg`} className="img-fluid rounded activity-img" alt="Hazard Identification Training" />
                          <p className="img-caption text-center mt-2">Hazard Identification Workshop</p>
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
                      <h3 className="activity-title"><i className="bi bi-shield-exclamation text-warning me-2"></i>Safety Patrol</h3>
                      <p className="activity-description">
                        As an effort to create a safe work environment, the company conducts monthly Safety Patrols involving the HSE team, Sachou (President Director), and Managers from all departments. This activity focuses on identifying hazardous conditions and ensuring proper implementation of 5S methodology in the work area.
                      </p>
                      <ul className="activity-highlights">
                        <li>Monthly safety patrols with cross-departmental participation</li>
                        <li>Focus on hazardous condition identification</li>
                        <li>5S implementation monitoring and evaluation</li>
                        <li>Regular follow-up meetings to review improvements</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/safety-patrol-3.jpg`} className="img-fluid rounded activity-img" alt="Safety Patrol" />
                          <p className="img-caption text-center mt-2">Monthly Safety Patrol</p>
                        </div>
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/safety-patrol-2.jpg`} className="img-fluid rounded activity-img" alt="5S Implementation" />
                          <p className="img-caption text-center mt-2">5S Implementation Check</p>
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
                      <h3 className="activity-title"><i className="bi bi-exclamation-triangle text-danger me-2"></i>Emergency Plan</h3>
                      <p className="activity-description">
                        In facing emergency situations, the company has established structured handling steps. One potential emergency situation anticipated is fire. The company has comprehensive prevention plans, training programs, awareness campaigns, and routine inspections to ensure preparedness for any emergency situation.
                      </p>
                      <ul className="activity-highlights">
                        <li>APAR (Light Fire Extinguisher) training and practice</li>
                        <li>Regular evacuation simulations and drills</li>
                        <li>Emergency response team formation and training</li>
                        <li>Post-emergency recovery and evaluation procedures</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/apar-2.jpg`} className="img-fluid rounded activity-img" alt="APAR Training" />
                          <p className="img-caption text-center mt-2">APAR Training Session</p>
                        </div>
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/erp-1.jpg`} className="img-fluid rounded activity-img" alt="Evacuation Simulation" />
                          <p className="img-caption text-center mt-2">Evacuation Drill</p>
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
                <h2>Traffic Safety Initiatives</h2>
                <p>Ensuring safe commuting and transportation for all employees</p>
              </div>
              
              <div className="activity-item" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="activity-content">
                      <h3 className="activity-title"><i className="bi bi-bicycle text-success me-2"></i>Safety Riding Program</h3>
                      <p className="activity-description">
                        Every year, we organize external training with the theme of Safety Riding, working with professionals, as an effort to increase awareness and safe driving skills for employees. Additionally, with monthly safety riding check activities, we hope to cultivate a culture of safe and responsible driving.
                      </p>
                      <ul className="activity-highlights">
                        <li>Annual external Safety Riding training with professionals</li>
                        <li>Monthly safety riding checks and vehicle inspections</li>
                        <li>Building a culture of safe and responsible driving</li>
                        <li>Increasing employee awareness of traffic safety</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/safetyRiding-2.jpg`} className="img-fluid rounded activity-img" alt="Safety Riding Training" />
                          <p className="img-caption text-center mt-2">Safety Riding Training</p>
                        </div>
                        <div className="col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/safetyRiding-1.jpg`} className="img-fluid rounded activity-img" alt="Vehicle Inspection" />
                          <p className="img-caption text-center mt-2">Monthly Vehicle Check</p>
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
                <h2>Health Promotion</h2>
                <p>Supporting employee well-being through various health and wellness programs</p>
              </div>
              
              <div className="activity-item" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="activity-content">
                      <h3 className="activity-title"><i className="bi bi-heart-pulse text-info me-2"></i>Employee Wellness Programs</h3>
                      <p className="activity-description">
                        We realize the importance of health and hygiene of our employees. If employees are healthy and free from disease, they will be happy at work and work efficiently. The company provides various sports activity options to support physical fitness and mental well-being.
                      </p>
                      <ul className="activity-highlights">
                        <li>Well-equipped gym facility for employee use</li>
                        <li>Regular aerobic exercise sessions</li>
                        <li>Badminton, table tennis, and volleyball clubs</li>
                        <li>Soccer team and running club for sports enthusiasts</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="activity-images">
                      <div className="row g-3">
                        <div className="col-md-4 col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/gym.jpg`} className="img-fluid rounded activity-img" alt="Gym" />
                          <p className="img-caption text-center mt-2">Gym</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/yoga.jpeg
                          `} className="img-fluid rounded activity-img" alt="Aerobic" />
                          <p className="img-caption text-center mt-2">Aerobic</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/badminton.jpg`} className="img-fluid rounded activity-img" alt="Badminton" />
                          <p className="img-caption text-center mt-2">Badminton</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/table-tennis.jpg`} className="img-fluid rounded activity-img" alt="Table Tennis" />
                          <p className="img-caption text-center mt-2">Table Tennis</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/volleyball.jpg
                          `} className="img-fluid rounded activity-img" alt="Volleyball" />
                          <p className="img-caption text-center mt-2">Volleyball</p>
                        </div>
                        <div className="col-md-4 col-6">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/activities/mini-soccer.jpg`} className="img-fluid rounded activity-img" alt="Soccer" />
                          <p className="img-caption text-center mt-2">Soccer</p>
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
            <h2>Related Sustainability Topics</h2>
            <p>Explore more about our sustainability initiatives</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/sustainability/concept-of-sustainability" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/features-1.jpg`} className="card-image" alt="Concept of Sustainability" />
                  </div>
                  <div className="card-caption">
                    <span>Concept of Sustainability</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/sustainability/environmental-initiatives" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/features-2.jpg`} className="card-image" alt="Environmental Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>Environmental Initiatives</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/sustainability/social-media-contribution" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/features-3.jpg`} className="card-image" alt="Social Media Contribution" />
                  </div>
                  <div className="card-caption">
                    <span>Social Media Contribution</span>
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
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/sustainability">Sustainability</Link></li>
                  <li className="current">Occupational Health and Safety Initiatives</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OccupationalHealthSafety;