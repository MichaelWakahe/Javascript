/**
 * Run the following command to execute the contents of the JavaScript file and monitor it for changes:
 *      npx nodemon index.js
 */


let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice == bootsPrice) {   // If you use '===' instead of '==' then type coercion will be stopped
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = hatPrice + bootsPrice;
// let totalPrice = Number(hatPrice) + Number(bootsPrice); // This will force both variables to be converted to number
console.log(`Total Price: ${totalPrice}\n`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);

myVariable = 100;
console.log(`Type: ${typeof myVariable}\n`);


let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}\n`);


let taxRate; // no tax rate has been defined
console.log(`Tax rate: ${taxRate || 10}%`);
taxRate = 0; // zero-rated for tax
console.log(`Tax rate: ${taxRate || 10}%`);
// In addition to null and undefined, the logical OR operator will also coerce the number value 0 (zero), the empty
// string value(""), and the special NaN number value to false.

// JavaScript supports the nullish coalescing operator, ??, which only coerces undefined and null values and not the
// other falsy values, as shown below:
console.log(`New Tax rate with nullish coalescing operator: ${taxRate ?? 10}%\n`);


console.log("=== Working with Functions ===");
function sumPrices(first, second, third) {
    return first + second + third;
}
totalPrice = sumPrices(hatPrice, bootsPrice);
// JavaScript doesn’t enforce a match between the number of parameters defined by a function and the number of arguments
// used to invoke it. Any parameter for which a value is not provided will be undefined.
console.log(`New Total Price: ${totalPrice}`);
totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}\n`);


// Using a default parameter value
console.log("=== Avoiding Argument Mismatch Problems ===");
function sumPrices2(first, second, third = 0) { // Using functions with a default parameter value
    return first + second + third;
}
totalPrice = sumPrices2(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices2(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices2(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}\n`);


// A more flexible approach is a rest parameter, which is prefixed with three periods (...) and must be the last
// parameter defined by the function, as shown below:
// A rest parameter is an array containing all the arguments for which parameters are not defined.
console.log("Using functions with a rest parameter:");
function sumPrices3(...numbers) {
    return numbers.reduce(function (total, val) {   // built-in array reduce method.
        return total + val;
    }, 0);
}
totalPrice = sumPrices3(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices3(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices3(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}\n`);

// To ensure the function produces a useful sum of its parameter values however they are received, they can be
// converted to numbers and filtered to remove any that are NaN as follows:
function sumPrices4(...numbers) {
    return numbers.reduce(function (total, val) {   
        return total + (Number.isNaN(Number(val)) ? 0 : Number(val));
    }, 0);
}
totalPrice = sumPrices4(100, 200, undefined, false, "hello");
console.log(`Total filtered to remove NaN: ${totalPrice} ${typeof totalPrice}\n`);


console.log("=== Using Arrow Functions ===");
// Using Arrow Functions or Lambda Expressions
function sumPrices5(...numbers) {
    return numbers.reduce((total, val) =>
        total + (Number.isNaN(Number(val)) ? 0 : Number(val)));
}
// The return keyword and curly braces are required only if the arrow function needs to execute more than one statement.

// Redefine the sumPrices function in the arrow syntax.
let sumPrices6 = (...numbers) => numbers.reduce((total, val) =>
    total + (Number.isNaN(Number(val)) ? 0 : Number(val)));


console.log("=== Working with Arrays ===");
let names = ["Hat", "Boots", "Gloves"];
let prices = [];
prices.push(100);
prices.push("100");
prices.push(50.25);
console.log(`First Item: ${names[0]}: ${prices[0]}`);
totalPrice = sumPrices6(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}\n`);


console.log("=== Using the Spread Operator on Arrays ===");
let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Combined Array Element: ${element}`));


console.log("\n=== Destructuring Arrays ===");
let [one, two] = names;
console.log(`One: ${one}, Two: ${two}`);

let [, , three] = names;    // You can ignore elements by not specifying a name in the assignment
console.log(`Three: ${three}`);

// Assigning Remaining Elements to an Array
prices = [100, 120, 50.25];
let [, ...highest] = prices.sort((a, b) => a - b);  // the right hand side causes prices to be sorted in ascending order
highest.forEach(price => console.log(`High price: ${price}`));


console.log("\n=== Working with Objects ===");
let hat = {
    name: "Hat",
    price: 100
};
let boots = {
    name: "Boots",
    price: "100"
}
totalPrice = sumPrices6(hat.price, boots.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

// Adding, Changing, and Deleting Object Properties
let gloves = {
    productName: "Gloves",
    price: "40"
}
gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;
totalPrice = sumPrices6(hat.price, boots.price, gloves.price);
console.log(`Total with gloves: ${totalPrice} ${typeof totalPrice}`);

// Guarding Against Undefined Objects and Properties
let propertyCheck = hat.price ?? 0;
let objectAndPropertyCheck = (hat ?? {}).price ?? 0;    // can be optionally written as: hat?.price ?? 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);


console.log("\n=== Using the Spread and Rest Operators on Objects ===");
let otherHat = { ...hat };
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);

let additionalProperties = { ...hat, discounted: true };
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);
let replacedProperties = { ...hat, price: 10 }; // If a property name is used twice in the object literal syntax, then 
                                                // the second value is the one that will be used.
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);
let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}; price is ${price}`);


console.log("\n=== Defining Getters and Setters ===");
hat = {
    name: "Hat",
    _price: 100,    // JavaScript doesn’t have any built-in support for private properties
                    // A widely used convention is to prefix a property name with an underscore to hint at privacy
    priceIncTax: 100 * 1.2,
    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
        console.log("'hat' has set the price");
    },
    get price() {
        return this._price;
    }
};

boots = {
    name: "Boots",
    price: "100",
    get priceIncTax() {
        return Number(this.price) * 1.2;
    }
}

console.log(`Hat: ${hat.price}, ${hat.priceIncTax}`);
hat.price = 120;
console.log(`Hat: ${hat.price}, ${hat.priceIncTax}`);
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = "120";
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);


console.log("\n=== Defining Methods ===");
hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,
    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },
    get price() {
        return this._price;
    },
    // writeDetails: function () {
    //     console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    // }
    writeDetails() { // Equivalent to the method above
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }
};

hat.writeDetails();
hat.price = 120;
hat.writeDetails();


console.log("\n=== Understanding the this Keyword ===");
hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,
    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },
    get price() {
        return this._price;
    },
    writeDetails: () =>
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
};

hat.writeDetails();
hat.price = 120;
hat.writeDetails();
console.log('');

// Values assigned names without using the let, const, or var keyword are assigned to the global object.
// When strict mode is enabled, the default value for this is undefined to prevent accidental use of the global object,
// and values with global scope must be explicitly defined as properties on the global object.

// Understanding this in Methods
let myObject = {
    greeting: "Hi, there",
    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`);
    }
}
greeting = "Hello";
myObject.writeMessage("It is sunny today"); // the `greeting` outside the object is ignored.

// Care is required because this is set differently if the function is accessed outside of its object, which can happen
// if the function is assigned to a variable. This often causes problems when functions are used as arguments to other
// methods or as callbacks to handle events, and the effect is that the same function will behave differently based on
// how it is invoked
let myFunction = myObject.writeMessage;
myFunction("It is sunny today");

// Changing the Behavior of the this Keyword
myObject.writeMessage = myObject.writeMessage.bind(myObject); // The bind method returns a new function that will have a
                                                              // persistent value for this when it is invoked.
myFunction = myObject.writeMessage;
myFunction("It is sunny today");

console.log("\nUnderstanding this in Arrow Functions");
myObject = {
    greeting: "Hi, there",
    getWriter() {
        return (message) => console.log(`${this.greeting}, ${message}`);
    }
}
greeting = "Hello";
let writer = myObject.getWriter();
writer("It is raining today");
let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");

// In summary - avoid `this` keyword with arrow functions; use regular functions.

console.log("\nReturning to the original problem");
hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,
    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },
    get price() {
        return this._price;
    },
    writeDetails() {
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }
};
// With these changes, the value of this for the writeDetails method will be its enclosing object, regardless of how it
// is invoked.
hat.writeDetails = hat.writeDetails.bind(hat);
hat.writeDetails();
hat.price = 120;
hat.writeDetails();