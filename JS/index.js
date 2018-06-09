const hamburgerMenu = document.querySelector('.hamburger-menu');
const hiddenMenu = document.querySelector('.hidden-menu');

hamburgerMenu.addEventListener('click', () => {
    hiddenMenu.classList.toggle('hidden-menu');
})