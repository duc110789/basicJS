function checkSum(a, b) {
    const sumTwo = a + b;
    if (sumTwo > 50 && sumTwo < 80) {
        return 'sumTwo is 65';
    }
    else {
        return 'sumTwo is 80';
    }
}
console.log(checkSum(50, 80));
console.log(checkSum(50, 20));