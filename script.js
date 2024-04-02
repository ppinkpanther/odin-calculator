let firstNum = 0;
let secondNum = 0;
let operator = '';  
let operatorActive = false;

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

    console.log(operand);
    switch(operand){
        case('plus'): 
            return add(x,y);
        case('minus'): 
            return subtract(x,y);
        case('mult'):
            return multiply(x,y);
        case('div'):
            return divide(x,y);
        default: 
            return 12345;
    }
    
}

function setDisplay (e) {
    if(!operatorActive){
        display.textContent += e.target.id;
    }else {
        display.textContent = '' + e.target.id;
    }
}

function operatorPress(e){
    if(operatorActive){
        secondNum = Number(display.textContent);
        display.textContent = operate(firstNum, operator, secondNum);
        firstNum = Number(display.textContent);
        operator = e.target.id;
    }else {
        operatorActive = true;
        operator = e.target.id
        firstNum = Number(display.textContent);
    }
}

function equalPress () {
    if(operatorActive){
        secondNum = Number(display.textContent);
        display.textContent = operate(firstNum, operator, secondNum);
        operatorActive = false;
    }
}

buttons.addEventListener('click', (e) => {
    let buttonClass = e.target.className;
    if(buttonClass === 'numButton'){
        setDisplay(e);
    }else if(buttonClass === 'operatorButton') {
        operatorPress(e);
    }else if(buttonClass === 'equal') {
        equalPress();
    }else if(buttonClass === 'clear'){
        display.textContent = '';
    }

    display.textContent = Number(display.textContent);
})


//on press of number button, add first number to display
//on first press of an operator button, set operator to pressed button, set first number to text on display, allow user to enter second number
//on press of equal button or operator button for the second time, run operate on the two numbers



//when operator button is pressed check to see if there is a stored value in operator
//IF true set number 2 to display's text and run operate on number 1 and number 2 with the new operator.
//IF false set operator to the button id

//when running operate function, should run first to set number 1 value to the return value, then set display's text to number 1 value

//IF equals pressed run operate with all the listed variable, setting x to return value, y to 0, operator to 0 (fully reset code)

//IF clear pressed set display's text to empty string

//IF delete pressed create a new variable for the current value of display's text, slice off the last character, then set display's text to the new string


// REVISED

//when a number button is pressed, check to see if an operator button is currently pressed
//IF true, reset display
//ELSE add number to display

//when an operator button is pressed, check to see if an operator button is pressed
//IF true, run operate function with first number and the number in the display
//ELSE set operator pressed to true, store current display value as first number!