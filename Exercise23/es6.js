function new_string(str, char_pos) {
    // Get string to position part1
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}
console.log(new_string('HelloDuc', 2));