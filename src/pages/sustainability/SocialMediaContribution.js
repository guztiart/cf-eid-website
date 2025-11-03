import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const SocialMediaContribution = () => {
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
              <li className="current">Social Media Contribution Initiatives</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Social Media Contribution Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Social Media Contribution Initiatives</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/concept-of-sustainability">Concept of Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/environmental-initiatives">Environmental Initiatives</Link></li>
                  <li className="nav-item"><Link to="/sustainability/climate-change-disclosure">Climate Change Disclosure</Link></li>
                  <li className="nav-item"><Link to="/sustainability/occupational-health-safety">Occupational Health & Safety</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Contribution Details Section */}
      <section id="social-media-details" className="sustainability-content section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2 className="content-title">Social Media Contribution at Eagle Industry Indonesia</h2>
                <div className="content-body">
                  <p>
                    At Eagle Industry Indonesia, we leverage social media platforms to promote sustainability awareness,
                    engage with stakeholders, and contribute to important social and environmental conversations.
                    Our social media initiatives are designed to educate, inspire, and mobilize action toward a more sustainable future.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Our Social Media Strategy</h3>
                <div className="content-body">
                  <p>
                    Our social media strategy aligns with our overall sustainability goals and focuses on transparent communication
                    about our ESG initiatives, stakeholder engagement, and promotion of sustainable practices in our industry and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Key Social Media Initiatives</h3>
                <div className="content-body">
                  <div className="initiatives-grid">
                    <div className="initiative-item">
                      <div className="initiative-icon">
                        <i className="bi bi-megaphone"></i>
                      </div>
                      <div className="initiative-content">
                        <h4>Sustainability Awareness Campaigns</h4>
                        <p>We run regular campaigns across our social media platforms to raise awareness about environmental issues, climate change, and sustainable practices. These campaigns feature educational content, practical tips, and calls to action for our followers.</p>
                        <ul>
                          <li>Monthly sustainability themes and challenges</li>
                          <li>Infographics and educational content on environmental topics</li>
                          <li>Interactive quizzes and engagement activities</li>
                          <li>Collaboration with environmental organizations and influencers</li>
                        </ul>
                      </div>
                    </div>
                    <div className="initiative-item">
                      <div className="initiative-icon">
                        <i className="bi bi-share"></i>
                      </div>
                      <div className="initiative-content">
                        <h4>ESG Performance Transparency</h4>
                        <p>We use social media to transparently share our ESG performance, achievements, and challenges. This open communication builds trust with stakeholders and demonstrates our commitment to accountability.</p>
                        <ul>
                          <li>Regular updates on sustainability targets and progress</li>
                          <li>Sharing of annual sustainability report highlights</li>
                          <li>Behind-the-scenes content of our environmental initiatives</li>
                          <li>Response to stakeholder questions and feedback</li>
                        </ul>
                      </div>
                    </div>
                    <div className="initiative-item">
                      <div className="initiative-icon">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="initiative-content">
                        <h4>Community Engagement</h4>
                        <p>We actively engage with our online community through meaningful conversations about sustainability, responding to comments, and featuring user-generated content that promotes environmental responsibility.</p>
                        <ul>
                          <li>Regular Q&A sessions with sustainability experts</li>
                          <li>Employee sustainability stories and testimonials</li>
                          <li>Community spotlight on local environmental initiatives</li>
                          <li>Partnerships with sustainability-focused organizations</li>
                        </ul>
                      </div>
                    </div>
                    <div className="initiative-item">
                      <div className="initiative-icon">
                        <i className="bi bi-trophy"></i>
                      </div>
                      <div className="initiative-content">
                        <h4>Sustainability Recognition</h4>
                        <p>We celebrate sustainability achievements and innovations through our social media channels, recognizing both internal and external contributions to environmental protection and social responsibility.</p>
                        <ul>
                          <li>Employee sustainability champion recognition</li>
                          <li>Highlighting innovative environmental solutions</li>
                          <li>Sharing sustainability awards and certifications</li>
                          <li>Promoting industry best practices and case studies</li>
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
                      "Social media provides us with a powerful platform to amplify our sustainability message and engage with stakeholders in meaningful conversations about creating a better future for our planet."
                    </p>
                    <cite>— Corporate Communications, Eagle Industry Indonesia</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Campaigns */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Featured Social Media Campaigns</h2>
                <p>Our most impactful sustainability-focused social media initiatives</p>
              </div>
              <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4 className="card-title"><i className="bi bi-calendar-event text-primary me-2"></i>#EcoSealSolutions</h4>
                      <p className="card-text">Monthly campaign showcasing how our sealing solutions contribute to environmental protection by preventing fluid leaks and reducing environmental impact.</p>
                      <ul className="card-text">
                        <li>Product innovation highlights</li>
                        <li>Environmental impact metrics</li>
                        <li>Customer success stories</li>
                        <li>Expert insights and explanations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4 className="card-title"><i className="bi bi-calendar-event text-success me-2"></i>#GreenWorkplace</h4>
                      <p className="card-text">Weekly series featuring our workplace sustainability initiatives, employee green practices, and tips for creating environmentally friendly work environments.</p>
                      <ul className="card-text">
                        <li>Employee sustainability stories</li>
                        <li>Green office initiatives</li>
                        <li>Energy-saving tips</li>
                        <li>Waste reduction practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4 className="card-title"><i className="bi bi-calendar-event text-warning me-2"></i>#ClimateActionNow</h4>
                      <p className="card-text">Campaign aligned with global climate action days, featuring our climate change mitigation efforts and encouraging community participation in climate solutions.</p>
                      <ul className="card-text">
                        <li>Climate education content</li>
                        <li>TCFD disclosure highlights</li>
                        <li>Carbon reduction progress</li>
                        <li>Community climate challenges</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4 className="card-title"><i className="bi bi-calendar-event text-info me-2"></i>#SafetyFirst</h4>
                      <p className="card-text">Regular content promoting occupational health and safety best practices, sharing our safety achievements, and educating about workplace safety standards.</p>
                      <ul className="card-text">
                        <li>Safety tips and guidelines</li>
                        <li>OHS performance updates</li>
                        <li>Safety training highlights</li>
                        <li>Industry safety standards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Metrics */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Social Media Performance Metrics</h2>
                <p>Measuring the impact of our sustainability communication</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Metric</th>
                      <th>Target</th>
                      <th>Current Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sustainability Content Engagement</td>
                      <td>Above industry average</td>
                      <td>2.3x industry average</td>
                    </tr>
                    <tr>
                      <td>Stakeholder Response Rate</td>
                      <td>80% positive responses</td>
                      <td>95% positive responses</td>
                    </tr>
                    <tr>
                      <td>Sustainability Education Reach</td>
                      <td>10,000 monthly users</td>
                      <td>15,000 monthly users</td>
                    </tr>
                    <tr>
                      <td>Community Growth Rate</td>
                      <td>20% annual increase</td>
                      <td>25% annual increase</td>
                    </tr>
                    <tr>
                      <td>ESG Transparency Score</td>
                      <td>Top quartile in industry</td>
                      <td>Top 10% in industry</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: Metrics are tracked quarterly and used to continuously improve our social media sustainability communication strategy.</p>
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
                  <li className="current">Social Media Contribution Initiatives</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaContribution;