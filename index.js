let num1 = 0;
let num2 = 0;
let operator = "";

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

let buttons = document.querySelectorAll('.btn');
let display = document.getElementById('display')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.getAttribute('data-value');
        display.textContent += number;
    });
});

