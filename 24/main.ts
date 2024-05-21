// Tests for equality and inequality with strings
const string1: string = "apple"
const string2: string = "banana"
console.log( string1 === string2 ); // fasle
console.log( string1 !== string2 ); // true

// Tests using the lower case function
console.log( "Apple".toLowerCase() === "apple" ); // true
console.log( "Apple".toLowerCase() === "APPL" ); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const number1 : number = 3;
const number2 : number = 5;

console.log( number1 === number2 ); // false
console.log( number1 !== number2 ); // true
console.log( number1 > number2 ); // false

console.log( number1 < number2 ); // true
console.log( number1 >= number2 ); // false
console.log( number1 <= number2 ); // true

// Tests using "and" and "or" operators
const x: number = 10;
const y: number = 20;
const z: number = 30;

console.log( x < y && y < z); // true
console.log( x > y || y < z); // true

// Test whether an item is in a array
const fruits: string[] = ["apple", "banana", "mango"];
console.log( fruits.includes("apple") ); // true

// Test whether an item is not in a array
console.log( !fruits.includes("orange") ); // true