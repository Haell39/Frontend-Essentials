// variables

var price = 5;

// var can be overwritten, nowadays is better use let or const

let price1 = 5;
const price2 = 50;

// Always use const unless you know you will reassign the value then use let

// Data types & structures (strings, numbers, booleans, arrays, objects)

const description = "This is a description";
const newPrice = 555;
const newFloor = false
const options = ["option1", "option2", "option3"];

console.log(options.length)

const apartment = {
    price: 250000,
    floor: 3,
    description: "This is a description",
    furished: true,
}; // --> this curly braces are optional in JavaScript

console.log("The Price is: " + apartment.price)
console.log(apartment)

const error = {  // This is an error object
    statusCode: 404,
    message: "Not Found",
    retry: false
}


// Functions

function add(a, b) {
    return a + b;
}

console.log(add(2, 3))

function calculatebalance(price, tax) {
    const total = price * tax;
    return total;
    // is better just do return price * tax;
}

const result = calculatebalance(500000, 0.7);

console.log("Your balance after tax is: " + result + "$")

// Olsschool way to declare a function:

const subtract = function (x, y) { // This is a function expression
    return x - y;
}

resultII = subtract(800, 568)
console.log("The subtraction is: " + resultII)

// Arrow functions

const multiply = (x, y) => x * y;

resultIII = multiply(17, 99)
console.log("The multiplication is: " + resultIII)

// if we have only one parameter we can omit the parentheses

const gravity = x => x * 9.8;
const resultIV = gravity(81)

console.log("Your weight in Newtons is: " + resultIV.toFixed(2))

// scoping and hoisting
test()

function test() {
    console.log("This is a test")
}

// This is hoisting, the function is called before it is declared, but this only works with function declarations, not with function expressions or arrow functions!

// string concatenation vs Template literals

const name = "John";
const age = 30;

console.log('My name is ' + name + ' and I am ' + age + ' years old')

const descriptionII = 'My name is '
    + name + ' and I am ' + age + ' years old'

console.log(descriptionII)

const descriptionIII = `My name is ${name} and I am ${age} years old`

console.log(descriptionIII)

// Cobtrol flow (if, else, else if, switch)

const cost = 5000;
const budget = 1000;
if (cost > 2000) {
    console.log("This is expensive")
} else {
    console.log("This is cheap")
}

budget > 2000 ? console.log('You got money') : console.log('You are broke')

// Operators (+, -, ==, ===, >, <, >=, <=, &&, ||, !)

// difference between == and === is that == only checks the value, === checks the value and the type

const newcard = true

if (newcard) {
    console.log((true))
} else {
    console.log(false)
}

if (!newcard) {
    console.log((true))
} else {
    console.log(false)
}

const sqMeters = 800;

if (sqMeters >= 800 && newcard === true) {
    console.log(true)
} else {
    console.log(false)
}

if (sqMeters > 1000 || newcard === true) {
    console.log(true)
} else {
    console.log(false)
}

const ps5 = 459;
const xbox = 0; // 0 is a falsy value not false, but falsy, therefor kinda false.

// there are 6 falsy values in JavaScript: 0, "", null, undefined, NaN, false
const nintendo = NaN;

if (ps5) { // this is a truthy value, not true but in the truthy direction you know? any number besides 0 is a truthy value!
    console.log(true)
} else {
    console.log(false)
}

if (xbox) {
    console.log(true)
} else {
    console.log(false)
}

if (nintendo) {
    console.log(true)
} else {
    console.log(false)
}

// in fact any string besides an empty string is a truthy value

const testString = "This is a test"

if (testString) {
    console.log(true)
} else {
    console.log(false)
}

// Loops

const optionsX = ["DVD", "CD", "Pen Drive"];
optionsX.forEach(function () { // this is a callback function
    console.log("This is a test 1")
    console.log("This is a test 2")
})

console.log('\n')

const surNames = ["Smith", "Johnson", "Williams", "Jones", "Brown"];
surNames.forEach(function (surNameCity) {
    console.log(surNameCity + '-Toteham');
})

// for loop

console.log('\n')
const newNames = ["John", "Jane", "Jack", "Jill", "James"];

for (let i = 0; i < 3; i++) {
    console.log(newNames[i] + ' is a good person')
}

// Now backwards

console.log('\n')

for (let i = newNames.length - 1; i >= newNames.length - 3; i--) { // newNames.length = 5 but the index starts at 0 so the last index is 4 the -1 grants the last index so we have 4; 5 - 3 which is 2 which is teh index 2 (Jack) and then -- decrements, and we have 5 - 2 = 3 which is the index 3 (Jill) and so on.
    console.log(newNames[i] + ' is a good person')
}

// interacting with HTML and CSS (DOM manipulation)






















