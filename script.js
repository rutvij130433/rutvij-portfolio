// Theme toggle logic
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

toggleButton.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});

// Load default theme
window.addEventListener('DOMContentLoaded', () => {
  body.setAttribute('data-theme', 'light'); // or detect via system: matchMedia
});