import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useIsotope, useGLightbox } from '../hooks/useExternalLibs';

const Projects = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  useIsotope();
  useGLightbox();

  return (
    <div className="projects-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>Products</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Products</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="products section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Products</h2>
          <p>Explore our range of high-quality sealing solutions and precision components designed for automotive, marine, aerospace, and general industry applications.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} className="card-img-top" alt="Floating Seal" />
                <div className="card-body product-info">
                  <h4 className="card-title">EH795 EH790 for Water Pump</h4>
                  <p className="card-text">Capable for high-speed rotation. Mass-production by fully automated assembling lines and supplied to water pump makers worldwide. By its unitized design, EH795 supports easy installation into customer application.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/eh795-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="card-img-top" alt="Mechanical Seal" />
                <div className="card-body product-info">
                  <h4 className="card-title">Lip Seal For A/C Compressor</h4>
                  <p className="card-text">Rotating shaft seals exclusively designed for car air-conditioning compressors. Eagle Industry's original design featuring compactness and high reliability. Helps eliminate CFC leakage causing global warming.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/lipSeal-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Rudder_seal.PNG`} className="card-img-top" alt="Rudder Seal" />
                <div className="card-body product-info">
                  <h4 className="card-title">Rudder Seal</h4>
                  <p className="card-text">Rudder seal manufactured with high-performance, self-lubricating lip seals designed to be mounted above the rudder bearing to prevent the ingress of sea water into the hull.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/rudderSeal-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/floating_seal.jpg`} className="card-img-top" alt="Floating Seal" />
                <div className="card-body product-info">
                  <h4 className="card-title">Floating Seal</h4>
                  <p className="card-text">Seals for undercarriages of construction machinery. Simple structure consisting of an O-ring and a seal ring made of special cast iron. Optimum seals for undercarriages of bulldozers and hydraulic excavators.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/floatingSeal-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Detail EVK.jpg`} className="card-img-top" alt="Water Lubricated Stern Tube Seal" />
                <div className="card-body product-info">
                  <h4 className="card-title">Water Lubricated Stern Tube Seal - EVK2RV</h4>
                  <p className="card-text">A compact, high performance water lubricated seal having excellent vibration resistance and sealing performance. The EVK type seal is the easiest of the seals on the market for installation and operation.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/evk2rv-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/EVR.png`} className="card-img-top" alt="Water Lubricated Stern Tube Bearing" />
                <div className="card-body product-info">
                  <h4 className="card-title">Water Lubricated Stern Tube Bearing - EVR</h4>
                  <p className="card-text">Excellent Durability and Vibration Absorption. Designed specifically for marine applications with water lubricated shafting systems.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/evr-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/EVU.png`} className="card-img-top" alt="Water Lubricated Stern Tube Bearing" />
                <div className="card-body product-info">
                  <h4 className="card-title">Water Lubricated Stern Tube Bearing - EVU</h4>
                  <p className="card-text">Poly-Urethane bearing "EVU" is developed for water lubricated stern tube system based on the technology cultivated in our water lubricated bearing experience.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/evu-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/Enginer.png`} className="card-img-top" alt="Service Engineer" />
                <div className="card-body product-info">
                  <h4 className="card-title">Service Engineer</h4>
                  <p className="card-text">Professional engineering services for your ship's sealing systems. We provide highly skilled and experienced service engineers to handle all aspects of marine sealing.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/serviceEngineer-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/AirCutValve.jpg`} className="card-img-top" alt="Service Engineer" />
                <div className="card-body product-info">
                  <h4 className="card-title">Air Cut Valve</h4>
                  <p className="card-text">Professional engineering services for your ship's sealing systems. We provide highly skilled and experienced service engineers to handle all aspects of marine sealing.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/airCutValve-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/reed_valve_double.jpg`} className="card-img-top" alt="Service Engineer" />
                <div className="card-body product-info">
                  <h4 className="card-title">Reed Valve</h4>
                  <p className="card-text">Professional engineering services for your ship's sealing systems. We provide highly skilled and experienced service engineers to handle all aspects of marine sealing.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/reedValve-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/oring-2.png`} className="card-img-top" alt="Service Engineer" />
                <div className="card-body product-info">
                  <h4 className="card-title">O Ring</h4>
                  <p className="card-text">Professional engineering services for your ship's sealing systems. We provide highly skilled and experienced service engineers to handle all aspects of marine sealing.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/oRing-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 product-item">
              <div className="card product-card h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/marine ace.png`} className="card-img-top" alt="Service Engineer" />
                <div className="card-body product-info">
                  <h4 className="card-title">Marine Ace (MAS)</h4>
                  <p className="card-text">Professional engineering services for your ship's sealing systems. We provide highly skilled and experienced service engineers to handle all aspects of marine sealing.</p>
                  <div className="btn-container">
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                    <a href="/products/mas-details" className="btn btn-outline-primary btn-sm">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;