// Function perform to convert temperatures to celsius from fahrenheit
function cToF(celsius) {
    const cTemp = celsius;
    const fTemp = cTemp * (9/5) + 32;
    const message = `${cTemp}\xB0C is ${fTemp}\xB0F.`;
    console.log(message);
}
function fToC(fahrenheit) {
    const fTemp = fahrenheit;
    const cTemp = (fTemp - 32)/(9/5);
    const message = `${fTemp}\xB0F is: ${cTemp}\xB0C`;
    console.log(message);
}
cToF(0);
fToC(32);