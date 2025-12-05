import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const CustomManufacturing = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="service-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Custom Manufacturing</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Services</Link></li>
              <li className="current">Custom Manufacturing</li>
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
                <Link to="/services/custom-manufacturing" className="active">Custom Manufacturing</Link>
                <Link to="/services/technical-support">Technical Support</Link>
                <Link to="/services/after-sales-service">After-Sales Service</Link>
                <Link to="/services/quality-assurance">Quality Assurance</Link>
                <Link to="/services/research-development">Research & Development</Link>
                <Link to="/services/global-supply-chain">Global Supply Chain</Link>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="service-content text-center">
                <img src={`${process.env.PUBLIC_URL}/assets/img/building/building-ekk.png`} alt="Custom Manufacturing" className="img-fluid services-img mx-auto d-block" />
                <h3 className="text-center">Custom Manufacturing Solutions</h3>
                <p className="text-center">
                  At PT Eagle Industry Indonesia, we specialize in providing custom manufacturing solutions tailored to meet the unique requirements of our clients across various industries. Our advanced manufacturing capabilities and experienced engineering team enable us to deliver high-quality precision components that exactly match your specifications.
                </p>
                <p className="text-center">
                  With decades of experience in precision manufacturing, we have developed expertise in producing complex mechanical components that meet the most demanding industry standards. Our custom manufacturing process combines state-of-the-art technology with traditional craftsmanship to ensure exceptional quality and performance.
                </p>
                <h4 className="text-center">Our Custom Manufacturing Capabilities:</h4>
                <ul className="text-start">
                  <li><i className="bi bi-check-circle"></i> <span>Precision machining with tolerances as tight as ±0.001mm</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Custom material selection and sourcing based on application requirements</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Prototype development and rapid iteration for design optimization</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Small batch to large volume production capabilities</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Complex geometries and multi-axis machining capabilities</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Surface treatment and finishing processes to enhance performance</span></li>
                </ul>
                
                <h4 className="text-center">Industry Applications:</h4>
                <p className="text-center">
                  Our custom manufacturing solutions serve a diverse range of industries, including automotive, aerospace, marine, oil and gas, semiconductor manufacturing, and industrial machinery. We understand the unique challenges and requirements of each industry and develop customized solutions that address specific operational needs.
                </p>
                
                <div className="row gy-4 mt-4">
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Manufacturing Precision</h5>
                      <p>Industry-leading tolerances and quality standards</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Material Expertise</h5>
                      <p>Wide range of materials including specialized alloys</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Production Flexibility</h5>
                      <p>Scalable solutions from prototype to mass production</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Quality Assurance</h5>
                      <p>Rigorous testing and inspection processes</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-center">Our Manufacturing Process:</h4>
                <p className="text-center">
                  Our custom manufacturing process begins with a thorough understanding of your requirements and application challenges. Our engineering team collaborates closely with clients to develop detailed specifications and design optimizations. We then utilize our advanced manufacturing facilities to produce components that meet exact specifications, followed by comprehensive quality testing to ensure performance and reliability.
                </p>
                
                <div className="text-center">
                  <Link to="/contact" className="btn btn-primary">Discuss Your Custom Requirements</Link>
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
                <p>Expert technical assistance to ensure optimal performance of our products.</p>
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

export default CustomManufacturing;