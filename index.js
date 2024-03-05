let num1 = ;
let num2 = ;
let operator = "";
let buttons = document.querySelectorAll('.btn');
let display = document.getElementById('display')

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
        default:
            return "invalid operator"    
    }
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.getAttribute('data-value');
        display.textContent += number;
    });
});

function getDisplayValue() {
    operator = op;
    num1 = num2;
}

function calculate() {
    num1 = number(num1)
    num2 = number(num2)

    if (operator === "+") {
        num1 = num1 + num2;
    } else if (operator === "-") {
        num1 = num1 - num2 
    } else if (operator === "*") {
        num1 = num1 * num2 
    } else if (operator === "/") {
        num1 = num1 / num2 
    }
}
