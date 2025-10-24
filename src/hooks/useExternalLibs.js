import { useEffect } from 'react';
import { initializeLibraries } from '../utils/loadScripts';

// Custom hook to initialize external libraries when component mounts
export const useExternalLibs = () => {
  useEffect(() => {
    // Initialize all external libraries
    initializeLibraries();
    
    // Clean up event listeners when component unmounts
    return () => {
      // Remove event listeners for isotope filtering
      const filterButtons = document.querySelectorAll('.portfolio-filters li');
      filterButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);
};

// Custom hook to initialize AOS specifically
export const useAOS = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);
};

// Custom hook to initialize PureCounter
export const usePureCounter = () => {
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (window.PureCounter) {
        // Initialize PureCounter with default settings
        new window.PureCounter();
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
};

// Custom hook to initialize GLightbox
export const useGLightbox = () => {
  useEffect(() => {
    if (window.GLightbox) {
      window.GLightbox({
        selector: '.glightbox'
      });
    }
  }, []);
};

// Custom hook to initialize Isotope for portfolio filtering
export const useIsotope = () => {
  useEffect(() => {
    if (window.Isotope) {
      const isotopeContainer = document.querySelector('.isotope-container');
      if (isotopeContainer) {
        const iso = new window.Isotope(isotopeContainer, {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          filter: '*'
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.portfolio-filters li');
        filterButtons.forEach(button => {
          button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
            
            // Update active class
            document.querySelector('.portfolio-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
          });
        });

        // Clean up event listeners
        return () => {
          filterButtons.forEach(button => {
            button.removeEventListener('click', () => {});
          });
        };
      }
    }
  }, []);
};

// Custom hook to initialize Swiper for carousels
export const useSwiper = (selector, options = {}) => {
  const optionsString = JSON.stringify(options);
  
  useEffect(() => {
    if (window.Swiper) {
      // Add a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          const swiper = new window.Swiper(element, options);
          
          // Clean up swiper instance
          return () => {
            if (swiper && swiper.destroy) {
              swiper.destroy();
            }
          };
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [selector, options, optionsString]);
};