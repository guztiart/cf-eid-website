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
  
  // Check for filter parameters on component mount
  useEffect(() => {
    if (location.state && location.state.filter) {
      setFilterInfo({
        type: location.state.filter,
        value: location.state.value
      });
      setActiveCategory(location.state.value);
      
      // Filter products based on category
      if (location.state.filter === 'category') {
        const filtered = allProducts.filter(product => product.category === location.state.value);
        setFilteredProducts(filtered);
      }
    } else {
      // Show all products if no filter is applied
      setFilteredProducts(allProducts);
      setActiveCategory(null);
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
          {filterInfo && (
            <p className="filter-info">
              Showing products for: <strong>{filterInfo.type === 'category' ? 'Category' : 'Industry'}</strong> - <strong>{filterInfo.value}</strong>
            </p>
          )}
          {!filterInfo && (
            <p>Explore our range of high-quality sealing solutions and precision components designed for automotive, marine, aerospace, and general industry applications.</p>
          )}
        </div>
        
        {/* Category Filter Section */}
        <div className="container mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="category-filter-section">
            <div className="section-header mb-4">
              <h3 className="section-title">Filter by Category</h3>
              {activeCategory && (
                <div className="current-category-display">
                  <span className="current-category-label">Currently Viewing:</span>
                  <span className="current-category-name">{getCategoryDisplayName(activeCategory)}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() => handleCategoryFilter('all')}
                  >
                    <i className="bi bi-x-circle"></i> Clear Filter
                  </button>
                </div>
              )}
            </div>
            
            <div className="category-filter-grid">
              <button
                className={`category-filter-item ${activeCategory === null ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('all')}
              >
                <div className="filter-icon">
                  <i className="bi bi-grid-3x3-gap"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">All Products</span>
                  <span className="filter-count">{allProducts.length} items</span>
                </div>
              </button>
              
              <button
                className={`category-filter-item ${activeCategory === 'mechanical-seals' ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('mechanical-seals')}
              >
                <div className="filter-icon">
                  <i className="bi bi-gear"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">Mechanical Seals</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === 'mechanical-seals').length} items</span>
                </div>
              </button>
              
              <button
                className={`category-filter-item ${activeCategory === 'lip-seal' ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('lip-seal')}
              >
                <div className="filter-icon">
                  <i className="bi bi-circle"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">Lip Seal</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === 'lip-seal').length} items</span>
                </div>
              </button>
              
              <button
                className={`category-filter-item ${activeCategory === 'valves' ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('valves')}
              >
                <div className="filter-icon">
                  <i className="bi bi-valve"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">Valves</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === 'valves').length} items</span>
                </div>
              </button>
              
              <button
                className={`category-filter-item ${activeCategory === 'floating-seal' ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('floating-seal')}
              >
                <div className="filter-icon">
                  <i className="bi bi-hexagon"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">Floating Seal</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === 'floating-seal').length} items</span>
                </div>
              </button>
              
              <button
                className={`category-filter-item ${activeCategory === 'accumulators' ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('accumulators')}
              >
                <div className="filter-icon">
                  <i className="bi bi-droplet"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">Accumulators</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === 'accumulators').length} items</span>
                </div>
              </button>
              
              <button
                className={`category-filter-item ${activeCategory === 'water-lubricated-stern-tube-seal' ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('water-lubricated-stern-tube-seal')}
              >
                <div className="filter-icon">
                  <i className="bi bi-water"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">Water Lubricated Stern Tube Seal</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === 'water-lubricated-stern-tube-seal').length} items</span>
                </div>
              </button>
              
              <button
                className={`category-filter-item ${activeCategory === 'water-lubricated-stern-tube-bearing' ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('water-lubricated-stern-tube-bearing')}
              >
                <div className="filter-icon">
                  <i className="bi bi-buoy"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">Water Lubricated Stern Tube Bearing</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === 'water-lubricated-stern-tube-bearing').length} items</span>
                </div>
              </button>
              
              <button
                className={`category-filter-item ${activeCategory === 'service-engineer' ? 'active' : ''}`}
                onClick={() => handleCategoryFilter('service-engineer')}
              >
                <div className="filter-icon">
                  <i className="bi bi-person-workspace"></i>
                </div>
                <div className="filter-text">
                  <span className="filter-title">Service Engineer</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === 'service-engineer').length} items</span>
                </div>
              </button>
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
                  <p>There are no products available for the selected category.</p>
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