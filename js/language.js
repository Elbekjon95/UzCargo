// Ko'p tilli sayt uchun JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Til ma'lumotlari
    const translations = {
        'uz': {
            // Navbar
            'nav_home': 'Bosh sahifa',
            'nav_about': 'Kompaniya haqida',
            'nav_services': 'Xizmatlar',
            'nav_achievements': 'Yutuqlar',
            'nav_history': 'Tarix',
            'nav_documents': 'Hujjatlar',
            'nav_partners': 'Hamkorlar',
            'nav_contact': 'Aloqa',
            
            // Slider
            'slider_title_1': 'Xalqaro yuk tashish xizmatlari',
            'slider_desc_1': 'Dunyoning istalgan nuqtasiga tezkor va ishonchli yuk yetkazib berish',
            'slider_btn_1': 'Batafsil ma\'lumot',
            
            'slider_title_2': 'Maxsus yuklar uchun alohida yondashuv',
            'slider_desc_2': 'Noyob va maxsus yuklar uchun professional yechimlar',
            'slider_btn_2': 'Xizmatlar haqida',
            
            'slider_title_3': 'Zamonaviy logistika markazlari',
            'slider_desc_3': 'Yuklarni saqlash va qayta ishlash uchun zamonaviy infratuzilma',
            'slider_btn_3': 'Bizning afzalliklarimiz',
            
            // Sections
            'news_title': 'So\'nggi yangiliklar',
            'services_title': 'Bizning xizmatlarimiz',
            'history_title': 'Kompaniya tarixi',
            'partners_title': 'Bizning hamkorlar',
            'partners_desc': 'O\'zbekiston Aeroportlari Yuk Tashish xizmati dunyoning yetakchi aviakompaniyalari va logistika tashkilotlari bilan hamkorlik qiladi',
            
            // Contact form
            'contact_title': 'Biz bilan bog\'laning',
            'contact_name': 'F.I.SH',
            'contact_phone': 'Telefon raqam',
            'contact_email': 'Email',
            'contact_type': 'Murojaat turi',
            'contact_select': 'Tanlang',
            'contact_question': 'Savol',
            'contact_suggestion': 'Taklif',
            'contact_complaint': 'Shikoyat',
            'contact_other': 'Boshqa',
            'contact_message': 'Xabar matni',
            'contact_agreement': 'Shaxsiy ma\'lumotlarimni qayta ishlashga roziman',
            'contact_submit': 'Yuborish',
            
            // Footer
            'footer_rights': 'Barcha huquqlar himoyalangan',
            'footer_developer': 'This site was developed by'
        },
        'ru': {
            // Navbar
            'nav_home': 'Главная',
            'nav_about': 'О компании',
            'nav_services': 'Услуги',
            'nav_achievements': 'Достижения',
            'nav_history': 'История',
            'nav_documents': 'Документы',
            'nav_partners': 'Партнеры',
            'nav_contact': 'Контакты',
            
            // Slider
            'slider_title_1': 'Международные грузовые перевозки',
            'slider_desc_1': 'Быстрая и надежная доставка грузов в любую точку мира',
            'slider_btn_1': 'Подробнее',
            
            'slider_title_2': 'Индивидуальный подход к специальным грузам',
            'slider_desc_2': 'Профессиональные решения для уникальных и специальных грузов',
            'slider_btn_2': 'Об услугах',
            
            'slider_title_3': 'Современные логистические центры',
            'slider_desc_3': 'Современная инфраструктура для хранения и обработки грузов',
            'slider_btn_3': 'Наши преимущества',
            
            // Sections
            'news_title': 'Последние новости',
            'services_title': 'Наши услуги',
            'history_title': 'История компании',
            'partners_title': 'Наши партнеры',
            'partners_desc': 'Служба грузовых перевозок Аэропортов Узбекистана сотрудничает с ведущими авиакомпаниями и логистическими организациями мира',
            
            // Contact form
            'contact_title': 'Свяжитесь с нами',
            'contact_name': 'Ф.И.О',
            'contact_phone': 'Номер телефона',
            'contact_email': 'Email',
            'contact_type': 'Тип обращения',
            'contact_select': 'Выберите',
            'contact_question': 'Вопрос',
            'contact_suggestion': 'Предложение',
            'contact_complaint': 'Жалоба',
            'contact_other': 'Другое',
            'contact_message': 'Текст сообщения',
            'contact_agreement': 'Я согласен на обработку моих персональных данных',
            'contact_submit': 'Отправить',
            
            // Footer
            'footer_rights': 'Все права защищены',
            'footer_developer': 'Сайт разработан'
        },
        'en': {
            // Navbar
            'nav_home': 'Home',
            'nav_about': 'About Company',
            'nav_services': 'Services',
            'nav_achievements': 'Achievements',
            'nav_history': 'History',
            'nav_documents': 'Documents',
            'nav_partners': 'Partners',
            'nav_contact': 'Contact',
            
            // Slider
            'slider_title_1': 'International Cargo Services',
            'slider_desc_1': 'Fast and reliable cargo delivery to any point in the world',
            'slider_btn_1': 'Learn More',
            
            'slider_title_2': 'Special Approach for Special Cargo',
            'slider_desc_2': 'Professional solutions for unique and special cargo',
            'slider_btn_2': 'About Services',
            
            'slider_title_3': 'Modern Logistics Centers',
            'slider_desc_3': 'Modern infrastructure for cargo storage and processing',
            'slider_btn_3': 'Our Advantages',
            
            // Sections
            'news_title': 'Latest News',
            'services_title': 'Our Services',
            'history_title': 'Company History',
            'partners_title': 'Our Partners',
            'partners_desc': 'Uzbekistan Airports Cargo Service cooperates with leading airlines and logistics organizations around the world',
            
            // Contact form
            'contact_title': 'Contact Us',
            'contact_name': 'Full Name',
            'contact_phone': 'Phone Number',
            'contact_email': 'Email',
            'contact_type': 'Message Type',
            'contact_select': 'Select',
            'contact_question': 'Question',
            'contact_suggestion': 'Suggestion',
            'contact_complaint': 'Complaint',
            'contact_other': 'Other',
            'contact_message': 'Message',
            'contact_agreement': 'I agree to the processing of my personal data',
            'contact_submit': 'Submit',
            
            // Footer
            'footer_rights': 'All rights reserved',
            'footer_developer': 'This site was developed by'
        }
    };
    
    // Joriy til (default: o'zbek)
    let currentLang = localStorage.getItem('language') || 'uz';
    
    // Til almashtirish funksiyasi
    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Barcha tarjima qilinadigan elementlarni yangilash
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                // Agar bu tugma bo'lsa va unda icon bo'lsa
                if (element.tagName === 'BUTTON' && element.querySelector('i')) {
                    const icon = element.querySelector('i').outerHTML;
                    element.innerHTML = icon + ' ' + translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Placeholder atributlarini yangilash
        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // Til tugmalarini yangilash
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }
    
    // Til tugmalarini yaratish
    function createLanguageButtons() {
        const navbarNav = document.querySelector('.navbar-nav');
        
        if (navbarNav) {
            // Til tanlash uchun dropdown yaratish
            const langDropdown = document.createElement('li');
            langDropdown.className = 'nav-item dropdown';
            langDropdown.innerHTML = `
                <a class="nav-link dropdown-toggle" href="#" id="langDropdown" role="button" 
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-globe"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown">
                    <li><button class="dropdown-item lang-btn" data-lang="uz">O'zbek</button></li>
                    <li><button class="dropdown-item lang-btn" data-lang="ru">Русский</button></li>
                    <li><button class="dropdown-item lang-btn" data-lang="en">English</button></li>
                </ul>
            `;
            
            navbarNav.appendChild(langDropdown);
            
            // Til tugmalariga event listener qo'shish
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    changeLanguage(lang);
                });
            });
        }
    }
    
    // Sahifadagi elementlarga data-lang-key atributlarini qo'shish
    function addLanguageAttributes() {
        // Navbar
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
        const navItems = ['nav_home', 'nav_about', 'nav_services', 'nav_achievements', 'nav_history', 'nav_documents', 'nav_partners', 'nav_contact'];
        
        navLinks.forEach((link, index) => {
            if (index < navItems.length) {
                link.setAttribute('data-lang-key', navItems[index]);
            }
        });
        
        // Slider
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            const slideNum = index + 1;
            const title = slide.querySelector('h2');
            const desc = slide.querySelector('p');
            const btn = slide.querySelector('.btn');
            
            if (title) title.setAttribute('data-lang-key', `slider_title_${slideNum}`);
            if (desc) desc.setAttribute('data-lang-key', `slider_desc_${slideNum}`);
            if (btn) btn.setAttribute('data-lang-key', `slider_btn_${slideNum}`);
        });
        
        // Section titles
        const sectionTitles = {
            '.news-container .section-title': 'news_title',
            '.services-container .section-title': 'services_title',
            '.timeline-container .section-title': 'history_title',
            '.partners-container .section-title': 'partners_title',
            '.partners-container .section-description': 'partners_desc',
            '.contact-container .section-title': 'contact_title'
        };
        
        for (const selector in sectionTitles) {
            const element = document.querySelector(selector);
            if (element) {
                element.setAttribute('data-lang-key', sectionTitles[selector]);
            }
        }
        
        // Contact form
        const contactFormElements = {
            'label[for="name"]': 'contact_name',
            'label[for="phone"]': 'contact_phone',
            'label[for="email"]': 'contact_email',
            'label[for="messageType"]': 'contact_type',
            'option[value=""]': 'contact_select',
            'option[value="question"]': 'contact_question',
            'option[value="suggestion"]': 'contact_suggestion',
            'option[value="complaint"]': 'contact_complaint',
            'option[value="other"]': 'contact_other',
            'label[for="message"]': 'contact_message',
            'label[for="agreement"]': 'contact_agreement',
            '.submit-btn': 'contact_submit'
        };
        
        for (const selector in contactFormElements) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.setAttribute('data-lang-key', contactFormElements[selector]);
            });
        }
        
        // Footer
        const footerCopyright = document.querySelector('.copyright');
        if (footerCopyright) {
            const year = new Date().getFullYear();
            footerCopyright.innerHTML = `&copy; ${year} <strong>UzAirCargo</strong>. <span data-lang-key="footer_rights">${translations[currentLang]['footer_rights']}</span>`;
        }
        
        const footerCredits = document.querySelector('.credits');
        if (footerCredits) {
            const designerLink = footerCredits.querySelector('a').outerHTML;
            footerCredits.innerHTML = `<span data-lang-key="footer_developer">${translations[currentLang]['footer_developer']}</span> ${designerLink}`;
        }
    }
    
    // Sahifa yuklanganda
    createLanguageButtons();
    addLanguageAttributes();
    changeLanguage(currentLang);
});
