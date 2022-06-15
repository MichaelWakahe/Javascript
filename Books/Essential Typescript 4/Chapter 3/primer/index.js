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
// JavaScript supports the nullish coalescing operator, ??, which only coerces undefined and null values and not the
// other falsy values, as shown below:
console.log(`New Tax rate with nullish coalescing operator: ${taxRate ?? 10}%\n`);


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
console.log("Using functions with a default parameter value:");
function sumPrices2(first, second, third = 0) {
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


// Using Arrow Functions or Lambda Expressions
function sumPrices5(...numbers) {
    return numbers.reduce((total, val) =>
        total + (Number.isNaN(Number(val)) ? 0 : Number(val)));
}


// Redefine the sumPrices function in the arrow syntax.
let sumPrices6 = (...numbers) => numbers.reduce((total, val) =>
    total + (Number.isNaN(Number(val)) ? 0 : Number(val)));


console.log("Working with Arrays");
let names = ["Hat", "Boots", "Gloves"];
let prices = [];
prices.push(100);
prices.push("100");
prices.push(50.25);
console.log(`First Item: ${names[0]}: ${prices[0]}`);
totalPrice = sumPrices6(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}\n`);


console.log("Using the Spread Operator on Arrays");
let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Combined Array Element: ${element}`));


console.log("\nDestructuring Arrays");
let [one, two] = names;
console.log(`One: ${one}, Two: ${two}`);

let [, , three] = names;    // You can ignore elements by not specifying a name in the assignment
console.log(`Three: ${three}`);

// Assigning Remaining Elements to an Array
prices = [100, 120, 50.25];
let [, ...highest] = prices.sort((a, b) => a - b);  // the right hand side causes prices to be sorted in ascending order
highest.forEach(price => console.log(`High price: ${price}`));


console.log("\nWorking with Objects");
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
let objectAndPropertyCheck = (hat ?? {}).price ?? 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);