"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let discriminant = (b * b) - (4 * a * c);
    
      if(discriminant > 0) {
        let x1 = (-b + discriminant) / (2 * a);
        let x2 = (-b - discriminant) / (2 * a);
        let x = [x1,x2];
        console.log(2 + ' roots ' + x);  
        return x;    
    }else if(discriminant === 0) {
        let x = -b / (2 * a);
        return x; 
        console.log(1 + ' root ' + x);
    }else {
        console.log('no roots');
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let presentYear = new Date().getFullYear();
    let age = presentYear - dateOfBirthday.getFullYear();
    console.log(`you are ${age} years old.`);
    if (age < 18) {
    console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  } else {
    console.log(`Не желаете ли олд-фэшн, ${name}?`);
  }
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let avgMarks = 0;
    let totalMarks = 0;
    
    if(marks.length > 5) {
        console.log(`you have put ${marks.length} subject's scores`);
        marks = marks.slice(0,5);
    }

    for(let i=0;i<marks.length;i++) {
        totalMarks += marks[i];
    }

    avgMarks = totalMarks / marks.length;
    return avgMarks;
}