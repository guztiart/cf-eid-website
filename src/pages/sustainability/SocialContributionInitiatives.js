import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../../hooks/useExternalLibs';
import ImageSlider from '../../components/ImageSlider';

const SocialContributionInitiatives = () => {
  // Initialize external libraries using custom hooks
  useAOS();

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
    
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
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
              <li className="current">Social Contribution Initiatives</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Social Contribution Header */}
      <section className="product-header section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="product-title" data-aos="fade-up">Social Contribution Initiatives</h2>
              <div className="product-navigation" data-aos="fade-up" data-aos-delay="100">
                <ul className="nav-list">
                  <li className="nav-item"><Link to="/sustainability">Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/concept-of-sustainability">Concept of Sustainability</Link></li>
                  <li className="nav-item"><Link to="/sustainability/environmental-initiatives">Environmental Initiatives</Link></li>
                  <li className="nav-item"><Link to="/sustainability/occupational-health-safety">Occupational Health & Safety</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Contribution Details Section */}
      <section id="social-contribution-details" className="sustainability-content section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2 className="content-title">Social Contribution at PT Eagle Industri Indonesia</h2>
                <div className="content-body">
                  <p>
                    At PT Eagle Industri Indonesia, we are committed to making a positive impact on society through our Corporate Social Responsibility (CSR) initiatives.
                    Our social contribution programs focus on supporting the community, helping those in need, and fostering sustainable development in the areas surrounding our operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Activities Section */}
      <section className="product-specifications section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h2>CSR Activities</h2>
                <p>Our commitment to social responsibility and community support</p>
              </div>
            </div>
          </div>
          
          <div className="row gy-4">
            {/* Qurban Activity */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <div className="csr-activity-card">
                <div className="csr-activity-header">
                  <div className="csr-activity-icon">
                    <i className="bi bi-gift"></i>
                  </div>
                  <div className="csr-activity-number">01</div>
                </div>
                <div className="csr-activity-body">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <h3 className="csr-activity-title">Kegiatan Qurban - Idul Adha</h3>
                      <p className="csr-activity-description">
                        Perusahaan menjalankan program Qurban tahunan pada Hari Raya Idul Adha. Distribusi daging Qurban diberikan kepada yatim/piatu/dhuafa di sekitar perusahaan.
                      </p>
                      <div className="csr-activity-highlights">
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Program Qurban tahunan dilaksanakan setiap Hari Raya Idul Adha</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Distribusi daging Qurban kepada masyarakat kurang mampu</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Fokus pada yatim, piatu, dan dhuafa di sekitar lokasi perusahaan</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Melibatkan karyawan dalam pelaksanaan program</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ImageSlider
                        images={[
                          `${process.env.PUBLIC_URL}/assets/img/activities/qurban-1.jpeg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/qurban-2.jpg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/qurban-3.jpeg`
                        ]}
                        caption="Kegiatan Qurban Idul Adha"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ramadhan Charity Activity */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="csr-activity-card">
                <div className="csr-activity-header">
                  <div className="csr-activity-icon">
                    <i className="bi bi-heart"></i>
                  </div>
                  <div className="csr-activity-number">02</div>
                </div>
                <div className="csr-activity-body">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <h3 className="csr-activity-title">Berbagi Kebahagiaan Ramadhan untuk Anak Yatim & Piatu</h3>
                      <p className="csr-activity-description">
                        Perusahaan secara rutin mengadakan kegiatan santunan Ramadhan dengan mengundang anak yatim piatu untuk berbagi kebahagiaan di bulan suci.
                      </p>
                      <div className="csr-activity-highlights">
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Program santunan rutin setiap bulan Ramadhan</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Mengundang anak yatim piatu untuk berbuka puasa bersama</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Memberikan bantuan berupa santunan dan perlengkapan sekolah</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Menciptakan momen berbagi kebahagiaan di bulan suci Ramadhan</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ImageSlider
                        images={[
                          `${process.env.PUBLIC_URL}/assets/img/activities/santunan-1.jpg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/santunan-2.jpg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/santunan-3.jpg`
                        ]}
                        caption="Santunan Ramadhan Anak Yatim & Piatu"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Flood Victim Support Activity */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="csr-activity-card">
                <div className="csr-activity-header">
                  <div className="csr-activity-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="csr-activity-number">03</div>
                </div>
                <div className="csr-activity-body">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <h3 className="csr-activity-title">Dukungan Perusahaan bagi Korban Banjir</h3>
                      <p className="csr-activity-description">
                        Perusahaan menyalurkan bantuan bagi masyarakat sekitar yang terdampak banjir sebagai wujud kepedulian terhadap lingkungan sekitar.
                      </p>
                      <div className="csr-activity-highlights">
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Respons cepat terhadap bencana banjir di sekitar perusahaan</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Penyaluran bantuan berupa sembako dan kebutuhan pokok</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Bantuan langsung kepada korban banjir yang terdampak</span>
                        </div>
                        <div className="highlight-item">
                          <i className="bi bi-check-circle"></i>
                          <span>Bentuk kepedulian sosial terhadap masyarakat sekitar</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ImageSlider
                        images={[
                          `${process.env.PUBLIC_URL}/assets/img/activities/banjir-1.jpg`,
                          `${process.env.PUBLIC_URL}/assets/img/activities/banjir-2.jpg`
                        ]}
                        caption="Bantuan Korban Banjir"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Concept of Sustainability" />
                  </div>
                  <div className="card-caption">
                    <span>Concept of Sustainability</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card h-100">
                <Link to="/sustainability/environmental-initiatives" className="card-link">
                  <div className="card-image-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.png`} className="card-image" alt="Environmental Initiatives" />
                  </div>
                  <div className="card-caption">
                    <span>Environmental Initiatives</span>
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
                  <li className="current">Social Contribution Initiatives</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialContributionInitiatives;