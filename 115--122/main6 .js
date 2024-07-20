//Assignments From [115] = > [122]

// Assignment 6 

let [obj1, obj2, obj3] = myFriends;

if (chosen === 1) {
    let { title: a, age: b, available: c, skills: [, d], } = obj1;
    console.log(a);
    console.log(b);
    console.log(c ? "Available" : "Not Available");
    console.log(d);
} else if (chosen === 2) {
    let { title: a, age: b, available: c, skills: [, d], } = obj2;
    console.log(a);
    console.log(b);
    console.log(c ? "Available" : "Not Available");
    console.log(d);
} else if (chosen === 3) {
    let { title: a, age: b, available: c, skills: [, d], } = obj3;
    console.log(a);
    console.log(b);
    console.log(c ? "Available" : "Not Available");
    console.log(d);
} else {
    console.log(`Work is Not Available Now`); }