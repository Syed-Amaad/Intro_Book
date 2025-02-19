//1
// false, true, 3, 3, false, true, false, false, false, true, false, true

//4
// logs product2, product3, product not found!

//5
if (foo() === true) {
  return 'bar';
} else {
  return qux();
}


//6 
// outputs 'not empty'

//7
function change(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

//8
function range(num) {
  if ((num >= 0) && (num <= 50)) {
    console.log(`${num} is between 0 and 50.`);
  } else if ((num >= 51) && (num <= 100)) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else {
    console.log(`${num} is less than 0`);
  }
}

//9
// false, true, 3, false, 3, 3, undefined, null

//10
/*
'foo is 5, bar is 7'
'foo is 0 bar is 0'
'foo is 4, bar is 42'
'foo is 3, bar is 42'
*/