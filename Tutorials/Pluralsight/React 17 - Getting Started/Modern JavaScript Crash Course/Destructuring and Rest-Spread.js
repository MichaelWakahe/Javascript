// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// The above can be achieved with the line below:
const { PI, E, SQRT2 } = Math;

const circle = {
    label: 'circlex',
    radius: 2,
};

const circleArea = ({ radius }) => (PI * radius * radius).toFixed(2);

console.log(
    circleArea(circle)
);

const circleArea2 = ({ radius }, {precision = 2}) =>    // Here 'precision' has a default value of '2'
    (PI * radius * radius).toFixed(precision);

const circleArea3 = ({ radius }, { precision = 2 } = {}) =>    // Here 'precision' is entirely optional
    (PI * radius * radius).toFixed(precision);

console.log(
    circleArea3(circle, {precision: 4})
);

const [first, second, third, fourth] = [10, 20, 30, 40];
//const [first, second,, fourth] = [10, 20, 30, 40];    // 'fourth' still holds '40'

const [first1, ...restOfItems] = [10, 20, 30, 40];

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    secondName: 'Smith',
}

const { temp1, temp2, ...person } = data;

// Shallow copying:
const newArray = [...restOfItems];

const newObject = { ...data };