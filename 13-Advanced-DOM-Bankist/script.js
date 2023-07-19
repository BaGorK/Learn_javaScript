'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// Selecting elemtents
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); //
console.log(allSections); // returns a nodeList just like an array not exactly arrays

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// returns an HTMLCollection : also callrd life collection
// i.e:  if the DOM changes this also authomatically updated

console.log(document.getElementsByClassName('btn'));

// Creating and inserting Elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close--cookie">Got it!</button>';

// header.prepend(message);  // makes message the first child
header.append(message)  // makes element message the last child

// one element cannot be displayed in two places at ones so we need to copy it.
// header.append(message.cloneNode(true /*all the cild elemens will also be copied*/))


// header.before(message); // inserts the element before the header as a sibiling element
// header.after(message)

////////// Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', function () {
  message.remove();
  // before this method we used ...
  // DOM TRAVERSING
  message.parentElement.removeChild(message);
})