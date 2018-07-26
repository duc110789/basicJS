function front_add_back(str) {
    part1 = str.substring(0,1);
    return (part1 +str+ part1);
}
console.log(front_add_back('Hello'));