// The difference between a given number 13, if the number greater 13 return double the absolute difference
function difference(n) {
    if (n < 13) {
        return 13 - n;
    }
    else {
        return (n - 13)*2;
    }
}
console.log(difference(2));
console.log(difference(22));