const numberKeys = document.querySelectorAll('[data-number]');
const operatorKeys = document.querySelectorAll('.key--operator');
const clearKey = document.querySelector('[data-clear]');
const deleteKey = document.querySelector('[data-delete]');
const decimalKey = document.querySelector('[data-decimal]');
const equalsKey = document.querySelector('[data-calculate]');
const display = document.querySelector('#display');


let firstNum = "";
let secondNum = "";
let currentOperand;

numberKeys.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent)))

operatorKeys.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent)))

clearKey.addEventListener('click', () => clear())

deleteKey.addEventListener('click', () => deleteNumber())

decimalKey.addEventListener('click', () => decimal())

equalsKey.addEventListener('click', () => calculate())

function appendNumber(num) {
    if (display.textContent === '0') {
        // display.textContent = '';

        resetDisplay();
    }
    display.textContent += num;
}

function decimal() {
    if (display.textContent.includes(".")) return;
    display.textContent += '.';
}

function setOperation(operator) {
    if (currentOperand !== null) calculate();
    firstNum = display.textContent;
    currentOperand = operator;
    resetDisplay();
}

function calculate() {
    if (currentOperand === null) return;
    secondNum = display.textContent;
    display.textContent = operate(currentOperand, firstNum, secondNum)
    currentOperand = null;
}


function resetDisplay() {
    display.textContent = "";
}

function clear() {
    display.textContent = '0';
    firstNum = "";
    secondNum = "";
    currentOperand = null;
}

function deleteNumber() {
    display.textContent = display.textContent.slice(0, -1);

    if (display.textContent === '') {
        clear();
    }
}



function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

window.addEventListener('load', clear);