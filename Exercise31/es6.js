function numb_largest(a, b, c) {
    max_let = 0;
    if (a > b) {
        max_let = a;
    }
    else {
        max_let = b;
    }
    if (c > max_let) {
        max_let = c;
    }
    return max_let;
}
console.log(numb_largest(1,2,3));