<<<<<<< HEAD
// Create a function to remove a string old and return new string
function new_string(str1) {
    if(str1.length <= 1) {
        return str1;
    }
    mid_str = str1.substring(1, str1.length - 1);
    return (str1.charAt(str1.length - 1)) + mid_str + (str1.charAt(0));
}
console.log(new_string('a'));
console.log(new_string('ab'));
console.log(new_string('abcd'));
=======
// remove_char(str, index)
function remove_char(str, char_pos) {
    part1 = str.substring(0, char_pos); // char_pos = 2; part1(0,2) -> Pyt
    part2 = str.substring(char_pos + 2, str.length); // char_pos = 3; part1(3,5) -> hon
    return (part1 + part2);
}

console.log(remove_char('Python', 0));
console.log(remove_char('Python', 1));
console.log(remove_char('Python', 2));
console.log(remove_char('Python', 3));
>>>>>>> f7c6a2092cacb6b9e06f6d2e5d4a6fb62ba4d953
