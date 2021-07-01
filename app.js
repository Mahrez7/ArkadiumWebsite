let nav = document.querySelector('header nav');
const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});