/*
In JavaScript, variables can be declared without using any operators. However, this creates a global variable, and this
is one of the worst practices in JavaScript. Avoid doing this at all costs. Always use var or let to declare variables.
Finally, when declaring variables that won’t be modified, use const.
*/
test = "sss";
console.log(test); // prints "sss"