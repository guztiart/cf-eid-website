import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS, usePureCounter, useIsotope } from '../hooks/useExternalLibs';

const Home = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  usePureCounter();
  useIsotope();

  // Handle tab navigation
  React.useEffect(() => {
    const tabNavs = document.querySelectorAll('.js-tab-nav');
    const tabBoxes = document.querySelectorAll('.js-tab-box');

    tabNavs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all tabs
        tabNavs.forEach(nav => nav.classList.remove('is-active'));
        
        // Add active class to clicked tab
        tab.classList.add('is-active');
        
        // Hide all tab boxes
        tabBoxes.forEach(box => {
          box.style.display = 'none';
        });
        
        // Show the corresponding tab box
        const targetId = tab.getAttribute('href').substring(1);
        const targetBox = document.getElementById(targetId);
        if (targetBox) {
          targetBox.style.display = 'block';
        }
      });
    });

    // Handle scroll down indicator
    const scrollIndicator = document.querySelector('.p-hero-top__scroll');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const productsSection = document.querySelector('.p-top-bg');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);

  return (
    <div className="index-page">
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="p-hero-top">
          <div className="p-hero-top__mv">
            <div className="p-hero-top__video">
              <iframe src="https://www.youtube.com/embed/1mBq36R4rd8?autoplay=1&mute=1&loop=1&playlist=1mBq36R4rd8&controls=0&showinfo=0&autohide=1&modestbranding=1&vq=hd1080&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" 
              allowFullScreen 
              className="hero-video" >
              </iframe>
            </div>
            <div className="p-hero-top__scroll">
              <div className="scroll-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="scroll-text">Scroll Down</div>
            </div>
          </div>
          <div className="p-hero-top__button">
            <a className="p-hero-top__button-link js-yt-popup" href="https://www.youtube.com/watch?v=1mBq36R4rd8" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-play-circle"></i>
              <span>Play full movie</span>
            </a>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="get-started section">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
              <div className="content">
                <h3>Inovasi dan Keunggulan dalam Manufaktur Presisi.</h3>
                <p>PT Eagle Industry Indonesia adalah bagian dari Eagle Industry Co., Ltd., Jepang, yang telah beroperasi selama puluhan tahun dalam menyediakan komponen berkualitas tinggi untuk berbagai industri. Kami mengutamakan teknologi canggih, keandalan produk, dan kepuasan pelanggan untuk mendukung kebutuhan pasar global.</p>
                <p>Dengan fasilitas produksi modern di Indonesia, kami memastikan standar kualitas internasional dan pengiriman yang tepat waktu untuk memenuhi kebutuhan pelanggan kami di berbagai sektor.</p>
              </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
              <form action="forms/quote.php" method="post" className="php-email-form">
                <h3>Hubungi Kami</h3>
                <p>Kirimkan pertanyaan Anda untuk informasi lebih lanjut tentang produk dan layanan kami.</p>
                <div className="row gy-3">
                  <div className="col-12">
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="col-12">
                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>
                    <button type="submit">Kirimkan</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="p-top-bg -product">
        <div className="p-top-bg__inner">
          <div className="p-top-heading -product -white">
            <div className="p-top-heading__title aos-init" data-aos="fade-up">
              <h2 className="p-top-heading__title-main text-white">PRODUCTS</h2>
              <p className="p-top-heading__title-text">We provide mechanical seals and various mechanical products for land, sea and air mobility, plant equipment and semiconductor manufacturing equipment.</p>
            </div>
            <div className="p-top-heading__link aos-init" data-aos="fade-up">
              <Link to="/products" className="p-top-heading__link-text">Learn More</Link>
            </div>
            <ul className="p-top-product-tab__list">
              <li className="p-top-product-tab__list-item">
                <a className="p-top-product-tab__list-link js-tab-nav is-active" href="#tab-top-category">Search by <br className="_d-md-none" />category</a>
              </li>
              <li className="p-top-product-tab__list-item">
                <a className="p-top-product-tab__list-link js-tab-nav" href="#tab-top-industry">Search by <br className="_d-md-none" />Industry</a>
              </li>
              <li className="p-top-product-tab__list-item">
                <a className="p-top-product-tab__list-link js-tab-nav" href="#tab-top-keyword">Search by <br className="_d-md-none" />keyword</a>
              </li>
            </ul>
          </div>
          <div className="p-top-product-tab">
            <div className="p-top-product-tab__box js-tab-box" id="tab-top-category" style={{}}>
              <ul className="p-top-list aos-init" data-aos="fade-up">
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/mechanical-seals">Mechanical Seals</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/accumulator">Accumulators</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/actuators">Actuators</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/gas-seals">Gas Seals</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/aerospace-seal">Aerospace Seal</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/bearings">Bearings</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/magnetic-fluid-vacuum-seal">Magnetic Fluid Vacuum Seal</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/segmented-seal">Segmented Seal</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/stern-tube-seals">Stern tube seals</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/tanks">Tanks</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/joint-joint">Coupling, Joint</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/packing-gasket">Packing, Gasket</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/valves">Valves</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/filters">Filters</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/brush-seal">Brush Seal</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/floating-seal">Floating Seal</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/bellows-thin-plate-metal-processed">Metal bellows, Thin-Walled Metal parts</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/supply-systems">Supply Systems</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/hydraulic-energy-regeneration-device">Hydraulic Regeneration System</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/lip-seal">Lip Seal</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/flow-meter">Flow meter</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/glidex">GlideX</Link></li>
              </ul>
            </div>
            <div className="p-top-product-tab__box js-tab-box" id="tab-top-industry" style={{ display: 'none' }}>
              <ul className="p-top-list">
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/oil-gas">Oil & Gas</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/machinery">Construction, Agriculture, Transporter</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/automobile">Automobile</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/energy">Energy</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/aerospace">Aerospace</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/pulp-paper">Pulp & Paper</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/housing-equipment">Housing Equipment</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/food-beveragepharmaceutical">Food & Beverage, Pharmaceutical</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/water-irrigation">Water, Irrigation</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/refinery-petrochemical">Refinery, Petrochemical</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/marine">Marine</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/steel">Steel</Link></li>
                <li className="p-top-list__item"><Link className="p-top-list__link" to="/products/semiconductor">Semiconductor</Link></li>
              </ul>
            </div>
            <div className="p-top-product-tab__box js-tab-box" id="tab-top-keyword" style={{ display: 'none' }}>
              <div className="p-product-search _mt-0">
                <form role="search" action="/products" id="searchform">
                  <input className="p-product-search__box" type="search" defaultValue="" name="s" id="s" placeholder="Enter product keywords" />
                  <button className="p-product-search__button" type="submit"></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="services section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Layanan Kami</h2>
          <p>Kami menyediakan solusi lengkap untuk kebutuhan komponen presisi Anda.</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-mountain-city"></i>
                </div>
                <h3>Manufaktur Kustom</h3>
                <p>Kami menawarkan solusi manufaktur kustom untuk memenuhi kebutuhan spesifik pelanggan di berbagai industri.</p>
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Dukungan Teknis</h3>
                <p>Tim ahli kami memberikan dukungan teknis untuk memastikan performa optimal dari produk kami.</p>
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-compass-drafting"></i>
                </div>
                <h3>Layanan Purna Jual</h3>
                <p>Kami menyediakan layanan purna jual yang andal untuk menjamin kepuasan pelanggan.</p>
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-trowel-bricks"></i>
                </div>
                <h3>Asperiores Commodit</h3>
                <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <h3>Velit Doloremque</h3>
                <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Dolori Architecto</h3>
                <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
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
              <img src="/assets/img/product/Enginer.png" alt="Engineer" />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h2>Service Engineer</h2>
              <p>Professional engineering services for your ship's sealing systems.</p>
              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-easel flex-shrink-0"></i>
                <div className="text-start">
                  <h4><a href="" className="stretched-link">Bonding & Assembling</a></h4>
                  <p>Experienced engineers ensure every bonding and assembling process is performed with precision for reliable sealing systems.</p>
                </div>
              </div>
              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-patch-check flex-shrink-0"></i>
                <div className="text-start">
                  <h4><a href="" className="stretched-link">Inspection</a></h4>
                  <p>Thorough inspection to guarantee seals meet the highest maritime standards and deliver safe, leak-free performance.</p>
                </div>
              </div>
              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div className="text-start">
                  <h4><a href="" className="stretched-link">On-site Supervision</a></h4>
                  <p>Professional supervision during installation, ensuring compliance and accuracy at every stage of the process.</p>
                </div>
              </div>
              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="600">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div className="text-start">
                  <h4><a href="" className="stretched-link">Performance & Reliability</a></h4>
                  <p>Seals optimized to prevent leakage, improve efficiency, and extend the lifespan of critical spare parts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <ul className="nav nav-tabs row g-2 d-flex" data-aos="fade-up" data-aos-delay="100" role="tablist">
            <li className="nav-item col-3" role="presentation">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
                <h4>Mechanical Seal</h4>
              </a>
            </li>
            <li className="nav-item col-3" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex="-1" role="tab">
                <h4>Floating Seal</h4>
              </a>
            </li>
            <li className="nav-item col-3" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex="-1" role="tab">
                <h4>Lip Seal</h4>
              </a>
            </li>
            <li className="nav-item col-3" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex="-1" role="tab">
                <h4>Rudder</h4>
              </a>
            </li>
          </ul>
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center text-start">
                  <h3>Mechanical Seal</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/product/WP_compact_mechanical_seal.jpg" alt="Mechanical Seal" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center text-start">
                  <h3>Floating Seal</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/product/floating_seal.jpg" alt="Floating Seal" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center text-start">
                  <h3>Lip Seal</h3>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                  </ul>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/product/AC_compressor_lip_seal.jpg" alt="Compressor Lip Seal" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center text-start">
                  <h3>Rudder</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/product/Rudder_seal.PNG" alt="Rudder Seal" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      {/* <section id="recent-blog-posts" className="recent-blog-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Recent NEWS Posts</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container">
          <div className="row gy-5">
            <div className="col-xl-4 col-md-6">
              <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="100">
                <div className="post-img position-relative overflow-hidden">
                  <img src="/assets/img/blog/blog-1.jpg" className="img-fluid" alt="Blog 1" />
                  <span className="post-date">December 12</span>
                </div>
                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="200">
                <div className="post-img position-relative overflow-hidden">
                  <img src="/assets/img/blog/blog-2.jpg" className="img-fluid" alt="Blog 2" />
                  <span className="post-date">July 17</span>
                </div>
                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Mario Douglas</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="post-item position-relative h-100">
                <div className="post-img position-relative overflow-hidden">
                  <img src="/assets/img/blog/blog-3.jpg" className="img-fluid" alt="Blog 3" />
                  <span className="post-date">September 05</span>
                </div>
                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Lisa Hunter</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;