/**
 * Install the npm package with the command: npm install
 *
 * Run the following command to execute the contents of the JavaScript file and monitor it for changes:
 *      npx nodemon examples.js
 */

function Dog(name, breed, weight) { // Starting the constructor name with a capital letter is a convention.
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    // no methods needed here as they will come from the prototype.
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
    if (this.weight > 25) { // the prototype assumes the object inheriting it will have a "weight" property
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function () {
    console.log("Run!");
}

Dog.prototype.wag = function () {
    console.log("Wag!");
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 10);
var spot = new Dog("Spot", "Bull dog", 40);

fido.bark();
fluffy.run();
spot.wag();

// The following only changes Spot's bark method, and not the prototype
spot.bark = function() {
    console.log(this.name + " says WOOF!");
}

console.log("\n== Override the bark method ==");
fido.bark();
fluffy.bark();
spot.bark();


// Now that we have a prototype, if we add any methods to that prototype, even after we’ve already created dog objects,
// all dogs inheriting from the prototype immediately and automatically get this new behavior.
console.log("\n== Teaching dogs new tricks ==");
Dog.prototype.sit = function () {
    console.log(this.name + " is now sitting.");
}

spot.sit();

console.log("\n== Inheriting from an existing prototype ==");
function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    // The above three statements can be replaced with the following:
    // Dog.call(this, name, breed, weight);

    this.handler = handler; // this is the additional field over the Dog
}

ShowDog.prototype = new Dog();  // The ShowDog prototype extends the Dog prototype. Without this, the Dog behaviour will
                                // not be inherited.

ShowDog.prototype.league = "Webville";

ShowDog.prototype.groom = function () {
    console.log("Groom");
}

var scotty = new ShowDog("Scotty", "Terrier", 15, "Cookie");
scotty.bark();
scotty.groom();

console.log("Is scotty an instance of a dog? " + String(scotty instanceof Dog));    // true
console.log("Is scotty an instance of a show dog? " + String(scotty instanceof ShowDog));   // true

console.log("\nFido constructor is " + fido.constructor);   // function Dog
console.log("\nScotty constructor is " + scotty.constructor);   // function Dog


console.log("\n== Fixing the constructor ==");
ShowDog.prototype.constructor = ShowDog;
console.log("\nScotty new constructor is " + scotty.constructor);   // function ShowDog