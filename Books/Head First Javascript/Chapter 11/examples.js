/**
 * Install the npm package with the command: npm install
 *
 * Run the following command to execute the contents of the JavaScript file and monitor it for changes:
 *      npx nodemon index.js
 */

// Constructors in the pre-ES6 Javascript

function Dog(name, breed, weight) { // Starting the constructor name with a capital letter is a convention.
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    this.bark = function () {
        if (this.weight > 25) {
            console.log(this.name + " says Woof!");
        } else {
            console.log(this.name + " says Yip!");
        }
    }
    // Do not return a value in a constructor.
}

/*
The above constructor is equivalent to:

class Dog {
    constructor(name, breed, weight) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
    }
}
*/

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 10);
var spot = new Dog("Spot", "Bull dog", 40);

var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }

    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
    dogs[i].bark();
}

console.log("\ndogs[1] is an instance of a dog? " + String(dogs[1] instanceof Dog));

// You can still modify the object down the road. Examples are here:
fido.owner = "Bob"
delete fido.breed;
fido.trust = function (person) {
    return (person === "Bob");
};
console.log("\nfido is still an instance of a dog? " + String(fido instanceof Dog));