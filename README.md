# odin-calculator
A simple calculator built with CSS and JavaScript!


PSEUDOCODE:

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