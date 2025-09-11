// Main JavaScript file - handles theme toggle and navigation functionality

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

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    // Nav active on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('.section[id]').forEach(sec => {
            if (scrollY >= sec.offsetTop - 100) current = sec.id;
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });
});
