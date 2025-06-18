// Session 03 - JavaScript Scopes

var isConditional = true;
var message2 = "I'm message 2";

// Global Scope

{
    // Blocked Scope
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("1::", a, b, c);
}

// console.log("2::", a, b, c);
// console.log("2::", c);

// Function Block Scope
function myFunction() {
    let myVariable = 5000;
    return myVariable;
    // console.log("1:", myVariable);
}

// console.log("2:", myFunction());

// console.log("1:", message2);

// Conditional Block Scope
if(isConditional === true) {
    let message1 = "I'm blocked scoped message";
    var message2 = "I'm redeclared var variable";
    // console.log("2:", message1, message2);
}

// console.log("3:", message2);



let iF = 100;

// Automatic declaration
x = 200;

// console.log(typeof x);

// Importance of JavaScript Types

function addNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

// console.log("1::", addNumbers(1, 4));

// console.log("2::", addNumbers("1", "10"));

let bigNumber = 1234567890123456789012345678901234567890n;
let uniqueId = Symbol("id")

console.log("1::", typeof bigNumber, bigNumber);
console.log("2::", typeof uniqueId, uniqueId); 