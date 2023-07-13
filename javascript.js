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
        if (checkIfOperatorInputted()) {
            calculate();
            console.log("ooga booga")
        }
    });

});

function checkIfOperatorInputted(){
    // Check an operator is already in the display
    let divisions = display.textContent.match(/÷/g);
    let multiplications = display.textContent.match(/×/g);
    let additions = display.textContent.match(/\+/g);
    let subtractions = display.textContent.match(/-/g);
    let equals = display.textContent.match(/=/g);
    if (divisions){
        if (divisions.length >= 2) {
            return true;
        }
    } else if (multiplications) {
        if (multiplications.length >= 2) {
            return true;
        }
    } else if (additions) {
        if (additions.length >= 2) {
            return true;
        }
    } else if (subtractions) {
        if (subtractions.length >= 2) {
            return true;
        }
    } else if (equals) {
        return true;
    }
    return false;
}

function calculate(){
    let operator;
    if (display.textContent.indexOf('÷') >= 0) {
        operator = '÷';
    } else if (display.textContent.indexOf('×') >= 0) {
        operator = '×';
    } else if (display.textContent.indexOf('+') >= 0) {
        operator = '+';
    } else if (display.textContent.indexOf('-') >= 0) {
        operator = '-';
    }

    firstNum = display.textContent.slice(0, display.textContent.indexOf(operator));
    secondNum = display.textContent.slice(display.textContent.indexOf(operator)+1);
    firstNum = operate(firstNum, operator, secondNum);
    display.textContent = firstNum;
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