year = prompt("Input is a year: ");
var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);