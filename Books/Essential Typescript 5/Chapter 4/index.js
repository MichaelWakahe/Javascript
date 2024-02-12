/**
 * Install the npm package with the command: npm install
 *
 * Run the following command to execute the contents of the JavaScript file and monitor it for changes:
 *      npx nodemon index.js
 */

// The following is creating an object using the literal syntax
let hat = {
    name: "Hat",
    price: 100,

    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};

let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
}

console.log(`hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`hat toString: ${hat.toString()}\n`);

let hatPrototype = Object.getPrototypeOf(hat);
let bootsPrototype = Object.getPrototypeOf(boots);

console.log(`Hat Prototype: ${hatPrototype}`);
console.log(`Boots Prototype: ${bootsPrototype}`);
console.log(`Common prototype: ${hatPrototype === bootsPrototype}\n`);

hatPrototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

console.log(`Modified hat toString: ${hat.toString()}`);
console.log(`boots toString: ${boots.toString()}\n`);   // The boots prototype also got modified

// Changes to Object should be made cautiously because they affect all the other objects in the application.The new
// toString function in listing 4.5 produces more useful output for the hat and boots objects but assumes that there will
// be name and price properties, which won’t be the case when toString is called on other objects.

// A better approach is to create a prototype specifically for those objects that are known to have name and price
// properties, which can be done using the Object.setPrototypeOf method, as shown below
let ProductProto = {
    toString: function() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);

console.log("=== hat and boots with new prototype ==");
console.log(hat.toString());
console.log(boots.toString());


// Using constructor functions
let Product = function(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

hat = new Product("Hat", 100);
boots = new Product("Boots", 100);

console.log("\n=== using constructor functions ==");
console.log(hat.toString());
console.log(boots.toString());


// Chaining constructor functions
let TaxedProduct = function(name, price, taxRate) {
    Product.call(this, name, price);
    this.taxRate = taxRate;
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() {
    return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString = function() {
    return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
}

let taxedHat = new TaxedProduct("Hat", 100, 1.2);
console.log("\n=== Chaining constructor functions ==");
console.log(taxedHat.toTaxString());


// Checking prototype types
console.log("\n=== Chaining prototype types ==");
console.log(`taxedHat instanceof TaxedProduct: ${ taxedHat instanceof TaxedProduct}`);
console.log(`taxedHat instanceof Product: ${ taxedHat instanceof Product}`);
console.log(`boots instanceof TaxedProduct: ${ boots instanceof TaxedProduct}`);
console.log(`boots instanceof Product: ${boots instanceof Product}`);


// Defining static properties and methods
// Properties and methods that are defined on the constructor function are often referred to as "static", meaning they
// are accessed through the constructor and not individual objects created by that constructor(as opposed to "instance
// properties", which are accessed through an object).
// The Object.setPrototypeOf and Object.getPrototypeOf methods are good examples of static methods.
Product.process = (...products) =>
    products.forEach(p => console.log(p.toString()));

console.log("\n=== Defining static properties and methods ==");
Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));

// ==========================
// USING JAVASCRIPT CLASSES
// ==========================
// JavaScript classes were added to the language to ease the transition from other popular programming languages. Behind
// the scenes, JavaScript classes are implemented using prototypes, which means that JavaScript classes have some
// differences from those in languages such as C# and Java.
class Product2 {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

hat = new Product2("Hat", 100);
boots = new Product2("Boots", 100);

console.log("\n=== Using JavaScript classes ==");
console.log(hat.toString());
console.log(boots.toString());


class TaxedProduct2 extends Product2 {

    constructor(name, price, taxRate = 1.2) {
        super(name, price); // The super keyword must be used before the this keyword and is generally used in the first
                            // statement in the constructor.
        this.taxRate = taxRate;
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate;
    }

    toString() {
        let chainResult = super.toString(); // The super keyword can also be used to access superclass properties and
                                            // methods
        //return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
        return `${chainResult}, ${this.#getDetail()}`;
    }

    // The static keyword is applied to create static methods that are accessed through the class, rather than the
    // object it creates
    static process(...products) {
        products.forEach(p => console.log(p.toString()));
    }

    // The most recent version of JavaScript introduced support for private members in classes, which prevents them from
    // being used outside of the class that defines them.
    // The '#' character is put in front of the method name to create a hash name, which indicates that the class member
    // can only be accessed within the class.
    #getDetail() {
        return `Tax: ${this.getPriceIncTax()}`;
    }
}

hat = new TaxedProduct2("Hat", 100);
boots = new TaxedProduct2("Boots", 100, 1.3);

console.log("\n=== Inheritance in classes ==");
console.log(hat.toString());
console.log(boots.toString());

console.log("\n=== Defining static methods ==");
TaxedProduct2.process(new TaxedProduct2("Hat", 100, 1.2), new TaxedProduct2("Boots", 100));

// boots.getDetail();  // This results in an error because the 'getDetail' method is private



// 4.3 Using iterators and generators
// Iterators are objects that return a sequence of values. Iterators are used with the collections described later in
// this chapter, but they can also be useful in their own right. An iterator defines a function named 'next' that
// returns an object with 'value' and 'done' properties: the 'value' property returns the next value in the sequence,
// and the 'done' property is set to 'true' when the sequence is complete.
function createProductIterator() {
    const hat = new Product("Hat", 100);
    const boots = new Product("Boots", 100);
    const umbrella = new Product("Umbrella", 23);

    let lastVal;

    return {
        next() {
            switch (lastVal) {
                case undefined:
                    lastVal = hat;
                    return { value: hat, done: false };
                case hat:
                    lastVal = boots;
                    return { value: boots, done: false };
                case boots:
                    lastVal = umbrella;
                    return { value: umbrella, done: false };
                case umbrella:
                    return { value: undefined, done: true };
            }
        }
    }

}

console.log("\n=== Using an iterator ==");

let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}


// Using a generator
// Writing iterators can be awkward because the code has to maintain state data to keep track of the current position in
// the sequence each time the next function is invoked. A simpler approach is to use a generator, which is a function
// that is invoked once and uses the 'yield' keyword to produce the values in the sequence
function* createProductIterator2() {    // Generator functions are denoted with an asterisk
    yield new Product("Hat", 100);
    yield new Product("Boots", 100);
    yield new Product("Umbrella", 23);
}

console.log("\n=== Using a generator ==");

// Generators are consumed in the same way as iterators.
iterator = createProductIterator2();
result = iterator.next();
while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}

// Generators can be used with the spread operator, allowing the sequence to be used as a set of function parameters or
// to populate an array
console.log("\n=== Using a generator with the spread operator ==");
[...createProductIterator2()].forEach(p => console.log(p.toString()));


// Defining iterable objects
// This defines an object that groups related data items and provides a generator to allow the items to be sequenced.
class GiftPack {

    constructor(name, prod1, prod2, prod3) {
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }

    getTotalPrice() {
        return [this.prod1, this.prod2, this.prod3]
            .reduce((total, p) => total + p.price, 0);
    }

    *getGenerator() {   // The asterisk appears before generator method names.
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }

    // A more elegant approach is to use the special method name for the generator, which tells the JavaScript runtime
    // that the method provides the default iteration support for an object
    *[Symbol.iterator]() {
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }
}

let winter = new GiftPack("winter", new Product("Hat", 100),
    new Product("Boots", 80), new Product("Gloves", 23));

console.log("\n=== Defining iterable objects ==");
console.log(`Total price: ${ winter.getTotalPrice() }`);

[...winter.getGenerator()].forEach(p => console.log(`Product: ${p}`));

console.log("");
[...winter].forEach(p => console.log(`Product: ${p}`));


//==============================
// USING JAVASCRIPT COLLECTIONS
//==============================
// Objects can be used as collections, where each property is a key/value pair, with the property name being the key
let data = {
    hat: new Product("Hat", 100)
}

data.boots = new Product("Boots", 100);

console.log("\n=== Storing data by key using an object ==");
Object.keys(data).forEach(key => console.log(data[key].toString()));
// This example uses an object named data to collect Product objects.

// Object provides useful methods for getting the set of keys or values from an object
// Object.keys(object): This method returns an array containing the property names defined by the object.
// Object.values(object): This method returns an array containing the property values defined by the object.


// Storing data by key using a map
let data2 = new Map();   //  JavaScript provides Map, which is purpose-built for storing data using keys of any type
data2.set("hat", new Product("Hat", 100));
data2.set("boots", new Product("Boots", 100));

console.log("\n=== Storing data by key using a map ==");
[...data2.keys()].forEach(key => console.log(data2.get(key).toString()));

// Useful Map methods
// set(key, value): This method stores a value with the specified key.
// get(key): This method retrieves the value stored with the specified key.
// keys(): This method returns an iterator for the keys in the Map.
// values(): This method returns an iterator for the values in the Map.
// entries(): This method returns an iterator for the key / value pairs in the Map, each of which is presented as an
//            array containing the key and value.This is the default iterator for Map objects.


// Using symbols for map keys
// The main advantage of using a Map is that any value can be used as a key, including Symbol values. Each Symbol value
// is unique and immutable and ideally suited as an identifier for objects.

// Symbol values can be useful, but they can be difficult to work with because they are not human-readable and have to
// be created and handled carefully.
// The benefit of using Symbol values as keys is that there is no possibility of two keys colliding, which can happen if
// keys are derived from the value’s characteristics.


// Storing data by index
// JavaScript provides Set, which stores data by index but has performance optimizations and—most usefully—stores only
// unique values
class Product3 {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product3("Hat", 100);

let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
    productArray.push(product);
    productSet.add(product);
}

console.log("\n=== Storing data by index ==");
console.log(`Array length: ${productArray.length}`);
console.log(`Set size: ${productSet.size}`);

// Useful Set methods
// add(value): This method adds the value to the Set.
// entries(): This value returns an iterator for the items in the Set, in the order in which they were added.
// has(value): This value returns true if the Set contains the specified value.
// forEach(callback): This method invokes a function for each value in the Set