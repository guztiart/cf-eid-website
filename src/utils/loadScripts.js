// This utility function loads external scripts dynamically
export const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

// This function loads multiple scripts in sequence
export const loadScripts = async (scripts) => {
  for (const script of scripts) {
    await loadScript(script);
  }
};

// This function initializes all the external libraries used in the project
export const initializeLibraries = () => {
  // Initialize AOS (Animate On Scroll)
  if (window.AOS) {
    window.AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // Initialize PureCounter
  if (window.PureCounter) {
    new window.PureCounter();
  }

  // Initialize GLightbox
  if (window.GLightbox) {
    window.GLightbox({
      selector: '.glightbox'
    });
  }

  // Initialize Isotope for portfolio filtering
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
    }
  }

  // Initialize Swiper for carousels
  if (window.Swiper) {
    // Hero carousel
    const heroCarousel = document.querySelector('#hero-carousel');
    if (heroCarousel) {
      new window.Swiper(heroCarousel, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    // Portfolio details slider
    const portfolioSlider = document.querySelector('.portfolio-details-slider');
    if (portfolioSlider) {
      new window.Swiper(portfolioSlider, {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
};