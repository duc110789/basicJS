const number = Math.ceil(Math.random() * 10 ) + 1;
const user = prompt('Let enter a number: ');
if (number == user)
    console.log('Matched');
    else 
    console.log('Not matched');