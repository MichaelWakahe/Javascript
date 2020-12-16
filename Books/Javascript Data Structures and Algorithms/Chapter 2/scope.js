/**
 * In JavaScript, 'var' is one keyword used to declare variables. These variable declarations “float” all the way to the
 * top. This is known as variable hoisting.
 */

function scope1() {
    var top = "top";
    bottom = "bottom";
    console.log(bottom);

    var bottom;
}
scope1(); // prints "bottom" - no error
// The bottom variable declaration, which was at the last line in the function, is floated to the top, and logging the
// variable works.

// The function above is identical to this one:
function scope1_1() {
    var top = "top";
    var bottom;
    bottom = "bottom";
    console.log(bottom);
}
scope1_1(); // prints "bottom" - no error


function scope2(print) {
    if (print) {
        var insideIf = '12';
    }
    console.log(insideIf);
}
scope2(true); // prints '12' - no error

// The preceding function is equivalent to the following:
function scope2_2(print) {
    var insideIf;

    if (print) {
        insideIf = '12';
    }
    console.log(insideIf);
}
scope2_2(true); // prints '12' - no error


var a = 1;
function four() {
    if (true) {
        var a = 4;
    }
    console.log(a); // prints '4'
}
four(); // 4 was printed, not the global value of 1, because it was redeclared and available in that scope.


// Another keyword that can be used to declare a variable is let. Any variables declared
// this way are in the closest block scope (meaning within the {} they were declared in).
function scope3(print) {
    if (print) {
        let insideIf = '12';
    }
    console.log(insideIf);
}
scope3(true); // prints '' or may throw ReferenceError: insideIf is not defined
