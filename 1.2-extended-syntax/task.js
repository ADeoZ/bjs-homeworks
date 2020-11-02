"use sctrict";


function getResult(a,b,c){
    let discriminant = Math.pow(b,2) - 4 * a * c;
    let roots = [];
    
    if (discriminant >= 0) {
        roots.push(( -b + Math.sqrt(discriminant) ) / ( 2 * a ));
    }
    if (discriminant > 0) {
        roots.push(( -b - Math.sqrt(discriminant) ) / ( 2 * a ));
    }

    return roots;
}

function getAverageMark(marks){
    let arrL = marks.length;
    let sumMark = 0;
    
    if (arrL == 0) {
        return 0;
    }
    
    if (arrL > 5) {
        marks = marks.slice(0,5);
        arrL = 5;
        console.log("Оценок больше пяти!");
    }
    
    for (i = 0; i < arrL; i++) {
        sumMark += marks[i];
    }
    
    return sumMark / arrL;
}

function askDrink(name,dateOfBirthday){
    let birthdayYear = dateOfBirthday.getFullYear();
    let currentYear = new Date().getFullYear();
    
    if ((currentYear - birthdayYear) >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}
