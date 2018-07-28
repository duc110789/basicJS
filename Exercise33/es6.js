function numb_check(a) {
    if (Number.isInteger(a)) {
        if ((a >=40 && a <= 60) || (a >= 70 && a <= 100)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(numb_check(100));
console.log(numb_check('abc'));