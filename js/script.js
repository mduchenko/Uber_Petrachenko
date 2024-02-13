window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.gamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('gamburger_active');
        menu.classList.toggle('active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('gamburger_active');
            menu.classList.toggle('active');
        })
    })
})
