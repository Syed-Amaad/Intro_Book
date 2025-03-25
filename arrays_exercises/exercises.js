/*

(1)
array1.length === 4
array2.length === 5
array3.length === 0
array4.length === 3
array5.length === 101

(2)
for (let i = 0; i < myArray.length; i += 1) {
  if ((myArray[i] % 2 === 0)) {
    console.log(myArray[i]);
  }
}

(3)
for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray.length; j += 1) {
    if ((myArray[i][j] % 2)  === 0) {
      console.log(myArray[i][j]);
    }
  }
}

(4)
for (let i = 0; i < myArray.length; i += 1) {
  if ((myArray[i] % 2) === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }

(5)
function findIntegers(arr) {
  let result = arr.filter(num => Number.isInteger(num) === true);
  return result;
}

console.log(findIntegers(things));



(6)
function oddLengths(array) {
  let lengths = array.map(length => length.length);
  let oddNum = lengths.filter(length => (length % 2) != 0);
  return oddNum
}

console.log(oddLengths(arr));




(7)
function sumOfSquares(arr) {
let sum = arr.reduce((accumulator, element) => accumulator + (element * element), 0);
return sum;
}

console.log(sumOfSquares(array));

(8)
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

console.log(oddLengths(arr));

(9)
function checkThree(array) {
 if ((array.filter(element => element === 3)).length) {
   return true;
 } else {
   return false;
 }
}

(10)
arr[1][3] = 606

*/