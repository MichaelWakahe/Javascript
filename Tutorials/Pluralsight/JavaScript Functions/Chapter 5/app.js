/*
Default Parameters
*/
console.log("Default parameter examples");

function sayHi(name = "World") {
    console.log("Hello " + name);
}

sayHi();
sayHi("John");

function sayHi2(message, name = "World") {  // note that putting `message` as the 2nd arguement would result in an error
    console.log(message + name);
}

sayHi2("\nHello ");
sayHi2("Hi, ", "John");


/*
Constructing Rest Parameters
*/
console.log("\n\nConstructing Rest Parameters");

let sayHi3 = function greet(...names) {
    names.forEach(name => console.log("Hi " + name));
}

sayHi3("Mary", "John", "Ann");

sayHi3 = function (message, ...names) {
    console.log(message + " everyone!");
    names.forEach(name => console.log("Hi " + name));
}

sayHi3("\nWelcome", "Mary", "John", "Ann");


/*
Spread Operator
*/
console.log("\n\nSpread Operator");
function greet(person1, person2) {
    console.log("Hello " + person1 + " and " + person2);
}

let names = ["John", "Mary"];
greet(...names);

function display(char1, char2, char3, char4) {
    console.log(char1, char2, char3, char4);
}

let letters = "abcd";
display(...letters);

letters = "efghjkm"
display(...letters); // letters after the fourth one are ignored

// This example uses rest parameters and the spread operator at the same time
function display2(char1, char2, char3, char4, ...others) {
    console.log(char1, char2, char3, char4);
    console.log(others);
}

console.log("display2 example");
display2(...letters);