// Neu chuoi la Py thi giu nguyen chuoi, con khong them py sau chuoi
function add_string(x) {
    if (x === 'Py') {
        return x;
    }
    else {
        return x + 'Py';
    }
}
console.log(add_string('Py'));
console.log(add_string('PYe'));