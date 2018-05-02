var a = 5;
var b = 6;
var c = 7;
// Perimeter of triangle
var p = (a + b + c)/2;
console.log(p);
// Area of triangle
var S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(S);