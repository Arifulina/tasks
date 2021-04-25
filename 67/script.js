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