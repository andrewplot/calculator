//perhaps move typing to bottom display, and when pressing equals: have full eq on top, answer on bototm. then move ans to top when continuing operations

//dom elements
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');

const currDisplay = document.querySelector('[data-curr]');
const prevDisplay = document.querySelector('[data-prev]');

//state
let currOperand = '';
let prevOperand = '';
let operator = null;

//functions
function updateDisplay(){
    currDisplay.textContent = currOperand;
    if (operator !== ''){
        prevDisplay.textContent = prevOperand;
    } else {
        prevDisplay.textContent = '';
    }
}

function appendNum(num){
    if (num === '.' && currOperand.includes('.')) return;
    currOperand += num;
}

function selectOperator(op){
    if (currOperand === '') return; //exits if operator is first button
    if (prevOperand !== ''){           //evalutes if chaining operations
        evaluate();
    }
    operator = op;
    prevOperand = currOperand;
    currOperand = '';
}

function add(a, b){return a+b}
function subtract(a, b){return a-b}
function multiply(a, b){return a*b}
function divide(a, b){
    if (b === 0){
        return 'Undefined';
    }
        return a/b
}

function evaluate(){
    const a = parseFloat(prevOperand);
    const b = parseFloat(currOperand);
    let result;

    if (isNaN(a) || isNaN(b)) return;
    switch(operator){
        case '+': result = add(a,b); break;
        case '-': result = subtract(a,b); break;
        case '*': result = multiply(a,b); break;
        case '/': result = divide(a,b); break;
        default: return Error;
    }

    currOperand = result.toString();
    prevOperand = `${a} ${operator} ${b} = `;
    operator = null;
}

function clearDisplay(){
    currOperand = '';
    prevOperand = '';
    operator = null;
}

//event listeners
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendNum(button.getAttribute('data-number'));
    updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectOperator(button.getAttribute('data-operation'));
    updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  evaluate();
  updateDisplay();
});

clearButton.addEventListener('click', () => {
  clearDisplay();
  updateDisplay();
});