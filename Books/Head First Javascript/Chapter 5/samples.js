
var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

var bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";

} else {
    bark = "woof woof";
}

console.log(dog);

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

dog.dogYears = 35;
console.log("Dog years are: " + dog.dogYears);

delete dog.dogYears;
console.log("Dog years after deletion are: " + dog.dogYears);

/*
If you modify a property of an object in a function then it persists
*/
function alterDog(aDog) {
    aDog.name = "MyDog";
}

alterDog(dog);
console.log("Dog name after alterDog function is: " + dog.name);


// A property of an object can also be a function
dog.run = function () {
    console.log("I am running");
}

dog.run();


// Try use an undefined variable in a decision
// if (!undefinedDog) {
//     console.log("This is an undefinedDog");
// }

const fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,

    start: function () {
        this.started = true;
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            console.log("You need to start the engine first.");
        }
    }
};

console.log("");
//fiat.start();
fiat.drive();


// Iterate through the properties of an object
console.log("\nProperties of fiat:");
for (var property in fiat) {
    console.log(property + ": " + fiat[property]);
    // Note that fiat.color is the same as fiat["color"]. This is an alternative way to access properties of an object.
}