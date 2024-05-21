interface Person {
  name: string;
  age: number;
  isStudent: number;
}

// Create a new object of type Person
let person: Person = {
  name: "Danish",
  age: 25,
  isStudent: 1
};

// Print out the properties of the person object in separate lines
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Is Student: ${person.isStudent}`);