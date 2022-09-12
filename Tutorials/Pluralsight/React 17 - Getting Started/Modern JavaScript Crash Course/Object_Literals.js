/*

    const obj = {
        key: value
    }
*/

const mystery = 'answer';

const obj = {
    p1: 10,
    p2: 20,
    f1() { },
    f2: () => { },
    [mystery]: 42
}

console.log(obj.mystery);   // Logs 'undefined'
console.log(obj.answer);    // Logs '42'