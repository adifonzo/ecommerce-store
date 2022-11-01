const hamburger = document.querySelector('.menuIcon');
const navMenu = document.querySelector('.openMenu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


