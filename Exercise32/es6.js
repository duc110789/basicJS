function numb_nearest(a , b) {
    if (a != b) {
        if (Math.abs(a - 100) > Math.abs(b - 100)) {
            return b + ' is nearest';
        }
        else {
            return a + ' is nearest';
        }
    }
    else {
        return false;
    } 
}
console.log(numb_nearest(90, 50));
console.log(numb_nearest(190, 50));
console.log(numb_nearest(50, 50));