// A function is considered a first-class member (or first-class citizen) when it can be declared as a variable and sent
// to functions as an argument. These functions can even be returned from functions. JavaScript supports functional
// programming because JavaScript functions are first - class citizens.

const log = message => {
    console.log(message);
};

// Since functions are variables, we can add them to objects:
const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message);
    }
};

obj.log(obj.message);


// We can also add functions to arrays in JavaScript:
const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables


// Functions can be sent to other functions as arguments, just like other variables:
const insideFn = logger => {
    logger("They can be sent to other functions as arguments");
};

insideFn(message => console.log(message));


// They can also be returned from other functions, just like variables:
const createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!");
    };
};

const scream = createScream(message => console.log(message));

scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");

// FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
// CREATESCREAM RETURNS A FUNCTION!!!
// SCREAM INVOKES THAT RETURNED FUNCTION!!!


/*
Imperative Versus Declarative
*/

// Example of a React component:
const { render } = ReactDOM;

const Welcome = () => (
    <div id="welcome">
        <h1>Hello World</h1>
    </div>
);

render(<Welcome />, document.getElementById("target"));


////////////////
// Immutability
////////////////

// Making a copy of an object in an argument so one does not mutate the original argument:
const rateColor = function (color, rating) {
    return Object.assign({}, color, { rating: rating });
};

// Alternative to the above:
const rateColor2 = (color, rating) => ({
    ...color,
    rating
});


// Mutating an array:
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
const addColor = function (title, colors) {
    colors.push({ title: title });
    return colors;
};

// Avoiding mutation:
const addColor2 = (title, array) => array.concat({ title });

// Alternatively:
const addColor3 = (title, list) => [...list, { title }];

// `Array.filter` example
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
const wSchools = schools.filter(school => school[0] === "W");

console.log(wSchools); // ["Washington & Liberty", "Wakefield"]


// `Array.map` example
const highSchools = schools.map(school => `${school} High School`);

console.log(highSchools.join("\n"));
// Yorktown High School
// Washington & Liberty High School
// Wakefield High School

console.log(schools.join("\n"));
// Yorktown
// Washington & Liberty
// Wakefield

// Here’s an example of the map function returning an object for every school:
const highSchools2 = schools.map(school => ({ name: school }));

console.log(highSchools2);
// [
// { name: "Yorktown" },
// { name: "Washington & Liberty" },
// { name: "Wakefield" }
// ]

const editName = (oldName, name, arr) =>
    arr.map(item => {
        if (item.name === oldName) {
            return {
                ...item,
                name
            };
        } else {
            return item;
        }
    });

// Alternative to the method above
const editName2 = (oldName, name, arr) =>
    arr.map(item => (item.name === oldName ? { ...item, name } : item));

let schools2 = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
];

let updatedSchools = editName("Stratford", "HB Woodlawn", schools2);

console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
console.log(schools2[1]); // { name: "Stratford" }


// If you need to transform an array into an object, you can use `Array.map` in conjunction with `Object.keys`.
// `Object.keys` is a method that can be used to return an array of keys from an object.

// Let’s say we needed to transform the schools object into an array of schools:

const schools3 = {
    Yorktown: 10,
    "Washington & Liberty": 2,
    Wakefield: 5
};

const schoolArray = Object.keys(schools3).map(key => ({
    name: key,
    wins: schools3[key]
}));

console.log(schoolArray);
// [
// {
// name: "Yorktown",
// wins: 10
// },
// {
// name: "Washington & Liberty",
// wins: 2
// },
// {
// name: "Wakefield",
// wins: 5
// }
// ]


// The reduce and reduceRight functions can be used to transform an array into any value, including a number, string,
// boolean, object, or even a function.

// Let’s say we need to find the maximum number in an array of numbers.We need to transform an array into a number;
// therefore, we can use reduce:

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
    //console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) {
        return age;
    } else {
        return max;
    }
}, 0);

console.log("maxAge", maxAge); // maxAge 64

// Optional way of doing the above:
const maxAge2 = ages.reduce((max, value) => (value > max ? value : max), 0);

// `Array.reduceRight` works the same way as Array.reduce; the difference is that it starts reducing from the end of the
// array rather than the beginning.


// Transform an array into an object: the following example uses reduce to transform an array that contains colors into
// a hash:
const colors = [
    {
        id: "xekare",
        title: "rad red",
        rating: 3
    },
    {
        id: "jbwsof",
        title: "big blue",
        rating: 2
    },
    {
        id: "prigbj",
        title: "grizzly grey",
        rating: 5
    },
    {
        id: "ryhbhsl",
        title: "banana",
        rating: 1
    }
];

// In this example, the second argument sent to the reduce function is an empty object. This is our initial value for
// the hash. During each iteration, the callback function adds a new key to the hash using bracket notation and sets the
// value for that key to the id field of the array.
const hashColors = colors.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating };
    return hash;
}, {});

console.log(hashColors);
// {
// "xekare": {
// title:"rad red",
// rating:3
// },
// "jbwsof": {
// title:"big blue",
// rating:2
// },
// "prigbj": {
// title:"grizzly grey",
// rating:5
// },
// "ryhbhsl": {
// title:"banana",
// rating:1
// }
// }


// We can even transform arrays into completely different arrays using reduce.Consider reducing an array with multiple
// instances of the same value to an array of unique values.The reduce method can be used to accomplish this task:
const colors4 = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors4.reduce(
    (unique, color) =>
        unique.indexOf(color) !== -1 ? unique : [...unique, color],
    []
);

console.log(uniqueColors); // ["red", "green", "blue"]

// In this example, the `colors` array is reduced to an array of distinct values.The second argument sent to the
// `reduce` function is an empty array.This will be the initial value for `distinct`. When the `distinct` array does not
// already contain a specific color, it will be added.Otherwise, it will be skipped, and the current `distinct` array
// will be returned.



/*
Higher-Order Functions
*/
const invokeIf = (condition, fnTrue, fnFalse) =>
    condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("Unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!"
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!!!"

// Skipped example on `currying`

// Areas of notes from this chapter that are skipped:
// * Recursion
// * Composition
// * Putting It All Together