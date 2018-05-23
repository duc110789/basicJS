function positive_negative(a, b) {
    if ((a > 0 & b < 0) || (a < 0 & b > 0)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(positive_negative(1, 2));
console.log(positive_negative(1, -2));