year = prompt("Input a year: ");
function leapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return "This is a leap Year";
    }
    else {
        return "This is not a leap Year";
    }
}
console.log(leapYear(year));