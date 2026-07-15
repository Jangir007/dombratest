document.addEventListener('DOMContentLoaded', () => {
    
    // Мобильное меню (гамбургер)
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Анимация гамбургера
        hamburger.classList.toggle('toggle');
    });

    // Закрываем мобильное меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Смена прозрачности шапки при скролле
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(28, 21, 16, 0.98)';
            header.style.padding = '10px 0';
        } else {
            header.style.backgroundColor = 'rgba(28, 21, 16, 0.95)';
            header.style.padding = '15px 0';
        }
    });

    // Плавный скролл для Safari и старых браузеров
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Демо-обработка формы обратной связи
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', function(e) {
        // Если вы настраиваете Formspree, отправка пройдет штатно. 
        // Здесь мы добавили простую индикацию для пользователя:
        alert('Спасибо за ваше обращение! Данияр свяжется с вами в ближайшее время.');
    });
});