"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let percentX; 
    let contributionX;
    let amountX;
    
    
    if (parseFloat(percent)) {
        percentX = parseFloat(percent / 100 / 12);
    } else {
        return `Параметр 'Процентная ставка' содержит неправильное значение '${percent}'`;
    }
    if (parseInt(contribution) || contribution == 0) {
        contributionX = (parseInt(contribution)) ? parseInt(contribution) : 0;
    } else {
        return `Параметр 'Начальный взнос' содержит неправильное значение '${contribution}'`;
    }
    if (parseInt(amount)) {
        amountX = parseInt(amount);
    } else {
        return `Параметр 'Общая стоимость' содержит неправильное значение '${amount}'`;
    }
    
    let dateX = new Date(date);
    let curDate = new Date();
    let result = parseInt((dateX - curDate) / (1000 * 60 * 60 * 24)); 
    
    let n = Math.floor(result / 30);
    console.log(n);

    let sum = amountX * (percentX + percentX / (Math.pow(1 + percentX, n) - 1));
    console.log(sum)

    let payToBank = amountX - contributionX;
    console.log(payToBank)

    let totalAmount = sum + payToBank;

    return totalAmount;
}

//2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
      let userName;
    
      if (name === 'null' || name === "" || name === 'undefined') {
        userName = 'Аноним';
      } else {
        userName = name;
      }

     let greeting = `Привет, мир! Меня зовут ${userName}`;
     return greeting;
}
