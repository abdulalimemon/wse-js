// write a function that returns true if a number is even and false if a number is odd.

function isEven(number) {
  if (number % 2 === 0) {
    // console.log(true);
    return true;
  } else {
    // console.log(true);
    return false;
  }
}
// console.log(isEven(7));

// Create a function isLeapYear that takes a year as a parameter and returns true if it's a leap year or false if it's not.

function isLeapYear() {
  if (2017 % 400 === 0 || (2017 % 4 === 0 && 2017 % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

// console.log(isLeapYear(2017));
// console.log(isLeapYear(2016));
// console.log(isLeapYear());

// Find the sum of the numbers from 1 to 10 (using loop and function).

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
// console.log(sum);

// function numbersSum(){
//     let sum = 0;
//     for (let i = 1; i <= 10; i++) {
//         sum = sum +i;
//     }
//     return sum;
// }

// console.log(numbersSum());

// function numbersSum(firstNumber, lastNumber){
//     let sum = 0;
//     for (let i = firstNumber; i <= lastNumber; i++) {
//         sum = sum +i;
//     }
//     return sum;
// }

// console.log(numbersSum(1,20));

// Create a function calculateFactorial that takes a positive integer as a parameter and calculates and returns its factorial.

// 5! = 5* 4* 3 * 2* 1
// 4! = 4* 3 * 2* 1
// 7! = 7* 6 *5* 4* 3 * 2* 1

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
}

console.log(calculateFactorial(10));
