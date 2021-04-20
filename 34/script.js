/***34. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите
'да', а если нет - выведите 'нет'. ***/

let myArray1 = [0, 1, 2, 5, 10];
let myArray2 = [-1, 9, 100, 192];

function inArray(myArray, value) {
    if (myArray.includes(value)) {
        alert('Да');
    } else {
        alert('Нет');
    }
}

inArray(myArray1, 5);
inArray(myArray2, 5);