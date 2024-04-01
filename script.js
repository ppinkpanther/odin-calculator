let x = 0;
let y = 0;
let operator = '';  
let displayValue = '';

const display = document.querySelector('.displayTextBox > p');
const buttons = document.querySelector('.buttons');
const equals = document.querySelector('#equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

function addToDisplay (numButton){
    display.textContent += numButton.id;
}

function add (x, y){
    return x + y;
}

function subtract (x, y){
    return x - y;
}

function multiply (x, y){
    return x * y;
} 

function divide (x, y){
    return x / y
}

function operate (x, operand, y){
    switch(operand){
        case('+'): 
            return add(x,y);
        case('-'): 
            return subtract(x,y);
        case('*'):
            return multiply(x,y);
        case('/'):
            return divide(x,y);
    }
}


