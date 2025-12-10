import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const ClimateChangeDisclosure = () => {
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
              <li className="current">Climate Change Disclosure</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Climate Change Disclosure Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Climate Change-related Disclosure in Accordance with the TCFD</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/concept-of-sustainability">Concept of Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/environmental-initiatives">Environmental Initiatives</Link></li>
                  <li className="nav-item"><Link to="/sustainability/occupational-health-safety">Occupational Health & Safety</Link></li>
                  <li className="nav-item"><Link to="/sustainability/social-contribution-initiatives">Social Contribution Initiatives</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Change Disclosure Details Section */}
      <section id="climate-details" className="sustainability-content section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2 className="content-title">TCFD-aligned Climate Change Disclosure</h2>
                <div className="content-body">
                  <p>
                    Eagle Industry Indonesia supports the Task Force on Climate-related Financial Disclosures (TCFD) recommendations and
                    is committed to enhancing our climate-related financial disclosure in line with global best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Our Approach to Climate Change</h3>
                <div className="content-body">
                  <p>
                    As part of the EKK Group's commitment to addressing climate change, we recognize the importance of transparent
                    disclosure of climate-related risks and opportunities. Our approach aligns with the TCFD's four-pillar framework:
                    Governance, Strategy, Risk Management, and Metrics and Targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">TCFD Framework Implementation</h3>
                <div className="content-body">
                  <div className="tcfd-grid">
                    <div className="tcfd-item">
                      <div className="tcfd-icon">
                        <i className="bi bi-briefcase"></i>
                      </div>
                      <div className="tcfd-content">
                        <h4>Governance</h4>
                        <p>The Board of Directors oversees climate-related issues and risks, while management teams implement specific climate strategies and initiatives.</p>
                        <ul>
                          <li>Board-level oversight of climate-related risks and opportunities</li>
                          <li>Management responsibility for implementing climate strategies</li>
                          <li>Regular reporting on climate performance to senior management</li>
                          <li>Integration of climate considerations into business planning</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tcfd-item">
                      <div className="tcfd-icon">
                        <i className="bi bi-lightbulb"></i>
                      </div>
                      <div className="tcfd-content">
                        <h4>Strategy</h4>
                        <p>We have developed a comprehensive climate strategy that addresses both risks and opportunities associated with climate change.</p>
                        <ul>
                          <li>Climate resilience assessment of operations and supply chain</li>
                          <li>Development of low-carbon products and solutions</li>
                          <li>Scenario analysis for different climate futures (2°C and 4°C)</li>
                          <li>Strategic positioning for climate-related market opportunities</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tcfd-item">
                      <div className="tcfd-icon">
                        <i className="bi bi-shield-exclamation"></i>
                      </div>
                      <div className="tcfd-content">
                        <h4>Risk Management</h4>
                        <p>Our risk management processes identify, assess, and manage climate-related risks through our enterprise risk management framework.</p>
                        <ul>
                          <li>Identification of physical and transition climate risks</li>
                          <li>Risk assessment methodologies for climate-related impacts</li>
                          <li>Integration of climate risks into enterprise risk management</li>
                          <li>Regular monitoring and reporting of climate risk exposure</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tcfd-item">
                      <div className="tcfd-icon">
                        <i className="bi bi-graph-up"></i>
                      </div>
                      <div className="tcfd-content">
                        <h4>Metrics and Targets</h4>
                        <p>We use specific metrics to assess climate-related risks and opportunities in line with our strategy and risk management processes.</p>
                        <ul>
                          <li>Scope 1, 2, and 3 greenhouse gas emissions tracking</li>
                          <li>Energy consumption and renewable energy usage metrics</li>
                          <li>Climate-related financial impact assessment</li>
                          <li>Science-based targets for emissions reduction</li>
                        </ul>
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
                <div className="quote-section">
                  <blockquote className="sustainability-quote">
                    <p>
                      "Climate change is one of the most significant challenges facing our planet. Through TCFD-aligned disclosure, we demonstrate our commitment to transparency and action on this critical issue."
                    </p>
                    <cite>— Sustainability Committee, Eagle Industry Indonesia</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Risks and Opportunities */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Climate-related Risks and Opportunities</h2>
                <p>Our assessment of climate impacts on our business</p>
              </div>
              
              {/* Climate-related Risks Section */}
              <div className="climate-section mb-5" data-aos="fade-up" data-aos-delay="100">
                <h3 className="climate-category-title mb-4">Climate-related Risks</h3>
                <div className="row g-4">
                  <div className="col-lg-6 col-md-12">
                    <div className="climate-card h-100">
                      <div className="climate-card-header">
                        <h4 className="climate-card-title">Transition Risks</h4>
                      </div>
                      <div className="climate-card-body">
                        <ul className="climate-card-list">
                          <li>Policy and legal changes related to climate</li>
                          <li>Technology shifts to low-carbon solutions</li>
                          <li>Market preferences for sustainable products</li>
                          <li>Reputation impacts from climate performance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="climate-card h-100">
                      <div className="climate-card-header">
                        <h4 className="climate-card-title">Physical Risks</h4>
                      </div>
                      <div className="climate-card-body">
                        <ul className="climate-card-list">
                          <li>Acute climate events (floods, storms)</li>
                          <li>Chronic climate patterns (temperature rise)</li>
                          <li>Supply chain disruptions from climate impacts</li>
                          <li>Resource availability changes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Climate-related Opportunities Section */}
              <div className="climate-section" data-aos="fade-up" data-aos-delay="200">
                <h3 className="climate-category-title mb-4">Climate-related Opportunities</h3>
                <div className="row g-4">
                  <div className="col-lg-6 col-md-12">
                    <div className="climate-card h-100">
                      <div className="climate-card-header">
                        <h4 className="climate-card-title">Products and Services</h4>
                      </div>
                      <div className="climate-card-body">
                        <ul className="climate-card-list">
                          <li>Development of energy-efficient sealing solutions</li>
                          <li>Innovation in low-carbon technologies</li>
                          <li>Products that support climate adaptation</li>
                          <li>Services for climate resilience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="climate-card h-100">
                      <div className="climate-card-header">
                        <h4 className="climate-card-title">Operations and Markets</h4>
                      </div>
                      <div className="climate-card-body">
                        <ul className="climate-card-list">
                          <li>Energy efficiency improvements in operations</li>
                          <li>Renewable energy adoption</li>
                          <li>Access to new markets with climate solutions</li>
                          <li>Enhanced brand value through climate leadership</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Targets */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Climate Targets and Performance</h2>
                <p>Our commitment to measurable climate action</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Target Area</th>
                      <th>Target</th>
                      <th>Current Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Scope 1 & 2 GHG Emissions</td>
                      <td>30% reduction by 2030 (vs. 2019 baseline)</td>
                      <td>12% reduction achieved to date</td>
                    </tr>
                    <tr>
                      <td>Renewable Energy</td>
                      <td>50% renewable electricity by 2025</td>
                      <td>25% renewable electricity in 2023</td>
                    </tr>
                    <tr>
                      <td>Energy Intensity</td>
                      <td>2% annual reduction</td>
                      <td>2.3% average annual reduction</td>
                    </tr>
                    <tr>
                      <td>Climate-related Financial Disclosure</td>
                      <td>Full TCFD alignment by 2024</td>
                      <td>Implementing TCFD recommendations</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: Targets are aligned with Indonesia's climate commitments and the Paris Agreement.</p>
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
                <Link to="/sustainability/occupational-health-safety" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/features-3.jpg`} className="card-image" alt="Occupational Health & Safety" />
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
                  <li className="current">Climate Change Disclosure</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClimateChangeDisclosure;