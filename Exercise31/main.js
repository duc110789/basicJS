function numb_largest(a, b, c) {
    max_val = 0;
    if (a > b) {
        max_val = a;
    }
    else {
        max_val = b;
    }
    if (c > max_val) {
        max_val = c;
    }
    return max_val;
}
console.log(numb_largest(5, 3, 4));
console.log(numb_largest(3, 2, 4));
console.log(numb_largest(3, 4, 2));
