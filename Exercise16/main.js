// to computer the sum of two given integers. If two values same, then return triple their sum
function sumNumb(a, b) {
    if (a === b) {
        return 3 * (a + b);
    }
    else {
        return (a + b);
    }
}
console.log(sumNumb(1, 2));
console.log(sumNumb(2, 2));