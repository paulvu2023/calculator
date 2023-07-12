let firstNum;
let operator;
let secondNum;  

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.num');
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    display.textContent = '';
});

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
    });
});

function operate(firstNum, operator, secondNum) {
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