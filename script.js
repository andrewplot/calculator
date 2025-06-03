//wire buttons to numbers
//parse buttons into string, add spaces on each side of operator
//split at spaces
//parse numbers, call appropriate operation's function
//return answer





const a = 0;
const b = 0;
const operator = 0;

function add(a, b){return a+b}
function subtract(a, b){return a-b}
function multiply(a, b){return a*b}
function divide(a, b){return a/b}

function operate(a, b, operator){
    switch (operator){
        case 0: return add(a,b);
        case 1: return subtract(a,b);
        case 2: return multiply(a,b);
        case 3: return divide(a,b);
        default: return Error;
    }
}