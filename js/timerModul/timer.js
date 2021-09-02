import { stopButton } from './stop.js';
export const timerParag = document.getElementById('timerParag');
const startButton = document.getElementById('start');
let startingMinutes;
let time;
let interval;

var sound = new Howl({
    src: ['mp3/clock_alert_x8.mp3']
})

const updateStartFunc = startButton.addEventListener('click', () => {
    startingMinutes = parseInt(document.getElementById('time').value);
    if (!isNaN(startingMinutes) && startingMinutes !== '') {
        time = startingMinutes * 60;
    } else {
        alert('Заполните поле "Минуты"!');
        return;
    }

    interval = setInterval(updateTimerParag, 1000);
});
function updateTimerParag() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerParag.innerHTML = `${hours}:${minutes}:${seconds}`;
    if (timerParag.innerHTML === "00:00:00") {
        stopButton.classList.add('stopSound');
        sound.play();
    } else {
        time--;
    }
}
export { updateStartFunc, sound, interval }


