/**
 * Awesome Image Slider
 */
document.addEventListener('DOMContentLoaded', function() {
    // Slider elementlarini olish
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;
    
    // Avtomatik slayd almashtirish
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Slaydni ko'rsatish
    function showSlide(index) {
        // Barcha slaydlarni yashirish
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Barcha nuqtalarni o'chirish
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Tanlangan slaydni ko'rsatish
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Joriy slayd indeksini yangilash
        currentSlide = index;
    }
    
    // Keyingi slaydga o'tish
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slideCount) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // Oldingi slaydga o'tish
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slideCount - 1;
        }
        showSlide(prevIndex);
    }
    
    // Tugmalar uchun hodisalar
    prevBtn.addEventListener('click', function() {
        clearInterval(slideInterval);
        prevSlide();
        startSlideShow();
    });
    
    nextBtn.addEventListener('click', function() {
        clearInterval(slideInterval);
        nextSlide();
        startSlideShow();
    });
    
    // Nuqtalar uchun hodisalar
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(slideInterval);
            showSlide(index);
            startSlideShow();
        });
    });
    
    // Klaviatura bilan boshqarish
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            clearInterval(slideInterval);
            prevSlide();
            startSlideShow();
        } else if (e.key === 'ArrowRight') {
            clearInterval(slideInterval);
            nextSlide();
            startSlideShow();
        }
    });
    
    // Touch qurilmalar uchun swipe qo'llab-quvvatlash
    let touchStartX = 0;
    let touchEndX = 0;
    
    const slider = document.querySelector('.slider');
    
    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        // Swipe masofasi
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Chapga swipe
            clearInterval(slideInterval);
            nextSlide();
            startSlideShow();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // O'ngga swipe
            clearInterval(slideInterval);
            prevSlide();
            startSlideShow();
        }
    }
    
    // Hover bo'lganda avtomatik almashtirish to'xtatiladi
    const sliderContainer = document.querySelector('.slider-container');
    
    sliderContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', function() {
        startSlideShow();
    });
    
    // Slayd ko'rsatishni boshlash
    showSlide(currentSlide);
    startSlideShow();
});

