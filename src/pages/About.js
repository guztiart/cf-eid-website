import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, usePureCounter, useGLightbox } from '../hooks/useExternalLibs';

const About = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  usePureCounter();
  useGLightbox();
  
  // Additional initialization for PureCounter to ensure it works properly
  useEffect(() => {
    // Reinitialize PureCounter when component mounts
    const timer = setTimeout(() => {
      if (window.PureCounter) {
        // Initialize new instance
        new window.PureCounter();
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>About Company Eagle Industry Indonesia</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Company</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/building/eid_building_front.jpg`} alt="About Eagle Industry Indonesia" />
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h2 className="inner-title">PT Eagle Industry Indonesia</h2>
              <div className="our-story">
                <h4>Established Since 1996</h4>
                <h3>Our History</h3>
                <p>PT Eagle Industry Indonesia is part of Eagle Industry Co., Ltd., a global company based in Japan
                  known as a leader in manufacturing automotive and industrial components. Established in Indonesia in 1996,
                  we focus on producing mechanical seals, rubber bellows, and other precision components used in various industries,
                  including automotive, aerospace, and industrial equipment. With a commitment to quality and innovation, we continue to grow
                  to meet customer needs worldwide.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> <span>Producing high-quality automotive components with international standards.</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Prioritizing technological innovation in every production process.</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Committed to sustainability and corporate social responsibility.</span></li>
                </ul>
                <p>We believe that our success is built on the dedication of our team and customer trust. With modern production facilities and a professional team,
                  PT Eagle Industry Indonesia is ready to be your trusted partner.
                </p>
                <div className="watch-video d-flex align-items-center position-relative">
                  <i className="bi bi-play-circle"></i>
                  <a href="https://www.youtube.com/watch?v=4335-VJuJeA" className="glightbox stretched-link">Watch Video</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section id="stats-counter" className="stats-counter section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Statistics</h2>
          <p>We are proud of our achievements in providing the best solutions for customers and supporting industry growth.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="2" className="purecounter"></span>
                  <p>Global Customers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="2" className="purecounter"></span>
                  <p>Million Products Produced</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="300" data-purecounter-duration="2" className="purecounter"></span>
                  <p>Dedicated Employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alt Services Section */}
      <section id="alt-services" className="alt-services section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src={`${process.env.PUBLIC_URL}/assets/img/management/mrTsuru.jpg`} alt="Management" />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h3>Management Message</h3>
              <p>Our company was originally formed as the mechanical seal division of NOK Corporation
              The division became independent and incorporated under the name of Nippon Sealol Co., Ltd. in 1964, the year of the Tokyo Olympic Games, and the company name was changed to the current Eagle Industry Co., Ltd. (EKK) in 1978.

              Ever since embarking on this long journey, for a half century EKK has grown as a sealing solution provider. We have established ourselves as a comprehensive parts manufacturer in pursuit of mobility on the land, seas and in the skies, as well as a mechanical seal manufacturer offering EagleBurgmann brand products in alliance with Burgmann Industries, a German mechanical seal maker.

              EKK's products are used in a vast spectrum of mobility systems on the land, seas and in the skies. They include automobiles, motorcycles, construction machinery, and other so-called land-based "moving vehicles," tankers, container ships, bulk carriers and other ocean-going ships, as well as ferries, coastal ships, and fishing boats, rockets, jet and propeller aircraft, and helicopters.
              EagleBurgmann products are also used in pumps, compressors, blowers, and agitators mounted in production facilities at oil refineries, and in the petrochemical, steel, pulp and paper, food, pharmaceutical, electric power, and many other industries.

              No matter where they are used, one common objective of all our products is to prevent liquids, gases and other fluids from leaking from rotating machines during operation, and for this reason we can proudly say that together with our customers we have contributed to environmental protection and energy conservation. We have also developed an integrated production system that covers the entire process from the development of materials right through to production.
              This system is built around our superior seal, power transmission, valve and hydraulic technologies, as well as our special processing and welding techniques that support them. With it, we are meeting customer requirements, which are becoming increasingly demanding as rotating machines operate at higher speeds, temperature, and pressure.

              We will continue to hone our technological prowess to meet the increasingly specialized and complex needs of our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alt Services 2 Section */}
      <section id="alt-services-2" className="alt-services-2 section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h3>Managing Director Message</h3>
              <p>PT Eagle Industry Indonesia was established in 1996 as part of Eagle Industry Co., Ltd.'s global expansion strategy. Located in EJIP Industrial Park, Cikarang, our facility represents Eagle Industry's commitment to the growing Southeast Asian market.

              Our Indonesian operations specialize in manufacturing high-precision mechanical seals, rubber bellows, and sealing components for automotive, industrial, and marine applications. We serve both domestic and international markets, with a focus on quality that meets Japanese manufacturing standards.

              Since our establishment, we have built strong relationships with major automotive manufacturers and industrial companies in Indonesia and throughout the region. Our commitment to excellence has earned us recognition as a reliable supplier of critical sealing solutions.

              We continue to invest in technology and human resources development to ensure we meet the evolving needs of our customers. Our team of skilled engineers and technicians work diligently to maintain the highest standards of quality and innovation that Eagle Industry is known for worldwide.

              We are grateful for the trust our customers place in us and remain dedicated to contributing to Indonesia's industrial development through our products and services.</p>
              <div className="row">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>Quality Excellence</h4>
                    <p>Maintaining Japanese quality standards in all our manufacturing processes and products</p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>Technical Innovation</h4>
                    <p>Continuously developing advanced sealing solutions for demanding applications</p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>Customer Focus</h4>
                    <p>Building long-term partnerships through reliability and exceptional service</p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>Sustainable Growth</h4>
                    <p>Contributing to environmental protection through efficient sealing technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/management/mrKishida1.jpg`} alt="Managing Director" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="history section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our History</h2>
          <p>The journey of PT Eagle Industry Indonesia as part of Eagle Industry Co., Ltd., a global leader in sealing technology and precision components.</p>
        </div>
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <h3>Origin and Establishment</h3>
              <p>PT Eagle Industry Indonesia was established in 1996 as a branch of Eagle Industry Co., Ltd., a Japanese company originating from the mechanical seal division of NOK Corporation. This division became independent in 1964 under the name Nippon Sealol Co., Ltd., and changed its name to Eagle Industry Co., Ltd. in 1978.</p>
              <p>In Indonesia, we began operations at EJIP Industrial Park, Cikarang, focusing on the production of mechanical seals, rubber bellows, and precision components for the automotive, aerospace, and industrial equipment industries.</p>
            </div>
            <div className="features-image col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eidOld.webp`} alt="Origin and Establishment" />
            </div>
          </div>
          <div className="row justify-content-around gy-4 mt-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h3>Growth and Innovation</h3>
              <p>Since our establishment, we have grown rapidly by adopting advanced technology from Japan. In the 2000s, we expanded production facilities to meet global demand, including an alliance with Burgmann Industries for EagleBurgmann products.</p>
              <p>We developed an integrated production system from material development to final production, supporting the needs of high-speed, high-temperature, and high-pressure rotating machines.</p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Factory expansion in 2010 to increase capacity.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Implementation of international quality standards such as ISO 9001 and IATF 16949.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Contribution to environmental protection through fluid leakage prevention.</span></li>
              </ul>
            </div>
            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eid2.jpg`} alt="Growth and Innovation" />
            </div>
          </div>
          <div className="row justify-content-around gy-4 mt-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <h3>Present and Future</h3>
              <p>To date, PT Eagle Industry Indonesia has served hundreds of clients in various sectors, with a commitment to innovation, sustainability, and social responsibility. We continue to sharpen our technological capabilities to meet increasingly complex customer needs.</p>
              <p>In the future, we aim to become a leader in mobility solutions on land, sea, and air, while supporting energy conservation and environmental protection.</p>
              <div className="watch-video d-flex align-items-center position-relative">
                <i className="bi bi-play-circle"></i>
                <a href="https://youtu.be/FW3e8x1CNEo?si=B8lB0Svd3DXW3A11" className="glightbox stretched-link">Watch History Video</a>
              </div>
            </div>
            <div className="features-image col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eid1.jpg`} alt="Present and Future" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="company-overview" className="company-overview section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Company Overview</h2>
          <p>Information about PT Eagle Industry Indonesia, part of Eagle Industry Co., Ltd., dedicated to providing high-quality sealing solutions and precision components.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>PT Eagle Industry Indonesia</td>
                  </tr>
                  <tr>
                    <th scope="row">Established</th>
                    <td>1996</td>
                  </tr>
                  <tr>
                    <th scope="row">Representative</th>
                    <td>Mr. Tsuru: President Director</td>
                  </tr>
                  <tr>
                    <th scope="row">Headquarters</th>
                    <td>EJIP Industrial Park, Plot 8G, Sukaresmi, Cikarang Selatan, Kabupaten Bekasi, Jawa Barat 17550<br/>Tel: (021) 8970178<br/>Email: riyanda.senjaya@ekkeagle.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Paid-in Capital</th>
                    <td>IDR 45,000,000,000</td>
                  </tr>
                  <tr>
                    <th scope="row">Number of Employees</th>
                    <td>300 (As of the end of December 2024)</td>
                  </tr>
                  <tr>
                    <th scope="row">Business Outline</th>
                    <td>Manufacturing and marketing of mechanical seals, rubber bellows, and precision components for automotive, aerospace, and industrial equipment</td>
                  </tr>
                  <tr>
                    <th scope="row">Public Auditing Firm</th>
                    <td>PRICEWATERHOUSECOOPERS Indonesia</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 features-image" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eid1.jpg`} alt="Company Overview" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;