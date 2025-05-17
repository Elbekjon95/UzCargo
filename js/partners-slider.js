/**
 * Hamkorlar slideri uchun JavaScript
 */
document.addEventListener('DOMContentLoaded', function() {
    // Slider elementlarini olish
    const slider = document.querySelector('.partners-slider');
    
    if (!slider) return;
    
    // Slider elementlarini nusxalash (to'xtovsiz aylanish uchun)
    const cloneItems = () => {
        const items = slider.querySelectorAll('.partner-item');
        
        // Barcha elementlarni nusxalash
        items.forEach(item => {
            const clone = item.cloneNode(true);
            slider.appendChild(clone);
        });
    };
    
    // Elementlarni nusxalash
    cloneItems();
    
    // Hover bo'lganda animatsiyani to'xtatish
    slider.addEventListener('mouseenter', () => {
        slider.style.animationPlayState = 'paused';
    });
    
    // Hover tugaganda animatsiyani davom ettirish
    slider.addEventListener('mouseleave', () => {
        slider.style.animationPlayState = 'running';
    });
    
    // Touch qurilmalar uchun
    slider.addEventListener('touchstart', () => {
        slider.style.animationPlayState = 'paused';
    });
    
    slider.addEventListener('touchend', () => {
        slider.style.animationPlayState = 'running';
    });
    
    // Ekran o'lchamiga qarab tezlikni o'zgartirish
    const updateAnimationSpeed = () => {
        const width = window.innerWidth;
        
        if (width < 576) {
            slider.style.animationDuration = '25s';
        } else if (width < 768) {
            slider.style.animationDuration = '30s';
        } else {
            slider.style.animationDuration = '35s';
        }
    };
    
    // Dastlabki tezlikni o'rnatish
    updateAnimationSpeed();
    
    // Ekran o'lchami o'zgarganda tezlikni yangilash
    window.addEventListener('resize', updateAnimationSpeed);
});