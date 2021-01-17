console.log('dog'.charAt(1));

console.log('\n----substring examples----')
console.log('Youtube'.substring(1,2));  // 'o'
console.log('Youtube'.substring(3,7));  // 'tube'
console.log('Youtube'.substring(1));    // returns 'outube'


console.log('\n----string comparison examples----')
let a = 'a';
let b = 'b';
console.log(a < b); // prints 'true'

a = 'add';
b = 'b';

console.log(a < b); // prints 'true'

a = 'add';
b = 'ab';
console.log(a < b); // prints 'false'

console.log('add'<'ab' == 'ad'<'ab'); // prints 'true'


console.log('\n----string search examples----')
console.log('Red Dragon'.indexOf('Red'));     // returns  0
console.log('Red Dragon'.indexOf('RedScale')); // returns -1
console.log('Red Dragon'.indexOf('Dragon', 0)); // returns  4
console.log('Red Dragon'.indexOf('Dragon', 4)); // returns  4
console.log('Red Dragon'.indexOf('', 9));      // returns  9
console.log("");

console.log('Red Dragon'.startsWith('Red')); // returns true
console.log('Red Dragon'.endsWith('Dragon')); // returns true
console.log('Red Dragon'.startsWith('Dragon')); // returns false
console.log('Red Dragon'.endsWith('Red')); // returns false
console.log("");

function existsInString (stringValue, search) {
    return stringValue.indexOf(search) !== -1;
}
console.log(existsInString('red','r')); // prints 'true';
console.log(existsInString('red','b')); // prints 'false';

let str = "He's my king from this day until his last day",
    count = 0,
    pos = str.indexOf('a');

while (pos !== -1) {
    count++;
    pos = str.indexOf('a', pos + 1);
}
console.log(count); // prints '3'


console.log('\n----string decomposition examples----')
let test1 = 'chicken,noodle,soup,broth';
console.log(test1.split(",")); // ["chicken", "noodle", "soup", "broth"]

test1 = 'chicken';
console.log(test1.split("")); // ["c", "h", "i", "c", "k", "e", "n"]


console.log('\n----string replace examples----')
console.log("Wizard of Oz".replace("Wizard","Witch")); // "Witch of Oz"
console.log("Wizard of Wizard".replace("Wizard","Witch")); // "Witch of Wizard"


console.log('\n----reverse string example----')
function reverseString (str) {
    var reversed = "";
    for (var i=str.length-1;i>=0;i--){
        reversed += str.charAt(i);
    }
    return reversed;
}
console.log(reverseString('sammie')); // 'eimmas'


console.log('\n----indexOf string example----')
function indexOf(str, subStr, startIndex) {
    let idx = 0,
        counter = 0;

    // if the optional startIndex was passed, set it to that.
    let i = startIndex | 0;

    for (; i < str.length; i++) {

        if (str[i] == subStr[counter]) {
            counter++;
        } else {
            counter = 0;
        }

        // Check starting point or a match
        if (counter == 0) {
            idx = i + 1;
        } else if (counter == subStr.length) {
            return idx;
        }
    }

    // Nothing found
    return -1;
}

console.log(indexOf('hello', 'll')); // prints '2'
console.log(indexOf('hello', 'h')); // prints '0'
console.log(indexOf('hello', 'll', 3)); // prints '-1'


console.log('\n----reverse words example----')
function reverseWords(str) {
    // Words are seperated by space
    var words = str.split(" "); // creates array of words
    var reversedSetence = "";

    for (var i = 0; i < words.length; i++) {
        // only put the extra space if not the last word
        var spaceForWord = i === words.length - 1 ? "" : " ";

        reversedSetence += reverseString(words[i]) + spaceForWord;
    }

    return reversedSetence;
}

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}


console.log(reverseWords("hello how are you doing"));

function reverseWords2(str) {
    var temp = "",
        reversedSetence = "";

    for (let i = 0; i < str.length; i++) {

        // only put the extra space if not the last word
        const spaceForWord = i === str.length - 1 ? "" : " ";

        // if space is encountered
        if (str.charAt(i) === " ") {
            // reverse and concat
            reversedSetence += reverseString(temp) + spaceForWord;
            // reset the temp
            temp = "";
        } else {
            temp += str.charAt(i);
        }

        // reached the end of the input
        if (i === str.length - 1) {
            reversedSetence += reverseString(temp);
        }
    }

    return reversedSetence;
}

console.log(reverseWords2("hello how are you doing"));


console.log('\n----extra spaces example----')
function removeExtraSpaces(str) {
    let newString = "",
        lastChar = " ";

    for (var i = 0, strLength = str.length; i < strLength; i++) {

        var currentChar = str.charAt(i),
            currentAndLastIsSpace = lastChar == " " && currentChar == " ",
            nextCharIsSpace = (i < strLength - 1 && str.charAt(i + 1) == " " && currentChar == " ");

        if (!(currentAndLastIsSpace || nextCharIsSpace)) {
            newString += currentChar;
        }

        lastChar = currentChar;
    }

    return newString;
}

console.log(removeExtraSpaces(" hello.   how are you doing?     ")); // "hello.how are you doing?"