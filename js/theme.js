// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('theme-dark')) {
        body.classList.replace('theme-dark', 'theme-light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.replace('theme-light', 'theme-dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
