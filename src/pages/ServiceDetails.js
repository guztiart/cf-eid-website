import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';

const ServiceDetails = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="service-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Service Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li className="current">Service Details</li>
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
                <Link to="/service-details" className="active">Environmental Stewardship</Link>
                <Link to="/service-details">Stakeholder Engagement</Link>
                <Link to="/service-details">ESG Initiatives</Link>
                <Link to="/service-details">Sustainable Manufacturing</Link>
                <Link to="/service-details">Community Development</Link>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/Sustainability/skateHolder.png`} alt="" className="img-fluid services-img" />
              <h3>Environmental Stewardship</h3>
              <p>
                At Eagle Industry Indonesia, we are committed to minimizing our environmental footprint through innovative manufacturing processes and sustainable practices. Our environmental stewardship program focuses on reducing waste, conserving resources, and preventing pollution throughout our operations.
              </p>
              <p>
                We believe that sustainable business practices not only benefit the environment but also create long-term value for our company and stakeholders. Through continuous improvement and innovation, we strive to exceed regulatory requirements and set industry benchmarks for environmental performance.
              </p>
              <h4>Key Environmental Initiatives:</h4>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Waste reduction and recycling programs that have decreased our waste output by 40% over the past five years</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Energy-efficient manufacturing processes that reduce our carbon footprint and operational costs</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Sustainable material sourcing that prioritizes renewable and recyclable materials</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Water conservation initiatives that have reduced our water consumption by 30%</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Emissions control systems that ensure compliance with international environmental standards</span></li>
              </ul>
              <p>
                Our products are designed to prevent leaks and improve efficiency, contributing to environmental protection and energy conservation across various industries. By providing high-quality sealing solutions, we help our customers reduce their environmental impact while improving operational performance.
              </p>
              <h4>Environmental Performance Metrics:</h4>
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="service-metric">
                    <h5>Carbon Footprint Reduction</h5>
                    <p>25% decrease in CO2 emissions since 2018</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-metric">
                    <h5>Waste Diversion Rate</h5>
                    <p>85% of waste diverted from landfills through recycling and reuse</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-metric">
                    <h5>Energy Efficiency</h5>
                    <p>35% reduction in energy consumption per unit of production</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-metric">
                    <h5>Water Conservation</h5>
                    <p>30% reduction in water usage through process optimization</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h4>Future Environmental Goals:</h4>
                <p>
                  Looking ahead, we have set ambitious targets to further reduce our environmental impact. By 2025, we aim to achieve carbon neutrality in our operations, eliminate waste sent to landfills, and implement circular economy principles throughout our value chain. These goals reflect our commitment to environmental leadership and sustainable business practices.
                </p>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="btn btn-primary">Learn More About Our Environmental Initiatives</Link>
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
            <p>Explore our other sustainability initiatives</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-people"></i>
                </div>
                <h3>Stakeholder Engagement</h3>
                <p>Building strong relationships with all our stakeholders through transparent communication and collaborative initiatives.</p>
                <Link to="/service-details" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>ESG Initiatives</h3>
                <p>Our comprehensive Environmental, Social, and Governance commitments that guide our business decisions and operations.</p>
                <Link to="/service-details" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-building"></i>
                </div>
                <h3>Community Development</h3>
                <p>Investing in local communities through education, healthcare, and economic development programs.</p>
                <Link to="/service-details" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;