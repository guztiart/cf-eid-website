import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';

const EnvironmentalInitiatives = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  
  // State for PDF viewer
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  
  // Actual certificate data
  const certificates = [
    {
      id: 1,
      name: 'ISO 14001:2015 Certificate',
      description: 'Environmental Management System Certification',
      file: `${process.env.PUBLIC_URL}/assets/certificates/Certificate ISO 14001 (Validity Date 12 Jun 2024 - 12 Jun 2027).pdf`,
      issueDate: '2024-06-12',
      expiryDate: '2027-06-12',
      issuer: 'Certification Body International'
    },
    {
      id: 2,
      name: 'ISO 45001:2018 Certificate',
      description: 'Occupational Health and Safety Management System Certification',
      file: `${process.env.PUBLIC_URL}/assets/certificates/Cetificate ISO45001 (Validit 12 jun 2024 - 12 jun 2027).pdf`,
      issueDate: '2024-06-12',
      expiryDate: '2027-06-12',
      issuer: 'Certification Body International'
    },
    {
      id: 3,
      name: 'PROPER Blue Certificate',
      description: 'Environmental Compliance Recognition from Ministry of Environment and Forestry',
      file: `${process.env.PUBLIC_URL}/assets/certificates/Sertifikat PROPER (2022-2023) - PT Eagle Industry Indonesia.pdf`,
      issueDate: '2022-01-01',
      expiryDate: '2023-12-31',
      issuer: 'Ministry of Environment and Forestry of Republic Indonesia'
    }
  ];
  
  // Function to open PDF viewer
  const openPdfViewer = (certificate) => {
    setSelectedCertificate(certificate);
    setShowPdfViewer(true);
  };
  
  // Function to close PDF viewer
  const closePdfViewer = () => {
    setShowPdfViewer(false);
    setSelectedCertificate(null);
  };

  // Load custom CSS
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = `${process.env.PUBLIC_URL}/assets/css/product-details.css`;
    document.head.appendChild(link1);
    
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = `${process.env.PUBLIC_URL}/assets/css/sustainability.css`;
    document.head.appendChild(link2);
    
    // Add custom styles to prevent PDF download
    const style = document.createElement('style');
    style.innerHTML = `
      .pdf-viewer-content {
        position: relative;
        height: 70vh;
        overflow: hidden;
        border: 1px solid #ddd;
      }
      .pdf-viewer-content object {
        width: 100%;
        height: 100%;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="project-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>Sustainability</h1>
          <nav className="breadcrumbs">
            <ol>
              
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li className="current">Environmental Initiatives</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Environmental Initiatives Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Environmental Initiatives</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/concept-of-sustainability">Concept of Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/climate-change-disclosure">Climate Change Disclosure</Link></li>
                  <li className="nav-item"><Link to="/sustainability/occupational-health-safety">Occupational Health & Safety</Link></li>
                  <li className="nav-item"><Link to="/sustainability/social-media-contribution">Social Media Contribution</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Initiatives Details Section */}
      <section id="environmental-details" className="sustainability-content section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2 className="content-title">Environmental Initiatives at PT. Eagle Industry Indonesia</h2>
                <div className="content-body">
                  <p>
                    PT. Eagle Industry Indonesia operates in the manufacturing of seals for automotive components with main processes of Casting and O-ring that function as lubricant retainers with the external environment such as water, mud, or dust in the under carrier area of construction machinery, heavy equipment, or agricultural machines.
                  </p>
                  <p>
                    With precision technology and high quality, our products help improve machine reliability while supporting environmental impact reduction, as they play a role in preventing pollution from oil or fluid leakage to the ground.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Environmental Management System</h3>
                <div className="content-body">
                  <p>
                    As part of the EKK Group, PT. Eagle Industry Indonesia consistently conducts environmental preservation activities.
                    The company has been certified ISO 14001:2015 as evidence of implementing an internationally standardized environmental management system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Environmental Policy</h3>
                <div className="content-body">
                  <p>
                    PT. Eagle Industry Indonesia recognizes and cares for the environment. Committed to protecting the environment and preventing pollution as well as global warming, by saving energy and using resources, as well as utilizing renewable energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Environmental Activities</h3>
                <div className="content-body">
                  <div className="initiatives-grid">
                    <div className="initiative-item">
                      <div className="initiative-icon">
                        <i className="bi bi-sun"></i>
                      </div>
                      <div className="initiative-content">
                        <h4>Solar Panel Generation</h4>
                        <p>PT. Eagle Industry Indonesia began utilizing solar power generation since early 2025, as part of efforts to reduce CO2 emissions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">Environmental Awards and Certifications</h3>
                <div className="content-body">
                  <p>
                    PT. Eagle Industry Indonesia implements ISO 14001:2015 Environmental Management System. Then received the PROPER Blue rating from the Ministry of Environment and Forestry of the Republic of Indonesia, as recognition for compliance with environmental regulations in Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Certifications */}
      <section className="product-specifications section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Environmental & Safety Certifications</h2>
                <p>Our commitment to environmental management and occupational health & safety standards</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Certification</th>
                      <th>Standard</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Environmental Management System</td>
                      <td>ISO 14001:2015</td>
                      <td>International standard for environmental management systems that helps organizations minimize their environmental impact while complying with regulations</td>
                    </tr>
                    <tr>
                      <td>Occupational Health & Safety Management</td>
                      <td>ISO 45001:2018</td>
                      <td>International standard for occupational health and safety management systems that provides a framework for improving employee safety, reducing workplace risks, and creating better working conditions</td>
                    </tr>
                    <tr>
                      <td>Environmental Compliance</td>
                      <td>PROPER Blue</td>
                      <td>Recognition from the Ministry of Environment and Forestry of the Republic of Indonesia for compliance with environmental regulations in industrial operations</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">Note: These certifications demonstrate our commitment to environmental preservation, occupational health & safety, and sustainable practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Evidence Section */}
      <section className="certification-evidence section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>Certification Evidence</h2>
                <p>View our environmental certifications and compliance documents</p>
              </div>
              <div className="certificates-grid" data-aos="fade-up" data-aos-delay="100">
                {certificates.map((cert) => (
                  <div key={cert.id} className="certificate-card">
                    <div className="certificate-icon">
                      <i className="bi bi-award-fill"></i>
                    </div>
                    <div className="certificate-content">
                      <h3>{cert.name}</h3>
                      <p>{cert.description}</p>
                      <div className="certificate-details">
                        <p><strong>Issuer:</strong> {cert.issuer}</p>
                        <p><strong>Issue Date:</strong> {new Date(cert.issueDate).toLocaleDateString()}</p>
                        <p><strong>Expiry Date:</strong> {new Date(cert.expiryDate).toLocaleDateString()}</p>
                      </div>
                      <button
                        className="btn-view-certificate"
                        onClick={() => openPdfViewer(cert)}
                      >
                        <i className="bi bi-file-earmark-pdf"></i> View Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {showPdfViewer && selectedCertificate && (
        <div className="pdf-viewer-modal">
          <div className="pdf-viewer-container">
            <div className="pdf-viewer-header">
              <h3>{selectedCertificate.name}</h3>
              <button className="btn-close-pdf" onClick={closePdfViewer}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="pdf-viewer-content">
              <object
                data={`${selectedCertificate.file}#toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                width="100%"
                height="100%"
                onContextMenu={(e) => e.preventDefault()}
              >
                <p>Your browser does not support PDF viewing. Please try a different browser.</p>
              </object>
            </div>
          </div>
        </div>
      )}

      {/* Related Sustainability Topics */}
      <section id="related-topics" className="related-products section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Related Sustainability Topics</h2>
            <p>Explore more about our sustainability initiatives</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/sustainability/concept-of-sustainability" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/features-1.jpg`} className="card-image" alt="Concept of Sustainability" />
                  </div>
                  <div className="card-caption">
                    <span>Concept of Sustainability</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/sustainability/climate-change-disclosure" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/features-2.jpg`} className="card-image" alt="Climate Change Disclosure" />
                  </div>
                  <div className="card-caption">
                    <span>Climate Change Disclosure</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/sustainability/occupational-health-safety" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/features-3.jpg`} className="card-image" alt="Occupational Health & Safety" />
                  </div>
                  <div className="card-caption">
                    <span>Occupational Health & Safety</span>
                  </div>
                </Link>
              </div>
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
                  <li><Link to="/sustainability">Sustainability</Link></li>
                  <li className="current">Environmental Initiatives</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalInitiatives;