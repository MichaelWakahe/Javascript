/**
 * JavaScript doesn’t care if your functions are declared before or after you use them.
 */

let radius = 5;
let area = circleArea(radius);  // Notice that we’re using the circleArea function before we’re defining it!
console.log(area);

function circleArea(r) {
    let a = Math.PI * r * r;
    return a;
}