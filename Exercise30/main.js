function check_str(str) {
    if (str.length >= 6) {
        let result_str = str;
        if (str.substring(10, 4) === 'Script') {
            return result_str = str.substring(0, 4) + str.substring(10, str.lenght);
        }
        else {
            return str;
        }
    }
    else {
        return str;
    }
}
console.log(check_str('TypeScript'));
console.log(check_str('JavaScript'));
console.log(check_str('CoffeeScripts'));
