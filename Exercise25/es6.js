function check_numb(a) {
    if((a >= 0 && a % 3 == 0) || (a >= 0 && a % 7 == 0)) {
        return a + ' is multiply';
    }
    else {
        return a + ' not is multiply'
    }
}
console.log(check_numb(15));
console.log(check_numb(13));
console.log(check_numb(14));