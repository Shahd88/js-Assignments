// Assignment 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regex =/\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g
console.log(ip.match(regex));

//anther solution
let regex2 = /(\w+|\d+)+/gi
console.log(ip.match(regex2));

//----------------------------------

//Assignment 2

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regNames = /os(\d?)+o/gi

console.log(specialNames.match(regNames));

// Output
// ['Os10O', 'OsO', 'Os100O']


//--------------------------------------

//Assignment 3


let phone = "+(995)-123 (4567)";
let regPhone = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g
console.log(phone.match(regPhone));

//--------------------------------------


//Assignment 4

let reg = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//https? => start with https? or not


//---------------------

//Assignment 5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{1,2}\s?(\s|\/|-)\s?\d{1,2}\s?(\s|\/|-)\s?\d{1,4}/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"



//------------------------------------

//Assignment 6


let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let reUrl = /((http)?s?:?\/\/)?(www.)?\w+.\w+./; // Write Your Pattern Here

console.log(url1.match(reUrl));
console.log(url2.match(reUrl));
console.log(url3.match(reUrl));
console.log(url4.match(reUrl));
console.log(url5.match(reUrl));

