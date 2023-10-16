const toggleNavbarBtn = document.getElementById('toggleNavbar');
const navbarOverlay = document.getElementById('navbarOverlay');

function openNavbar() {
  navbarOverlay.style.display = 'block';
}

function closeNavbar() {
  navbarOverlay.style.display = 'none';
}

function isNavbarOpen() {
  return navbarOverlay.style.display === 'block';
}

toggleNavbarBtn.addEventListener('click', function () {
  if (isNavbarOpen()) {
    closeNavbar();
  } else {
    openNavbar();
  }
});

navbarOverlay.addEventListener('click', function (event) {
  if (event.target === navbarOverlay) {
    closeNavbar();
  }
});

function updateBackground(isDark) {
  const backgroundColor = isDark ? 0xe1dcd1 : 0x06142e;
  vantaInstance.setOptions({ backgroundColor });
}

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
let vantaInstance = null;

function toggleDarkMode(isDark) {
  body.classList.toggle('dark-mode', isDark);
  darkModeToggle.checked = isDark;
  localStorage.setItem('mode', isDark ? 'dark' : 'light');
  updateBackground(isDark);
}

darkModeToggle.addEventListener('change', () => toggleDarkMode(darkModeToggle.checked));

const userPreference = localStorage.getItem('mode');
if (userPreference === 'dark') {
  toggleDarkMode(true);
}

document.addEventListener('DOMContentLoaded', () => {
  const vantajsContainer = document.getElementById('vantajs');
  const isDarkMode = body.classList.contains('dark-mode');
  vantaInstance = VANTA.HALO({
    el: vantajsContainer,
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 100.0,
    minWidth: 100.0,
    scale: 0.6,
    scaleMobile: 0.7,
    backgroundColor: isDarkMode ? 0xe1dcd1 : 0x06142e,
  });
});
