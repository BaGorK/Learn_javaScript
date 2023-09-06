'use strict';
/*
//- 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT
// * Constructor functions  -- Techinque to create objects from a function.
// * ES6 Classes -- modern alternative to constru.funcs
// * Object.create();  --- the easiest and most straightforward way

// the basic differece b/n a constructor func and a regular func is that we call a constructor func with the keyword `new`;
// an arrow function does not work as a constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log('---', this);

  // it is a bad practice to create a method directly on a constructor function. it wastes resource b/c when we create a new obj it will simply copied to that obj. so if we have hundreds of obj , it will be insuffient
  // this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  // }
};

const Bagor = new Person('Edmealem', 1993);
// console.log(Bagor);

// FOUR EVENTS THAT OCCURE
// 1. first a new empty {} object is created
// 2. the this keyword in the constructor func call is set to the new object.  this = {}
// 3. {} the newly created object is then linked(__proto__ property) to the constructor funcs prototype peroperty by adding {__proto__: Person.prototype}
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

//- NOTE: objects which are instances of the Person class will get access to all the methods of this Prototype property

Bagor.calcAge();
//- the this keyword is set to the object that is calling the method. this = Bagor
//- IN A REGULAR FUNCTION CALL THE `THIS` KEYWORD IS SET TO UNDEFINED IN STRICT MODE AND TO THE GLOBAL OBJECT IN NON STRICT MODE.

// console.log(Bagor.__proto__); // LOGS THE PROTOTYPE OF BAGOR OBJ
//- The prototype of the bagor object(instance) is essensialy the prototype property of the constructor function.
// console.log(Bagor.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(Bagor)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false
//- Person.prototype is the prototype property of Person

Person.prototype.species = 'Homo Sapiens';
// console.log(Bagor.species);
// console.log(Bagor.hasOwnProperty('firstName')); // true
// console.log(Bagor.hasOwnProperty('species')); // false

const Animal = function (name, age) {
  this.name = name;
  this.age = age;
};

const cat = new Animal('cat', 4);
console.log(cat);

Animal.prototype.setSound = function (str) {
  this.sound = str;
  console.log(this);
};
cat.setSound('miyawuu...');

console.log(Animal);

//- CODING CHALLENGE #1

// 1. create a constructor function to implement a Car
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// 2. implement an `accelerate` method that will increase the car's speed by 10,
Car.prototype.accelerate = function () {
  this.speed += 10;
};
// 3. Implement a `brake` method that will decrease the car's speed by 5, and log the new speed to the console.
Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`the speed of the car is decreased to : ${this.speed} km/h`);
};

const BMW = new Car('BMW', 130);
console.log(BMW);
BMW.brake();
const Mercedes = new Car('Mercedes', 230);

/////////////////////////////////////////
// - ES6 CLASSES.

const PersonClass = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2015 - this.birthYear);
  }
};

const instance1 = new PersonClass('Edmealem', 1993);
console.log(instance1);
instance1.calcAge();



class PersonCl {
  constructor(firstName, birthYear) {
    // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to the prototype property of the PersonCl class.
  calcAge() {
    this.age = 2037 - this.birthYear;
    // console.log(this.age);
  }

  greet() {
    console.log(`Hey my name is ${this.firstName}.`);
  }
}

const jessica = new PersonCl('Jessica', 2010);

jessica.calcAge();
// jessica is now an object.
// const jessica = {
//   firstName: 'Jessica',
//   age: 27,
//   birthYear: 2010,
// };

jessica.greet();
console.dir(jessica);
console.dir(jessica.__proto__);

// we can also do
// PersonCl.prototype.species = 'homo sapien';
// console.log(jessica.hasOwnProperty('species')); //false
// PersonCl.prototype.greet() {
//   console.log(`Hey ${firstName}`);
// }

 */

////////
//- GETTERS AND SETTERS IN NORMAL OBJECTS
const account = {
  owner: 'Jonas',
  movements: [500, 300, 1300, 750],
  get latest() {
    // console.log(this.movements.slice(-1)[0]);
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest; // WE DONOT NEED TO CALL `latest` METHOD.
account.latest = 50;
// console.log(account.movements);

///-- HOWEVER CLASSES ALSO HAVE GETTERS AND SETTERS AND INDEED THEY WORK EXACTLY THE SAME.
class Account {
  constructor(owner, currency, pin) {
    this._owner = owner;
    this.currency = currency;
    this.pin = pin;

    this.movements = [];
    this.local = navigator.language;
  }

  get getOwner() {
    return this._owner;
  }
}

const acc = new Account('jonas', 'EUR', 1111);
// console.log(acc);
// console.log(acc.getOwner);

////////////////////////////////////////////////////
//  INHERITANCE BETWEEN 'CLASSES': CONSTRUCTOR FUNCTIONS

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2015 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear; // instead of doing this
  // Person(firstName, birthYear) // here the problem is the this keyword is undefined
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 1993, 'Computer science');
// console.log(mike);
mike.introduce();
