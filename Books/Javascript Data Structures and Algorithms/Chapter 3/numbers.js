// With decimal fractions, this floating-point number system causes some rounding errors in JavaScript. For example,
// 0.1 and 0.2 cannot be represented precisely. Hence, 0.1 + 0.2 === 0.3 yields false.
console.log(0.1 + 0.2 === 0.3);

// 5/4 is 1 in Java because the quotient is 1 (although there is a remainder of 1 left). However, in JavaScript, it is a
// floating point.
console.log(5/4); // 1.25

// Math.floor - rounds down to nearest integer
// Math.round - rounds to nearest integer
// Math.ceil  - rounds up to nearest integer
console.log("\nMath.floor examples");
console.log(Math.floor(0.9)); // 0
console.log(Math.floor(1.1)); // 1

console.log("\nMath.round examples");
console.log(Math.round(0.49)); // 0
console.log(Math.round(0.5)); // 1
console.log(Math.round(2.9)); // 3

console.log("\nMath.ceil examples");
console.log(Math.ceil(0.1)); // 1
console.log(Math.ceil(0.19)); // 1
console.log(Math.ceil(21)); // 21
console.log(Math.ceil(21.01)); // 22


// Number.EPSILON returns the smallest interval between two representable numbers.
// This is useful for the problem with floating-point approximation.
function numberEquals(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}
console.log("\nNumber.EPSILON example.")
console.log(0.1 + 0.2 == 0.3) // false due to little difference in floating point
console.log(numberEquals(0.1 + 0.2, 0.3)); // true


// Number.MAX_SAFE_INTEGER returns the largest integer.
console.log("\nNumber.MAX_SAFE_INTEGER examples.")
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true
console.log(Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022); // false


// Number.MAX_VALUE returns the largest floating-point number possible.
// Number.MAX_VALUE is equal to 1.7976931348623157e+308.
console.log("\nNumber.MAX_VALUE examples.")
console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2); // true
console.log(Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022); // true


// Number.MIN_SAFE_INTEGER returns the smallest integer.
// Number.MIN_SAFE_INTEGER is equal to -9007199254740991.
console.log("\nNumber.MIN_SAFE_INTEGER examples.")
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true
console.log(Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022); // false


// Number.MIN_VALUE returns the smallest floating-point number possible.
// Number.MIN_VALUE is equal to 5e-324. This is not a negative number since it is the smallest floating-point number
// possible and means that Number.MIN_VALUE is actually bigger than Number.MIN_SAFE_INTEGER.
// Number.MIN_VALUE is also the closest floating point to zero.
console.log("\nNumber.MIN_VALUE example.")
console.log(Number.MIN_VALUE - 1 == -1); // true. This is because this is similar to writing 0 - 1 == -1.


// The only thing greater than Number.MAX_VALUE is Infinity, and the only thing smaller than Number.MAX_SAFE_INTEGER is
// -Infinity
console.log("\nInfinity examples.")
console.log(Infinity > Number.MAX_SAFE_INTEGER); // true
console.log(-Infinity < Number.MAX_SAFE_INTEGER); // true
console.log(-Infinity -32323323 == -Infinity -1); // true
