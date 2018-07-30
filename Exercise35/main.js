function check_char(str, char) {
    ctr = 0;
    for (let i = 0; i < str.length; i ++) {
        if (str.charAt(i) == char) {
            ctr ++;
        }
    }
    return (ctr >= 2 && ctr <= 4);
}
console.log(check_char("Python", "t"));
console.log(check_char("Hello","o"));
console.log(check_char("Xinchao","c"));
console.log(check_char("Console", "o"));