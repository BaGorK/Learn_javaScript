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

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);
  request.addEventListener('load', function () {
    // console.log(this.responseText); // the result is a json file so we need to convert it to the actuall js object
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    renderCountryData(data);
    const neighbours = data.borders;
    if (!neighbours) return;
    neighbours.forEach(function (neighbour) {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(this.responseText);

        renderCountryData(data2, 'neighbour');
        // What if we want the neighbour country of a neighbour country(like 10 times inside =>  causes a callback Hell)
      });
    });
  });
};

// getCountryData('israel');
getCountryData('usa');
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



  