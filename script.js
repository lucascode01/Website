document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.main4 img');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('zoom');
        } else {
          entry.target.classList.remove('zoom');
        }
      });
    }, {
      threshold: 0.5
    });
    
    images.forEach(img => observer.observe(img));
  });