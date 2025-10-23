import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';

const Services = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="services-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
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

      {/* Sustainability Philosophy Section */}
      <section id="sustainability-philosophy" className="sustainability-concepts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Sustainability Philosophy</h2>
          <p>Creating a sustainable future through innovation and responsibility</p>
        </div>
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src={`${process.env.PUBLIC_URL}/assets/img/Sustainability/skateHolder.png`} alt="Sustainability" />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h3>Eagle Industry's Sustainability Vision</h3>
              <p>At Eagle Industry Indonesia, we believe that sustainable business practices are essential for long-term success. Our philosophy is built on the foundation of creating value for society while minimizing environmental impact.</p>
              <p>We strive to contribute to the realization of a sustainable society through our core business activities, developing innovative sealing solutions that prevent leaks, conserve energy, and protect the environment across various industries.</p>
              <h4 className="mt-4">Our Core Principles:</h4>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Environmental protection through product innovation</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Social contribution and community engagement</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Economic sustainability and ethical governance</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Transparency and accountability in all operations</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Initiatives Section */}
      <section id="environmental-initiatives" className="alt-services section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <h3>Environmental Initiatives</h3>
              <p>We are committed to protecting the environment through comprehensive initiatives that reduce our ecological footprint while delivering value to our customers.</p>
              <div className="icon-box">
                <i className="bi bi-droplet"></i>
                <h4>Water Conservation</h4>
                <p>Implementing water recycling systems and reducing water consumption in our manufacturing processes through advanced filtration and treatment technologies.</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-lightning-charge"></i>
                <h4>Energy Efficiency</h4>
                <p>Investing in energy-efficient equipment and renewable energy sources to reduce CO2 emissions and minimize our carbon footprint.</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-recycle"></i>
                <h4>Waste Reduction</h4>
                <p>Implementing comprehensive waste management programs, including recycling, reuse, and responsible disposal of materials.</p>
              </div>
            </div>
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/Sustainability/skateHolder.png`} alt="Environmental Initiatives" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility Section */}
      <section id="social-responsibility" className="stakeholders section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Social Responsibility</h2>
          <p>Building a better society through responsible business practices</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="stakeholder-card">
                <div className="icon">
                  <i className="bi bi-people"></i>
                </div>
                <h3>Employee Development</h3>
                <ul>
                  <li><i className="bi bi-check"></i><span>Comprehensive training and skill development programs</span></li>
                  <li><i className="bi bi-check"></i><span>Safe and healthy working environment</span></li>
                  <li><i className="bi bi-check"></i><span>Equal opportunity and diversity promotion</span></li>
                  <li><i className="bi bi-check"></i><span>Work-life balance initiatives</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="stakeholder-card">
                <div className="icon">
                  <i className="bi bi-building"></i>
                </div>
                <h3>Supply Chain Responsibility</h3>
                <ul>
                  <li><i className="bi bi-check"></i><span>Ethical sourcing and procurement practices</span></li>
                  <li><i className="bi bi-check"></i><span>Supplier engagement and development programs</span></li>
                  <li><i className="bi bi-check"></i><span>Human rights due diligence</span></li>
                  <li><i className="bi bi-check"></i><span>Quality assurance and product safety</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="stakeholder-card">
                <div className="icon">
                  <i className="bi bi-globe"></i>
                </div>
                <h3>Community Engagement</h3>
                <ul>
                  <li><i className="bi bi-check"></i><span>Educational support and scholarship programs</span></li>
                  <li><i className="bi bi-check"></i><span>Local community development initiatives</span></li>
                  <li><i className="bi bi-check"></i><span>Disaster relief and emergency response</span></li>
                  <li><i className="bi bi-check"></i><span>Volunteer activities and employee engagement</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Management Section */}
      <section id="esg-management" className="esg-initiatives section">
        <div className="container section-title" data-aos="fade-up">
          <h2>ESG Management</h2>
          <p>Strengthening our Environmental, Social, and Governance framework</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="esg-card">
                <div className="icon">
                  <i className="bi bi-tree"></i>
                </div>
                <h3>Environmental Management</h3>
                <p>We implement comprehensive environmental management systems to minimize our ecological impact and promote sustainable resource use.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>ISO 14001 environmental management certification</span></li>
                  <li><i className="bi bi-check"></i><span>Climate change mitigation and adaptation strategies</span></li>
                  <li><i className="bi bi-check"></i><span>Biodiversity conservation initiatives</span></li>
                  <li><i className="bi bi-check"></i><span>Pollution prevention and control measures</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="esg-card">
                <div className="icon">
                  <i className="bi bi-heart"></i>
                </div>
                <h3>Social Contribution</h3>
                <p>We prioritize social value creation through responsible business practices and meaningful community engagement.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Occupational health and safety management</span></li>
                  <li><i className="bi bi-check"></i><span>Human rights protection and promotion</span></li>
                  <li><i className="bi bi-check"></i><span>Customer satisfaction and product responsibility</span></li>
                  <li><i className="bi bi-check"></i><span>Social investment and philanthropy</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="esg-card">
                <div className="icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>Corporate Governance</h3>
                <p>We maintain high standards of corporate governance to ensure transparency, accountability, and ethical business conduct.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Board of Directors oversight and structure</span></li>
                  <li><i className="bi bi-check"></i><span>Risk management and compliance systems</span></li>
                  <li><i className="bi bi-check"></i><span>Information disclosure and transparency</span></li>
                  <li><i className="bi bi-check"></i><span>Ethical standards and corporate culture</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals Section */}
      <section id="sustainability-goals" className="alt-services-2 section light-background">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src={`${process.env.PUBLIC_URL}/assets/img/Sustainability/skateHolder.png`} alt="Sustainability Goals" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h3>Our Sustainability Goals</h3>
              <p>We have established ambitious targets to guide our sustainability journey and measure our progress toward creating a better future.</p>
              <div className="icon-box">
                <i className="bi bi-bullseye"></i>
                <h4>Carbon Neutrality by 2050</h4>
                <p>Achieving carbon neutrality across our operations and value chain through energy efficiency, renewable energy, and innovative technologies.</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-water"></i>
                <h4>Water Resource Management</h4>
                <p>Reducing water consumption by 30% and implementing water recycling systems in all our manufacturing facilities by 2030.</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-arrow-up-circle"></i>
                <h4>Circular Economy</h4>
                <p>Achieving 95% waste recycling rate and increasing the use of recycled materials in our products to 50% by 2030.</p>
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

export default Services;