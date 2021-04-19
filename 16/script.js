function calculation(input) {
    let result = input + 10;
    alert(`Введите число: ${input}. Новое число: ${result}`);
}

function setParam() {
    let param;
    let cancel;

    do {
        param = prompt(`Введите число:`, 0);
        cancel = checkParametr(param);
    } while (cancel);

    return param;
}

function checkParametr(param) {
    if (isNaN(param) || param == "" || param == null) {
        alert("Неправильно заполнено поле «Введите число».\n" +
            "Поле не может быть пустым\n" +
            "и не должно содержать текст.");
        return true;
    } else {
        return false;
    }
}

let correctInput = +setParam();
calculation(correctInput);