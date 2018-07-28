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
