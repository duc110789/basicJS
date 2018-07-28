function add_more(str) {
    if (str.length >= 3) {
        part1 = str.substring(str.length -3, str.length);
        return (part1 + str + part1);
    }
    else {
        return false;
    }
}
console.log(add_more('abcdef'));