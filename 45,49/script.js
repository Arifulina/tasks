/***45. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через
substr, substring, slice). ***/

// let str = 'aaa bbb ccc';

// alert(str.substr(4, 3));
// alert(str.substring(4, 7));
// alert(str.slice(4, 7));

let str = "aaa bbb ccc";
alert(str.substr(4, 3));
alert(str.substring(4, 3));
alert(str.slice(4, 3));

/**49.  Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.**/

// let input = prompt(`Введите число:`);

// function isPrimeNumber(x) {
//     let half = x / 2;
//     for (let i = 2; i <= half; i++) {
//         if (x % i == 0) {
//             return true;
//         }
//     }
//     return false;
// }

// alert(isPrimeNumber(input));