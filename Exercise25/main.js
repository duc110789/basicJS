function check_numb(a) {
    if (a % 3 == 0 || a % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check_numb(5));
console.log(check_numb(4));