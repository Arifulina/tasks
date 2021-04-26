/***73. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое
число и возвращает сумму его цифр.***/
let digit = prompt("Введите число");

function getDigitsSum(digit) {
    let sum = 0;
    for (let i = 0; i < digit.length; i++) {
        sum += Number(digit[i]);
    }
    return sum;
}
alert(getDigitsSum(digit));