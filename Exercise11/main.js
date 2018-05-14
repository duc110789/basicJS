function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * (9 / 5) + 32;
    var message = cTemp + '\xB0C is: ' + cToFahr + ' \xB0F.';
    console.log(message);
}
function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fahrToC = (fTemp - 32) * (5/9);
    var message = fTemp + ' \xB0F is: ' + fahrToC + '\xB0C';
    console.log(message);
}
cToF(60);
fToC(32);