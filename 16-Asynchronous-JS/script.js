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
  // countriesContainer.style.opacity = 1;
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
// the fetch method only rejects only when there is no internet connection
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json()
      // err => alert(err)
    )
    .then(function (data) {
      renderCountryData(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountryData(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!!!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); // this method always excuted whether in success or rejection
};

btn.addEventListener('click', function () {
  // getCountryData('portugal');
  getCountryData('jhkh');
});


