//Assignments From [115] = > [122]


// Assignment 4
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here 
({ age: z, w } = member);

console.log(`My Age Is ${z} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working 
({ country: k } = member);
console.log(`I Live in ${k}`);
// I Live in Egypt 
({
    hobbies: [h1, , h3],
} = member);
console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming 


