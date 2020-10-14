let s = 2e6;
let p =  10;
let n =  5;
let A = 0;

p /= 1200;
n *= 12;

A = s + p / (1 - (1+p)) ** (-n))
console.log ( A )  /  console.log(Math.round( A ))
console.log ( A * n - s )