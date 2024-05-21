var places = ["Paris, France", "New York, USA", "Tokyo, Japan", "Sydney, Australia", "Rio de Janeiro, Brazil"];
console.log("Here are the places I'd like to visit, in their original order:");
console.log(places);
console.log("Here are the places I'd like to visit, in alphabetical order:");
console.log(places.slice().sort()); // Use slice() to avoid modifying the original array
console.log("Here are the places I'd like to visit, in their original order:");
console.log(places);
console.log("Here are the places I'd like to visit, in reverse alphabetical order:");
console.log(places.slice().sort().reverse()); // Use slice() to avoid modifying the original array
console.log("Here are the places I'd like to visit, in their original order:");
console.log(places);
places.reverse();
console.log("Here are the places I'd like to visit, with the order reversed:");
console.log(places);
places.reverse();
console.log("Here are the places I'd like to visit, with the order restored:");
console.log(places);
places.sort();
console.log("Here are the places I'd like to visit, sorted in alphabetical order:");
console.log(places);
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Here are the places I'd like to visit, sorted in reverse alphabetical order:");
console.log(places);
