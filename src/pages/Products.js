import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAOS, useIsotope, useGLightbox } from '../hooks/useExternalLibs';

const Products = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  useIsotope();
  useGLightbox();
  
  // Get location to access state passed from navigation
  const location = useLocation();
  const [filterInfo, setFilterInfo] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('category');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeIndustry, setActiveIndustry] = useState(null);
  
  // Product data structure with categories
  const allProducts = [
    {
      id: 1,
      name: "EH795 EH790 for Water Pump",
      category: "mechanical-seals",
      image: "/assets/img/product/WP_compact_mechanical_seal.jpg",
      description: "Capable for high-speed rotation. Mass-production by fully automated assembling lines and supplied to water pump makers worldwide. By its unitized design, EH795 supports easy installation into customer application.",
      detailsLink: "/products/eh795-details"
    },
    {
      id: 2,
      name: "Lip Seal For A/C Compressor",
      category: "lip-seal",
      image: "/assets/img/product/AC_compressor_lip_seal.jpg",
      description: "Rotating shaft seals exclusively designed for car air-conditioning compressors. Eagle Industry's original design featuring compactness and high reliability. Helps eliminate CFC leakage causing global warming.",
      detailsLink: "/products/lipSeal-details"
    },
    {
      id: 3,
      name: "Reed Valve",
      category: "valves",
      image: "/assets/img/product/reed_valve_double.jpg",
      description: "Designed for four-stroke motorcycle engines for emission control. Substantially reduces carbon monoxide and hydrocarbon emissions to mitigate air pollution.",
      detailsLink: "/products/reedValve-details"
    },
    {
      id: 4,
      name: "Air Cut Valve",
      category: "valves",
      image: "/assets/img/product/AirCutValve.jpg",
      description: "Control valve for variable displacement A/C compressors. Controls swash plate angle to adjust compressor displacement according to A/C load for improved fuel economy.",
      detailsLink: "/products/airCutValve-details"
    },
    {
      id: 5,
      name: "Floating Seal",
      category: "floating-seal",
      image: "/assets/img/product/floating_seal.jpg",
      description: "Seals for undercarriages of construction machinery. Simple structure consisting of an O-ring and a seal ring made of special cast iron. Optimum seals for undercarriages of bulldozers and hydraulic excavators.",
      detailsLink: "/products/floatingSeal-details"
    },
    {
      id: 6,
      name: "SUPERIOR O-Ring",
      category: "floating-seal",
      image: "/assets/img/product/oring-2.png",
      description: "Newly developed O-Ring material with better chemical resistance, low outgas generation, and light heat resistance for semiconductor process industry.",
      detailsLink: "/products/oRing-details"
    },
    {
      id: 7,
      name: "Bladder Type Accumulator",
      category: "accumulators",
      image: "/assets/img/product/bladder_type_accumulators.jpeg",
      description: "These standard bladder accumulators are manufactured based on years of experience and proven performance.",
      detailsLink: "/products/bladder-details"
    },
    {
      id: 8,
      name: "Water Lubricated Stern Tube Seal - EVK2RV",
      category: "water-lubricated-stern-tube-seal",
      image: "/assets/img/product/EVK2RV-1.png",
      description: "A compact, high performance water lubricated seal having excellent vibration resistance and sealing performance. The EVK type seal is the easiest of the seals on the market for installation and operation.",
      detailsLink: "/products/evk2rv-details"
    },
    {
      id: 9,
      name: "Water Lubricated Stern Tube Seal - EVK2RT",
      category: "water-lubricated-stern-tube-seal",
      image: "/assets/img/product/EVK2RT.jpg",
      description: "A compact, high performance water lubricated seal having excellent vibration resistance and sealing performance. The EVK type seal is the easiest of the seals on the market for installation and operation.",
      detailsLink: "/products/evk2rt-details"
    },
    {
      id: 10,
      name: "Marine Ace Seal (MAS)",
      category: "water-lubricated-stern-tube-seal",
      image: "/assets/img/product/marine ace.png",
      description: "Water-lubricated stern seal for small vessels with direct drive systems. Features end-face seal structure for excellent sealing performance.",
      detailsLink: "/products/mas-details"
    },
    {
      id: 11,
      name: "Rudder Seal",
      category: "water-lubricated-stern-tube-seal",
      image: "/assets/img/product/Rudder_seal.PNG",
      description: "Rudder seals with lip seals designed to prevent lubricant leakage and seawater ingress. Approved by classification societies with multiple types available.",
      detailsLink: "/products/rudderSeal-details"
    },
    {
      id: 12,
      name: "Water Lubricated Stern Tube Bearing - EVR",
      category: "water-lubricated-stern-tube-bearing",
      image: "/assets/img/product/EVR.png",
      description: "Excellent Durability and Vibration Absorption. Designed specifically for marine applications with water lubricated shafting systems.",
      detailsLink: "/products/evr-details"
    },
    {
      id: 13,
      name: "Water Lubricated Stern Tube Bearing - EVU",
      category: "water-lubricated-stern-tube-bearing",
      image: "/assets/img/product/EVU.png",
      description: "Poly-Urethane bearing developed for water lubricated stern tube systems based on our extensive water lubricated bearing technology and experience.",
      detailsLink: "/products/evu-details"
    },
    {
      id: 14,
      name: "Service Engineer",
      category: "service-engineer",
      image: "/assets/img/product/Enginer.png",
      description: "Professional engineering services for your ship's sealing systems. We provide highly skilled and experienced service engineers to handle all aspects of marine sealing.",
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
  };
  
  // Handle industry filter click
  const handleIndustryFilter = (industry) => {
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
  };
  
  // Handle keyword search
  const handleKeywordSearch = (keyword) => {
    if (!keyword.trim()) {
      setFilteredProducts(allProducts);
      setFilterInfo(null);
      setSearchKeyword('');
    } else {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.description.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(filtered);
      setFilterInfo({
        type: 'keyword',
        value: keyword
      });
      setSearchKeyword(keyword);
    }
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
          product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          product.description.toLowerCase().includes(searchKeyword.toLowerCase())
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
    const categoryNames = {
      'mechanical-seals': 'Mechanical Seals',
      'lip-seal': 'Lip Seal',
      'valves': 'Valves',
      'floating-seal': 'Floating Seal',
      'accumulators': 'Accumulators',
      'water-lubricated-stern-tube-seal': 'Water Lubricated Stern Tube Seal',
      'water-lubricated-stern-tube-bearing': 'Water Lubricated Stern Tube Bearing',
      'service-engineer': 'Service Engineer'
    };
    return categoryNames[category] || category;
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
        <div className="container section-title" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }}>Our Products</h2>
          {filterInfo && (
            <p className="filter-info" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              Showing products for: <strong>{filterInfo.type === 'category' ? 'Category' : filterInfo.type === 'industry' ? 'Industry' : 'Keyword'}</strong> - <strong>{filterInfo.value}</strong>
            </p>
          )}
          {!filterInfo && (
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>Explore our range of high-quality sealing solutions and precision components designed for automotive, marine, aerospace, and general industry applications.</p>
          )}
        </div>
        
        {/* Product Filter Section - Similar to Home.js */}
        <div className="p-top-bg -product">
          <div className="p-top-bg__inner">
            <div className="p-top-heading -product -white">
              <ul className="p-top-product-tab__list">
                <li className="p-top-product-tab__list-item">
                  <a className={`p-top-product-tab__list-link js-tab-nav ${activeTab === 'category' ? 'is-active' : ''}`} href="#tab-products-category" onClick={(e) => { e.preventDefault(); handleTabClick('category'); }}>
                    Search by <br className="_d-md-none" />category
                  </a>
                </li>
                <li className="p-top-product-tab__list-item">
                  <a className={`p-top-product-tab__list-link js-tab-nav ${activeTab === 'industry' ? 'is-active' : ''}`} href="#tab-products-industry" onClick={(e) => { e.preventDefault(); handleTabClick('industry'); }}>
                    Search by <br className="_d-md-none" />Industry
                  </a>
                </li>
                <li className="p-top-product-tab__list-item">
                  <a className={`p-top-product-tab__list-link js-tab-nav ${activeTab === 'keyword' ? 'is-active' : ''}`} href="#tab-products-keyword" onClick={(e) => { e.preventDefault(); handleTabClick('keyword'); }}>
                    Search by <br className="_d-md-none" />keyword
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
                      All Products
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'mechanical-seals' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('mechanical-seals')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Mechanical Seals
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}><br></br>({allProducts.filter(p => p.category === 'mechanical-seals').length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'lip-seal' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('lip-seal')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Lip Seal
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'lip-seal').length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'valves' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('valves')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Valves
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'valves').length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'floating-seal' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('floating-seal')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Floating Seal
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'floating-seal').length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'accumulators' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('accumulators')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Accumulators
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'accumulators').length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'water-lubricated-stern-tube-seal' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('water-lubricated-stern-tube-seal')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Water Lubricated Stern Tube Seal
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'water-lubricated-stern-tube-seal').length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'water-lubricated-stern-tube-bearing' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('water-lubricated-stern-tube-bearing')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Water Lubricated Stern Tube Bearing
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'water-lubricated-stern-tube-bearing').length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeCategory === 'service-engineer' ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter('service-engineer')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Service Engineer
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => p.category === 'service-engineer').length} items)</span>
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
                      All Industries
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'oil-gas' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('oil-gas')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Oil & Gas
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['oil-gas'].includes(p.category)).length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'water-irrigation' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('water-irrigation')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Machinery
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['water-irrigation'].includes(p.category)).length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'automobile' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('automobile')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Automobile
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['automobile'].includes(p.category)).length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'marine' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('marine')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Marine
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['marine'].includes(p.category)).length} items)</span>
                    </button>
                  </li>
                  <li className="p-top-list__item">
                    <button
                      className={`p-top-list__link ${activeIndustry === 'semiconductor' ? 'active' : ''}`}
                      onClick={() => handleIndustryFilter('semiconductor')}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', width: '100%', padding: '15px 20px' }}
                    >
                      Semiconductor
                      <span className="filter-count" style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>({allProducts.filter(p => industryMapping['semiconductor'].includes(p.category)).length} items)</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className={`p-top-product-tab__box js-tab-box ${activeTab === 'keyword' ? '' : 'd-none'}`} id="tab-products-keyword" style={{ display: activeTab === 'keyword' ? 'block' : 'none' }}>
                <div className="p-product-search _mt-0">
                  <form role="search" onSubmit={(e) => { e.preventDefault(); handleKeywordSearch(document.getElementById('product-search-input').value); }}>
                    <input
                      className="p-product-search__box"
                      type="search"
                      defaultValue={searchKeyword}
                      id="product-search-input"
                      placeholder="Enter product keywords"
                    />
                    <button className="p-product-search__button" type="submit"></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6 product-item">
                  <div className="card product-card h-100">
                    <img src={`${process.env.PUBLIC_URL}${product.image}`} className="card-img-top" alt={product.name} />
                    <div className="card-body product-info">
                      <h4 className="card-title">{product.name}</h4>
                      <p className="card-text">{product.description}</p>
                      <div className="btn-container">
                        <a href="/contact" className="btn btn-outline-primary btn-sm">Inquire Now</a>
                        <a href={product.detailsLink} className="btn btn-outline-primary btn-sm">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-info text-center">
                  <h4>No products found</h4>
                  <p>There are no products available for the selected filter.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;