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
  });
};

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('dark', '');
  }
  updateThemeIcon(savedTheme === 'dark');
};

document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  initializeThemeToggle();

  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', toggleMobileNav);

  const githubButton = document.querySelector('.social-icon.github');
  const linkedinButton = document.querySelector('.social-icon.linkedin');

  githubButton.addEventListener('click', () => {
      window.open('https://github.com/thebhumilsoni', '_blank');
  });

  linkedinButton.addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/thebhumilsoni', '_blank');
  });
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
