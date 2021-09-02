//Модуль для переключения между калькулятором дат и таймером по нажатию на кнопки
const timerForm = document.querySelector('.timerBlock');
const form = document.querySelector('.form');
const buttonDate = document.querySelector('.btnD');
const buttonTimer = document.querySelector('.btnT');

const date = buttonDate.addEventListener('click', function () {
    form.classList.add('getBlock');
    if (form.classList.contains('getBlock')) {
        timerForm.classList.remove('getBlock');
    }
});

const timer = buttonTimer.addEventListener('click', function () {
    timerForm.classList.add('getBlock');
    if (timerForm.classList.contains('getBlock')) {
        form.classList.remove('getBlock');
        form.classList.add('timerBlock');
    }
});


export { date, timer };