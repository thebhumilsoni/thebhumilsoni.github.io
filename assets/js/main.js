// Function to handle the transition effect
const applyTransitionEffect = (element) => {
  element.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
};

// Function to remove the transition effect
const removeTransitionEffect = (element) => {
  element.style.transition = 'none';
};

// Toggle Mobile Navigation
const toggleMobileNav = () => {
  const navbarLinks = document.querySelector('.navbar-links');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarTogglerIcon = navbarToggler.querySelector('i');

  // Apply or remove the transition effect depending on the open state
  if (navbarLinks.classList.contains('open')) {
    removeTransitionEffect(navbarLinks); // This will not remove the rotation effect on the icon
  } else {
    applyTransitionEffect(navbarLinks); // Apply the fade transition to the links
  }

  navbarLinks.classList.toggle('open');
  navbarToggler.classList.toggle('open'); // This line should handle the rotation of the icon
  navbarTogglerIcon.className = navbarLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
};


// Update Theme Icon based on the current theme
const updateThemeIcon = (isDarkMode) => {
  const themeIcon = document.querySelector('.theme-toggle .theme-icon');
  themeIcon.className = `theme-icon fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`;
};

// Initialize Theme Toggle Functionality
const initializeThemeToggle = () => {
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark-theme' : '');
    updateThemeIcon(isDarkMode);
  });
};

// Apply Saved Theme Preference
const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark-theme';
  if (isDarkMode) {
    document.body.classList.add(savedTheme);
  }
  updateThemeIcon(isDarkMode);
};

// DOM Content Loaded Listener
document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  initializeThemeToggle();
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', toggleMobileNav);
});

// Window Resize Listener for Responsive Design
window.addEventListener('resize', () => {
  const navbarLinks = document.querySelector('.navbar-links');

  if (window.innerWidth >= 768) {
    navbarLinks.classList.remove('open'); // Ensure that the navbar links are not open when resizing to a wider view
    navbarLinks.style.opacity = '';
    navbarLinks.style.visibility = '';
  }
});
