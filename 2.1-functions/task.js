"use strict";

//Задача 1

function getSolutions(a, b, c) {
    let D = Math.pow(b,2) - 4 * a * c;
    let roots = [];
    
    if (D >= 0) {
        roots.push(( -b + Math.sqrt(D) ) / ( 2 * a ));
    }
    if (D > 0) {
        roots.push(( -b - Math.sqrt(D) ) / ( 2 * a ));
    }

    return {
        D,
        roots
    };
}

function showSolutionsMessage(a, b, c) {
    let result = (getSolutions(a, b, c));
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    
    switch(result.roots.length) {
        case 0:
            console.log("Уравнение не имеет вещественных корней");
            break;
        case 1:
            console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
            break;
        case 2:
            console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
            break;
    }
}

//Задача 2

/*const data = {
    algebra : [4, 5, 5, 4],
    geometry : [2, 5],
    russian : [3, 3, 4, 5],
    physics : [5, 5],
    music : [ 2, 2, 5],
    english : [4, 4, 3, 3],
    poetry : [5, 3, 4],
    chemistry : [2],
    french : [4, 4] 
}*/

function getAverageScore(data) {
    let result = {};
    let sum = 0;
    
    for (let prop in data) {
        result[prop] = getAverageMark(data[prop]);
        sum += getAverageMark(data[prop]);
    }    
    
    result.average = Object.keys(result).length ? sum / Object.keys(result).length : 0;

    return result;
}

function getAverageMark(marks) {    
    if (!marks.length) {
        return 0;
    }
    
    let sum = 0;
    
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    
    return sum / marks.length;
}

//Задача 3
//const secretData = {aaa: 1, bbb: 0};

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };    
}

function getDecodedValue(secret) {
    return secret ? "Эмильо" : "Родриго";
}