import React, { useState, useEffect, useRef } from 'react';

const ImageModal = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const modalRef = useRef(null);

  // Reset current index when modal opens with a new initial index
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Go to previous image
  const goToPrevious = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to next image
  const goToNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Close modal when clicking on the background
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  if (!isOpen || !images || images.length === 0) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      className="image-modal-overlay"
      onClick={handleBackgroundClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="image-modal-container" style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-40px',
            right: '0',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '30px',
            cursor: 'pointer',
            zIndex: 10001
          }}
        >
          <i className="bi bi-x-lg"></i>
        </button>

        {/* Image counter */}
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            left: '0',
            color: 'white',
            fontSize: '16px',
            zIndex: 10001
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>

        {/* Current image */}
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            cursor: 'default',
            userSelect: 'none',
            WebkitUserDrag: 'none',
            KhtmlUserDrag: 'none',
            MozUserDrag: 'none',
            OUserDrag: 'none'
          }}
          onClick={(e) => e.stopPropagation()}
          draggable={false}
        />

        {/* Previous button */}
        {images.length > 1 && (
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-50px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-50px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        )}

        {/* Thumbnail navigation */}
        {images.length > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '0',
              right: '0',
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              maxWidth: '100%'
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  border: currentIndex === index ? '2px solid white' : '2px solid transparent',
                  cursor: 'pointer',
                  opacity: currentIndex === index ? 1 : 0.6,
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}

        {/* Sliding indicator dots */}
        {images.length > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              left: '0',
              right: '0',
              display: 'flex',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {images.map((_, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                style={{
                  width: currentIndex === index ? '12px' : '8px',
                  height: currentIndex === index ? '12px' : '8px',
                  borderRadius: '50%',
                  background: currentIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;