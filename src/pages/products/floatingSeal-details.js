import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS, useGLightbox, useSwiper } from '../../hooks/useExternalLibs';
import { setDefaultFavicon } from '../../utils/setFavicon';

const ProjectDetails = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  useGLightbox();
  useSwiper('.portfolio-details-slider', {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Load custom CSS and set favicon
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL}/assets/css/product-details.css`;
    document.head.appendChild(link);
    
    // Set the favicon
    setDefaultFavicon();
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="project-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>PRODUCTS</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Products</Link></li>
              <li className="current">Floating Seal ES100 & ES764</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Title and Navigation */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Floating Seal ES100 & ES764</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/products?tag=machinery">Machinery</Link></li>
                  <li className="nav-item"><Link to="/products?tag=undercarriage">Undercarriage</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section - Original Layout */}
      <section id="project-details" className="project-details section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/floating_seal.jpg`} alt="Floating Seal ES100 & ES764" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-1.jpg`} alt="Product Image 2" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-2.png`} alt="Product Image 3" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-3.png`} alt="Product Image 4" />
              </div>
              <div className="swiper-slide">
                <img src={`${process.env.PUBLIC_URL}/assets/img/product/fs-4.png`} alt="Product Image 5" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-description">
                <h2>Floating Seal ES100 & ES764</h2>
                <p>
                  Seals for undercarriages of construction machinery (track rollers, final drives, axles and idlers). 
                  Simple structure consisting of an O-ring and a seal ring made of special cast iron. 
                  Optimum seals for undercarriages of bulldozers and hydraulic excavators frequently exposed to sand, dirt and other foreign matter.
                  ES764 offers ease of designing and manufacturing housings.
                </p>
                <p>
                  Floating seals are simple products, consisting of two components: a seal ring made of special cast iron and a rubber component (O-ring/gasket). In use, two identical seals make a pair. The seal ring, which is a sliding component, is not in contact with the shaft since it is sustained by the rubber component, and therefore follows the radial and thrusting motions of the shaft closely.
                </p>
                <p>
                  Since they were developed for slurry applications, seal rings are made of an extremely hard, wear-resistant and corrosion-resistant material. The rubber component presses the seal ring's sliding surfaces and also serves as a seal. Therefore, it is made of a material that is highly resistant to cold temperatures and heat with little compression set for a longer useful life.
                </p>
                <p>
                  Main uses of floating seals include crawler rollers, travel drives and idlers of construction and agricultural machinery, and also for conveyors, mixers and various digging machines. In other words, they are used widely in relatively low-speed applications exposed to foreign matter.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-info">
                <h3>Product Information</h3>
                <ul>
                  <li><strong>Category</strong> <span>Machinery, Undercarriage</span></li>
                  <li><strong>Sealed fluid</strong> <span>Inside: lubricant, Outside: sand, dirt and mud</span></li>
                  <li><strong>Temperature</strong> <span>NBR: -40 to 100ºC, H-NBR: -30 to 130ºC, FKM: -10 to 200ºC</span></li>
                  <li><strong>Maximum circumferential velocity</strong> <span>MAX. 2m/sec</span></li>
                  <li><strong>Pressure</strong> <span>MAX. 0.2 MPaG</span></li>
                  <li><strong>Shaft diameter</strong> <span>φ38～φ429mm</span></li>
                  <li><strong>Material</strong> <span>Special cast iron seal ring, rubber O-ring/gasket</span></li>
                  <li><strong>Applications</strong> <span>Track rollers, final drives, axles, idlers, conveyors, mixers, digging machines</span></li>
                </ul>
                
                <div className="pt-3">
                  <Link to="/contact" className="btn-visit">Inquire About This Product</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Product specification example</h2>
                <p>Information about specification Product.</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>Sealed fluid</th>
                      <td>
                        <p>Inside: lubricant</p>
                        <p>Outside: sand, dirt and mud</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Temperature</th>
                      <td>
                        <p>NBR: -40 to 100ºC</p>
                        <p>H-NBR: -30 to 130ºC</p>
                        <p>FKM: -10 to 200ºC</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Maximum circumferential velocity</th>
                      <td>MAX. 2m/sec</td>
                    </tr>
                    <tr>
                      <th>Pressure</th>
                      <td>MAX. 0.2 MPaG</td>
                    </tr>
                    <tr>
                      <th>Shaft diameter</th>
                      <td>φ38～φ429mm</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: The above figures indicate the best conditions in individual cases and may differ according to the seal size. Contact us before use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Elegant and Modern */}
      <section className="contact-section section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-box" data-aos="fade-up">
                <Link to="/contact" className="contact-link">
                  <h3 className="contact-title">Contact Us</h3>
                  <p className="contact-text">Please contact us via our email form</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
            <section id="related-products" className="related-products section">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2>Related Products</h2>
                  <p>Explore our other similar products</p>
                </div>
                <div className="row gy-4">
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="product-card h-100">
                      <Link to="/project-details" className="card-link">
                        <div className="card-image-container">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/product/AC_compressor_lip_seal.jpg`} className="card-image" alt="Compressor Lip Seal" />
                        </div>
                        <div className="card-caption">
                          <span>for A/C compressor<br />Type A Mechanical seal</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="product-card h-100">
                      <Link to="/project-details" className="card-link">
                        <div className="card-image-container">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/product/WP_compact_mechanical_seal.jpg`} className="card-image" alt="WP Compact Mechanical Seal" />
                        </div>
                        <div className="card-caption">
                          <span>for Water Pump<br />EH795/EH790</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="product-card h-100">
                      <Link to="/project-details" className="card-link">
                        <div className="card-image-container">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/product/acv-1.png`} className="card-image" alt="Control Valve" />
                        </div>
                        <div className="card-caption">
                          <span>for Variable Displacement A/C Compressor<br />Control Valve</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
                    <Link to="/projects" className="btn btn-primary">To Products TOP</Link>
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
                  <li><Link to="/projects">Products</Link></li>
                  <li className="current">Floating Seal ES100 & ES764</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button - Adjusted Position */}
      <div className="floating-contact-button">
        <Link to="/contact" className="contact-button">
          <div className="contact-icon">
            <i className="bi bi-envelope"></i>
          </div>
          <p className="contact-text">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;