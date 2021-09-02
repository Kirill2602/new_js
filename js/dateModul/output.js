const parag = document.getElementById('output');
const timerParag = document.getElementById('timerParag');
export function printError(errorText) {
    parag.innerHTML = errorText;
}

const printResult = ({ years, months, days }) => {
    parag.innerHTML = `
    Год: ${years}
    Месяц: ${months}
    День: ${days}
    `
}

export { printResult };