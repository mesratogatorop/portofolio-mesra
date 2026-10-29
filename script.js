const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka menu');
      menuToggle.textContent = '☰';
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Periksa berkas CV sebelum digunakan. Ganti assets/cv-mesra.pdf dengan CV PDF milikmu.
const cvButton = document.getElementById('cvButton');
if (cvButton) {
  cvButton.addEventListener('click', (event) => {
    if (cvButton.getAttribute('href') === '#') {
      event.preventDefault();
      alert('Tambahkan file CV PDF milikmu ke folder assets dan perbarui tautannya di index.html.');
    }
  });
}
