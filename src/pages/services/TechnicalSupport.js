import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const TechnicalSupport = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="service-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Technical Support</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Services</Link></li>
              <li className="current">Technical Support</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Details Section */}
      <section id="service-details" className="service-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="services-list">
                <Link to="/services/custom-manufacturing">Custom Manufacturing</Link>
                <Link to="/services/technical-support" className="active">Technical Support</Link>
                <Link to="/services/after-sales-service">After-Sales Service</Link>
                <Link to="/services/quality-assurance">Quality Assurance</Link>
                <Link to="/services/research-development">Research & Development</Link>
                <Link to="/services/global-supply-chain">Global Supply Chain</Link>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="service-content text-center">
                <img src={`${process.env.PUBLIC_URL}/assets/img/building/building-ekk.png`} alt="Technical Support" className="img-fluid services-img mx-auto d-block" />
                <h3 className="text-center">Expert Technical Support Services</h3>
                <p className="text-center">
                  Our technical support team at PT Eagle Industry Indonesia provides comprehensive assistance to ensure optimal performance of our products throughout their lifecycle. With deep expertise in mechanical seals and precision components, our specialists are committed to resolving technical challenges and maximizing equipment reliability for our customers.
                </p>
                <p className="text-center">
                  We understand that critical operations require immediate and effective technical solutions. Our support team combines theoretical knowledge with practical field experience to deliver prompt assistance that minimizes downtime and extends equipment service life.
                </p>
                <h4 className="text-center">Our Technical Support Services Include:</h4>
                <ul className="text-start">
                  <li><i className="bi bi-check-circle"></i> <span>24/7 emergency technical assistance for critical applications</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>On-site troubleshooting and problem diagnosis</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Installation guidance and supervision</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Performance optimization recommendations</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Failure analysis and root cause identification</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Technical training for customer maintenance teams</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Remote monitoring and diagnostic services</span></li>
                </ul>
                
                <h4 className="text-center">Specialized Support Areas:</h4>
                <p className="text-center">
                  Our technical support covers all product categories including mechanical seals, stern tube seals, floating seals, lip seals, and specialized valves. We have dedicated specialists for different industry applications, ensuring that you receive support from professionals who understand your specific operational environment and challenges.
                </p>
                
                <div className="row gy-4 mt-4">
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Response Time</h5>
                      <p>Rapid response with 24/7 availability for critical issues</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Technical Expertise</h5>
                      <p>Specialists with extensive industry-specific knowledge</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Problem Resolution</h5>
                      <p>Systematic approach to identify and resolve root causes</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Global Support</h5>
                      <p>Consistent technical assistance across all operating regions</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-center">Our Support Process:</h4>
                <p className="text-center">
                  When you contact our technical support team, we follow a structured approach to ensure efficient problem resolution. This includes initial assessment, remote diagnosis when possible, on-site support for complex issues, and follow-up to verify solution effectiveness. We maintain detailed documentation of all support interactions to build knowledge and improve future service delivery.
                </p>
                
                <h4 className="text-center">Technical Resources:</h4>
                <p className="text-center">
                  In addition to direct support, we provide comprehensive technical documentation, installation guides, maintenance procedures, and troubleshooting manuals. Our digital resources include detailed product specifications, compatibility charts, and best practice guidelines to help our customers achieve optimal performance from our products.
                </p>
                
                <div className="text-center">
                  <Link to="/contact" className="btn btn-primary">Contact Technical Support</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section id="related-services" className="related-services section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Related Services</h2>
            <p>Explore our other comprehensive services</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-compass-drafting"></i>
                </div>
                <h3>After-Sales Service</h3>
                <p>Comprehensive after-sales support to ensure customer satisfaction.</p>
                <Link to="/services/after-sales-service" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-mountain-city"></i>
                </div>
                <h3>Custom Manufacturing</h3>
                <p>Tailored manufacturing solutions to meet specific customer requirements.</p>
                <Link to="/services/custom-manufacturing" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-trowel-bricks"></i>
                </div>
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control processes ensuring international standards compliance.</p>
                <Link to="/services/quality-assurance" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSupport;