function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt))
}

function multiply(num1, num2) {
  return num1 * num2;
}

let num1 = getNumber('Enter the first number.\n');
let num2 = getNumber('Enter the second number.\n');

multiply(num1, num2);
