//to import the fuction which we export in the message.js

// console.log("Hello Ankush");
//in ES5
// var arrResult = require("./message");
// console.log(arrResult("This is backend developement session-1"));
// console.log(arrResult([10,20,39,40]));


// //in ES6
// import {arrLength, arrResult} from './message.js';

// console.log(arrResult("This is backend developement session-1"));
// console.log(arrLength([12,34,6,19,19]));

//======================use of my custom module =================================//

const color = require("myModule");
console.log(color.getRandomColor());