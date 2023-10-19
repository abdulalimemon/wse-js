// JavaScript Objects
const firstName = "John";
const lastName = "Doe";
const age = 18;
const eyeColor = "blue";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
  eyeColor: "blue",
};

// Accessing Object Properties
// objectName.propertyName

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};


// Change or set Object Properties
person2.id = 1111;

// Get all the Properties name
let properties = Object.keys(person2);

// Get all the Properties name
let PropertyValue = Object.values(person2);
console.log(PropertyValue);


/**
=> Resources
1. https://www.w3schools.com/js/js_objects.asp

=> Watch This Video
1. https://youtu.be/WWhlEWOf2ww?si=Iv-D3HoTQt9agVon

*/