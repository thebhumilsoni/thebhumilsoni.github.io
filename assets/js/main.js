const toggleMobileNav = () => {
  const navbarLinks = document.querySelector('.navbar-links');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarTogglerIcon = navbarToggler.querySelector('i');

  navbarLinks.classList.toggle('open');
  navbarToggler.classList.toggle('open');
  navbarTogglerIcon.className = navbarLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
};

const updateThemeIcon = (isDarkMode) => {
  const themeIcon = document.querySelector('.theme-toggle .theme-icon');
  themeIcon.className = `theme-icon fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`;
};

const initializeThemeToggle = () => {
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.toggleAttribute('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : '');
    updateThemeIcon(isDarkMode);

    document.dispatchEvent(new Event('themeChange'));
  });
};

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('dark', '');
  }
  updateThemeIcon(savedTheme === 'dark');
};

const handleConnectButtonClick = () => {
  document.querySelector('.contact-section').scrollIntoView({ 
    behavior: 'smooth' 
  });
  if (window.innerWidth < 768) {
    toggleMobileNav();
  }
};

const setCurrentYear = () => {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  initializeThemeToggle();
  setCurrentYear();

  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', toggleMobileNav);

  const connectButton = document.querySelector('.navbar-contact-button');
  connectButton.addEventListener('click', handleConnectButtonClick);
});

window.addEventListener('resize', () => {
  const navbarLinks = document.querySelector('.navbar-links');
  const navbarTogglerIcon = document.querySelector('.navbar-toggler i');

  if (window.innerWidth >= 768) {
      if (navbarLinks.classList.contains('open')) {
          navbarLinks.classList.remove('open');
          navbarTogglerIcon.className = 'fas fa-bars';
      }
  } else {
      navbarTogglerIcon.className = navbarLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  }
});
