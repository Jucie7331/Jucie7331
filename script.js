document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню после клика
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });

    // Изменение шапки при скролле
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Кнопка "Наверх"
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Анимация появления секций
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('show');
            }
        });
    }
    
    // Проверяем при загрузке
    checkScroll();
    
    // И при скролле
    window.addEventListener('scroll', checkScroll);

    // Форма записи
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить AJAX-отправку формы
            // Для примера просто покажем модальное окно
            const modal = document.getElementById('successModal');
            modal.style.display = 'flex';
            
            // Очищаем форму
            this.reset();
        });
    }

    // Закрытие модального окна
    const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('successModal').style.display = 'none';
        });
    });

    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('successModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
