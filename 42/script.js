/***42. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это
число (в первую, вторую, третью или четвертую). ***/

let incorrect = false;
do {
    let min = Number(prompt("Введите число от 0 до 59"));
    let quater;

    incorrect = false;

    if (min <= 15) {
        quater = 'Первая четверть часа';
    } else if (min > 15 && min <= 30) {
        quater = 'Вторая четверть часа';
    } else if (min > 30 && min <= 45) {
        quater = 'Третья четверть часа';
    } else if (min > 45 && min <= 59) {
        quater = 'Четвертая четверть часа';
    } else {
        quater = 'Неправильный ввод';
        incorrect = true;
    }
    alert(quater);

} while (incorrect);