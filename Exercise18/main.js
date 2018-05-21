function check(a, b) {
    if (a === 50 || b === 50 || (a + b === 50)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check(10, 40));
console.log(check(10, 20));
console.log(check(10, 50));