/** Chapter 4 */

function dullFunc(value1, value2) {
    return "I'm boring and difficult. Don't be like me.";
}

// To avoid accidentally using an implicitly `any` type (such as the function above), you can switch on the 
// --noImplicitAny compiler option.

function funFunc(score: number, message?: string): string {
    return "I've got personality and I'm helpful. Be like me!";
}


// An example of a default-initialized parameter
function sendGreeting(greeting: string = 'Good morning'): void {
    console.log(greeting);
}

sendGreeting();
sendGreeting("Good afternoon");


// Anatomy of an Arrow Function
// parameters => function body 

let squareit = x => x * x;
let result = squareit(4);   // 16

let adder = (a, b) => a + b;
let sum = adder(3, 4);  // 7

let greeting = () => console.log("Hello world!");
greeting();

let scores: number[] = [70, 125, 85, 110];
let highScores: number[];
highScores = scores.filter((element, index, array) => {
    if (element > 100) {
        return true;
    }
});

const logMessage = (message: string): void => {
    console.log(message);
}
logMessage("My message");

// The above can be simplified as:
const logMessage2 = (message: string) => console.log(message);
logMessage2("My message2");

let logger: (value: string) => void;

if (2 > 3) {
    logger = logMessage;
} else {
    logger = logMessage2;
}