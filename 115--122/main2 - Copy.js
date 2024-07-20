//Assignments From [115] = > [122]


// Assignment 2

let mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here 
let [x, b, c, [d, y, [f, g]]] = mySkills;

console.log(`My Skills: ${x}, ${b}, ${c}, ${d}, ${y}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel 

//----------------------------

