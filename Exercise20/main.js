function check(x, y) {
    if (x > 0 & y < 0 || x < 0 & y > 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check(2, 2));
console.log(check(-3, 2));