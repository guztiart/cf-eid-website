import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';

const Contact = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="contact-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>Inquiry Form</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Inquiry Form</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <p> EJIP Industrial Park, Plot 8G, Sukaresmi, Cikarang Sel., 
                  Kabupaten Bekasi, Jawa Barat 17550</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>(021) 8970178</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>shinta.maharani@ekkeagle.com</p>
              </div>
            </div>
          </div>
          <div className="row gy-4 mt-1">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4670734062265!2d107.10831407475155!3d-6.333485893656138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699a8863961057%3A0x23be1ed5ebcb9168!2sPT.%20Eagle%20Industry%20Indonesia!5e0!3m2!1sid!2sid!4v1757465023884!5m2!1sid!2sid" 
                width="600" 
                height="450" 
                style={{ border: '0' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - PT Eagle Industry Indonesia Location"
              ></iframe>
            </div>
            <div className="col-lg-6">
              <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="400">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;