import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const QualityAssurance = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="service-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Quality Assurance</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Services</Link></li>
              <li className="current">Quality Assurance</li>
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
                <Link to="/services/quality-assurance" className="active">Quality Assurance</Link>
                <Link to="/services/research-development">Research & Development</Link>
                <Link to="/services/global-supply-chain">Global Supply Chain</Link>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="service-content text-center">
                <img src={`${process.env.PUBLIC_URL}/assets/img/services.jpg`} alt="Quality Assurance" className="img-fluid services-img mx-auto d-block" />
                <h3 className="text-center">Rigorous Quality Assurance System</h3>
                <p className="text-center">
                  At PT Eagle Industry Indonesia, quality is the foundation of everything we do. Our comprehensive quality assurance system ensures that every product leaving our facility meets the highest international standards and customer specifications. We are committed to delivering excellence through systematic quality control processes and continuous improvement initiatives.
                </p>
                <p className="text-center">
                  Our quality management system is certified under ISO 9001 standards, demonstrating our commitment to consistent quality and customer satisfaction. This framework guides our processes from raw material selection to final product delivery, ensuring reliability and performance in every component we manufacture.
                </p>
                <h4 className="text-center">Our Quality Assurance Framework:</h4>
                <ul className="text-start">
                  <li><i className="bi bi-check-circle"></i> <span>ISO 9001:2015 certified quality management system</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Comprehensive incoming material inspection and verification</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>In-process quality control at critical manufacturing stages</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Advanced metrology and precision measurement capabilities</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Statistical process control for manufacturing consistency</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Final product testing and performance validation</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Traceability systems for complete product lifecycle tracking</span></li>
                </ul>
                
                <h4 className="text-center">Testing and Inspection Capabilities:</h4>
                <p className="text-center">
                  Our quality assurance is supported by state-of-the-art testing facilities and highly trained quality professionals. We employ advanced inspection techniques including coordinate measuring machines, non-destructive testing, material analysis, and performance testing under simulated operating conditions. These capabilities ensure that our products perform reliably in real-world applications.
                </p>
                
                <div className="row gy-4 mt-4">
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Quality Standards</h5>
                      <p>Compliance with international standards and certifications</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Inspection Technology</h5>
                      <p>Advanced metrology equipment for precise measurements</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Process Control</h5>
                      <p>Statistical methods ensuring manufacturing consistency</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Continuous Improvement</h5>
                      <p>Regular system reviews and enhancement initiatives</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-center">Quality Certifications:</h4>
                <p className="text-center">
                  In addition to our ISO 9001 certification, we maintain various industry-specific quality certifications that demonstrate our commitment to excellence. These include ISO 14001 for environmental management and ISO 45001 for occupational health and safety, reflecting our holistic approach to quality that encompasses product performance, environmental responsibility, and workplace safety.
                </p>
                
                <h4 className="text-center">Customer Quality Assurance:</h4>
                <p className="text-center">
                  We work closely with our customers to understand their specific quality requirements and develop customized quality assurance protocols. Our customer quality assurance team provides detailed quality documentation, certificates of conformity, and traceability records to ensure complete transparency and confidence in our products.
                </p>
                
                <h4 className="text-center">Supplier Quality Management:</h4>
                <p className="text-center">
                  Our quality assurance extends to our supply chain through rigorous supplier qualification and monitoring programs. We work only with suppliers who meet our stringent quality standards and conduct regular audits to ensure consistent quality in all materials and components sourced from external partners.
                </p>
                
                <div className="text-center">
                  <Link to="/contact" className="btn btn-primary">Learn About Our Quality Standards</Link>
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
                  <i className="fa-solid fa-mountain-city"></i>
                </div>
                <h3>Custom Manufacturing</h3>
                <p>Tailored manufacturing solutions to meet specific customer requirements.</p>
                <Link to="/services/custom-manufacturing" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-compass-drafting"></i>
                </div>
                <h3>After-Sales Service</h3>
                <p>Comprehensive after-sales support to ensure customer satisfaction.</p>
                <Link to="/services/after-sales-service" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <h3>Research & Development</h3>
                <p>Continuous innovation to develop advanced sealing solutions.</p>
                <Link to="/services/research-development" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityAssurance;