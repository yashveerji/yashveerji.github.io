// Loader fadeout
window.addEventListener('load', () => {
  const loaderWrapper = document.getElementById('loader-wrapper');
  if (loaderWrapper) {
    loaderWrapper.style.opacity = '0';
    loaderWrapper.style.pointerEvents = 'none';
    setTimeout(() => loaderWrapper.style.display = 'none', 500);
  }
});

// Dark mode toggle with localStorage persistence
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Apply saved theme on load
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  if (darkModeToggle) darkModeToggle.textContent = '☀️'; // sun icon for dark mode on
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.textContent = '☀️'; // sun icon
    } else {
      localStorage.setItem('darkMode', 'disabled');
      darkModeToggle.textContent = '🌙'; // moon icon
    }
  });
}

// Smooth scroll for nav links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetID);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial-slider blockquote');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.display = (i === index) ? 'block' : 'none';
  });
}

// Initial display
if (testimonials.length) {
  showTestimonial(currentTestimonial);

  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000); // Change every 5 seconds
}
