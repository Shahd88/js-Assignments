//Assignments From [115] = > [122]




// Assignment 3 

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring 
// Write Your Destructuring Assignment Here 
let myFriends = arr1.concat(arr2, arr3)

let [m, , , , , , , n, h] = myFriends;

console.log(`My Best Friends: ${m}, ${h}, ${n}`);
// My Best Friends: Shady, Mahmoud, Ahmed 

//--------------------------------

