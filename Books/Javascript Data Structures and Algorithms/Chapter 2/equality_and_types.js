var is20 = false; // boolean
console.log("typeof is20: " + typeof is20); // boolean

var age = 19;
console.log("typeof age: " + typeof age); // number

var lastName = "Bae";
console.log("typeof lastName: " + typeof lastName); // string

var fruits = ["Apple", "Banana", "Kiwi"];
console.log("typeof fruits: " + typeof fruits); // object

var me = {firstName:"Sammie", lastName:"Bae"};
console.log("typeof me: " + typeof me); // object

var nullVar = null;
console.log("typeof nullVar: " + typeof nullVar); // object

var function1 = function() {
    console.log(1);
}
console.log("typeof function1: " + typeof function1); // function

var blank;
console.log("typeof blank: " + typeof blank); // undefined

//=========================
// Truthy/Falsey Check
//=========================
var printIfTrue = '';
if (printIfTrue) {
    console.log('truthy');
} else {
    console.log('falsey'); // prints 'falsey'
}

console.log("\"5\" == 5: " + ("5" == 5).toString()) // returns true
console.log("\"5\" === 5: " + ("5" === 5).toString()) // returns false



var o1 = {};
var o2 = {};

console.log("o1 == o2: " + (o1 == o2).toString()) // returns false
console.log("o1 === o2: " + (o1 === o2).toString()) // returns false
// Although these objects are equivalent (same properties and values), they are not equal. Namely, the variables have
// different addresses in memory.
// This is why most JavaScript applications use utility libraries such as lodash or underscore, 2 which have the
// isEqual(object1, object2) function to check two objects or values strictly.


// In this example, each property is compared to achieve an accurate object equality result.
function isEquivalent(a, b) {
    // arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If their property lengths are different, they're different objects
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If the values of the property are different, not equal
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If everything matched, correct
    return true;
}

a = isEquivalent({'hi':12},{'hi':12});
console.log("isEquivalent({'hi':12},{'hi':12}: " + a.toString()); // returns true

var obj1 = {'prop1': 'test','prop2': function (){} };
var obj2 = {'prop1': 'test','prop2': function (){} };

a = isEquivalent(obj1,obj2);
console.log("a = isEquivalent(obj1,obj2): " + a.toString()); // returns false
// This is because functions and arrays cannot simply use the == operator to check for equality.


var function1 = function(){console.log(2)};
var function2 = function(){console.log(2)};
console.log(function1 == function2); // prints 'false'
// Although the two functions perform the same operation, the functions have different addresses in memory, and
// therefore the equality operator returns false. The primitive equality check operators, == and ===, can be used only
// for strings and numbers

/**
 * Summary:
 *
 * 'var' declares the variable within the function scope, 'let' declares the variable in the block scope, and variables
 * can be declared without any operator in the global scope; however, global scope should be avoided at all times.
 *
 * For type checking, 'typeof' should be used to validate the expected type. Finally, for equality checks, use == to
 * check the value, and use === to check for the type as well as the value. However, use these only on non-object types
 * such as numbers, strings, and booleans
 */
