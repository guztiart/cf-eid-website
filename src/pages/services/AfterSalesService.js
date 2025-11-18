import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const AfterSalesService = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="service-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>After-Sales Service</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Services</Link></li>
              <li className="current">After-Sales Service</li>
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
                <Link to="/services/technical-support">Technical Support</Link>
                <Link to="/services/after-sales-service" className="active">After-Sales Service</Link>
                <Link to="/services/quality-assurance">Quality Assurance</Link>
                <Link to="/services/research-development">Research & Development</Link>
                <Link to="/services/global-supply-chain">Global Supply Chain</Link>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="service-content text-center">
                <img src={`${process.env.PUBLIC_URL}/assets/img/services.jpg`} alt="After-Sales Service" className="img-fluid services-img mx-auto d-block" />
                <h3 className="text-center">Comprehensive After-Sales Service</h3>
                <p className="text-center">
                  At PT Eagle Industry Indonesia, our commitment to customer satisfaction extends far beyond the initial purchase. Our comprehensive after-sales service program ensures that you receive continuous support throughout the entire lifecycle of our products, maximizing their performance and extending their service life.
                </p>
                <p className="text-center">
                  We believe that long-term customer relationships are built on reliable support and consistent service delivery. Our after-sales team is dedicated to providing prompt assistance, regular maintenance, and proactive solutions to prevent issues before they impact your operations.
                </p>
                <h4 className="text-center">Our After-Sales Service Offerings:</h4>
                <ul className="text-start">
                  <li><i className="bi bi-check-circle"></i> <span>Regular maintenance scheduling and performance monitoring</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Spare parts management and expedited delivery</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Equipment inspection and preventive maintenance programs</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Product upgrades and retrofitting services</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Warranty management and claim processing</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Customer training programs for proper operation and maintenance</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Performance tracking and optimization recommendations</span></li>
                </ul>
                
                <h4 className="text-center">Maintenance Programs:</h4>
                <p className="text-center">
                  Our structured maintenance programs are designed to identify potential issues before they lead to equipment failure. We offer customized maintenance schedules based on operating conditions, usage patterns, and criticality of applications. These programs include detailed inspections, performance testing, and replacement of wear components to ensure continuous reliable operation.
                </p>
                
                <div className="row gy-4 mt-4">
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Service Availability</h5>
                      <p>Comprehensive support network with regional service centers</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Response Efficiency</h5>
                      <p>Quick turnaround times for maintenance and repairs</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Spare Parts</h5>
                      <p>Strategic inventory ensuring prompt parts availability</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Customer Satisfaction</h5>
                      <p>Dedicated account managers for personalized service</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-center">Service Contracts:</h4>
                <p className="text-center">
                  We offer flexible service contracts tailored to your specific operational needs and budget requirements. Our service contracts can include regular maintenance visits, emergency response services, parts replacement, and performance guarantees. These contracts provide cost-effective solutions while ensuring optimal equipment performance and reliability.
                </p>
                
                <h4 className="text-center">Customer Feedback Integration:</h4>
                <p className="text-center">
                  We value customer feedback as an essential component of our continuous improvement process. Our after-sales service team regularly collects and analyzes customer feedback to identify opportunities for service enhancement and product improvement. This customer-centric approach ensures that our services evolve to meet changing market needs and exceed expectations.
                </p>
                
                <div className="text-center">
                  <Link to="/contact" className="btn btn-primary">Request After-Sales Support</Link>
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
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Technical Support</h3>
                <p>Expert technical assistance to ensure optimal product performance.</p>
                <Link to="/services/technical-support" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-trowel-bricks"></i>
                </div>
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control processes ensuring international standards compliance.</p>
                <Link to="/services/quality-assurance" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Global Supply Chain</h3>
                <p>Efficient global distribution network ensuring timely product delivery.</p>
                <Link to="/services/global-supply-chain" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterSalesService;