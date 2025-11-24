// ===================== SCROLL ANIMATIONS =====================

// Function to reveal elements when they enter the viewport
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // distance from bottom to trigger animation

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

// Run on scroll and on page load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===================== BUTTON HOVER ANIMATION =====================

// Add subtle bounce on button hover
const buttons = document.querySelectorAll('.btn button, .input button');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-5px) scale(1.1)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================== IMAGE FLOAT =====================

// Float effect for any image with class 'float-img'
const floatImages = document.querySelectorAll('.float-img');

floatImages.forEach(img => {
    let position = 0;
    let direction = 1;
    setInterval(() => {
        if(position > 15) direction = -1;
        if(position < -15) direction = 1;
        position += direction * 0.3;
        img.style.transform = `translateY(${position}px)`;
    }, 20);
});
