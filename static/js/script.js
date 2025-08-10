// Parallax scrolling effect
document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.querySelector('.testimonials-parallax-bg');
    
    function handleScroll() {
        const scrolled = window.pageYOffset;
        const speed = 0.3; // Adjust this value to control parallax intensity
        const yPos = -(scrolled * speed);
        
        if (parallaxBg) {
            parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
    }

    // Throttle scroll events for better performance
    let ticking = false;
    
    function scrollHandler() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    // Initial call to set position
    handleScroll();
});