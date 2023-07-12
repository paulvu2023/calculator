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
        if (operator.textContent === "=") {
            calculate();
        } else {
            display.textContent += operator.textContent;
        }
    });

});

function calculate(){
    
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