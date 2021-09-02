import { timerParag } from '../timerModul/timer.js'
const resetBtn = document.querySelector('.reset');
const resetInput = document.getElementById('time');
const resetB = resetBtn.addEventListener('click', function () {
    resetInput.value = ''
    timerParag.innerText = '';
});

export { resetB }