// Store the numbers 1 through 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array.

for(let oneNumber of numbers){
    let ordinalEnding: string;

    if(oneNumber === 1){
    ordinalEnding = "st";
    }

    else if(oneNumber === 2){
    ordinalEnding = "nd";  
    }

    else if(oneNumber === 3){
                ordinalEnding = "rd";
    }

    else{ordinalEnding = "th"}

console.log(`${oneNumber}${ordinalEnding}`)}