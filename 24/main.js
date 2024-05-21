// Tests for equality and inequality with strings
var string1 = "apple";
var string2 = "banana";
console.log(string1 === string2); // fasle
console.log(string1 !== string2); // true
// Tests using the lower case function
console.log("Apple".toLowerCase() === "apple"); // true
console.log("Apple".toLowerCase() === "APPL"); // false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number1 = 3;
var number2 = 5;
console.log(number1 === number2); // false
console.log(number1 !== number2); // true
console.log(number1 > number2); // false
console.log(number1 < number2); // true
console.log(number1 >= number2); // false
console.log(number1 <= number2); // true
// Tests using "and" and "or" operators
var x = 10;
var y = 20;
var z = 30;
console.log(x < y && y < z); // true
console.log(x > y || y < z); // true
// Test whether an item is in a array
var fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("apple")); // true
// Test whether an item is not in a array
console.log(!fruits.includes("orange")); // true
