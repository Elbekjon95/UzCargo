/**
 * Grid elementlari uchun bitta katta rasmni qo'llash
 */
document.addEventListener('DOMContentLoaded', function() {
    // Asosiy rasm URL
    const mainImageUrl = 'https://blog.aci.aero/wp-content/uploads/2024/07/shutterstock-1518356729.jpg';
    
    // Grid elementlarini olish
    const gridItems = document.querySelectorAll('.grid-item');
    
    if (gridItems.length === 0) return;
    
    // Har bir grid elementi uchun rasmni qo'llash
    gridItems.forEach(item => {
        const cardImage = item.querySelector('.card-image');
        if (cardImage) {
            // Rasmni o'rnatish
            cardImage.style.backgroundImage = `url(${mainImageUrl})`;
            cardImage.style.backgroundSize = 'cover';
            cardImage.style.backgroundPosition = 'center';
            
            // Mavjud img elementini o'chirish
            const imgElement = cardImage.querySelector('img');
            if (imgElement) {
                imgElement.style.display = 'none';
            }
        }
    });
    
    // Hover effekti - grid elementi ustiga sichqoncha kelganda
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Boshqa elementlar xiraroq
            gridItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = '0.7';
                    otherItem.style.transition = 'opacity 0.3s ease';
                }
            });
        });
        
        item.addEventListener('mouseleave', function() {
            // Barcha elementlar normal holatga qaytadi
            gridItems.forEach(otherItem => {
                otherItem.style.opacity = '1';
                otherItem.style.transition = 'opacity 0.3s ease';
            });
        });
    });
});

