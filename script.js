// This script toggles the navigation menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
}