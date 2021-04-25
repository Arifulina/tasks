/***72. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в
сумме получилось больше 10-ти.***/

let myArray = [1, 2, 8, 5, 7, 9];

function isGraterThen10(array) {
    let result = 0;
    let numberOfElementsGraterThen10 = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 10) {
            result = result + array[i];
            if (result > 10) {
                numberOfElementsGraterThen10 = i + 1;
                break;
            } else {
                continue;
            }
        }
    }

    return numberOfElementsGraterThen10;
}

alert(isGraterThen10(myArray));