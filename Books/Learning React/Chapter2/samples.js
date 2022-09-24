/*
You can invoke a function before you write a function declaration. You cannot invoke a function created by a function
expression. This will cause an error. For example:
*/
// Invoking the function before it's declared
hey();
// Function Declaration
function hey() {
    alert("hey!");
}

// What is below would cause an error:
// Invoking the function before it's declared
hey();
// Function Expression
const hey = function () {
    alert("hey!");
};



/*
Function returns
*/
const createCompliment = function (firstName, message) {
    return `${firstName}: ${message}`;
};

createCompliment("Molly", "You're so cool");



/*
Default Parameters
*/
function logActivity(name = "Shane McConkey", activity = "skiing") {
    console.log(`${name} loves ${activity}`);
}

const defaultPerson = {
    name: {
        first: "Shane",
        last: "McConkey"
    },
    favActivity: "skiing"
};

function logActivity(person = defaultPerson) {
    console.log(`${person.name.first} loves ${person.favActivity}`);
}


/*
Arrow Functions
*/
// const lordify = function (firstName) {
//     return `${firstName} of Canterbury`;
// };

// The above can be written as:
const lordify = firstName => `${firstName} of Canterbury`;


// More than one argument should be surrounded by parentheses:
// const lordify2 = function (firstName, land) {
//     return `${firstName} of ${land}`;
// };

// Arrow Function equivalent of above:
const lordify2 = (firstName, land) => `${firstName} of ${land}`;

console.log(lordify2("Don", "Piscataway")); // Don of Piscataway

// We can keep this as a one-line function because there is only one statement that needs to be returned.If there are
// multiple lines, you’ll use curly braces
const lordify3 = (firstName, land) => {
    if (!firstName) {
        throw new Error("A firstName is required to lordify");
    }

    if (!land) {
        throw new Error("A lord must have a land");
    }

    return `${firstName} of ${land}`;
};

console.log(lordify3("Kelly", "Sonoma")); // Kelly of Sonoma


// Returning objects
// The following will throw an error:
// const person = (firstName, lastName) => {
//     first: firstName,
//         last: lastName
// }

// To fix this, just wrap the object you’re returning with parentheses:
const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
});

console.log(person("Flad", "Hanson"));


// Arrow functions and scope
// Regular functions do not block `this`. For example, `this` becomes something else in the `setTimeout` callback, not
// the `tahoe` object:
const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function (delay = 1000) {
        setTimeout(function () {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};

tahoe.print(); // Uncaught TypeError: Cannot read property 'join' of undefined

// To solve this problem, we can use the arrow function syntax to protect the scope of `this`:
const tahoe2 = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function (delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};

tahoe2.print(); // Freel, Rose, Tallac, Rubicon, Silver


// Be careful that you’re always keeping scope in mind.Arrow functions do not block off the scope of `this`:
const tahoe3 = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: (delay = 1000) => {
        setTimeout(() => {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};

tahoe3.print(); // Uncaught TypeError: Cannot read property 'join' of undefined


/*
Destructuring Objects
*/
const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

const { bread, meat } = sandwich;

console.log(bread, meat); // dutch crunch tuna

// Since we declared these destructed variables using `let`, the `bread` and `meat` variables can be changed without
// changing the original sandwich:
bread = "garlic";
meat = "turkey";

console.log(bread); // garlic
console.log(meat); // turkey

console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna


// We can also destructure incoming function arguments. See examples below
const lordify4 = regularPerson => {
    console.log(`${regularPerson.firstname} of Canterbury`);
};

const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
};

lordify4(regularPerson); // Bill of Canterbury

// This function does the same as above:
const lordify5 = ({ firstname }) => {
    console.log(`${firstname} of Canterbury`);
};

lordify5(regularPerson); // Bill of Canterbury


/*
Destructuring Arrays
*/
const [firstAnimal] = ["Horse", "Mouse", "Cat"];
console.log(firstAnimal); // Horse

// We can also pass over unnecessary values with list matching using commas.
const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
console.log(thirdAnimal); // Cat


/*
Object Literal Enhancement
*/
// Object literal enhancement is the opposite of destructuring. It’s the process of restructuring or putting the object
// back together.
const firstname = "Tallac";
const elevation = 9738;
const funHike = { name, elevation };
console.log(funHike); // {name: "Tallac", elevation: 9738}


// We can also create object methods with object literal enhancement or restructuring:
const print = function () {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};
const funHike2 = { firstname, elevation, print };
funHike.print(); // Mt. Tallac is 9738 feet tall


// When defining object methods, it’s no longer necessary to use the function keyword:

// Old
var skier = {
    name: firstname,
    sound: sound,
    powderYell: function () {
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed: function (mph) {
        this.speed = mph;
        console.log("speed:", mph);
    }
};

// New
const skier2 = {
    firstname,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
        this.speed = mph;
        console.log("speed:", mph);
    }
};


/*
The Spread Operator
*/
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe4 = [...peaks, ...canyons];
console.log(tahoe4.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood


// Here we get the last peak, but we end up mutating the array `peaks`.
const [last] = peaks.reverse();
console.log(last); // Rose
console.log(peaks.join(", ")); // Rose, Ralston, Tallac

//  Instead, we can create a copy of the array and then reverse it:
const [last2] = [...peaks].reverse();
console.log(last2); // Rose
console.log(peaks.join(", ")); // Tallac, Ralston, Rose

// Since we used the spread operator to copy the array, the peaks array is still intact and can be used later in its
// original form.
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade

// We can also use the three-dot syntax to collect function arguments as an array. When used in a function, these are
// called `rest parameters`. Here, we build a function that takes in `n` number of arguments using the spread operator,
// then uses those arguments to print some console messages:
function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");


// Using the spread operator with objects is similar to using it with arrays. In this example, we’ll use it the same way
// we combined two arrays into a third array, but instead of arrays, we’ll use objects:
const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};

const dinner = "mac and cheese";

const backpackingMeals = {
    ...morning,
    dinner
};

console.log(backpackingMeals);
// {
//   breakfast: "oatmeal",
//   lunch: "peanut butter and jelly",
//   dinner: "mac and cheese"
// }


/*
Asynchronous JavaScript
*/
// A promise is an object that represents whether the async operation is pending, has been completed, or has failed.
fetch("https://api.randomuser.me/?nat=US&results=1").then(res =>
    console.log(res.json())
);

// We can chain together then functions to handle a promise that has been successfully resolved:
fetch("https://api.randomuser.me/?nat=US&results=1")
    .then(res => res.json())
    .then(json => json.results)
    .then(console.log)
    .catch(console.error);


// Async/Await
// Some developers prefer the syntax of async functions because it looks more familiar, like code that’s found in a
// synchronous function. Instead of waiting for the results of a promise to resolve and handling it with a chain of
// `then` functions, `async` functions can be told to wait for the promise to resolve before further executing any code
// found in the function.

// API request but wrap the functionality with an async function:
const getFakePerson = async () => {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
};

getFakePerson();

// This code accomplishes the exact same task as the code in the previous section that uses then functions.
const getFakePerson2 = async () => {
    try {
        let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
        let { results } = res.json();
        console.log(results);
    } catch (error) {
        console.error(error);
    }
};


/*
Classes
*/
class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}

// When you’re creating a class, the class name is typically capitalized.Once you’ve created the class, you can create a
// new instance of the class using the new keyword.Then you can call the custom method on the class:
const trip = new Vacation("Santiago, Chile", 7);
trip.print(); // Chile will take 7 days.

class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
    }

    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const trip2 = new Expedition("Mt. Whitney", 3, [
    "sunglasses",
    "prayer flags",
    "camera"
]);

trip.print();
// Mt. Whitney will take 3 days.
// Bring your sunglasses and your prayer flags and your camera


/*
ES6 Modules
*/
// A JavaScript module is a piece of reusable code that can easily be incorporated into other JavaScript files without
// causing variable collisions.JavaScript modules are stored in separate files, one file per module.There are two
// options when creating and exporting a module: you can export multiple JavaScript objects from a single module or one
// JavaScript object per module.

// An example of exporting two functions from a module:
export const print2 = (message) => log(message, new Date())

export const log = (message, timestamp) =>
    console.log(`${timestamp.toString()}: ${message}`)


// Modules can also export a single main variable. In these cases, you can use export default.
export default new Expedition("Mt. Freel", 2, ["water", "snack"]);

// Both `export` and `export default` can be used on any JavaScript type: primitives, objects, arrays, and functions.

// Modules can be consumed in other JavaScript files using the import statement.Modules with multiple exports can take
// advantage of object destructuring.Modules that use export default are imported into a single variable:

import { print, log } from "./text-helpers";
import freel from "./mt-freel";

print("printing a message");
log("logging a message");

freel.print();

// You can scope module variables locally under different variable names:
import { print as p, log as l } from "./text-helpers";
p("printing a message");
l("logging a message");

// You can also import everything into a single variable using *:
import * as fns from './text-helpers';


/*
CommonJS
*/
// CommonJS is the module pattern that’s supported by all versions of Node(see the Node.js documentation on modules).You
// can still use these modules with Babel and webpack.With CommonJS, JavaScript objects are exported using
// `module.exports`.

// For example, in CommonJS, we can export the print and log functions as an object:

const print3 = (message) => log(message, new Date());

const log3 = (message, timestamp) =>
    console.log(`${timestamp.toString()}: ${message}`);

module.exports = { print3, log3 };

// CommonJS does not support an `import` statement. Instead, modules are imported with the require function:
const { log4, print4 } = require("./txt-helpers");