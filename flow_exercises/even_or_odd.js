function evenOrOdd(num) {
  if (Number.isInteger(num) === false) {
    console.log('Error, enter an integer.');
  } else {
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
}
 evenOrOdd(0)
 evenOrOdd(0.5)
 evenOrOdd(1)
 evenOrOdd(2)
 evenOrOdd(3)