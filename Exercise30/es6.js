function check_numb(str) {
    if (str.length >= 6) {
        let check_str = str;
        if (str.substring(10, 4) === 'Script') {
            return check_str = (str.substring(0,4) + str.substring(10, str.length));
        }
        else {
            return str;
        }
    }
    else {
        return str;
    }
}
console.log(check_numb('TypeScript'));
console.log(check_numb('JavaScript'));
console.log(check_numb('CoffeeScripts'));