/** 65.  Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. **/

// let valueFill = prompt(`Введите значение, которым Вы хотите заполнять массив`);
// let quanityFill = prompt(`Введите количичество элементов, содержащихся в массиве`);

// function arrayFill(value, quanity) {
//     let arr = [];
//     while (arr.length < quanity) {
//         arr.unshift(value);
//     }
//     return arr;
// }

// let result = arrayFill(valueFill, quanityFill);
// alert(result);

/***67. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом
или нет. Функция первым параметром должна принимать текст элемента, а вторым -
массив, в котором делается поиск. Функция должна возвращать true или false. ***/

let array1 = ['Firefox', 'Chrome', 'Safari', 'Opera'];
let array2 = ['tri', 'dva', 'raz', 'nol'];

function inArray(myText, myArray) {
    return myArray.includes(myText);
}

let result1 = inArray('Safari', array1);

if (result1) {
    alert('Есть слово')
} else {
    alert('Нет')
}

let result2 = inArray('sadasd', array2);

if (result2) {
    alert('Есть слово')
} else {
    alert('Нет')
}