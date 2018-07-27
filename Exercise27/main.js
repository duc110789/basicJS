function check_str(str) {
    if (str.length < 4) {
        return false;
    }
    else {
        if(str.substring(0,4) === 'Java') {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(check_str('Javascript'));
console.log(check_str('abJava'));
console.log(check_str('abcd'));
console.log(check_str('ab'));
