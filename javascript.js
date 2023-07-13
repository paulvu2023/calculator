let firstNum;
let operator;
let secondNum;  

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.num');
const clear = document.querySelector('#clear');
const dlete = document.querySelector('#delete');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operators');
const paulButton = document.querySelector('#name');

paulButton.addEventListener('click', () => {
    window.open('https://github.com/paulvu2023', "_blank");
});

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
            let additionalOperator = display.textContent.slice(-1);
            display.textContent = display.textContent.slice(0,-1);
            calculate(additionalOperator);
        }
    });

});

function checkIfOperatorInputted(){
    // Check an operator is already in the display
    let divisions = display.textContent.match(/÷/g);
    let multiplications = display.textContent.match(/×/g);
    let additions = display.textContent.match(/\+/g);
    let subtractions = display.textContent.match(/−/g);
    let operatorCount = 0;
    if (divisions){
        operatorCount += divisions.length;
    }
    if (multiplications) {
        operatorCount += multiplications.length;
    }
    if (additions) {
        operatorCount += additions.length;
    }
    if (subtractions) {
        operatorCount += subtractions.length;
    }
    if (display.textContent.includes('=')) {
        return true;
    }
    if (operatorCount >= 2) {
        return true;
    }
    return false;
}

function calculate(additionalOperator){
    let operator;
    if (display.textContent.indexOf('÷') >= 0) {
        operator = '÷';
    } else if (display.textContent.indexOf('×') >= 0) {
        operator = '×';
    } else if (display.textContent.indexOf('+') >= 0) {
        operator = '+';
    } else if (display.textContent.indexOf('−') >= 0) {
        operator = '−';
    }

    firstNum = display.textContent.slice(0, display.textContent.indexOf(operator));
    secondNum = display.textContent.slice(display.textContent.indexOf(operator)+1);
    firstNum = operate(firstNum, operator, secondNum);
    if (operator != undefined) {
        display.textContent = firstNum;
        if (additionalOperator != '=') {
            display.textContent += additionalOperator;
        }
    } else {
        // Example: Makes '1 =' show 1 instead of showing '1 =' 
        display.textContent = display.textContent.slice(0,-1);
    }
}

function operate(firstNum, operator, secondNum) {
    //check which operator was inputted
    if (operator === '+') {
        return add(firstNum, secondNum);
    } else if (operator === '−') {
        return subtract(firstNum, secondNum);
    } else if (operator === '×') {
        return multiply(firstNum, secondNum);
    } else if (operator === '÷') {
        return divide(firstNum, secondNum);
    }
}

function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}
    
function multiply(x, y){
    return 1 * (parseInt(x) * parseInt(y)).toFixed(4);
}

function divide(x, y) {
    let quotient = parseInt(x) / parseInt(y);
    if (quotient == Infinity) {
        return("My Money");
    }
    return quotient;
}