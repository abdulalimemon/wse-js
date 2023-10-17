// JavaScript Break and Continue

// for (let y = 1; y <= 5; y++) {
//   console.log("Hello JavaScript : ", y);
//   if (y >= 3) {
//     break;
//   }
// }

const numbers = [5, 10, 15, 20, 25, 30, 35];
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number > 20) {
    continue;
  }
  console.log(number);
}

/**
=> Resources
1. https://www.w3schools.com/js/js_break.asp

=> Watch This Video
1. https://youtu.be/eITYb9ljz0U?si=47er0zPMsg9yEj0Z
2. https://youtu.be/Edc64lr1IlE?si=8VcozvDR0w-ONH-G
*/