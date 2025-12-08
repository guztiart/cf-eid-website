import React, { useState, useEffect } from 'react';
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
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState('');
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);

  // Define site key once to ensure consistency
  const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || '6Le6myQsAAAAAKxoPBSEy4eERWaeJpo2svsRD7bQ';
  const RECAPTCHA_VERSION = process.env.REACT_APP_RECAPTCHA_VERSION || 'v2'; // Can be 'v2' or 'v3'

  // Load reCAPTCHA script
  useEffect(() => {
    let scriptElement = null;

    const loadRecaptcha = () => {
      // Check if script is already loaded
      if (document.querySelector('script[src*="recaptcha/api.js"]')) {
        setRecaptchaLoaded(true);
        if (RECAPTCHA_VERSION === 'v2') {
          renderRecaptchaV2();
        }
        return;
      }

      const script = document.createElement('script');
      scriptElement = script;
      
      if (RECAPTCHA_VERSION === 'v2') {
        // For reCAPTCHA v2 (visible checkbox)
        script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      } else {
        // For reCAPTCHA v3 (invisible)
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      }
      
      script.async = true;
      script.onerror = () => {
        setRecaptchaError('Failed to load reCAPTCHA. Please check your internet connection.');
      };
      script.onload = () => {
        setRecaptchaLoaded(true);
        setRecaptchaError('');
        
        // For v2, we need to render the widget explicitly
        if (RECAPTCHA_VERSION === 'v2') {
          renderRecaptchaV2();
        }
      };
      document.body.appendChild(script);
    };

    const renderRecaptchaV2 = () => {
      // Check if widget is already rendered and if render function exists
      if (window.grecaptcha && typeof window.grecaptcha.render === 'function' && document.getElementById('recaptcha-v2-container')) {
        // Check if the container is empty (no widget rendered yet)
        const container = document.getElementById('recaptcha-v2-container');
        if (container.innerHTML === '') {
          try {
            const widgetId = window.grecaptcha.render('recaptcha-v2-container', {
              'sitekey': RECAPTCHA_SITE_KEY,
              'theme': 'light',
              'callback': () => {
                // Optional: Handle successful verification
              },
              'expired-callback': () => {
                // Optional: Handle expired verification
              }
            });
            setRecaptchaWidgetId(widgetId);
          } catch (error) {
            console.error('Error rendering reCAPTCHA:', error);
            setRecaptchaError('Failed to render reCAPTCHA. Please refresh page.');
          }
        }
      } else {
        // If grecaptcha is not ready, try again after a delay
        setTimeout(() => {
          if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
            renderRecaptchaV2();
          } else {
            console.error('reCAPTCHA not properly loaded');
            setRecaptchaError('reCAPTCHA failed to load properly. Please refresh page.');
          }
        }, 1000);
      }
    };

    loadRecaptcha();

    return () => {
      // Cleanup script on unmount
      if (scriptElement && document.body.contains(scriptElement)) {
        try {
          document.body.removeChild(scriptElement);
        } catch (e) {
          console.warn('Error removing reCAPTCHA script:', e);
        }
      }
    };
  }, [RECAPTCHA_SITE_KEY, RECAPTCHA_VERSION]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Get reCAPTCHA token
  const getRecaptchaToken = () => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error('reCAPTCHA not loaded'));
        return;
      }

      if (RECAPTCHA_VERSION === 'v2') {
        // For reCAPTCHA v2, get the response from the widget
        const response = window.grecaptcha.getResponse(recaptchaWidgetId);
        if (response) {
          resolve(response);
        } else {
          reject(new Error('Please complete the reCAPTCHA challenge.'));
        }
      } else {
        // For reCAPTCHA v3
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
            .then(token => {
              resolve(token);
            })
            .catch(error => {
              console.error('reCAPTCHA execution error:', error);
              reject(new Error('reCAPTCHA verification failed. Please try again.'));
            });
        });
      }
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken();
      
      // Add reCAPTCHA token to form data
      const submissionData = {
        ...formData,
        recaptchaToken
      };

      const response = await axios.post('http://localhost:5000/api/inquiry', submissionData);
      
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
        
        // Reset reCAPTCHA v2 after successful submission
        if (RECAPTCHA_VERSION === 'v2' && window.grecaptcha && recaptchaWidgetId !== null) {
          window.grecaptcha.reset(recaptchaWidgetId);
        }
      } else {
        setErrorMessage(response.data.message || t('contact.errorMessage'));
        alert(t('contact.errorAlert') + (response.data.message || t('contact.errorMessage')));
      }
    } catch (error) {
      let errorMsg = t('contact.errorSending');
      
      if (error.message.includes('reCAPTCHA') || error.message.includes('site key')) {
        errorMsg = 'reCAPTCHA verification failed. Please refresh the page and try again.';
      } else if (error.response?.data?.message) {
        errorMsg = error.response.data.message;
      }
      
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
                    {recaptchaError && <div className="error-message">{recaptchaError}</div>}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {successMessage && <div className="sent-message">{successMessage}</div>}
                  </div>
                  
                  {/* reCAPTCHA v2 Widget (visible) - only shown if v2 is enabled */}
                  {RECAPTCHA_VERSION === 'v2' && (
                    <div className="col-md-12 text-center mb-3">
                      <div id="recaptcha-v2-container"></div>
                    </div>
                  )}
                  
                  {/* reCAPTCHA v3 Badge (invisible) - show a small badge to indicate it's active */}
                  {RECAPTCHA_VERSION === 'v3' && recaptchaLoaded && (
                    <div className="col-md-12 text-center mb-3">
                      <small className="text-muted">
                        <i className="bi bi-shield-check"></i> Protected by reCAPTCHA
                      </small>
                    </div>
                  )}
                  
                  <div className="col-md-12 text-center">
                    <button type="submit" disabled={loading || !recaptchaLoaded}>
                      {loading ? t('contact.sending') : (!recaptchaLoaded ? 'Loading reCAPTCHA...' : t('contact.sendMessage'))}
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