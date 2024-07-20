//Assignments From [115] = > [122]


// Assignment 5
let theName = "Elzero";

// [1] 
console.log(theName.split(""));

// [2] 
console.log(Array.from(theName));

// [3] 
console.log([...theName]);

// [4] 
let emptyArray = [];
for (let i = 0; i < theName.length; i++) {
    emptyArray.push(theName[i]);
}
console.log(emptyArray);

// [5] 
console.log([...new Set(theName)]);

// [6] 
console.log(Object.assign([], theName))
// Needed Output 
// ['E', 'l', 'z', 'e', 'r', 'o']  