let firstNum;
let operator;
let secondNum;  

function operate(firstNum, operator, secondNum) {
    if (operator === '+') {
        add(firstNum, secondNum);
    } else if (operator === '-') {
        subtract(firstNum, secondNum);
    } else if (operator === '*') {
        multiply(firstNum, secondNum);
    } else if (operator === '/') {
        divide(firstNum, secondNum);
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