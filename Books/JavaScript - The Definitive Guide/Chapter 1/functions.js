/*
 * You can invoke this script with:
 *      node function.js
 */
// Functions are parameterized blocks of JavaScript code that we can invoke.
let y = 3;

function plus1(x) {        // Define a function named "plus1" with parameter "x"
    return x + 1;          // Return a value one larger than the value passed in
}                          // Functions are enclosed in curly braces

console.log("y is " + y + ", plus1(y) is " + plus1(y));  // => 4: y is 3, so this invocation returns 3+1

let square = function(x) { // Functions are values and can be assigned to vars
    return x * x;          // Compute the function's value
};                         // Semicolon marks the end of the assignment.

console.log("square(plus1(y)) is " + square(plus1(y)))      // => 16: invoke two functions in one expression


/*
In ES6 and later, there is a shorthand syntax for defining functions. This concise syntax uses => to separate the
argument list from the function body, so functions defined this way are known as arrow functions. Arrow functions are
most commonly used when you want to pass an unnamed function as an argument to another function. The preceding code
looks like this when rewritten to use arrow functions:
 */
const _plus1 = x => x + 1;   // The input x maps to the output x + 1
const _square = x => x * x;  // The input x maps to the output x * x
console.log("_plus1(y) is " + _plus1(y));     // => 4: function invocation is the same
console.log("_square(plus1(y)) is " + _square(plus1(y)))      // => 16
