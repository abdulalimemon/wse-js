// JavaScript Break and Continue

// for (let y = 3; y <= 5; y++) {
  
//   if (y >= 3) {
//     break;
//   }
  
//   console.log("Hello JavaScript : ", y);

// }





const numbers = [5, 10, 15, 20, 25, 30, 35, 19, 12];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number >= 20) {
    continue;
  }
  console.log(number);
  console.log("number is :", number);
}

/**
=> Resources
1. https://www.w3schools.com/js/js_break.asp

=> Watch This Video
1. https://youtu.be/eITYb9ljz0U?si=47er0zPMsg9yEj0Z
2. https://youtu.be/Edc64lr1IlE?si=8VcozvDR0w-ONH-G
*/