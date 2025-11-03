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
                  At Eagle Industry Indonesia, we are committed to providing a safe and healthy working environment for all our employees. 
                  Our Occupational Health and Safety (OHS) management system is designed to prevent work-related injuries and illnesses 
                  while promoting overall employee well-being.
                </p>
                
                <h3 className="mt-4">Our OHS Policy</h3>
                <p>
                  We prioritize the health and safety of our employees above all else. Our OHS policy guides our commitment to 
                  continuous improvement in workplace safety, hazard prevention, and employee health promotion.
                </p>
                
                <h3 className="mt-4">Key OHS Initiatives</h3>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-shield-check"></i>
                  <h4>Safety Management System</h4>
                  <p>We implement a comprehensive safety management system that identifies, assesses, and controls workplace hazards. 
                  Our system is aligned with international standards and local regulations to ensure the highest level of protection for our employees.</p>
                  <ul>
                    <li>Regular risk assessments and hazard identification</li>
                    <li>Safety procedures and work instructions</li>
                    <li>Incident reporting and investigation processes</li>
                    <li>Emergency response preparedness</li>
                  </ul>
                </div>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-heart-pulse"></i>
                  <h4>Health Promotion Programs</h4>
                  <p>We promote employee health through various wellness initiatives, regular health check-ups, and ergonomic improvements 
                  in the workplace. Our programs focus on both physical and mental well-being.</p>
                  <ul>
                    <li>Annual health examinations for all employees</li>
                    <li>Ergonomic workplace assessments and improvements</li>
                    <li>Mental health support and counseling services</li>
                    <li>Health and wellness education programs</li>
                  </ul>
                </div>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-book"></i>
                  <h4>Safety Training and Education</h4>
                  <p>We provide comprehensive safety training to all employees, from induction programs for new hires to specialized 
                  training for specific roles. Our training ensures that everyone has the knowledge and skills to work safely.</p>
                  <ul>
                    <li>Safety induction for all new employees</li>
                    <li>Job-specific safety training programs</li>
                    <li>Regular safety refresher courses</li>
                    <li>Emergency response training and drills</li>
                  </ul>
                </div>
                
                <div className="icon-box mt-4">
                  <i className="bi bi-people"></i>
                  <h4>Employee Engagement</h4>
                  <p>We actively involve employees in our OHS programs through safety committees, suggestion systems, and regular 
                  communication. Employee participation is essential for identifying hazards and improving safety performance.</p>
                  <ul>
                    <li>Safety committees with employee representation</li>
                    <li>Safety suggestion and recognition programs</li>
                    <li>Regular safety meetings and communication</li>
                    <li>Employee involvement in safety inspections</li>
                  </ul>
                </div>
                
                <div className="testimonial-item mt-4">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    The health and safety of our employees is our top priority. We are committed to creating a workplace where 
                    everyone can work safely and return home healthy every day.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/management/mrTsuru.webp`} className="testimonial-img" alt="" />
                    <h3>HR & Safety Department</h3>
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

      {/* OHS Programs */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Specialized OHS Programs</h2>
                <p>Targeted initiatives for specific workplace safety aspects</p>
              </div>
              <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4 className="card-title"><i className="bi bi-exclamation-triangle text-warning me-2"></i>Hazard Prevention</h4>
                      <p className="card-text">Proactive identification and control of workplace hazards through regular assessments, engineering controls, and safe work procedures.</p>
                      <ul className="card-text">
                        <li>Risk assessment methodology</li>
                        <li>Hierarchy of controls implementation</li>
                        <li>Safe work procedure development</li>
                        <li>Regular workplace inspections</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4 className="card-title"><i className="bi bi-hospital text-danger me-2"></i>Emergency Preparedness</h4>
                      <p className="card-text">Comprehensive emergency response planning and preparedness to ensure effective response to workplace incidents and emergencies.</p>
                      <ul className="card-text">
                        <li>Emergency response team training</li>
                        <li>First aid and medical emergency response</li>
                        <li>Fire prevention and firefighting</li>
                        <li>Evacuation procedures and drills</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4 className="card-title"><i className="bi bi-person-check text-success me-2"></i>Occupational Health</h4>
                      <p className="card-text">Programs to monitor and promote employee health, including health surveillance, disease prevention, and health promotion activities.</p>
                      <ul className="card-text">
                        <li>Occupational health surveillance</li>
                        <li>Industrial hygiene monitoring</li>
                        <li>Health promotion and wellness</li>
                        <li>Rehabilitation and return-to-work</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4 className="card-title"><i className="bi bi-shield-plus text-primary me-2"></i>Safety Culture</h4>
                      <p className="card-text">Building a strong safety culture through leadership commitment, employee engagement, and continuous improvement in safety performance.</p>
                      <ul className="card-text">
                        <li>Safety leadership development</li>
                        <li>Behavior-based safety programs</li>
                        <li>Safety communication and awareness</li>
                        <li>Safety recognition and incentives</li>
                      </ul>
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