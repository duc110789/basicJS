function numb_check(a, b) {
    if (Number.isInteger(a,b)) {
        max_let = 0;
        if ((a >= 40 && a <=60) && (b >= 40 && b <= 60)) {
            if (a > b) {
                return max_let = a;
            }
            else {
                return max_let = b;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(numb_check(55, 50));