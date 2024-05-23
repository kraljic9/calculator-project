let display = document.getElementById('screen-txt');
let numberBtn = document.querySelectorAll('.number');
let opBtn = document.querySelectorAll('.function')
const keys = document.querySelectorAll('.key')


let a;
let b;
let operator;

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(op, a, b) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            throw new Error("Unsupported operator")
    }
}

keys.forEach(key => {
    key.addEventListener('click', event => {
        if (key.classList.contains('clear')) {
            display.textContent = "";
        } else {
            display.textContent += event.target.textContent;
        }
    });
});

opBtn.forEach(opB => {
    opB.addEventListener('click', event => {
        if(opB.classList.contains('clear')) {
            display.textContent = "";
        } else {
            display.textContent += event.target.textContent;
        }
    })
})