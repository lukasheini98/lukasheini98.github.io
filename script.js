// ================================================
// Scroll-reveal observer
// ================================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ================================================
// Navbar shadow on scroll
// ================================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ================================================
// Hide scroll-hint after first scroll
// ================================================
const scrollHint = document.querySelector('.scroll-hint');
if (scrollHint) {
  let hidden = false;
  window.addEventListener('scroll', () => {
    if (!hidden && window.scrollY > 60) {
      scrollHint.style.opacity = '0';
      scrollHint.style.transition = 'opacity 0.5s';
      hidden = true;
    }
  });
}