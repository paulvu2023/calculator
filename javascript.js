let firstNum;
let operator;
let secondNum;  

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