console.log("I like pizza");
console.log("It's really good!");

window.alert("I REALLY love pizza"); // alert creates pop-up

// a variable is a container for data storage
let age = 22; // number
let firstName ="Adam"; // string
let student = false; // boolean

console.log("You are", age, "years old"); // 
console.log("Hello,", firstName); 
console.log("Enrolled:", student); 

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

// arithmetic expressions
// - operands (variables, valuesm, etc.)
// - operators (+ - * / % **)

let students = 20;
students = students + 1; // students += 1;
console.log(students);

//let username = window.prompt("What is your name?")
//console.log(username);
let username;
window.onload = function(){
document.getElementById("myButton").onclick = function(){

        username = document.getElementById("myText").value;
        console.log(username);
        document.getElementById("myLabel").innerHTML = "Hello " + username;
    }
}