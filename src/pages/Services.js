import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';

const Services = () => {
  // Initialize external libraries using custom hooks
  useAOS();

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

      {/* Sustainability Philosophy Section */}
      <section id="sustainability-philosophy" className="sustainability-concepts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Sustainability Philosophy</h2>
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
              <p>At Eagle Industry Indonesia, we conduct comprehensive environmental preservation activities in accordance with our environmental policy. As part of the EKK Group's ISO 14001-certified environmental management system, we implement specific initiatives to minimize our ecological impact.</p>
              <div className="icon-box">
                <i className="bi bi-droplet"></i>
                <h4>Water Resource Management</h4>
                <p>Our production sites monitor water quality and soil conditions in compliance with environmental laws. We reduce water consumption by recirculating cooling water and converting cleaning processes to solvent-based methods that don't require water usage.</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-lightning-charge"></i>
                <h4>Global Warming Mitigation</h4>
                <p>We contribute to carbon neutrality goals by developing energy-conserving products, adopting renewable energy, replacing equipment with energy-efficient models, switching to LED lighting, and sealing compressed air leaks in our production processes.</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-recycle"></i>
                <h4>Industrial Waste Reduction</h4>
                <p>We work to achieve a recycling ratio of at least 98% by analyzing waste in detail to determine recyclability. Our facilities implement comprehensive waste management programs including recycling and reuse of materials.</p>
              </div>
            </div>
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/Sustainability/skateHolder.png`} alt="Environmental Initiatives" style={{ height: 'auto', maxHeight: 'none', objectFit: 'contain', width: '100%' }} />
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
                  <li><i className="bi bi-check"></i><span>Annual environmental mindset training for all employees</span></li>
                  <li><i className="bi bi-check"></i><span>Occupational health and safety management systems</span></li>
                  <li><i className="bi bi-check"></i><span>Human rights protection and promotion initiatives</span></li>
                  <li><i className="bi bi-check"></i><span>Environmental performance disclosure on intranet portals</span></li>
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
                  <li><i className="bi bi-check"></i><span>Ethical sourcing and procurement policies</span></li>
                  <li><i className="bi bi-check"></i><span>Supplier engagement and development programs</span></li>
                  <li><i className="bi bi-check"></i><span>Human rights due diligence throughout supply chain</span></li>
                  <li><i className="bi bi-check"></i><span>Quality assurance and product responsibility</span></li>
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
                  <li><i className="bi bi-check"></i><span>Social investment and philanthropy programs</span></li>
                  <li><i className="bi bi-check"></i><span>Local community development initiatives</span></li>
                  <li><i className="bi bi-check"></i><span>Biodiversity conservation and invasive species management</span></li>
                  <li><i className="bi bi-check"></i><span>Endorsement of Keidanren's Biodiversity Declaration</span></li>
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
                <p>The EKK Group conducts environmental preservation activities in accordance with our environmental policy. All subsidiaries in Japan are ISO 14001-certified and participate in an integrated environmental management system.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>ISO 14001 environmental management certification</span></li>
                  <li><i className="bi bi-check"></i><span>Annual identification of environmental laws and regulations</span></li>
                  <li><i className="bi bi-check"></i><span>Environmental internal audits and patrols</span></li>
                  <li><i className="bi bi-check"></i><span>Emergency response procedures for environmental accidents</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="esg-card">
                <div className="icon">
                  <i className="bi bi-heart"></i>
                </div>
                <h3>Social Contribution</h3>
                <p>We prioritize social value creation through responsible business practices and meaningful community engagement, following the EKK Human Rights Policy and Occupational Health and Safety Policies.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Occupational health and safety management systems</span></li>
                  <li><i className="bi bi-check"></i><span>Human rights protection and promotion initiatives</span></li>
                  <li><i className="bi bi-check"></i><span>Customer satisfaction and product responsibility</span></li>
                  <li><i className="bi bi-check"></i><span>Social investment and philanthropy activities</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="esg-card">
                <div className="icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>Corporate Governance</h3>
                <p>We maintain high standards of corporate governance to ensure transparency, accountability, and ethical business conduct through our Basic Stance on Corporate Governance.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Board of Directors oversight and structure</span></li>
                  <li><i className="bi bi-check"></i><span>Compliance and Risk Management systems</span></li>
                  <li><i className="bi bi-check"></i><span>Information security policy implementation</span></li>
                  <li><i className="bi bi-check"></i><span>Anti-Corruption and Bribery Policy adherence</span></li>
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
              <img src={`${process.env.PUBLIC_URL}/assets/img/Sustainability/skateHolder.png`} alt="Sustainability Goals" style={{ height: 'auto', maxHeight: 'none', objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h3>Our Sustainability Goals</h3>
              <p>We have established specific targets aligned with the Japanese government's carbon neutrality goal and our commitment to environmental preservation.</p>
              <div className="icon-box">
                <i className="bi bi-bullseye"></i>
                <h4>Carbon Neutrality Contribution</h4>
                <p>Contributing to Japan's carbon neutrality target through development of environmentally friendly products that conserve energy and reduce environmental burden, while adopting renewable energy in our production processes.</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-water"></i>
                <h4>Water Resource Conservation</h4>
                <p>Continuously reducing water consumption through recirculation of cooling water and conversion to waterless cleaning processes in our manufacturing facilities.</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-arrow-up-circle"></i>
                <h4>Waste Recycling Excellence</h4>
                <p>Maintaining our target of achieving a recycling ratio of at least 98% for industrial waste through detailed analysis and implementation of innovative recycling solutions.</p>
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