const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number: number): void => {
  if (number === 1) {
    console.log(number + 'st');
  } else if (number === 2) {
    console.log(number + 'nd');
  } else {
    console.log(number + 'th');
  }
});
