import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const GlobalSupplyChain = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="service-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Global Supply Chain</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Services</Link></li>
              <li className="current">Global Supply Chain</li>
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
                <Link to="/services/after-sales-service">After-Sales Service</Link>
                <Link to="/services/quality-assurance">Quality Assurance</Link>
                <Link to="/services/research-development">Research & Development</Link>
                <Link to="/services/global-supply-chain" className="active">Global Supply Chain</Link>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="service-content text-center">
                <img src={`${process.env.PUBLIC_URL}/assets/img/building/building-ekk.png`} alt="Global Supply Chain" className="img-fluid services-img mx-auto d-block" />
                <h3 className="text-center">Efficient Global Supply Chain</h3>
                <p className="text-center">
                  PT Eagle Industry Indonesia maintains an efficient and reliable global supply chain network to ensure timely delivery of our products to customers worldwide. Our strategic distribution system combines local manufacturing capabilities with global logistics expertise to provide responsive service while maintaining cost efficiency.
                </p>
                <p className="text-center">
                  Our supply chain is designed to minimize lead times, reduce inventory costs, and ensure product availability when and where our customers need it. We have developed robust partnerships with logistics providers and established regional distribution centers to create a resilient and flexible supply network that can adapt to changing market demands.
                </p>
                <h4 className="text-center">Our Supply Chain Capabilities:</h4>
                <ul className="text-start">
                  <li><i className="bi bi-check-circle"></i> <span>Strategic distribution centers across key global markets</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Advanced inventory management systems for optimal stock levels</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Multiple shipping options including express delivery services</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Real-time order tracking and visibility throughout delivery process</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Customs clearance expertise for international shipments</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Flexible packaging solutions to protect products during transit</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Emergency delivery capabilities for critical requirements</span></li>
                </ul>
                
                <h4 className="text-center">Regional Distribution Network:</h4>
                <p className="text-center">
                  Our global presence is strengthened by regional distribution centers strategically located to serve major industrial markets. These facilities maintain comprehensive inventory of standard products and can quickly assemble custom orders, significantly reducing delivery times while ensuring product quality is maintained throughout the supply chain.
                </p>
                
                <div className="row gy-4 mt-4">
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Delivery Performance</h5>
                      <p>On-time delivery rate exceeding 98% globally</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Global Reach</h5>
                      <p>Distribution network spanning over 50 countries</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Inventory Management</h5>
                      <p>Advanced systems ensuring optimal stock availability</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Logistics Partners</h5>
                      <p>Strategic partnerships with leading global carriers</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-center">Supply Chain Technology:</h4>
                <p className="text-center">
                  We leverage advanced supply chain management technologies to optimize our operations and provide visibility to our customers. Our systems include automated inventory management, demand forecasting, route optimization, and real-time tracking capabilities. These technologies enable us to respond quickly to changing requirements and provide accurate delivery information.
                </p>
                
                <h4 className="text-center">Sustainable Logistics:</h4>
                <p className="text-center">
                  Our global supply chain incorporates sustainability initiatives to minimize environmental impact while maintaining service efficiency. We optimize shipping routes to reduce carbon emissions, utilize eco-friendly packaging materials, and work with logistics partners who share our commitment to environmental responsibility.
                </p>
                
                <h4 className="text-center">Customer Supply Chain Integration:</h4>
                <p className="text-center">
                  We offer integrated supply chain solutions that align with our customers' procurement and inventory systems. Through electronic data interchange, vendor-managed inventory programs, and customized delivery schedules, we help our customers optimize their own supply chain operations while ensuring reliable product availability.
                </p>
                
                <div className="text-center">
                  <Link to="/contact" className="btn btn-primary">Inquire About Delivery Options</Link>
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
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Technical Support</h3>
                <p>Expert technical assistance to ensure optimal product performance.</p>
                <Link to="/services/technical-support" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalSupplyChain;