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

