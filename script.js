/*  Navbar Scroll section */

const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});


/*  Hamburger Menu section */

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});


/*  FAQ section */
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});


/*  conatact details Validation section */

const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

function showError(inputId, errorId, show) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  input.classList.toggle('error', show);
  error.classList.toggle('show', show);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameOk = name.length >= 2;
  const emailOk = emailRe.test(email);
  const messageOk = message.length >= 10;

  showError('name', 'nameError', !nameOk);
  showError('email', 'emailError', !emailOk);
  showError('message', 'messageError', !messageOk);

  if (nameOk && emailOk && messageOk) {
    form.style.display = 'none';
    success.classList.add('show');
  }
});


/*  SCROLL REVEAL section */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},
  { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

