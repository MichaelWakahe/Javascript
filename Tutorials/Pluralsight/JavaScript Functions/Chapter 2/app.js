console.log("Hello Mike");

// The `arguments` object
// It is array-like but doesn't have all the methods built into an array
function printAll() {
    console.log('\n`arguments` object example:');
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printAll(1, 2, 3, 4, 5);


/*
Immediately Invoked Function Expression (IIFE)
*/
function greeting() {
    console.log("\nHello non-IIFE");
}
greeting();

// The function above as an IIFE
(
    function greeting() {
        console.log("Hello IIFE");
    }
)();


/*
Closures
*/
let greeting2 = (
    function() {
        let message = "Hello";
        let getMessage = function () {
            return message;
        };

        return {
            getMessage: getMessage,
        };
    }
)();

console.log("\nClosure example: " + greeting2.getMessage());


// Another Closure example
function setupCounter(val) {
    return function counter() {
        val = val + 1;
        return val;
    }
}
console.log("\nA second closure example");

let counter1 = setupCounter(0);
console.log(counter1());
console.log(counter1());

let counter2 = setupCounter(10);
console.log(counter2());
console.log(counter2());