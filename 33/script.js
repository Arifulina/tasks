/*** 33. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите
два решения. ***/

let string = 'среда';
alert(string = string[0].toUpperCase() + string.substring(1));


// let str = 'среда';
// function jsUcfirst(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// alert(jsUcfirst(str));