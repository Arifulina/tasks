/***85. Создать ассоциативный массив и занести в него десять элементов по принципу: "фамилия" -
"дата рождения". Удалить из массива всех людей, родившихся летом. Формат записи числа
18 april 1956. Вывести массив до удаления и после на экран, каждый с новой строки.
Пример записи в массиве: $arr['Иванов'=&gt;'18 april 1956'];.***/

// let arr = {
//     'Smith': '18 january 1956',
//     'Ivanov': '18 november 1956',
//     'Petrov': '18 december 1956',
//     'Sidorov': '18 february 1956',
//     'Kuznetsov': '18 march 1956',
//     'Morozov': '18 june 1956',
//     'Loor': '18 july 1956',
//     'Kon': '18 august 1956',
//     'Chudov': '18 september 1956',
//     'Li': '18 november 1956'
// };

let arr = new Map([
    ['Smith', '18 january 1956'],
    ['Ivanov', '18 november 1956'],
    ['Petrov', '18 december 1956'],
    ['Sidorov', '18 february 1956'],
    ['Kuznetsov', '18 march 1956'],
    ['Morozov', '18 june 1956'],
    ['Loor', '18 july 1956'],
    ['Kon', '18 august 1956'],
    ['Chudov', '18 september 1956'],
    ['Li', '18 november 1956']
]);

const summerMonths = ['june', 'july', 'august'];

function mapArrayToText(arr) {
    let result = '';
    arr.forEach(function(value, key) {
        result = result + "\n" + key + ' ' + value;
    });
    return result;
}

alert('До: ' + mapArrayToText(arr));

function bornInSummer(arr) {
    let resultArray = arr;
    arr.forEach(function(value, key) {
        let month = value.replace(/[0-9]/g, '').replace(/\s/g, '');
        if (summerMonths.includes(month)) {
            resultArray.delete(key);
        }
    });
    return resultArray;
}

let result = bornInSummer(arr);

alert('После: ' + mapArrayToText(result));