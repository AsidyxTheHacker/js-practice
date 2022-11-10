let message = "Hello World!"; // define the variable and assign the value
let user = 'John';
let age = 25;
alert(message); // variable 'message' pops up

// let: defines a variable.
// const: defines an unchangable variable.
// var: similar to let, outdated

const birthday = '01/09/2000';
// birthday = '12/31/2022';  (error, can't reassign the constant!)

// let one = 3;
// let two = 6;
// alert(one + two); (alert product of variables(1,2))

// let user = "John", age = 25, message = "Hello"; 
// (ability to set values and variables within 1 line)

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
//alert(color); // #FF7F00

const string = "The revolution will not be televised.";
console.log(string);
const badString = string;
console.log(badString);

const one = "Hello, ";
const two = "how are you?";
const joined = one + two;
console.log(joined); // "Hello, how are you?"

const button =document.querySelector("button");
function greet() {
    const name = prompt("What is your name?");
    //alert(`Hello ${name}, nice to see you!`);
  }
  button.addEventListener("click", greet);

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;

// slice string
let str = "Apple, Banana, kiwi"; // starting position of 0
let part = str.slice(7, 13); // numbers represent character in string
// substring
let str2 = "Apple, Banana, Kiwi"; // The difference is that start and end values less than 0 are treated as 0
let part2 = str.substring(7, 13); // numbers represent character in string
// substr
let str3 = "Apple, Banana, Kiwi"; // The difference is that the second parameter specifies the length of the extracted part.
let part3 = str.substr(7, 6);
// replace
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); // case sensitive. "MICROSOFT" will not work

// COMPARATORS!
// - (Greater/less than): a > b, a < b
// - (Greater/less than or equals): a >= b, a <= b
// - (Equals): a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment
// - (Not equals): in JavaScript it’s written as a != b
// For boolean values, true becomes 1 and false becomes 0

// CONDITIONAL STATEMENTS!
// - Use (if) to specify a block of code to be executed, if a specified condition is true
// - Use (else) to specify a block of code to be executed, if the same condition is false
// - Use (else if) to specify a new condition to test, if the first condition is false
// - Use (switch) to specify many alternative blocks of code to be executed

// LOGICAL OPERATORS!
// There are four logical operators in JavaScript
// - || (OR)
    // OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false
// - && (AND)
// - ! (NOT)
// - ?? (Nullish Coalescing)

// function nameofFunction(parameter1, parameter2, etc.)
function showMessage() {
  //alert( 'Hello Everyone!');
}

showMessage(); // will execute the function above

// [LOCAL VARIABLES] - A variable declared inside a function is only visible inside that function
function showMessage2() {
  let message = "Hello, I'm JavaScript!";
}

showMessage2();
//alert(message); // will cause an error (variable is only allowed inside the function)

// [OUTER VARIABLES] - The outer variable is only used if there’s no local one
let playerName = 'John';
function showMessage3() {
  let message1 = 'Hello, ' + playerName;
  //alert(message);
}

  showMessage3(); // Hello, John (lets outer variables inside the function)

// [PARAMETERS] - The variable listed inside the parentheses in the function declaration
function showMessage4(from, text) { //parameters 'from' and 'text'
  //alert(from + ': ' + text);
}

showMessage4('Ann', "Hello!"); // Ann: Hello!

document.write("this is funny text lol")