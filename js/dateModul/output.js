const parag = document.getElementById('output');
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