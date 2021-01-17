/* Regular Expressions */

const str = "JavaScript DataStructures";
const n = str.search(/DataStructures/);
console.log(n); // prints '11'

String.prototype.replaceAll = function (findString, replaceString) {
    return this.split(findString).join(replaceString);
}

console.log('This is a test string.'.replaceAll(" ", ",")); // 'This,is,a,test,string.'

console.log("\nAny numeric characters:");
let reg = /\d+/;
console.log(reg.test("123")); // true
console.log(reg.test("33asd")); // true
console.log(reg.test("5asdasd")); // true
console.log(reg.test("asdasd")); // false

console.log("\nOnly numeric characters:");
reg =  /^\d+$/;
console.log(reg.test("123")); // true
console.log(reg.test("123a")); // false
console.log(reg.test("11a22")); // false

console.log("\nFloating numeric characters:");
reg = /^[0-9]*.[0-9]*[1-9]+$/;
console.log(reg.test("12")); // true
console.log(reg.test("12.2")); // true
console.log(reg.test("12.2.3")); // false

console.log("\nOnly Alphanumeric Characters:");
reg = /[a-zA-Z0-9]/;
reg.test("somethingELSE"); // true
reg.test("hello"); // true
reg.test("112a"); // true
reg.test("112"); // true
reg.test("^"); // false


const uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
const queryString = {};
uri.replace(
    new RegExp ("([^?=&]+)(=([^&]*))?" , "g" ),
    function($0, $1, $2, $3) { queryString[$1] = $3; }
);
console.log('ID: ' + queryString['product_id']);     // ID: 2140
console.log('Name: ' + queryString['product_name']); // Name: undefined
console.log('Category: ' + queryString['category']); // Category: 4
