function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}

console.log(last_digit(8, 18, 408));
console.log(last_digit(201, 31, 401));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));