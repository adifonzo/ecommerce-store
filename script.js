const hamburger = document.querySelector('.menuIcon');
const navMenu = document.querySelector('.openMenu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const daysValue = document.querySelector('#days');
const hoursValue = document.querySelector('#hours');
const minutesValue = document.querySelector('#minutes');
const secondsValue = document.querySelector('#seconds');

// Date I'm counting down to
const countDownDate = new Date('Nov 25, 2022 00:00:00').getTime();

const incriment = setInterval(function () {
    const now = new Date().getTime();
    let difference = countDownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysValue.innerHTML = days;
    hoursValue.innerHTML = hours;
    minutesValue.innerHTML = minutes;
    secondsValue.innerHTML = seconds;

    console.log(days, hours, minutes, seconds);

});

