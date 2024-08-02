//Assignment 1

let date = new Date();
let birth = new Date("2003 8 16");
let diff = date - birth;
console.log(diff);

let second = diff / 1000;
console.log(second + " seconds");

let Minutes = second / 60;
console.log(Minutes + " minutes");


let Hours = Minutes / 60;
console.log(Hours + " hours");

let Days = Hours / 60;
console.log(Days + " days");

let Years = Days / 365;
console.log(Years + " years");

//طلعني 8 سنين ازاي (:


//---------------------------------------------

//Assignment 2

let futureTime = new Date(1980, 0, 1, 1);
console.log(futureTime);


// Needed Output

"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

//----------------------------------------------------


//Assignment 3
let Previous = new Date(2024, 6, -1);
console.log(Previous);
let Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
console.log(`Previous Month Is ${Months[5]} And Last Day Is ${date.getDate()}`);

//===========================================================
//assignment 4

let myDay1 = new Date(" 2003 8 16 ");
let myDay2 = new Date(2003, 7, 16);
let myDay3 = new Date("aug , 16 , 2003");
console.log(myDay1);
console.log(myDay2);
console.log(myDay3);

//===========================================================


//Assignment 5

let current = performance.now();
for (let index = 0; index < 10000; index++)
    console.log(index);
let end = performance.now();
let dur = end - current ;
console.log(dur);

//=============================================================

// Assignment 6

function* gen (){
let first = 14;
let number = 140 ;
let sum = number+first;
yield first;
while (true) {
    yield sum ;
    sum+=number+=first;
}
}

// Write Your Generator Function Here

let generator1 = gen();

console.log(generator1.next()); // {value: 14, done: false}
console.log(generator1.next()); // {value: 154, done: false}
console.log(generator1.next()); // {value: 494, done: false}
console.log(generator1.next()); // {value: 1034, done: false}
console.log(generator1.next()); // {value: 1774, done: false}
console.log(generator1.next()); // {value: 2714, done: false}
console.log(generator1.next()); // {value: 3854, done: false}
console.log(generator1.next()); // {value: 5194, done: false}
console.log(generator1.next()); // {value: 6734, done: false}
//=======================================================================

//assignment 7
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
//==============================================================
//assignment 7
// main.js File
import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60




