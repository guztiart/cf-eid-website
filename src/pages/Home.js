import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAOS, usePureCounter, useIsotope, useGLightbox } from '../hooks/useExternalLibs';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  usePureCounter();
  useIsotope();
  useGLightbox();
  
  // Get navigate function for programmatic navigation
  const navigate = useNavigate();
  
  // Get translation function
  const { t } = useLanguage();
  
  // Load custom CSS for button styling
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL}/assets/css/product-details.css`;
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  // Handle category click
  const handleCategoryClick = (category) => {
    navigate('/products', { state: { filter: 'category', value: category } });
  };
  
  // Handle industry click
  const handleIndustryClick = (industry) => {
    navigate('/products', { state: { filter: 'industry', value: industry } });
  };

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
              <iframe src="https://www.youtube.com/embed/Ep1aIVjRWLU?autoplay=1&mute=1&loop=1&playlist=Ep1aIVjRWLU&controls=0&showinfo=0&autohide=1&modestbranding=1&vq=hd1080&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1"
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
              <div className="scroll-text">{t('home.scrollDown')}</div>
            </div>
          </div>
          <div className="p-hero-top__button" >
            <a className="p-hero-top__button-link glightbox" href="https://youtu.be/Ep1aIVjRWLU?si=UTIcLpgOteLg_hhe" rel="noopener noreferrer">
              <i className="bi bi-play-circle"></i>
              <span>{t('home.playFullMovie')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="get-started section">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-lg-8 text-center" data-aos="zoom-out" data-aos-delay="100">
              <div className="content">
                <h3 className="mb-4">{t('home.innovationTitle')}</h3>
                <p className="mb-3">{t('home.innovationDesc1')}</p>
                <p>{t('home.innovationDesc2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="p-top-bg -product">
        <div className="p-top-bg__inner">
          <div className="p-top-heading -product -white">
            <div className="p-top-heading__title aos-init" data-aos="fade-up">
              <h2 className="p-top-heading__title-main text-white">{t('home.productsTitle')}</h2>
              <p className="p-top-heading__title-text">{t('home.productsDesc')}</p>
            </div>
            <div className="p-top-heading__link aos-init" data-aos="fade-up">
              <Link to="/products" className="p-top-heading__link-text">{t('home.learnMore')}</Link>
            </div>
            <ul className="p-top-product-tab__list">
              <li className="p-top-product-tab__list-item">
                <a className="p-top-product-tab__list-link js-tab-nav is-active" href="#tab-top-category">{t('home.searchByCategory')}</a>
              </li>
              <li className="p-top-product-tab__list-item">
                <a className="p-top-product-tab__list-link js-tab-nav" href="#tab-top-industry">{t('home.searchByIndustry')}</a>
              </li>
              <li className="p-top-product-tab__list-item">
                <a className="p-top-product-tab__list-link js-tab-nav" href="#tab-top-keyword">{t('home.searchByKeyword')}</a>
              </li>
            </ul>
          </div>
          <div className="p-top-product-tab">
            <div className="p-top-product-tab__box js-tab-box" id="tab-top-category" style={{}}>
              <ul className="p-top-list aos-init" data-aos="fade-up">
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick('floating-seal');
                    }}
                  >
                    {t('home.floatingSeal')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick('mechanical-seals');
                    }}
                  >
                    {t('home.mechanicalSeals')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick('lip-seal');
                    }}
                  >
                    {t('home.lipSeal')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick('valves');
                    }}
                  >
                    {t('home.valves')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick('accumulators');
                    }}
                  >
                    {t('home.accumulators')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick('water-lubricated-stern-tube-seal');
                    }}
                  >
                    {t('home.waterLubricatedSternTubeSeal')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick('water-lubricated-stern-tube-bearing');
                    }}
                  >
                    {t('home.waterLubricatedSternTubeBearing')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick('service-engineer');
                    }}
                  >
                    {t('home.serviceEngineer')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="p-top-product-tab__box js-tab-box" id="tab-top-industry" style={{ display: 'none' }}>
              <ul className="p-top-list">
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleIndustryClick('oil-gas');
                    }}
                  >
                    {t('home.oilGas')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleIndustryClick('water-irrigation');
                    }}
                  >
                    {t('home.machinery')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleIndustryClick('marine');
                    }}
                  >
                    {t('home.automobile')}
                  </Link>
                </li>
                <li className="p-top-list__item">
                  <Link
                    className="p-top-list__link"
                    to="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleIndustryClick('semiconductor');
                    }}
                  >
                    {t('home.marine')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="p-top-product-tab__box js-tab-box" id="tab-top-keyword" style={{ display: 'none' }}>
              <div className="p-product-search _mt-0">
                <form role="search" action="/products" id="searchform">
                  <input className="p-product-search__box" type="search" defaultValue="" name="s" id="s" placeholder={t('home.enterKeywords')} />
                  <button className="p-product-search__button" type="submit"></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Service Section */}
      <section id="services" className="services section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.ourServices')}</h2>
          <p>{t('home.servicesDesc')}</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-mountain-city"></i>
                </div>
                <h3>{t('home.customManufacturing')}</h3>
                <p>{t('home.customManufacturingDesc')}</p>
                <Link to="/services/custom-manufacturing" className="readmore stretched-link">{t('home.readMore')} <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>{t('home.technicalSupport')}</h3>
                <p>{t('home.technicalSupportDesc')}</p>
                <Link to="/services/technical-support" className="readmore stretched-link">{t('home.readMore')} <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-compass-drafting"></i>
                </div>
                <h3>{t('home.afterSalesService')}</h3>
                <p>{t('home.afterSalesServiceDesc')}</p>
                <Link to="/services/after-sales-service" className="readmore stretched-link">{t('home.readMore')} <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-trowel-bricks"></i>
                </div>
                <h3>{t('home.qualityAssurance')}</h3>
                <p>{t('home.qualityAssuranceDesc')}</p>
                <Link to="/services/quality-assurance" className="readmore stretched-link">{t('home.readMore')} <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <h3>{t('home.researchDevelopment')}</h3>
                <p>{t('home.researchDevelopmentDesc')}</p>
                <Link to="/services/research-development" className="readmore stretched-link">{t('home.readMore')} <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>{t('home.globalSupplyChain')}</h3>
                <p>{t('home.globalSupplyChainDesc')}</p>
                <Link to="/services/global-supply-chain" className="readmore stretched-link">{t('home.readMore')} <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alt Services Section
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
      </section> */}

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <ul className="nav nav-tabs row g-2 d-flex" data-aos="fade-up" data-aos-delay="100" role="tablist">
            <li className="nav-item col-3" role="presentation">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
                <h4>{t('home.floatingSeal')}</h4>
              </a>
            </li>
            <li className="nav-item col-3" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex="-1" role="tab">
                <h4>{t('home.mechanicalSealFeature')}</h4>
              </a>
            </li>
            <li className="nav-item col-3" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex="-1" role="tab">
                <h4>{t('home.lipSealFeature')}</h4>
              </a>
            </li>
            <li className="nav-item col-3" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex="-1" role="tab">
                <h4>{t('home.rudder')}</h4>
              </a>
            </li>
          </ul>
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center text-start">
                  <h3>{t('home.floatingSeal')}</h3>
                  <p className="fst-italic">
                    {t('home.floatingSealDesc')}
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.floatingSealFeature1')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.floatingSealFeature2')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.floatingSealFeature3')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.floatingSealFeature4')}</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/product/fs-1.png" alt="Floating Seal" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center text-start">
                  <h3>{t('home.mechanicalSealFeature')}</h3>
                  <p className="fst-italic">
                    {t('home.mechanicalSealDesc')}
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.mechanicalSealFeature1')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.mechanicalSealFeature2')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.mechanicalSealFeature3')}</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/product/mech-seal-4.png" alt="Mechanical Seal" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center text-start">
                  <h3>{t('home.lipSealFeature')}</h3>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.lipSealFeature1')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.lipSealFeature2')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.lipSealFeature3')}</span></li>
                  </ul>
                  <p className="fst-italic">
                    {t('home.lipSealDesc')}
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
                  <h3>{t('home.rudder')}</h3>
                  <p className="fst-italic">
                    {t('home.rudderDesc')}
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.rudderFeature1')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.rudderFeature2')}</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>{t('home.rudderFeature3')}</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/product/rudder-1.png" alt="Rudder Seal" className="img-fluid" />
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