//Assignments From [115] = > [122]

// Assignment 4
let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

console.log(
    +[...new Set(Array.from(theNumber.toString(), (e) => (e > 0 ? e : "")))].join(
        ""
    )
);
// Needed Output
// 123 

