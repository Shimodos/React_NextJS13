"use strict";
let a = 4;
let b = 'hello';
let c = true;
let d = ['hello', 'world']; // Array of strings
let e = 4; // any type
e = 'hello'; // e is now a string
function test(a) {
    return '';
} // Function
const test2 = (a) => {
    return a * 2;
}; // Arrow function
d = d.map((x) => x.toUpperCase());
function countCoord(coord) { } // Object ? перед значением означает, что значение не обязательно
function printIt(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
} // Union type
function getSum(a) {
    if (Array.isArray(a)) {
        return a.reduce((acc, val) => acc + val, 0);
    }
    else {
        return a;
    }
} // Function return type
const x = undefined;
const y = null;
