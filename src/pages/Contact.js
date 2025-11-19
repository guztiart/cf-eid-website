import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';
import { useLanguage } from '../contexts/LanguageContext';
import axios from 'axios';

const Contact = () => {
  // Initialize external libraries and language context
  useAOS();
  const { t } = useLanguage();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/inquiry', formData);
      
      if (response.data.success) {
        const emailStatus = response.data.emailSent ? ' and email sent' : '';
        const confirmationStatus = response.data.confirmationSent ? ' (confirmation email sent to user)' : '';
        setSuccessMessage(t('contact.successMessage'));
        alert(t('contact.successAlert'));
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setErrorMessage(response.data.message || t('contact.errorMessage'));
        alert(t('contact.errorAlert') + (response.data.message || t('contact.errorMessage')));
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || t('contact.errorSending');
      setErrorMessage(errorMsg);
      alert(t('contact.errorAlert') + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/Photo-Building/eid1.JPG)` }}>
        <div className="container position-relative">
          <h1>{t('contact.title')}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">{t('contact.breadcrumbHome')}</Link></li>
              <li className="current">{t('contact.breadcrumbContact')}</li>
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
                <h3>{t('contact.address')}</h3>
                <p>{t('contact.addressDetails')}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone"></i>
                <h3>{t('contact.callUs')}</h3>
                <p>{t('contact.phoneNumber')}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope"></i>
                <h3>{t('contact.emailUs')}</h3>
                <p>{t('contact.emailAddress')}</p>
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
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="400">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder={t('contact.yourName')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder={t('contact.yourEmail')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder={t('contact.subject')}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder={t('contact.message')}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    {loading && <div className="loading">{t('contact.loading')}</div>}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {successMessage && <div className="sent-message">{successMessage}</div>}
                    <button type="submit" disabled={loading}>
                      {loading ? t('contact.sending') : t('contact.sendMessage')}
                    </button>
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