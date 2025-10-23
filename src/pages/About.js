import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS, usePureCounter, useGLightbox } from '../hooks/useExternalLibs';

const About = () => {
  // Initialize external libraries using custom hooks
  useAOS();
  usePureCounter();
  useGLightbox();

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
              <img src={`${process.env.PUBLIC_URL}/assets/img/ekk.jpg`} alt="About Eagle Industry Indonesia" />
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h2 className="inner-title">PT Eagle Industry Indonesia</h2>
              <div className="our-story">
                <h4>Berdiri Sejak 1996</h4>
                <h3>Sejarah Kami</h3>
                <p>PT Eagle Industry Indonesia adalah bagian dari Eagle Industry Co., Ltd., perusahaan global yang berbasis di Jepang 
                  yang dikenal sebagai pemimpin dalam pembuatan komponen otomotif dan industri. Didirikan di Indonesia pada tahun 1996, 
                  kami berfokus pada produksi seal mekanis, bellow karet, dan komponen presisi lainnya yang digunakan dalam berbagai industri, 
                  termasuk otomotif, aerospace, dan peralatan industri. Dengan komitmen terhadap kualitas dan inovasi, kami terus berkembang 
                  untuk memenuhi kebutuhan pelanggan di seluruh dunia.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> <span>Memproduksi komponen otomotif berkualitas tinggi dengan standar internasional.</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Mengutamakan inovasi teknologi dalam setiap proses produksi.</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Berkomitmen pada keberlanjutan dan tanggung jawab sosial perusahaan.</span></li>
                </ul>
                <p>Kami percaya bahwa keberhasilan kami dibangun atas dedikasi tim kami dan kepercayaan pelanggan. Dengan fasilitas produksi modern dan tim profesional, 
                  PT Eagle Industry Indonesia siap menjadi mitra terpercaya Anda.
                </p>
                <div className="watch-video d-flex align-items-center position-relative">
                  <i className="bi bi-play-circle"></i>
                  <a href="https://www.youtube.com/watch?v=1mBq36R4rd8" className="glightbox stretched-link">Watch Video</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section id="stats-counter" className="stats-counter section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Statistik Kami</h2>
          <p>Kami bangga dengan pencapaian kami dalam memberikan solusi terbaik untuk pelanggan dan mendukung pertumbuhan industri.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Klien Puas</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="24102000" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Produk Terjual</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Jam Dukungan</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="119" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Karyawan Berdedikasi</p>
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
              <p>The company has been established since 1992. In the name of NSO (Thailand) Co.,Ltd. Later, in 2007, it was changed to EKK Eagle (Thailand) Co., Ltd. has built a new factory and moved to the Amata City Industrial Estate area, Chonburi.

              The company manufactures and sells Mechanical seals for car water pumps, Lip seals for car compressors, Wastegate actuators for Turbo chargers, Reed valves. For Motorcycle Engine ,Valve For Home Appliance Equipment

              We has expanded and grown along with customers, so we want to continue to deliver products that make customers happy, impressed, and satisfied. Therefore, not only do we gain the trust of our customers, we also have a long-term business together, and we believe that it will make our employees happy as well.

              We hope to receive your continued support and trust forever. We have also developed an integrated production system that covers the entire process from the development of materials right through to production. This system is built around our superior seal, power transmission, valve and hydraulic technologies, 
              as well as our special processing and welding techniques that support them. With it, we are meeting customer requirements, which are becoming increasingly demanding as rotating machines operate at higher speeds, temperature, and pressure. We will continue to hone our technological prowess to meet the increasingly specialized and complex needs of our customers.</p>
              <div className="row">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias </p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>Nemo Enim</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise</p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>Dine Pad</h4>
                    <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit</p>
                  </div>
                </div>
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>Tride clov</h4>
                    <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit</p>
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
          <h2>Sejarah Kami</h2>
          <p>Perjalanan PT Eagle Industry Indonesia sebagai bagian dari Eagle Industry Co., Ltd., pemimpin global dalam teknologi sealing dan komponen presisi.</p>
        </div>
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <h3>Awal Mula dan Pendirian</h3>
              <p>PT Eagle Industry Indonesia didirikan pada tahun 1996 sebagai cabang dari Eagle Industry Co., Ltd., perusahaan Jepang yang berasal dari divisi mechanical seal NOK Corporation. Divisi ini menjadi independen pada tahun 1964 dengan nama Nippon Sealol Co., Ltd., dan berganti nama menjadi Eagle Industry Co., Ltd. pada tahun 1978.</p>
              <p>Di Indonesia, kami memulai operasi di EJIP Industrial Park, Cikarang, dengan fokus pada produksi seal mekanis, bellow karet, dan komponen presisi untuk industri otomotif, aerospace, dan peralatan industri.</p>
            </div>
            <div className="features-image col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eidOld.webp`} alt="Awal Pendirian" />
            </div>
          </div>
          <div className="row justify-content-around gy-4 mt-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h3>Pertumbuhan dan Inovasi</h3>
              <p>Sejak berdiri, kami telah berkembang pesat dengan mengadopsi teknologi canggih dari Jepang. Pada tahun 2000-an, kami memperluas fasilitas produksi untuk memenuhi permintaan global, termasuk aliansi dengan Burgmann Industries untuk produk EagleBurgmann.</p>
              <p>Kami mengembangkan sistem produksi terintegrasi dari pengembangan bahan hingga produksi akhir, mendukung kebutuhan mesin berputar berkecepatan tinggi, suhu, dan tekanan ekstrem.</p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Ekspansi pabrik pada 2010 untuk meningkatkan kapasitas.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Implementasi standar kualitas internasional seperti ISO 9001 dan IATF 16949.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Kontribusi pada perlindungan lingkungan melalui pencegahan kebocoran fluida.</span></li>
              </ul>
            </div>
            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eid2.jpg`} alt="Pertumbuhan dan Inovasi" />
            </div>
          </div>
          <div className="row justify-content-around gy-4 mt-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <h3>Masa Kini dan Masa Depan</h3>
              <p>Hingga saat ini, PT Eagle Industry Indonesia telah melayani ratusan klien di berbagai sektor, dengan komitmen pada inovasi, keberlanjutan, dan tanggung jawab sosial. Kami terus mengasah kemampuan teknologi untuk memenuhi kebutuhan pelanggan yang semakin kompleks.</p>
              <p>Di masa depan, kami bertujuan untuk menjadi pemimpin dalam solusi mobility di darat, laut, dan udara, sambil mendukung konservasi energi dan perlindungan lingkungan.</p>
              <div className="watch-video d-flex align-items-center position-relative">
                <i className="bi bi-play-circle"></i>
                <a href="https://youtu.be/FW3e8x1CNEo?si=B8lB0Svd3DXW3A11" className="glightbox stretched-link">Watch Video Sejarah</a>
              </div>
            </div>
            <div className="features-image col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/img/eid1.jpg`} alt="Masa Kini dan Masa Depan" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="company-overview" className="company-overview section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Company Overview</h2>
          <p>Informasi tentang PT Eagle Industry Indonesia, bagian dari Eagle Industry Co., Ltd., yang berdedikasi untuk memberikan solusi sealing dan komponen presisi berkualitas tinggi.</p>
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