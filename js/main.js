// Main JavaScript file - imports all other scripts
// This file will be loaded in the HTML and will handle the main functionality

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'light') {
        body.classList.replace('theme-dark', 'theme-light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Save theme preference when changed
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('theme-dark')) {
            body.classList.replace('theme-dark', 'theme-light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('theme-light', 'theme-dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
});
