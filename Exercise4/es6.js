const a = 5;
const b = 6;
const c = 7;
// Perimeter of triangle
const p = (a + b + c)/2;
console.log(p);
// Area of triangle
const S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(S);