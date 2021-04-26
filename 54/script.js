/***54. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
цифры. И так, пока сумма не станет однозначным числом (9 и менее).***/

let myNum = 13579;

let myString = myNum.toString();

let result = 0;

for (let i = 0; i <= myString.length; i++) {
    if (+myString[i] === 9) {
        result = myString[i];
        break;
    } else {
        let tempResult = result + +myString[i];
        if (tempResult <= 9) {
            result = tempResult;
            continue;
        } else {
            break;
        }
    }
}

alert('Result = ' + result);