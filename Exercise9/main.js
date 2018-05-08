var today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth === 11 && today.getDate > 25) {
    console.log('Days left Christmas: ' + cmas.setFullYear(cmas.getFullYear() + 1));
}
else {
    var one_day = 1000 * 60 * 60 * 24;
    day_left = Math.ceil((cmas.getTime() - today.getTime()) / (one_day));
    console.log(+ day_left + ' days left until Christmas');
}