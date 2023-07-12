let firstNum;
let operator;
let secondNum;  

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.num');
const clear = document.querySelector('#clear');
const dlete = document.querySelector('#delete');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operators');

clear.addEventListener('click', () => {
    display.textContent = '';
});

dlete.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,-1);
})

numbers.forEach((number) => {

    number.addEventListener('click', () => {
        display.textContent += number.textContent;
    });

});

operators.forEach((operator) => {

    operator.addEventListener('click', () => {
        display.textContent += operator.textContent;
        checkAndCalculate();
    });

});

function check(){
    let divisions = display.textContent.match(/÷/g).length;
    let multiplications = display.textContent.match(/×/g).length;
    let additions = display.textContent.match(/\+/g).length;
    let subtractions = display.textContent.match(/-/g).length;
    let equals = display.textContent.match(/=/g).length;
    if (divisions >= 1 || multiplications >= 1 || additions >= 1
    || subtractions >= 1 || equals >= 1) {
            return false;
    } else {
        return true;
    }
}

function calculate(){
    // Check how many of each operator are in the display
    let operatorIndex;
    operatorIndex = display.textContent.indexOf('÷');
    firstNum = display.textContent.slice(0, operatorIndex);
    secondNum = display.textContent.slice(operatorIndex+1);
}

function operate(firstNum, operator, secondNum) {
    //check which operator was inputted
    if (operator === '+') {
        return add(firstNum, secondNum);
    } else if (operator === '-') {
        return subtract(firstNum, secondNum);
    } else if (operator === '*') {
        return multiply(firstNum, secondNum);
    } else if (operator === '/') {
        return divide(firstNum, secondNum);
    }
}

function add(x, y) {
    return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
    return x - y;
}
    
function multiply(x, y){
    return x * y;
}

function divide(x, y) {
    return x / y;
}