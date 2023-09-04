'use strict';
// the basic differece b/n a constructor func and a regular func is that we call a constructor func with the keyword `new`;
// an arrow function does not work as a constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log('---', this);

  // it is a bad practice to create a method on a constructor function
  // this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  // }
};

const Bagor = new Person('Edmealem', 1993);
// console.log(Bagor);

// FOUR EVENTS THAT OCCURE
// 1. first a new empty {} object is created
// 2. the this keyword in the constructor func call is set to the new object.  this = {}
// 3. {} the newly created object is then linked(__proto__property) to the constructor funcs prototype peroperty by adding {__proto__: Person.prototype}
// 4. then the called function(Person) automatically return that object {}
// in the middle we can take advantage of the this keyword. set values to that empty object.

Bagor.lastName = 'ka';
// is Instanceof : boolean
// console.log(Bagor instanceof Person);

/////////////////////////////////////////////////
// Prototypes

// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  // console.log('age  ---  ',2015 - this.birthYear);
  // console.log(this);
};

// NOTE: objects which are instances of the Person class will get access to all the methods of this Prototype property

Bagor.calcAge(); // the this keyword is set to the object that is calling the method. this = Bagor

// console.log(Bagor.__proto__);
// console.log(Bagor.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(Bagor)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false
//- Person.prototype is the prototype property of Person

Person.prototype.species = 'Homo Sapiens';
// console.log(Bagor.species);
// console.log(Bagor.hasOwnProperty('firstName')); // true
// console.log(Bagor.hasOwnProperty('species')); // true

/*
 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT
* Constructor functions  -- Techinque to create objects from a function.
* ES6 Classes -- modern alternative to constru.funcs
* Object.create();  --- the easiest and most straightforward way

*/
