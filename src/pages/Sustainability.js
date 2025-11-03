import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';

const Sustainability = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  // Load custom CSS
  React.useEffect(() => {
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
    <div className="services-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>Sustainability</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Sustainability</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Our Concepts of Sustainability Section */}
      <section id="sustainability-concepts" className="sustainability-concepts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Concepts of Sustainability</h2>
          <p>Creating a sustainable future through innovation and responsibility</p>
        </div>
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src={`${process.env.PUBLIC_URL}/assets/img/Sustainability/skateHolder.png`} alt="Sustainability" style={{ height: 'auto', maxHeight: 'none', objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h3>Eagle Industry's Sustainability Vision</h3>
              <p>At Eagle Industry Indonesia, we believe that companies belong to not only their shareholders but also their employees and society. This philosophy has long permeated every aspect of the EKK Group's management since our establishment in 1996.</p>
              <p>As part of Eagle Industry Co., Ltd., a global leader in sealing solutions, we contribute to environmental protection through our core business. Our mechanical seals prevent gases, oil, and other fluids from leaking machinery, directly helping to preserve the environment and prevent pollution.</p>
              <h4 className="mt-4">Our Core Principles:</h4>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Environmental protection through leak prevention technology</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Building trust through dialogue with all stakeholders</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Creating fair profits that support perpetual growth</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Developing products that resolve environmental regulatory issues</span></li>
              </ul>
              <div className="mt-4">
                <Link to="/sustainability/concept-of-sustainability" className="btn btn-primary">Learn More About Our Sustainability Concept</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Initiatives Section */}
      <section id="esg-initiatives" className="esg-initiatives section">
        <div className="container section-title" data-aos="fade-up">
          <h2>ESG Initiatives</h2>
          <p>Strengthening our Environmental, Social, and Governance framework</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="esg-card h-100">
                <div className="icon">
                  <i className="bi bi-tree"></i>
                </div>
                <h3>Environmental Initiatives</h3>
                <p>Comprehensive environmental preservation activities in accordance with our environmental policy and ISO 14001 certification.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Water resource management</span></li>
                  <li><i className="bi bi-check"></i><span>Global warming mitigation</span></li>
                  <li><i className="bi bi-check"></i><span>Industrial waste reduction</span></li>
                </ul>
                <div className="mt-3">
                  <Link to="/sustainability/environmental-initiatives" className="btn btn-outline-primary btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="esg-card h-100">
                <div className="icon">
                  <i className="bi bi-thermometer-half"></i>
                </div>
                <h3>Climate Change Disclosure</h3>
                <p>TCFD-aligned climate-related financial disclosure addressing risks and opportunities of climate change.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Governance framework</span></li>
                  <li><i className="bi bi-check"></i><span>Climate strategy</span></li>
                  <li><i className="bi bi-check"></i><span>Risk management</span></li>
                </ul>
                <div className="mt-3">
                  <Link to="/sustainability/climate-change-disclosure" className="btn btn-outline-primary btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="esg-card h-100">
                <div className="icon">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <h3>Occupational Health & Safety</h3>
                <p>Comprehensive OHS management system ensuring workplace safety and employee well-being.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Safety management systems</span></li>
                  <li><i className="bi bi-check"></i><span>Health promotion programs</span></li>
                  <li><i className="bi bi-check"></i><span>Safety training and education</span></li>
                </ul>
                <div className="mt-3">
                  <Link to="/sustainability/occupational-health-safety" className="btn btn-outline-primary btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="esg-card h-100">
                <div className="icon">
                  <i className="bi bi-share"></i>
                </div>
                <h3>Social Media Contribution</h3>
                <p>Leveraging social platforms to promote sustainability awareness and stakeholder engagement.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Sustainability awareness campaigns</span></li>
                  <li><i className="bi bi-check"></i><span>ESG performance transparency</span></li>
                  <li><i className="bi bi-check"></i><span>Community engagement</span></li>
                </ul>
                <div className="mt-3">
                  <Link to="/sustainability/social-media-contribution" className="btn btn-outline-primary btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section id="cta" className="cta section">
        <div className="container">
          <div className="row justify-content-between" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-7">
              <h3>Join Our Sustainability Journey</h3>
              <p>We are committed to creating sustainable value for all our stakeholders. Together, we can build a more sustainable future through innovation, responsibility, and collaboration.</p>
            </div>
            <div className="col-lg-5 text-center">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;