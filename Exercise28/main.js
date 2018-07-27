function check_str(a,b) {
    if ((a >= 55 && a <= 99) || (b >= 55 && b <= 99)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check_str(4, 6));
console.log(check_str(4, 60));
console.log(check_str(99, 60));
console.log(check_str(99, 6));
