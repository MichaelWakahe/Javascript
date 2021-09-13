/*
 * You can invoke this script with:
 *      node function.js
 */
let points = [             // An array with 2 elements.
    {x: 0, y: 0},          // Each element is an object.
    {x: 1, y: 1}
];

// When functions are assigned to the properties of an object, we call
// them "methods."  All JavaScript objects (including arrays) have methods:
let a = [];                // Create an empty array
a.push(1,2,3);             // The push() method adds elements to an array
a.reverse();               // Another method: reverse the order of elements

// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from earlier.
points.dist = function() { // Define a method to compute distance between points
    let p1 = this[0];      // First element of array we're invoked on
    let p2 = this[1];      // Second element of the "this" object
    let a = p2.x-p1.x;     // Difference in x coordinates
    let b = p2.y-p1.y;     // Difference in y coordinates
    return Math.sqrt(a*a + // The Pythagorean theorem
        b*b); // Math.sqrt() computes the square root
};

console.log("points.dist() is '" + points.dist() + "'");              // => Math.sqrt(2): distance between our 2 points