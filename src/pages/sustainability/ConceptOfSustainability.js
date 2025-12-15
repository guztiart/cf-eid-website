import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const ConceptOfSustainability = () => {
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
              <li className="current">Concept of Sustainability</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Concept Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Our Concepts of Sustainability</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/environmental-initiatives">Environmental Initiatives</Link></li>
                  <li className="nav-item"><Link to="/sustainability/occupational-health-safety">Occupational Health & Safety</Link></li>
                  <li className="nav-item"><Link to="/sustainability/social-contribution-initiatives">Social Contribution Initiatives</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Details Section */}
      <section id="concept-details" className="sustainability-content section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2 className="content-title">Eagle Industry's Sustainability Concept</h2>
                <div className="content-body">
                  <p>
                    At Eagle Industry Indonesia, we believe that companies belong to not only their shareholders but also their employees and society.
                    This philosophy has long permeated every aspect of the EKK Group's management since our establishment in 1996.
                  </p>
                  <p>
                    As part of Eagle Industry Co., Ltd., a global leader in sealing solutions, we contribute to environmental protection through our core business.
                    Our mechanical seals prevent gases, oil, and other fluids from leaking machinery, directly helping to preserve the environment and prevent pollution.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Our Sustainability Vision</h3>
                <div className="content-body">
                  <p>
                    We aim to create sustainable value for all stakeholders by integrating environmental, social, and governance (ESG) considerations into our business strategy.
                    Our vision is to be a trusted partner that contributes to society through innovative sealing solutions while maintaining harmony with the global environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Core Sustainability Principles</h3>
                <div className="content-body">
                  <div className="principles-grid">
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>Environmental Protection</h4>
                        <p>Through leak prevention technology</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>Building Trust</h4>
                        <p>Through dialogue with all stakeholders</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>Fair Profits</h4>
                        <p>That support perpetual growth</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>Product Development</h4>
                        <p>That resolves environmental regulatory issues</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>Human Rights</h4>
                        <p>And occupational health and safety</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <div className="principle-icon">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="principle-text">
                        <h4>Community Contribution</h4>
                        <p>And biodiversity conservation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Long-Term Sustainability Goals</h3>
                <div className="content-body">
                  <p>
                    We have established long-term goals aligned with global sustainability frameworks, including the UN Sustainable Development Goals (SDGs) and the Paris Agreement.
                    Our commitment extends beyond compliance to proactive leadership in sustainable business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <div className="quote-section">
                  <blockquote className="sustainability-quote">
                    <p>
                      "Sustainability is not just a responsibility but an opportunity to innovate and create lasting value for our stakeholders and society."
                    </p>
                    <cite>— Management, Eagle Industry Indonesia</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="sustainability-pillars section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Our Sustainability Pillars</h2>
                <p>The core elements of our sustainability framework</p>
              </div>
              <div className="pillars-container" data-aos="fade-up" data-aos-delay="100">
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <i className="bi bi-tree"></i>
                  </div>
                  <div className="pillar-content">
                    <h3>Environmental</h3>
                    <p>Minimizing environmental impact through innovative products and processes that prevent pollution and conserve resources.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="pillar-content">
                    <h3>Social</h3>
                    <p>Creating value for society through responsible business practices, employee development, and community engagement.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="pillar-content">
                    <h3>Governance</h3>
                    <p>Maintaining high standards of corporate governance to ensure transparency, accountability, and ethical business conduct.</p>
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
                <Link to="/sustainability/environmental-initiatives" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Environmental Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>Environmental Initiatives</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/sustainability/climate-change-disclosure" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Social Contribution Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>Social Contribution Initiatives</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/sustainability/occupational-health-safety" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Occupational Health & Safety" />
                  </div>
                  <div className="card-caption">
                    <span>Occupational Health & Safety</span>
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
                  <li className="current">Concept of Sustainability</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptOfSustainability;