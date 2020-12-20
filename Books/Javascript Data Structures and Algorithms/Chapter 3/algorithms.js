/**
 * Is n a prime number or not?
 *
 * @param n
 * @returns {boolean}
 */
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    // check from 2 to n-1
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
console.log("isPrime(31)? " + isPrime(31).toString());


/**
 * Improved version of algorithm above.
 *
 * @param n
 * @returns {boolean}
 */
function isPrime2(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    // This is checked so that we can skip middle five numbers in below loop
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (var i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }

    return true;
}
console.log("isPrime2(31)? " + isPrime2(31).toString());


function primeFactors(n) {
    // Print the number of 2s that divide n
    while (n % 2 == 0) {
        console.log(2);
        n = n / 2;
    }

    // n must be odd at this point. So we can skip one element (Note i = i +2)
    for (var i = 3; i * i <= n; i = i + 2) {
        // While i divides n, print i and divide n
        while (n % i == 0) {
            console.log(i);
            n = n / i;
        }
    }

    // This condition is to handle the case when n is a prime number greater than 2
    if (n > 2) {
        console.log(n);
    }
}
console.log("\nprimeFactors(10):");
primeFactors(10)    // prints '5' and '2'
console.log("\nprimeFactors(20):");
primeFactors(20)


console.log("\nRandom numbers:");
console.log("Random float between 0 and 1: " + Math.random().toString());
console.log("Random float between 0 and 100: " + (Math.random() * 100).toString());
console.log("Random float between 5 and 30: " + (Math.random() * 25 + 5).toString());
console.log("Random float between -100 and -90: " + (Math.random() * 10 - 100).toString());
console.log("Random integer between 0 and 99: " + (Math.floor(Math.random()) * 100).toString());
console.log("Random integer between 5 and 30: " + (Math.round(Math.random()) * 25 + 5).toString());
console.log("Random integer between -100 and -90: " + (Math.ceil(Math.random()) * 10 - 100).toString());


function allPrimesLessThanN(n) {
    for (var i = 0; i < n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
console.log("\nAll Primes less than 15:");
allPrimesLessThanN(15); // prints 2, 3, 5, 7, 11, 13



function maxDivide(number, divisor) {
    while (number % divisor == 0) {
        number /= divisor;
    }
    return number;
}

function isUgly(number) {
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);
    return number === 1;
}

function arrayNUglyNumbers(n) {
    var counter = 0,
        currentNumber = 1,
        uglyNumbers = [];

    while (counter != n) {

        if (isUgly(currentNumber)) {
            counter++;
            uglyNumbers.push(currentNumber);
        }

        currentNumber++;
    }

    return uglyNumbers;
}
console.log("\nFirst 12 ugly numbers: " + arrayNUglyNumbers(12));   // [ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16 ]
