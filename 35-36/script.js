/***35. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть
функция вернет true, а если не равны - false. ***/

let myInput1 = Number(prompt("Введите число 1:"));

let myInput2 = Number(prompt("Введите число 2:"));

function isEqual(firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
        return true;
    } else {
        return false;
    }
}

if (isEqual(myInput1, myInput2)) {
    alert('Числа равны');
} else {
    alert('Числа не равны');
}

/**36. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx'
и так далее.**/

// let arr = [];
// let input = prompt(`Сколько раз Вы хотите повторить число x?`);

// function fillArr(count) {
//     let x = 'x';
//     for (let i = 0; i < count; i++) {
//         arr.push(x);
//         x += 'x';
//     }
// }

// fillArr(input);

// alert(arr.join("\n"));