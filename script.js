document.addEventListener('DOMContentLoaded', () => {
  // Loading screen animation
  const loadingScreen = document.querySelector('.loading-screen');
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 2500);
  });

  // Carousel functionality
  const slides = document.querySelectorAll('.carousel-slide');
  
  // Show first slide initially
  slides[0].style.display = 'block';
  
  let currentSlide = 0;
  function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
  }

  // Change slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Header scroll functionality
  let lastScrollPosition = 0;
  const header = document.querySelector('header');
  const scrollThreshold = 50; // Minimum scroll amount before hiding/showing

  window.addEventListener('scroll', () => {
      const currentScrollPosition = window.pageYOffset;
      
      // Check if we've scrolled more than the threshold
      if (Math.abs(currentScrollPosition - lastScrollPosition) < scrollThreshold) {
          return;
      }
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollPosition > lastScrollPosition) {
          header.classList.add('hide');
      } else {
          header.classList.remove('hide');
      }
      
      lastScrollPosition = currentScrollPosition;
  });
});