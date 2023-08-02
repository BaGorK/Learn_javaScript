'use strict';

// an arrow function does not work as a constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // it is a bad practice to create a method on a constructor function
  // this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  // }
};

const Bagor = new Person('Edmealem', 1993);

// is Instanceof : boolean
console.log(Bagor instanceof Person);

/////////////////////////////////////////////////
// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2015 - this.birthYear);
};

// NOTE: objects which are instances of the Person class will get access to all the methods of this Prototype property 

Bagor.calcAge();

console.log(Bagor.__proto__);
console.log(Bagor.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(Bagor)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens'
console.log(Bagor.species);