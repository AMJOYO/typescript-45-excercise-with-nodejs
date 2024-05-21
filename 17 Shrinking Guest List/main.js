var guests = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "George", "Hannah"];
console.log("I'm sorry to inform you that I can only invite two people for dinner.");
while (guests.length > 2) {
    var poppedGuest = guests.pop();
    console.log("I'm sorry, ".concat(poppedGuest, "! I can't invite you to dinner."));
}
console.log("".concat(guests[0], ", you're still invited!"));
console.log("".concat(guests[1], ", you're still invited!"));
guests.pop();
guests.pop();
console.log("Here's the final list of guests:");
console.log(guests); // This should print an empty list
