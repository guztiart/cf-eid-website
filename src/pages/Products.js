import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAOS, useIsotope, useGLightbox } from '../hooks/useExternalLibs';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  useIsotope();
  useGLightbox();
  
  // Get location to access state passed from navigation
  const location = useLocation();
  const { t } = useLanguage();
  const [filterInfo, setFilterInfo] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('category');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeIndustry, setActiveIndustry] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [animatingProducts, setAnimatingProducts] = useState(false);
  
  // Product data structure with categories
  const allProducts = [
    {
      id: 5,
      nameKey: "products.floatingSeal",
      descKey: "products.floatingSealDesc",
      category: "floating-seal",
      image: "/assets/img/product/fs-1.png",
      detailsLink: "/products/floatingSeal-details"
    },
    {
      id: 1,
      nameKey: "products.eh795",
      descKey: "products.eh795Desc",
      category: "mechanical-seals",
      image: "/assets/img/product/mech-seal-4.png",
      detailsLink: "/products/eh795-details"
    },
    {
      id: 2,
      nameKey: "products.lipSealAc",
      descKey: "products.lipSealAcDesc",
      category: "lip-seal",
      image: "/assets/img/product/AC_compressor_lip_seal.jpg",
      detailsLink: "/products/lipSeal-details"
    },
    {
      id: 3,
      nameKey: "products.reedValve",
      descKey: "products.reedValveDesc",
      category: "valves",
      image: "/assets/img/product/reed-valve-1.png",
      detailsLink: "/products/reedValve-details"
    },
    {
      id: 4,
      nameKey: "products.airCutValve",
      descKey: "products.airCutValveDesc",
      category: "valves",
      image: "/assets/img/product/acv-5.png",
      detailsLink: "/products/airCutValve-details"
    },
    {
      id: 7,
      nameKey: "products.bladderAccumulator",
      descKey: "products.bladderAccumulatorDesc",
      category: "accumulators",
      image: "/assets/img/product/bladder-type-accumulator-1.png",
      detailsLink: "/products/bladder-details"
    },
    {
      id: 8,
      nameKey: "products.evk2rv",
      descKey: "products.evk2rvDesc",
      category: "water-lubricated-stern-tube-seal",
      image: "/assets/img/product/EVK2RV-1.png",
      detailsLink: "/products/evk2rv-details"
    },
    {
      id: 9,
      nameKey: "products.evk2rt",
      descKey: "products.evk2rtDesc",
      category: "water-lubricated-stern-tube-seal",
      image: "/assets/img/product/evk2rt-2.png",
      detailsLink: "/products/evk2rt-details"
    },
    {
      id: 10,
      nameKey: "products.mas",
      descKey: "products.masDesc",
      category: "water-lubricated-stern-tube-seal",
      image: "/assets/img/product/mas-1.png",
      detailsLink: "/products/mas-details"
    },
    {
      id: 11,
      nameKey: "products.rudderSeal",
      descKey: "products.rudderSealDesc",
      category: "water-lubricated-stern-tube-seal",
      image: "/assets/img/product/rudder-1.png",
      detailsLink: "/products/rudderSeal-details"
    },
    {
      id: 12,
      nameKey: "products.evr",
      descKey: "products.evrDesc",
      category: "water-lubricated-stern-tube-bearing",
      image: "/assets/img/product/evr-flange-1.png",
      detailsLink: "/products/evr-details"
    },
    {
      id: 13,
      nameKey: "products.evu",
      descKey: "products.evuDesc",
      category: "water-lubricated-stern-tube-bearing",
      image: "/assets/img/product/evu-1.png",
      detailsLink: "/products/evu-details"
    },
    {
      id: 14,
      nameKey: "products.serviceEngineer",
      descKey: "products.serviceEngineerDesc",
      category: "service-engineer",
      image: "/assets/img/product/Engineer-1.png",
      detailsLink: "/products/serviceEngineer-details"
    }
  ];
  
  // Industry mapping for products
  const industryMapping = {
    'oil-gas': ['mechanical-seals', 'valves', 'floating-seal'],
    'water-irrigation': ['valves', 'accumulators'],
    'marine': ['water-lubricated-stern-tube-seal', 'water-lubricated-stern-tube-bearing', 'rudder-seal', 'service-engineer'],
    'semiconductor': ['floating-seal', 'mechanical-seals'],
    'automobile': ['lip-seal', 'valves', 'mechanical-seals']
  };
  
  // Check for filter parameters on component mount
  useEffect(() => {
    if (location.state && location.state.filter) {
      setFilterInfo({
        type: location.state.filter,
        value: location.state.value
      });
      
      if (location.state.filter === 'category') {
        setActiveCategory(location.state.value);
        setActiveTab('category');
        const filtered = allProducts.filter(product => product.category === location.state.value);
        setFilteredProducts(filtered);
      } else if (location.state.filter === 'industry') {
        setActiveIndustry(location.state.value);
        setActiveTab('industry');
        const categories = industryMapping[location.state.value] || [];
        const filtered = allProducts.filter(product => categories.includes(product.category));
        setFilteredProducts(filtered);
      }
    } else {
      // Show all products if no filter is applied
      setFilteredProducts(allProducts);
      setActiveCategory(null);
      setActiveIndustry(null);
    }
  }, [location.state]);
  
  // Handle category filter click
  const handleCategoryFilter = (category) => {
    setIsFiltering(true);
    setAnimatingProducts(true);
    
    // Fade out current products
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => item.classList.add('fade-out'));
    
    // Wait for fade out animation to complete
    setTimeout(() => {
      if (category === 'all') {
        setFilteredProducts(allProducts);
        setFilterInfo(null);
        setActiveCategory(null);
      } else {
        const filtered = allProducts.filter(product => product.category === category);
        setFilteredProducts(filtered);
        setFilterInfo({
          type: 'category',
          value: category
        });
        setActiveCategory(category);
      }
      
      setIsFiltering(false);
      
      // Trigger fade in animation after state update
      setTimeout(() => {
        const newProductItems = document.querySelectorAll('.product-item');
        newProductItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove('fade-out');
            item.classList.add('fade-in');
          }, index * 50); // Stagger the animation
        });
        
        setTimeout(() => {
          setAnimatingProducts(false);
        }, newProductItems.length * 50 + 500); // Wait for all animations to complete
      }, 50);
    }, 300);
  };
  
  // Handle industry filter click
  const handleIndustryFilter = (industry) => {
    setIsFiltering(true);
    setAnimatingProducts(true);
    
    // Fade out current products
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => item.classList.add('fade-out'));
    
    // Wait for fade out animation to complete
    setTimeout(() => {
      if (industry === 'all') {
        setFilteredProducts(allProducts);
        setFilterInfo(null);
        setActiveIndustry(null);
      } else {
        const categories = industryMapping[industry] || [];
        const filtered = allProducts.filter(product => categories.includes(product.category));
        setFilteredProducts(filtered);
        setFilterInfo({
          type: 'industry',
          value: industry
        });
        setActiveIndustry(industry);
      }
      
      setIsFiltering(false);
      
      // Trigger fade in animation after state update
      setTimeout(() => {
        const newProductItems = document.querySelectorAll('.product-item');
        newProductItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove('fade-out');
            item.classList.add('fade-in');
          }, index * 50); // Stagger the animation
        });
        
        setTimeout(() => {
          setAnimatingProducts(false);
        }, newProductItems.length * 50 + 500); // Wait for all animations to complete
      }, 50);
    }, 300);
  };
  
  // Handle keyword search
  const handleKeywordSearch = (keyword) => {
    setIsFiltering(true);
    setAnimatingProducts(true);
    
    // Fade out current products
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => item.classList.add('fade-out'));
    
    // Wait for fade out animation to complete
    setTimeout(() => {
      if (!keyword.trim()) {
        setFilteredProducts(allProducts);
        setFilterInfo(null);
        setSearchKeyword('');
      } else {
        const filtered = allProducts.filter(product =>
          t(product.nameKey).toLowerCase().includes(keyword.toLowerCase()) ||
          t(product.descKey).toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered);
        setFilterInfo({
          type: 'keyword',
          value: keyword
        });
        setSearchKeyword(keyword);
      }
      
      setIsFiltering(false);
      
      // Trigger fade in animation after state update
      setTimeout(() => {
        const newProductItems = document.querySelectorAll('.product-item');
        newProductItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove('fade-out');
            item.classList.add('fade-in');
          }, index * 50); // Stagger the animation
        });
        
        setTimeout(() => {
          setAnimatingProducts(false);
        }, newProductItems.length * 50 + 500); // Wait for all animations to complete
      }, 50);
    }, 300);
  };
  
  // Handle tab navigation
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Reset filters when switching tabs
    if (tab === 'category') {
      setFilteredProducts(activeCategory ?
        allProducts.filter(product => product.category === activeCategory) :
        allProducts
      );
    } else if (tab === 'industry') {
      setFilteredProducts(activeIndustry ?
        allProducts.filter(product => industryMapping[activeIndustry].includes(product.category)) :
        allProducts
      );
    } else if (tab === 'keyword') {
      setFilteredProducts(searchKeyword ?
        allProducts.filter(product =>
          t(product.nameKey).toLowerCase().includes(searchKeyword.toLowerCase()) ||
          t(product.descKey).toLowerCase().includes(searchKeyword.toLowerCase())
        ) :
        allProducts
      );
    }
  };
  
  // Load custom CSS for filter info and button styling
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = `${process.env.PUBLIC_URL}/assets/css/product-details.css`;
    document.head.appendChild(link1);
    
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = `${process.env.PUBLIC_URL}/assets/css/product-filter.css`;
    document.head.appendChild(link2);
    
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  // Helper function to get display name for category
  const getCategoryDisplayName = (category) => {
    const categoryKeys = {
      'mechanical-seals': 'products.mechanicalSeals',
      'lip-seal': 'products.lipSeal',
      'valves': 'products.valves',
      'floating-seal': 'products.floatingSeal',
      'accumulators': 'products.accumulators',
      'water-lubricated-stern-tube-seal': 'products.waterLubricatedSternTubeSeal',
      'water-lubricated-stern-tube-bearing': 'products.waterLubricatedSternTubeBearing',
      'service-engineer': 'products.serviceEngineer'
    };
    return t(categoryKeys[category] || category);
  };

  // Handle tab navigation effect
  useEffect(() => {
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
  }, []);

  return (
    <div className="projects-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>{t('products.title')}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">{t('products.breadcrumbHome')}</Link></li>
              <li className="current">{t('products.breadcrumbProducts')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="products section">
        <div className="container section-title" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }}>{t('products.title')}</h2>
          {filterInfo && (
            <p className="filter-info" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              {t('products.showingProductsFor')} <strong>{filterInfo.type === 'category' ? t('products.category') : filterInfo.type === 'industry' ? t('products.industry') : t('products.keyword')}</strong> - <strong>{filterInfo.value}</strong>
            </p>
          )}
          {!filterInfo && (
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>{t('products.description')}</p>
          )}
        </div>
        
        {/* Product Filter Section - Similar to Home.js */}
        <div className="p-top-bg -product">
          <div className="p-top-bg__inner">
            <div className="p-top-heading -product -white">
              <ul className="p-top-product-tab__list">
                <li className="p-top-product-tab__list-item">
                  <a className={`p-top-product-tab__list-link js-tab-nav ${activeTab === 'category' ? 'is-active' : ''}`} href="#tab-products-category" onClick={(e) => { e.preventDefault(); handleTabClick('category'); }}>
                    {t('products.searchByCategory')}
                  </a>
                </li>
                <li className="p-top-product-tab__list-item">
                  <a className={`p-top-product-tab__list-link js-tab-nav ${activeTab === 'industry' ? 'is-active' : ''}`} href="#tab-products-industry" onClick={(e) => { e.preventDefault(); handleTabClick('industry'); }}>
                    {t('products.searchByIndustry')}
                  </a>
                </li>
                <li className="p-top-product-tab__list-item">
                  <a className={`p-top-product-tab__list-link js-tab-nav ${activeTab === 'keyword' ? 'is-active' : ''}`} href="#tab-products-keyword" onClick={(e) => { e.preventDefault(); handleTabClick('keyword'); }}>
                    {t('products.searchByKeyword')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-top-product-tab">
              <div className={`p-top-product-tab__box js-tab-box ${activeTab === 'category' ? '' : 'd-none'}`} id="tab-products-category" style={{}}>
                <ul className="p-top-list aos-init" data-aos="fade-up">
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === null ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('all')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {t('products.allProducts')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'mechanical-seals' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('mechanical-seals')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {getCategoryDisplayName('mechanical-seals')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}><br></br>({allProducts.filter(p => p.category === 'mechanical-seals').length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'lip-seal' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('lip-seal')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {getCategoryDisplayName('lip-seal')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'lip-seal').length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'valves' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('valves')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {getCategoryDisplayName('valves')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'valves').length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'floating-seal' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('floating-seal')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {getCategoryDisplayName('floating-seal')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'floating-seal').length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'accumulators' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('accumulators')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {getCategoryDisplayName('accumulators')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'accumulators').length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'water-lubricated-stern-tube-seal' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('water-lubricated-stern-tube-seal')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {getCategoryDisplayName('water-lubricated-stern-tube-seal')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'water-lubricated-stern-tube-seal').length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'water-lubricated-stern-tube-bearing' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('water-lubricated-stern-tube-bearing')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {getCategoryDisplayName('water-lubricated-stern-tube-bearing')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'water-lubricated-stern-tube-bearing').length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'service-engineer' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('service-engineer')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {getCategoryDisplayName('service-engineer')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'service-engineer').length} {t('products.items')})</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className={`p-top-product-tab__box js-tab-box ${activeTab === 'industry' ? '' : 'd-none'}`} id="tab-products-industry" style={{ display: activeTab === 'industry' ? 'block' : 'none' }}>
                <ul className="p-top-list">
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === null ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('all')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {t('products.allIndustries')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'oil-gas' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('oil-gas')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {t('products.oilGas')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['oil-gas'].includes(p.category)).length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'water-irrigation' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('water-irrigation')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {t('products.machinery')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['water-irrigation'].includes(p.category)).length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'automobile' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('automobile')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {t('products.automobile')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['automobile'].includes(p.category)).length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'marine' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('marine')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {t('products.marine')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['marine'].includes(p.category)).length} {t('products.items')})</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'semiconductor' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('semiconductor')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      {t('products.semiconductor')}
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['semiconductor'].includes(p.category)).length} {t('products.items')})</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className={`p-top-product-tab__box js-tab-box ${activeTab === 'keyword' ? '' : 'd-none'}`} id="tab-products-keyword" style={{ display: activeTab === 'keyword' ? 'block' : 'none' }}>
                <div className="p-product-search _mt-0">
                  <form role="search" onSubmit={(e) => { e.preventDefault(); const searchValue = e.target.elements.searchInput.value; handleKeywordSearch(searchValue); }}>
                    <input
                      className="p-product-search__box"
                      type="search"
                      defaultValue={searchKeyword}
                      name="searchInput"
                      placeholder={t('products.enterKeywords')}
                    />
                    <button className="p-product-search__button" type="submit"></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {isFiltering ? (
            <div className="filter-loading">
              <div className="filter-loading-spinner"></div>
            </div>
          ) : (
            <div className="row gy-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="col-lg-4 col-md-6 product-item">
                    <div className="card product-card h-100">
                      <img src={`${process.env.PUBLIC_URL}${product.image}`} className="card-img-top" alt={t(product.nameKey)} />
                      <div className="card-body product-info">
                        <h4 className="card-title">{t(product.nameKey)}</h4>
                        <p className="card-text">{t(product.descKey)}</p>
                        <div className="btn-container">
                          <a href="/contact" className="btn btn-outline-primary btn-sm">{t('products.inquireNow')}</a>
                          <a href={product.detailsLink} className="btn btn-outline-primary btn-sm">{t('products.viewDetails')}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="alert alert-info text-center">
                    <h4>{t('products.noProductsFound')}</h4>
                    <p>{t('products.noProductsDescription')}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;