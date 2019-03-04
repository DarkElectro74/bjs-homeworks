'use strict';
// 1
function getSolutions(a,b,c) {
    let object = {};
    let D = (b * b) - (4 * a * c );
    object.D = D;
    if(D < 0) {
        return object;
    }else if (D === 0) {
        let x1 = -b / (2 * a);
        object.roots = x1;
        return object;
    }else {
        let x1 = ((-b + Math.sqrt(D))/(2*a));
        let x2 = ((-b - Math.sqrt(D))/(2*a));
        object.roots = [x1,x2];
        return object;
    }
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log('Вычисляем корни квадратного уравнения ' + a + 'x^2' + '+' + b + 'x' + '+' + c);
    console.log('Значение дискриминанта: ' + result.D);
    if (result.D === 0){
        console.log('Уравнение имеет один корень X1 = ' + result.roots);
    }else if(result.D > 0){
        console.log('Уравнение имеет два корня X1 = ' + result.roots[0] + ',' + 'X2 = ' + result.roots[1]);
    }else{
        console.log('Уравнение не имеет вещественных корней');
    }

}

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

// 2
function getPersonData(secretData) {
    let firstName, lastName;

    if (secretData.aaa === 0) {
        firstName = 'Родриго';
    } else if (secretData.aaa === 1) {
        firstName = 'Эмильо';
    }

    if (secretData.bbb === 0) {
        lastName = 'Родриго';
    } else if (secretData.bbb === 1) {
        lastName = 'Эмильо';
    }

    return {
        firstName,
        lastName
    }
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));

// 3

function getAverageScore(data) {
    let object = {};
    let classScores = 0;
    let totalScores = 0;
    let numberScores = 0;
    
    for(let key in data){
        numberScores += data[key].length;
        for(let i = 0;i < data[key].length;i++){
            totalScores += data[key][i];
            classScores += data[key][i];
        }
        object[key] = classScores / data[key].length;
        classScores = 0;
    }
    object.average = totalScores/numberScores;
    return object;
        
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
}));