// Example 1
console.log("Example 1");
function sayHi() {
    console.log("Hello");
    console.log(this);
}
sayHi();    // Hi
            // Window {...}


// Example 2
console.log("\nExample 2");
let greeting = {};

greeting.sayHi = function () {
    console.log("Hi");
    console.log(this);
}

greeting.sayHi();   // Hi
                    // {sayHi:f}


// Example 3: use of the constructor function
console.log("\nExample 3");
let greeting3 = new sayHi();    // Hi
                                // [obj Object]


/*
call
Note, `call` can only be used on functions and not regular objects.
*/
console.log("\nExamples with `call`");

let person1 = { name: "John", age: 22 };
let person2 = { name: "Mary", age: 26 };
let sayHi2 = function () {
    console.log("Hi, " + this.name);
}

sayHi2.call(person1); // Hi, John
sayHi2.call(person2); // Hi, Mary

let sayHi3 = function (message) {
    console.log(message + ", " + this.name);
}
sayHi3.call(person1, "Hello");


/*
apply
Every function has an `apply` method, just like every function has a `call` method.
`call` accepts multiple arguments, while `apply` accepts an array of arguments
*/
console.log("\nExamples with `apply`");

function introduction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
    console.log(this);
}

introduction("John", "student");
introduction.call(undefined, "James", "artist");
introduction.apply(undefined, ["Mary", "lawyer"]);

// Use the `apply` method when the input is an array with similar elements;
// Use the `call` method when there are individual arguments of varying type


/*
bind
To make a copy of a function and then change the value of `this`
*/
console.log("\nExamples with `bind`");

let person3 = {
    name: "Mary",
    getName: function () {
        return this.name;
    }
};

let person4 = { name: "John" };
let getNameCopy = person3.getName.bind(person4);
console.log(getNameCopy()); // John