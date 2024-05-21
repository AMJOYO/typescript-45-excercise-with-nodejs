let guests: string[] = ["kamran", "Danish", "zain", "gulzari lal", "dilshad"];

console.log("I'm sorry to inform you that I can only invite two people for dinner.");

while (guests.length > 2) {
  let poppedGuest = guests.pop();
  console.log(`I'm sorry, ${poppedGuest}! I can't invite you to dinner.`);
}

console.log(`${guests[0]}, you're still invited!`);
console.log(`${guests[1]}, you're still invited!`);

guests.pop();
guests.pop();

console.log("Here's the final list of guests:");
console.log(guests); // This should print an empty list