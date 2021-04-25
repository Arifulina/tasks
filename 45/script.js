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