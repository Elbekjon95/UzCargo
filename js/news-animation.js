/**
 * Yangiliklar bloki uchun animatsiya
 */
document.addEventListener('DOMContentLoaded', function() {
    // Grid elementlarini olish
    const gridElements = [
        document.querySelector('.grid-header'),
        document.querySelector('.grid-sidebar'),
        document.querySelector('.grid-content-1'),
        document.querySelector('.grid-content-2'),
        document.querySelector('.grid-content-3'),
        document.querySelector('.grid-footer')
    ];
    
    // Scroll hodisasi
    window.addEventListener('scroll', function() {
        const newsContainer = document.querySelector('.news-container');
        if (!newsContainer) return;
        
        const containerPosition = newsContainer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (containerPosition < screenPosition) {
            // Grid elementlari animatsiyasi
            gridElements.forEach((element, index) => {
                if (element) {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }
    });
    
    // Sahifa yuklanganda scroll hodisasini ishga tushirish
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 500);
});


