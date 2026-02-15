// Theme Toggle Functionality - Shared across all pages
(function() {
  'use strict';
  
  // Initialize theme on page load (before DOM renders to prevent flash)
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Setup theme toggle when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Toggle theme on button click
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        if (newTheme === 'dark') {
          htmlElement.setAttribute('data-theme', 'dark');
        } else {
          htmlElement.removeAttribute('data-theme');
        }
        
        localStorage.setItem('theme', newTheme);
      });
    }
    
    // Mobile menu functions
    window.hamburg = function() {
      const dropdown = document.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.transform = 'translateY(0)';
      }
    };
    
    window.cancel = function() {
      const dropdown = document.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.transform = 'translateY(-110%)';
      }
    };
  });
})();
