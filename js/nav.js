const navIcon = document.querySelector('.nav-icon');
const navMenu = document.querySelector('.nav-menu');

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  navIcon.classList.remove('active');
  navMenu.classList.remove('active');
}));