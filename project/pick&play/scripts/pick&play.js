document.getElementById('Year').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }