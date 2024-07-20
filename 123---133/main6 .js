//Assignments From [115] = > [122]

// Assignment 6

// [1] 
let charsOne = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(charsOne.sort().copyWithin(0, 3, 6))

// Needed Output 
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E'] 

// [2] 
let charsTwo = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

console.log(charsTwo.sort().copyWithin(0, 4, 8))

// Needed Output 
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E'] 

// [3] 
let charsThree = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(charsThree.copyWithin(2))

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"] 