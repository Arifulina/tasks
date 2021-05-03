/**52.  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. 
let result = prompt(`Введите число: `);**/

// function isNumberInRange(x) {
//     if (x > 0 && x < 10) {
//         alert(`Введенное Вами число больше нуля и меньше 10 `);
//     } else {
//         alert('Введенное Вами число не соответствует диапазону от 0 до 10');
//     }

// }
// isNumberInRange(result);

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

/**57.  Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch. **/

// const arrRu = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскоесенье"];
// const arrEn = ["Monday", "Tueasday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


// 1-ый вариант (через 2 if)
// function getDaysOfWeek(lang) {
//     if (lang == 'ru') {
//         return arrRu;
//     } else if (lang == 'en') {
//         return arrEn;
//     }
// }

// 2-ый вариант (через switch case)
// function getDaysOfWeek(lang) {
//     switch (lang) {
//         case 'ru':
//             return arrRu;
//         case 'en':
//             return arrEn;
//     }
// }


// let input = prompt(`Введите сюда язык (ru или en):`);
// let result = getDaysOfWeek(input);
// if (result == undefined) {
//     alert(`Вы ввели некорректные данные, перепроверьте!`);
// } else {
//     alert(result);
// }