/***70. Получите url-адрес текущей страницы и проверьте, что строка заканчивается на .php.***/

let currentLocation = window.location.href;

if (currentLocation.substr(-4) === '.php') {
    alert('Заканчивается на .php')
} else {
    alert('Не заканчивается на .php')
}