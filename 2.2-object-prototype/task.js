String.prototype.isPalindrome = function () {
    const text = this.toLowerCase().split(" ").join("");

    for (i = 0; i < text.length / 2; i++) {
        if (text[i] != text[text.length - i - 1]) {
            return false;
        }
    }
    
    return true;    
}




function getAverageMark(marks) {
    if(!marks.length) {
        return 0;
    }
    
    let sum = 0;
    
    for(i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    
    const average = sum / marks.length; //не знаю зачем лишние переменные, но так написано в ДЗ
    const roundedAverage = Math.round(average);
    
    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = Number(new Date);
    birthday = new Date(birthday); //обычно мы не переназначаем аргументы функции, но так написано в ДЗ
    
    const diff = now - birthday;
    const age = diff / (1000 * 60 * 60 * 24 * 365.25); //високосный год учёл как среднее 365.25, иначе вычисления лучше вообще делать не через Timestamp
    
    return (age > 18);
}
