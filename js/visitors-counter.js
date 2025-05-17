/**
 * Tashrif buyuruvchilar sonini hisoblovchi skript
 */
document.addEventListener('DOMContentLoaded', function() {
    // Joriy oy nomini olish
    const months = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
        'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
    ];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    
    // Joriy oyni HTML ga qo'yish
    document.getElementById('currentMonth').textContent = currentMonth;
    
    // Local Storage dan tashrif buyuruvchilar sonini olish
    function getVisitorCount() {
        const storageKey = `visitors_${currentDate.getMonth()}_${currentDate.getFullYear()}`;
        return parseInt(localStorage.getItem(storageKey) || '0');
    }
    
    // Local Storage ga tashrif buyuruvchilar sonini saqlash
    function saveVisitorCount(count) {
        const storageKey = `visitors_${currentDate.getMonth()}_${currentDate.getFullYear()}`;
        localStorage.setItem(storageKey, count.toString());
    }
    
    // Tashrif buyuruvchilar sonini aniqlash
    function updateVisitorCount() {
        let count = getVisitorCount();
        
        // Foydalanuvchi bugun tashrif buyurganmi tekshirish
        const lastVisitKey = `last_visit_${currentDate.getMonth()}_${currentDate.getFullYear()}`;
        const lastVisitDate = localStorage.getItem(lastVisitKey);
        const today = currentDate.toDateString();
        
        if (lastVisitDate !== today) {
            // Yangi tashrif
            count++;
            saveVisitorCount(count);
            localStorage.setItem(lastVisitKey, today);
        }
        
        return count;
    }
    
    // Tashrif buyuruvchilar sonini ko'rsatish
    function displayVisitorCount() {
        const visitorCount = document.getElementById('visitorCount');
        const count = updateVisitorCount();
        
        // Animatsiya bilan ko'rsatish
        let currentCount = 0;
        const duration = 2000; // 2 sekund
        const interval = 50; // har 50ms da yangilanadi
        const increment = Math.ceil(count / (duration / interval));
        
        const counter = setInterval(() => {
            currentCount += increment;
            if (currentCount >= count) {
                currentCount = count;
                clearInterval(counter);
            }
            visitorCount.textContent = currentCount.toLocaleString();
        }, interval);
    }
    
    // Sahifa yuklanganda tashrif buyuruvchilar sonini ko'rsatish
    displayVisitorCount();
    
    // Tashrif buyuruvchilar sonini serverdan olish (agar kerak bo'lsa)
    function fetchVisitorCountFromServer() {
        // Bu yerda server bilan bog'lanish kodi bo'lishi mumkin
        // Misol uchun:
        /*
        fetch('https://api.uzaircargo.uz/visitors')
            .then(response => response.json())
            .then(data => {
                // Serverdan olingan ma'lumotlarni ko'rsatish
                document.getElementById('visitorCount').textContent = data.count.toLocaleString();
                // Local Storage ga saqlash
                saveVisitorCount(data.count);
            })
            .catch(error => {
                console.error('Tashrif buyuruvchilar sonini olishda xatolik:', error);
                // Xatolik yuz berganda Local Storage dagi ma'lumotlarni ko'rsatish
                displayVisitorCount();
            });
        */
    }
    
    // Agar server bilan bog'lanish kerak bo'lsa, bu funksiyani chaqirish mumkin
    // fetchVisitorCountFromServer();
});