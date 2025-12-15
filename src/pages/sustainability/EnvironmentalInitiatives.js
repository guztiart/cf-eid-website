import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';
import { useLanguage } from '../../contexts/LanguageContext';

const EnvironmentalInitiatives = () => {
  const { t } = useLanguage();
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
          <h1>{t('sustainability.title')}</h1>
          <nav className="breadcrumbs">
            <ol>
              
              <li><Link to="/">{t('header.home')}</Link></li>
              <li><Link to="/sustainability">{t('sustainability.title')}</Link></li>
              <li className="current">{t('environmentalInitiatives.title')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Environmental Initiatives Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">{t('environmentalInitiatives.title')}</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">{t('sustainability.title')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/concept-of-sustainability">{t('environmentalInitiatives.conceptOfSustainability')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/occupational-health-safety">{t('environmentalInitiatives.occupationalHealthSafety')}</Link></li>
                  <li className="nav-item"><Link to="/sustainability/social-contribution-initiatives">{t('environmentalInitiatives.socialContributionInitiatives')}</Link></li>
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
                <h2 className="content-title">{t('environmentalInitiatives.environmentalInitiativesTitle')}</h2>
                <div className="content-body">
                  <p>
                    {t('environmentalInitiatives.environmentalInitiativesDesc1')}
                  </p>
                  <p>
                    {t('environmentalInitiatives.environmentalInitiativesDesc2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">{t('environmentalInitiatives.environmentalManagementSystemTitle')}</h3>
                <div className="content-body">
                  <p>
                    {t('environmentalInitiatives.environmentalManagementSystemDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">{t('environmentalInitiatives.environmentalPolicyTitle')}</h3>
                <div className="content-body">
                  <p>
                    {t('environmentalInitiatives.environmentalPolicyDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3 className="content-subtitle">{t('environmentalInitiatives.environmentalActivitiesTitle')}</h3>
                <div className="content-body">
                  <div className="initiatives-grid">
                    <div className="initiative-item">
                      <div className="initiative-icon">
                        <i className="bi bi-sun"></i>
                      </div>
                      <div className="initiative-content">
                        <h4>{t('environmentalInitiatives.solarPanelGenerationTitle')}</h4>
                        <p>{t('environmentalInitiatives.solarPanelGenerationDesc')}</p>
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
                <h3 className="content-subtitle">{t('environmentalInitiatives.environmentalAwardsTitle')}</h3>
                <div className="content-body">
                  <p>
                    {t('environmentalInitiatives.environmentalAwardsDesc')}
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
                <h2>{t('environmentalInitiatives.environmentalSafetyCertificationsTitle')}</h2>
                <p>{t('environmentalInitiatives.environmentalSafetyCertificationsDesc')}</p>
              </div>
              <div className="specifications-table" data-aos="fade-up" data-aos-delay="100">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>{t('environmentalInitiatives.certificationTable.certification')}</th>
                      <th>{t('environmentalInitiatives.certificationTable.standard')}</th>
                      <th>{t('environmentalInitiatives.certificationTable.description')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('environmentalInitiatives.certificationTable.qualityManagementSystem')}</td>
                      <td>ISO 9001:2015</td>
                      <td>{t('environmentalInitiatives.certificationTable.qualityManagementSystemDesc')}</td>
                    </tr>
                    <tr>
                      <td>{t('environmentalInitiatives.certificationTable.environmentalManagementSystem')}</td>
                      <td>ISO 14001:2015</td>
                      <td>{t('environmentalInitiatives.certificationTable.environmentalManagementSystemDesc')}</td>
                    </tr>
                    <tr>
                      <td>{t('environmentalInitiatives.certificationTable.occupationalHealthSafety')}</td>
                      <td>ISO 45001:2018</td>
                      <td>{t('environmentalInitiatives.certificationTable.occupationalHealthSafetyDesc')}</td>
                    </tr>
                    <tr>
                      <td>{t('environmentalInitiatives.certificationTable.environmentalCompliance')}</td>
                      <td>PROPER Blue</td>
                      <td>{t('environmentalInitiatives.certificationTable.environmentalComplianceDesc')}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note-text">{t('environmentalInitiatives.certificationTable.noteText')}</p>
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
                <h2>{t('environmentalInitiatives.certificationEvidenceTitle')}</h2>
                <p>{t('environmentalInitiatives.certificationEvidenceDesc')}</p>
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
                        <p><strong>{t('environmentalInitiatives.issuer')}:</strong> {cert.issuer}</p>
                        <p><strong>{t('environmentalInitiatives.issueDate')}:</strong> {new Date(cert.issueDate).toLocaleDateString()}</p>
                      </div>
                      <button
                        className="btn-view-certificate"
                        onClick={() => openPdfViewer(cert)}
                      >
                        <i className="bi bi-file-earmark-pdf"></i> {t('environmentalInitiatives.viewCertificate')}
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
            <h2>{t('environmentalInitiatives.relatedTopicsTitle')}</h2>
            <p>{t('environmentalInitiatives.relatedTopicsDesc')}</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card h-100">
                <Link to="/sustainability/concept-of-sustainability" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Concept of Sustainability" />
                  </div>
                  <div className="card-caption">
                    <span>{t('environmentalInitiatives.conceptOfSustainabilityCard')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/sustainability/climate-change-disclosure" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Social Contribution Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>{t('environmentalInitiatives.socialContributionInitiativesCard')}</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card h-100">
                <Link to="/sustainability/occupational-health-safety" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Occupational Health & Safety" />
                  </div>
                  <div className="card-caption">
                    <span>{t('environmentalInitiatives.occupationalHealthSafetyCard')}</span>
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
                  <li><Link to="/">{t('header.home')}</Link></li>
                  <li><Link to="/sustainability">{t('sustainability.title')}</Link></li>
                  <li className="current">{t('environmentalInitiatives.title')}</li>
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