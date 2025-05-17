// Navbar uchun JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Scroll bo'lganda navbar effekti
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Smooth scrolling for navbar links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Agar havola # bilan boshlansa
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Aktiv klassni olib tashlash
                document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
                    item.classList.remove('active');
                    item.removeAttribute('aria-current');
                });
                
                // Yangi linkni aktiv qilish
                this.classList.add('active');
                this.setAttribute('aria-current', 'page');
                
                // Scroll to section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Navbar balandligini hisobga olish
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Mobil qurilmalarda menyu yopilishi
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        document.querySelector('.navbar-toggler').click();
                    }
                }
            }
        });
    });
    
    // Scroll position bo'yicha aktiv linkni aniqlash
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id], div[id].slider-container');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100; // 100px qo'shimcha margin
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
    
    // Scroll bo'lganda aktiv linkni yangilash
    window.addEventListener('scroll', setActiveNavLink);
    
    // Sahifa yuklanganda aktiv linkni aniqlash
    setActiveNavLink();
});

// Xizmatlar animatsiyasi
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Dastlabki animatsiya
    setTimeout(() => {
        serviceCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = card.classList.contains('active') ? 
                    'scale(1.05)' : 'scale(0.9)';
            }, index * 200);
        });
    }, 500);
    
    // Hover effektini qo'shish
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1.05) translateY(-10px)';
            } else {
                this.style.transform = 'scale(1.1) translateY(-10px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(0.9)';
            } else {
                this.style.transform = 'scale(1.05)';
            }
        });
    });
    
    // Avtomatik almashtirish
    let activeIndex = 1; // Dastlab o'rtadagi aktiv
    
    function rotateActiveCard() {
        serviceCards.forEach(card => {
            card.classList.remove('active');
            card.style.transform = 'scale(0.9)';
        });
        
        activeIndex = (activeIndex + 1) % serviceCards.length;
        serviceCards[activeIndex].classList.add('active');
        serviceCards[activeIndex].style.transform = 'scale(1.05)';
    }
    
    // Har 5 sekundda aktiv kartani almashtirish
    setInterval(rotateActiveCard, 5000);
});

// Timeline animatsiyasi
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function showTimelineItems() {
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                item.classList.add('show');
            }
        });
    }
    
    // Sahifa yuklanganda tekshirish
    setTimeout(showTimelineItems, 500);
    
    // Scroll hodisasi
    window.addEventListener('scroll', showTimelineItems);
});

// Hujjatlar animatsiyasi
document.addEventListener('DOMContentLoaded', function() {
    const documentBoxes = document.querySelectorAll('.document-box');
    
    function showDocumentBoxes() {
        documentBoxes.forEach((box, index) => {
            const boxPosition = box.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (boxPosition < screenPosition) {
                // Har bir box uchun kechikish qo'shish
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 100); // Har bir box 100ms kechikish bilan paydo bo'ladi
            }
        });
    }
    
    // Sahifa yuklanganda tekshirish
    setTimeout(showDocumentBoxes, 500);
    
    // Scroll hodisasi
    window.addEventListener('scroll', showDocumentBoxes);
});

// Footer animatsiyalari
document.addEventListener('DOMContentLoaded', function() {
    // Footer havolalari animatsiyasi
    const footerLinks = document.querySelectorAll('.footer-links ul li');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'translateX(0)';
        });
    });
    
    // Designer name animatsiyasi
    const designerName = document.querySelector('.designer-name');
    
    if (designerName) {
        // Havola ishlashini ta'minlash uchun
        designerName.addEventListener('click', function(e) {
            e.stopPropagation(); // Boshqa elementlar ta'sirini to'xtatish
            window.open(this.getAttribute('href'), '_blank');
        });
    }
});

// Aloqa formasi validatsiyasi va yuborish
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form ma'lumotlarini olish
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const messageType = document.getElementById('messageType').value;
            const message = document.getElementById('message').value;
            
            // Telefon raqam validatsiyasi
            const phoneRegex = /^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
            if (!phoneRegex.test(phone)) {
                showNotification('Iltimos, telefon raqamni to\'g\'ri formatda kiriting: +998 XX XXX XX XX', 'error');
                return;
            }
            
            // Ma'lumotlarni tekshirish
            if (name.trim() === '' || messageType === '' || message.trim() === '') {
                showNotification('Iltimos, barcha majburiy maydonlarni to\'ldiring', 'error');
                return;
            }
            
            // Loading ko'rsatish
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
            submitBtn.disabled = true;
            
            // Ma'lumotlarni tayyorlash
            const formData = {
                name: name,
                phone: phone,
                email: email || 'Kiritilmagan',
                messageType: messageType,
                message: message,
                date: new Date().toLocaleString()
            };
            
            // LocalStorage'ga saqlash
            saveToLocalStorage(formData);
            
            // Telegram botga yuborish
            sendToTelegram(formData)
                .then(response => {
                    // Formani tozalash
                    contactForm.reset();
                    
                    // Tugmani asl holatiga qaytarish
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    
                    // Muvaffaqiyatli yuborilganligi haqida xabar
                    showNotification('Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.', 'success');
                    
                    // Yuborilgan xabarlarni ko'rsatish (admin panel uchun)
                    if (window.location.hash === '#admin') {
                        displaySubmittedMessages();
                    }
                })
                .catch(error => {
                    // Xatolik yuz berganda
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    
                    // CORS xatoligi yuz berganda proxy server orqali yuborish
                    if (error.message.includes('CORS')) {
                        // Proxy server orqali yuborish
                        sendViaCorsProxy(formData)
                            .then(() => {
                                // Formani tozalash
                                contactForm.reset();
                                showNotification('Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.', 'success');
                            })
                            .catch(proxyError => {
                                console.error('Proxy server xatosi:', proxyError);
                                showNotification('Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.', 'error');
                            });
                    } else {
                        showNotification('Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.', 'error');
                        console.error('Telegram yuborish xatosi:', error);
                    }
                });
        });
        
        // Telefon raqam formati uchun
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 0 && value[0] !== '+') {
                    value = '+' + value;
                }
                
                // +998 XX XXX XX XX formatiga keltirish
                if (value.length > 4) {
                    value = value.substring(0, 4) + ' ' + value.substring(4);
                }
                if (value.length > 7) {
                    value = value.substring(0, 7) + ' ' + value.substring(7);
                }
                if (value.length > 11) {
                    value = value.substring(0, 11) + ' ' + value.substring(11);
                }
                if (value.length > 14) {
                    value = value.substring(0, 14) + ' ' + value.substring(14);
                }
                
                e.target.value = value.substring(0, 17);
            });
        }
    }
    
    // Telegram botga yuborish
    async function sendToTelegram(formData) {
        const botToken = '8176756119:AAHuqiPhz0UJi2XuF9RhmhG4BCQhOkNG62Q';
        const chatId = '-1002650083211';
        
        try {
            // Xabar matni tayyorlash
            const messageText = `🔔 *Yangi murojaat*\n\n` +
                `👤 *F.I.SH:* ${formData.name}\n` +
                `📱 *Telefon:* ${formData.phone}\n` +
                `📧 *Email:* ${formData.email}\n` +
                `🏷️ *Murojaat turi:* ${formData.messageType}\n\n` +
                `📝 *Xabar:*\n${formData.message}\n\n` +
                `📅 *Sana:* ${formData.date}`;
            
            // Telegram API ga so'rov yuborish
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: messageText,
                    parse_mode: 'Markdown'
                }),
                mode: 'cors' // CORS ni aniq ko'rsatish
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Telegram API xatoligi:', errorData);
                throw new Error(errorData.description || `HTTP xatolik: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Telegram javob:', data); // Muvaffaqiyatli javobni ko'rish uchun
            
            return data;
        } catch (error) {
            console.error('Telegram yuborish xatosi:', error);
            
            // CORS xatoligi yuz berganda
            if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
                throw new Error('CORS xatoligi: Telegram API ga ulanib bo\'lmadi. Iltimos, proxy server orqali urinib ko\'ring.');
            }
            
            throw error;
        }
    }
    
    // CORS Proxy server orqali yuborish
    async function sendViaCorsProxy(formData) {
        // Xabar matni tayyorlash
        const messageText = `🔔 *Yangi murojaat*\n\n` +
            `👤 *F.I.SH:* ${formData.name}\n` +
            `📱 *Telefon:* ${formData.phone}\n` +
            `📧 *Email:* ${formData.email}\n` +
            `🏷️ *Murojaat turi:* ${formData.messageType}\n\n` +
            `📝 *Xabar:*\n${formData.message}\n\n` +
            `📅 *Sana:* ${formData.date}`;
        
        // CORS Proxy server orqali yuborish
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const telegramUrl = 'https://api.telegram.org/bot8176756119:AAHuqiPhz0UJi2XuF9RhmhG4BCQhOkNG62Q/sendMessage';
        
        const response = await fetch(proxyUrl + telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': window.location.origin
            },
            body: JSON.stringify({
                chat_id: '-1002650083211',
                text: messageText,
                parse_mode: 'Markdown'
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.description || `HTTP xatolik: ${response.status}`);
        }
        
        return await response.json();
    }
    
    // Form animatsiyalari
    const formInputs = document.querySelectorAll('.contact-form .form-control');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.parentElement.classList.remove('input-focused');
            }
        });
    });
    
    // LocalStorage'ga saqlash
    function saveToLocalStorage(formData) {
        // Mavjud xabarlarni olish
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        // Yangi xabarni qo'shish
        messages.push(formData);
        
        // LocalStorage'ga saqlash
        localStorage.setItem('contactMessages', JSON.stringify(messages));
    }
    
    // Xabarni ko'rsatish
    function showNotification(message, type) {
        // Eski xabarlarni o'chirish
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            notification.remove();
        });
        
        // Yangi xabar yaratish
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Xabarni sahifaga qo'shish
        document.body.appendChild(notification);
        
        // Xabarni ko'rsatish
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Xabarni yopish tugmasi
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // Xabarni avtomatik yopish
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // Admin panel uchun yuborilgan xabarlarni ko'rsatish
    function displaySubmittedMessages() {
        // Admin panel mavjud bo'lsa
        const adminPanel = document.getElementById('adminPanel');
        if (!adminPanel) return;
        
        // Mavjud xabarlarni olish
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        // Xabarlar ro'yxatini tozalash
        adminPanel.innerHTML = '';
        
        // Xabarlar mavjud bo'lmasa
        if (messages.length === 0) {
            adminPanel.innerHTML = '<p class="text-center">Hozircha xabarlar yo\'q</p>';
            return;
        }
        
        // Xabarlarni ko'rsatish
        messages.forEach((msg, index) => {
            const messageCard = document.createElement('div');
            messageCard.className = 'message-card';
            messageCard.innerHTML = `
                <div class="message-header">
                    <h5>${msg.name}</h5>
                    <span class="message-date">${msg.date}</span>
                </div>
                <div class="message-body">
                    <p><strong>Telefon:</strong> ${msg.phone}</p>
                    <p><strong>Email:</strong> ${msg.email}</p>
                    <p><strong>Murojaat turi:</strong> ${msg.messageType}</p>
                    <p><strong>Xabar:</strong> ${msg.message}</p>
                </div>
                <div class="message-footer">
                    <button class="btn btn-sm btn-danger delete-message" data-index="${index}">
                        <i class="fas fa-trash"></i> O'chirish
                    </button>
                </div>
            `;
            
            adminPanel.appendChild(messageCard);
        });
        
        // Xabarni o'chirish tugmasi
        const deleteButtons = adminPanel.querySelectorAll('.delete-message');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                deleteMessage(index);
            });
        });
    }
    
    // Xabarni o'chirish
    function deleteMessage(index) {
        // Mavjud xabarlarni olish
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        // Xabarni o'chirish
        messages.splice(index, 1);
        
        // LocalStorage'ga saqlash
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        // Xabarlarni qayta ko'rsatish
        displaySubmittedMessages();
        
        // Xabar o'chirilganligi haqida xabar
        showNotification('Xabar muvaffaqiyatli o\'chirildi', 'success');
    }
    
    // Admin panel uchun URL hash o'zgarishini kuzatish
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#admin') {
            displaySubmittedMessages();
        }
    });
    
    // Sahifa yuklanganda admin panel tekshirish
    if (window.location.hash === '#admin') {
        displaySubmittedMessages();
    }
});

// Footer uchun JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Joriy yilni olish va footerga qo'yish
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Footer havolalari uchun smooth scrolling
    const footerLinks = document.querySelectorAll('.footer-links a, .footer-logo a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Agar havola # bilan boshlansa
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Scroll to section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Navbar balandligini hisobga olish
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Designer name animatsiyasi va havolasi
    const designerName = document.querySelector('.designer-name');
    
    if (designerName) {
        // Havola ishlashini ta'minlash uchun
        designerName.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.getAttribute('href'), '_blank');
        });
    }
});









