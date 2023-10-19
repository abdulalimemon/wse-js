/* 
JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

JavaScript Function Syntax

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

*/

// function hello() {
//   console.log("Hello");
//   console.log("JavaScript");
// }

// hello();

// parameter
// function hi(name) {
//   console.log("Hello");
//   console.log(name);
// }

// hi("Javascript");
// hi("PHP");

// function myFunction(p1) {
//   console.log(p1);
// }

// myFunction(2 + 2);

// write a function to calculate the sum of 4 product.
// function sum(a, b, c, d) {
//   const total = a + b + c + d;
//   console.log(typeof total);
// }

// sum(100, 200, 300, "222");

// a*a+ 2ab + b*b

// function math(a,b){
//   const sum = a*a+ (2 *a *b) + b*b;

//   console.log(sum);
// }

// math(10,5);



// Return
function addTwoNumber(p1, p2) {
  console.log(p1, p2);
  const sum = p1 + p2;
  return sum;
}


const total = addTwoNumber(4, 10);
console.log(total);

/**
=> Resources
1. https://www.w3schools.com/js/js_functions.asp

=> Watch This Video
1. https://youtu.be/o-wx8CJ8W2g?si=IWriBv1RC3PokgH2
2. https://youtu.be/sWUgAYg11kE?si=6C1b6B_OcwLAksJq
*/
