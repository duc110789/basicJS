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