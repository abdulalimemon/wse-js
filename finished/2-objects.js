// JavaScript Objects
const firstName = "John";
const lastName = "Doe";
const age = 18;
const eyeColor = "blue";

const person3 = ["John", "Doe", 18, "blue"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
  eyeColor: "blue",
  isDeveloper: true,
};

const js = {
  variable: true,
  ES6: false,
  students: 53,
};

// Accessing Object Properties
// objectName.propertyName

// console.log(person);
// console.log(person['age']);
// console.log(person.age);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function (city) {
    return firstName + " " + lastName + city;
  },
  person3: ["John", "Doe", 18, "blue"],
  person4: {
    firstName: "John",
    lastName: "Doe",
  },
};

// console.log(person2.fullName());
// console.log(person2.fullName("Dhaka"));
// console.log(person2.person3[2]);
// console.log(person2.person4.firstName);

// Change or set Object Properties
person2.id = 1111;
// console.log(person2);

// Get all the Properties name
let properties = Object.keys(person2);
// console.log(properties);

// Get all the Properties name
let PropertyValue = Object.values(person2);
console.log(PropertyValue);

/**
=> Resources
1. https://www.w3schools.com/js/js_objects.asp

=> Watch This Video
1. https://youtu.be/WWhlEWOf2ww?si=Iv-D3HoTQt9agVon

*/
