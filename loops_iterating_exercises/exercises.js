/*

(2)
function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i -= 1) {
    result *= i;
}
  return result;
}

(3)
on line 3 counter is reassigned to 1

(4)
runs without an error because all conditions are met, when the increment is added on line 2

(5)
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');

(6)
function factorial(num) {
if (num === 1) {
  return 1;
}

return num * factorial(num - 1);
}

*/