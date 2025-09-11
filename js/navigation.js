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
