'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// the old school of AJAX calls
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     // console.log(this.responseText); // the result is a json file so we need to convert it to the actuall js object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${data.capital}</p>
//             <p class="country__row"><span>💰</span>${data.borders}</p>
//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// // getCountryData('kenya');
// // getCountryData('usa');
// getCountryData('israel');

/////////////////////////////////////////////////////////////
// Callback Hell
// When we have a lot of nested callbacks inorder to excute asynchronous tasks in sequence
const renderCountryData = function (data, className = '') {
  const html = `
        <article class="country ${className}" >
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.capital}</p>
            <p class="country__row"><span>💰</span>${data.borders}</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     // console.log(this.responseText); // the result is a json file so we need to convert it to the actuall js object
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);
//     renderCountryData(data);
//     const neighbours = data.borders;
//     if (!neighbours) return;
//     neighbours.forEach(function (neighbour) {
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);

//         renderCountryData(data2, 'neighbour');
//         // What if we want the neighbour country of a neighbour country(like 10 times inside =>  causes a callback Hell)
//       });
//     });
//   });
// };

// getCountryData('israel');
// getCountryData('usa');
// getCountryData('portugal');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//           setTimeout(() => {
//             console.log('6 seconds passed');
//             setTimeout(() => {
//               console.log('7 second passed');
//               setTimeout(() => {
//                 console.log('8 seconds passed');
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// // Triangular shape
// // callback hell makes our code hard to understand and maintain.
// // The code that is dificult to understand is basically called BAD CODE;

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// Promises and the Fetch API
// with promises we can get ride of callback hell
// but still we use callbacks

// PROMISE LIFECYCLE
// PENDING ------->>>------- SETTLED {----FULLFILLED------ AND ------REJECTED-------}

// json is a method that is available on all response obejects that is comming from the fetch method
// this json function actually also asynchronous function and returns a new promise

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//     return response.json();
//   }).then(function (data) {
//     renderCountryData(data[0]);
//   })
// }
// getCountryData('portugal');

// the simplified version
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountryData(data[0]));
// };
// getCountryData('portugal');

///////////////////////////////
// Chaining Promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountryData(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountryData(data[0], 'neighbour');
//     });
// };
// getCountryData('portugal');

//////////////////////////////////////////////
/////////// Handling Rejected Promises
// the only resean the fetch methods rejects promises, is only when we loss the internet connection

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => {
//         if (!response.ok) {
//           throw new Error(`Country not found (${response.status})`);
//         }

//         return response.json();
//       }
//       // err => alert(err)
//     )
//     .then(function (data) {
//       renderCountryData(data[0]);
//       const neighbour = data[0].borders[0];

//       neighbour = 'jjljjljalfjlj';

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountryData(data[0], 'neighbour'))
//     .catch(err => {
//       // console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); // this method always excuted whether in success or rejection
// };

///////////////////////////////////////////////////////////
// const getJSON = function (url, errorMsg) {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(errorMsg);
//     }
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
//     .then(function (data) {
//       renderCountryData(data[0]);
//       const neighbour = data[0].borders[0];
//       // neighbour = 'jjljjljalfjlj';
//       if (!neighbour) throw new Error(`No neighbour Found!`);

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountryData(data[0], 'neighbour'))
//     .catch(err => {
//       // console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); // this method always excuted whether in success or rejection
// };

// btn.addEventListener('click', function () {
//   getCountryData('kenya');
// });
// getCountryData('australia');
// getCountryData('kljjf;lja'); // Something went wrong 💥💥💥 Country not found. Try again!!!

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////Cooding Challenge #1//////////////////////////

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      const country = data.country;
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(data => renderCountryData(data))
    .catch(err => {
      console.error(`Something went wrong ${err.message}`);
    });
};
whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
