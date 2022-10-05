// Regular Function:
let greetings = function () {
    return "Hello World!";
};

let greetings2 = () => {
    "Hello World!";
};

let greet = function (name) {
    return "Hello " + name;
}
let message = greet("John");
console.log(message);

let greet2 = (name) => {
    return "Hello " + name;
}
// The above can also be written as:
let greet3 = name => "Hello " + name;

message = greet2("John");
console.log(message);


// Unlike regular functions, arrow functions do not have their own `this` value
let message2 = {
    name: "John",
    regularFunction: function () {
        //console.log(this);
        console.log("Hello " + this.name);
    },
    arrowFunction: () => {
        //console.log(this);
        console.log("Hi " + this.name);
    }
};

console.log("\nDemostration of `this` keyword in regular and arrow functions");
message2.regularFunction();
message2.arrowFunction();