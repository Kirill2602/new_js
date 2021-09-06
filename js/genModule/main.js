import { printError, printResult } from '../dateModul/output.js';
import calcDatesDiff from '../dateModul/calcDatesDiff.js';
import { date, timer } from '../genModule/tabHandler.js';
import { resetB } from '../timerModul/reset.js';
import { updateStartFunc } from '../timerModul/timer.js';
import { stopFunc } from '../timerModul/stop.js';
import '/styles/style.css';
import bundlerMus from '/mp3/clock_alert_x8.mp3';

const music = document.createElement('mus');
mus.src = bundlerMus;

const form = document.getElementById('calcDate');
form.onsubmit = function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');

    if (!dateFrom || !dateTo) {
        printError('Ошибка!');
        return;
    }

    const dateDiff = calcDatesDiff(dateFrom, dateTo);
    printResult(dateDiff);
}