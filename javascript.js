let message = "Hello World!"; // define the variable and assign the value
let user = 'John';
let age = 25;
alert(message); // variable 'message' pops up

// let: defines a variable.
// const: defines an unchangable variable.

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
    alert(`Hello ${name}, nice to see you!`);
  }
  button.addEventListener("click", greet);

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;

// slice string
let str = "Apple, Banana, Kiwi"; // starting position of 0
let part = str.slice(7, 13); // numbers represent character in string
// substring
let str2 = "Apple, Banana, Kiwi"; // The difference is that start and end values less than 0 are treated as 0
let part2 = str.substring(7, 13); // numbers represent character in string
// substr
let str3 = "Apple, Banana, Kiwi";
let part3 = str.substr(7, 6);

document.write("this is funny text lol")