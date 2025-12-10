import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, caption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Go to previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setIsTouching(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isTouching) return;
    
    const diff = startX - currentX;
    const threshold = 50; // Minimum swipe distance
    
    if (diff > threshold) {
      goToNext(); // Swipe left, go to next
    } else if (diff < -threshold) {
      goToPrevious(); // Swipe right, go to previous
    }
    
    setIsTouching(false);
    setCurrentX(0);
  };

  // If no images or only one image, just display it without slider
  if (!images || images.length === 0) {
    return (
      <div className="csr-activity-image">
        <div className="image-frame">
          <div className="no-images-placeholder">
            <i className="bi bi-image"></i>
            <span>No images available</span>
          </div>
        </div>
        {caption && <p className="image-caption">{caption}</p>}
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="csr-activity-image">
        <div className="image-frame">
          <img src={images[0]} className="img-fluid" alt={caption || "Activity Image"} />
          <div className="image-overlay">
            <div className="overlay-content">
              <i className="bi bi-camera"></i>
              <span>Foto Dokumentasi</span>
            </div>
          </div>
        </div>
        {caption && <p className="image-caption">{caption}</p>}
      </div>
    );
  }

  return (
    <div className="csr-activity-image">
      <div className="image-slider-container">
        <div 
          className="image-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="slides-container"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img 
                  src={image} 
                  className="img-fluid" 
                  alt={`${caption || "Activity Image"} ${index + 1}`} 
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="bi bi-camera"></i>
                    <span>Foto Dokumentasi {index + 1}/{images.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button className="slider-arrow slider-arrow-prev" onClick={goToPrevious}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="slider-arrow slider-arrow-next" onClick={goToNext}>
            <i className="bi bi-chevron-right"></i>
          </button>
          
          {/* Dots indicator */}
          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {caption && <p className="image-caption">{caption}</p>}
    </div>
  );
};

export default ImageSlider;