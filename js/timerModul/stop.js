import { updateStartFunc, sound, interval } from './timer.js';
export const stopButton = document.getElementById('stop');
export const stopFunc = stopButton.addEventListener('click', () => {
    clearInterval(interval);
    sound.pause();
    stopButton.classList.remove('stopSound');
});
