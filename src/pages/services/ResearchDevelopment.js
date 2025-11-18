import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const ResearchDevelopment = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="service-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Research & Development</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Services</Link></li>
              <li className="current">Research & Development</li>
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
                <Link to="/services/research-development" className="active">Research & Development</Link>
                <Link to="/services/global-supply-chain">Global Supply Chain</Link>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="service-content text-center">
                <img src={`${process.env.PUBLIC_URL}/assets/img/services.jpg`} alt="Research & Development" className="img-fluid services-img mx-auto d-block" />
                <h3 className="text-center">Innovative Research & Development</h3>
                <p className="text-center">
                  At PT Eagle Industry Indonesia, our Research & Development team drives innovation that positions us at the forefront of sealing technology. We invest significantly in R&D to develop advanced solutions that address evolving industry challenges, improve performance, and create new possibilities for our customers across various sectors.
                </p>
                <p className="text-center">
                  Our R&D approach combines fundamental research with practical application development, ensuring that our innovations are not only technically advanced but also commercially viable and immediately applicable to real-world challenges. We collaborate closely with customers, academic institutions, and industry partners to identify emerging needs and develop solutions that exceed expectations.
                </p>
                <h4 className="text-center">Our R&D Focus Areas:</h4>
                <ul className="text-start">
                  <li><i className="bi bi-check-circle"></i> <span>Advanced material development for enhanced durability and performance</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Seal design optimization for improved efficiency and longevity</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Smart sealing solutions with integrated monitoring capabilities</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Environmentally friendly sealing technologies</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>High-temperature and high-pressure application solutions</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Lightweight materials for automotive and aerospace applications</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Digital simulation and predictive modeling for design validation</span></li>
                </ul>
                
                <h4 className="text-center">Research Facilities:</h4>
                <p className="text-center">
                  Our state-of-the-art R&D facilities are equipped with advanced testing equipment, material analysis laboratories, and prototyping capabilities. These resources enable our research team to conduct comprehensive testing under simulated operating conditions, validate new designs, and accelerate development cycles while maintaining rigorous quality standards.
                </p>
                
                <div className="row gy-4 mt-4">
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Innovation Pipeline</h5>
                      <p>Continuous development of next-generation sealing solutions</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Technical Expertise</h5>
                      <p>Specialized R&D team with diverse engineering backgrounds</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Collaboration Network</h5>
                      <p>Partnerships with research institutions and industry leaders</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-metric text-center">
                      <h5>Technology Transfer</h5>
                      <p>Effective integration of research findings into production</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-center">Development Process:</h4>
                <p className="text-center">
                  Our product development follows a structured process that begins with market research and needs assessment, followed by concept development, prototyping, testing, and validation. We employ agile development methodologies to accelerate innovation while maintaining thorough testing and quality assurance at each stage of development.
                </p>
                
                <h4 className="text-center">Intellectual Property:</h4>
                <p className="text-center">
                  We actively protect our innovations through patents and intellectual property rights, ensuring that our technological advantages benefit our customers. Our patent portfolio includes numerous innovations in sealing technology, material science, and manufacturing processes that provide competitive advantages to our partners.
                </p>
                
                <h4 className="text-center">Future Research Directions:</h4>
                <p className="text-center">
                  Looking ahead, our R&D efforts are increasingly focused on sustainable technologies, digitalization of sealing systems, and solutions for emerging applications in renewable energy, electric vehicles, and advanced manufacturing. We are committed to developing sealing technologies that contribute to a more sustainable and efficient industrial future.
                </p>
                
                <div className="text-center">
                  <Link to="/contact" className="btn btn-primary">Discuss R&D Collaboration</Link>
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

export default ResearchDevelopment;