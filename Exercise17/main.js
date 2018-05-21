function absolute(a) {
    if (a <= 19) {  
        return (19 - a);
    }
    else {
        return (a - 19) * 3;
    }
}
console.log(absolute(10));
console.log(absolute(19));
console.log(absolute(20));