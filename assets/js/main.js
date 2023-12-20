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
    const isDarkMode = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark-theme' : '');
    updateThemeIcon(isDarkMode);
  });
};

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark-theme';
  if (isDarkMode) {
    document.body.classList.add(savedTheme);
  }
  updateThemeIcon(isDarkMode);
};

document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  initializeThemeToggle();
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', toggleMobileNav);
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
