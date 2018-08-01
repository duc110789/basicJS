function checkCase(str) {
    if (str.length >= 3) {
        lower_first = str.substring(0, 3);
        lower_last = str.substring(3, str.length);
        return (lower_first.toLowerCase() +  lower_last);
    }
    else {
        return str.toUpperCase();
    }
} 
console.log(check_case("HelloWorld"));
console.log(check_case("Du"));