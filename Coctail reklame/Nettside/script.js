let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const nav = document.querySelector('nav');
    
    // When scrolling down
    if (currentScroll > lastScroll && !nav.classList.contains('nav--hidden')) {
        nav.classList.add('nav--hidden');
    }
    
    // When scrolling up
    if (currentScroll < lastScroll && nav.classList.contains('nav--hidden')) {
        nav.classList.remove('nav--hidden');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});