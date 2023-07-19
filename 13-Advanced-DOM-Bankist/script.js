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
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); //
// console.log(allSections); // returns a nodeList just like an array not exactly arrays

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// returns an HTMLCollection : also callrd life collection
// i.e:  if the DOM changes this also authomatically updated

// console.log(document.getElementsByClassName('btn'));

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


/////////////////////////////////////////////
// Styles

// inline styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

// console.log(message.style.height); 
// console.log(message.style.width);

// to get all the styles applied to an element 
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height); // returns the height as a string
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'


// css custome properties or variables
// we use the setproperty on the style
// document.documentElement.style.setProperty('--color-primary', 'orangered')

/////////////////////////////////////////////
// Attributes

const logo = document.querySelector('.nav__logo');
// console.log(logo);

// console.log(logo.id);
// console.log(logo.className);
// console.log(logo.alt);

logo.alt = 'Beautiful minimalist logo'
// console.log(logo);


// Non-standard
// console.log(logo.designer); // we get 'undefined'
// console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');
// console.log(logo);

// console.log(logo.src); // returns the absolute url
// console.log(logo.getAttribute('src')); // returns the relative url


// Data Attributes
// console.log(logo.dataset.versionNumber);

////////////////////////////////////
// Classes

// logo.classList.add('className');
// logo.classList.add('className', 'classname2); // multiple class names
// logo.classList.contains('className');
// logo.classList.contains('className', 'classname2');
// logo.classList.toggle('className');
// logo.classList.remove('className');

// Don't use it because it overrides the available calss names
// logo.className = 'jonas'  
// console.log(logo);
