'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function () {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

///////////////////////////////////////
// Destructuring Arrays
///////////////////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables - Old school
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// TRICK-1 using Distructuring - Modern way
[main, secondary] = [secondary, main];
console.log(main, secondary);

// TRICK-2  Distructuring the returned array from calling the order function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// setting Default values when distructuring.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // p = 8, q = 9, r = 1
