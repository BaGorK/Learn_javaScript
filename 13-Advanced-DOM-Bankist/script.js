'use strict';

///////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScroleTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

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

// Implementing Smooth scroling

btnScroleTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'Height/Width:',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //
  // A more modern way of implementing scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////////////

// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// })

// in Event deligation
// 1st, Add event listener to common parent element
// 2nd, Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////////
//Building a tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate Content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section'); //
// // console.log(allSections); // returns a nodeList just like an array not exactly arrays

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// returns an HTMLCollection : also called life collection
// i.e:  if the DOM changes this also authomatically updated

// console.log(document.getElementsByClassName('btn'));

// Creating and inserting Elements
// .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class = "btn btn--close--cookie">Got it!</button>';

// header.prepend(message);  // makes message the first child
// header.append(message)  // makes element message the last child

// one element cannot be displayed in two places at ones so we need to copy it.
// header.append(message.cloneNode(true))/*all the cild elemens will also be copied*/

// header.before(message); // inserts the element before the header as a sibiling element
// header.after(message)

////////// Delete elements
// document.querySelector('.btn--close--cookie').addEventListener('click', function () {
//   message.remove();
//   // before this method we used ...
//   // DOM TRAVERSING
//   message.parentElement.removeChild(message);
// })

/////////////////////////////////////////////
// Styles

// inline styles
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// console.log(message.style.height);
// console.log(message.style.width);

// to get all the styles applied to an element
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height); // returns the height as a string
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

// css custome properties or variables
// we use the setproperty on the style
// document.documentElement.style.setProperty('--color-primary', 'orangered')

/////////////////////////////////////////////
// Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo);

// console.log(logo.id);
// console.log(logo.className);
// console.log(logo.alt);

// logo.alt = 'Beautiful minimalist logo'
// console.log(logo);

// Non-standard
// console.log(logo.designer); // we get 'undefined'
// console.log(logo.getAttribute('designer'));

// logo.setAttribute('company', 'Bankist');
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

///////////////////////////////////////////////////
// // Implementing Smooth scroling

// const btnScroleTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScroleTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log(
//     'Height/Width:',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   //
//   // A more modern way of implementing scrolling
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

////////////////////////////////////////////////////
// types of events and event handlers

// const h1 = document.querySelector('h1');
// console.log(h1);

// const alertH1 = function (e) {
//   console.log('great job!');
// };
// h1.addEventListener('mouseenter', alertH1);
// // we can remove eventListeners
// setTimeout(function () {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// //onEventListener
// h1.onmouseenter = function (e) {
//   console.log('great job!');
// };

////////////////////////////////
// Event Propagation in practice

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1 + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
// });

///////////////////////////////////////////////
// DOM TRAVERSING

// <h1>
//   When
//   <!-- Green highlight effect -->
//   <span class="highlight">banking</span>
//   meets<br />
//   <span class="highlight">minimalist</span>
// </h1>

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); // returns HTMLCollection && applies for direct children elements

// console.log(h1.firstElementChild); // <span class="highlight">banking</span>
// console.log(h1.lastElementChild); // <span class="highlight">minimalist</span>

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// console.log(h1.parentNode);  // similar to child node in oposite
// console.log(h1.parentElement);
// h1.parentNode.style.background = 'gray'
// h1.parentElement.style.background = 'gray'

// h1.closest('.classname') // it selects the parent nodes nomatter how far they are
// h1.querySelector('.classname') // in reverse it selects the child nodes nomatter how they deep

// h1.closest('.header').style.background = 'var(--gradient-primary)'
// h1.closest('h1').style.background = 'var(--gradient-secondary)'

// ///////// Going sideway: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);  // so we can see the siblings // HTMLCollection -- iterable

// console.log([...h1.parentElement.children]);
// [...h1.parentElement.children].forEach(function (el, i, arr) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)'
//   }

// })


/////////////////////////////////////////////////
//Building a tabbed component
// actually I take it as a challenge and I implemented this with the following 
// not dirty but beautifull code


/*
const tab1 = document.querySelector('.operations__tab--1');
const tab2 = document.querySelector('.operations__tab--2');
const tab3 = document.querySelector('.operations__tab--3');
const content1 = document.querySelector('.operations__content--1');
const content2 = document.querySelector('.operations__content--2');
const content3 = document.querySelector('.operations__content--3');


tab1.addEventListener('click', function (e) {
  [...tab1.parentElement.children].forEach(function (el, i) {
    if (el.classList.contains('operations__tab--active')) {
      el.classList.remove('operations__tab--active');
      [...content1.parentElement.children][i + 1].classList.remove(
        'operations__content--active'
      );
    }
  });
  tab1.classList.add('operations__tab--active');
  content1.classList.add('operations__content--active');
});

tab2.addEventListener('click', function (e) {
  [...tab2.parentElement.children].forEach(function (el, i) {
    if (el.classList.contains('operations__tab--active')) {
      el.classList.remove('operations__tab--active');
      [...content1.parentElement.children][i + 1].classList.remove(
        'operations__content--active'
      );
    }
  });
  tab2.classList.add('operations__tab--active');
  content2.classList.add('operations__content--active');
});

tab3.addEventListener('click', function (e) {
  [...tab3.parentElement.children].forEach(function (el, i) {
    if (el.classList.contains('operations__tab--active')) {
      el.classList.remove('operations__tab--active');
      [...content1.parentElement.children][i + 1].classList.remove(
        'operations__content--active'
      );
    }
  });
  tab3.classList.add('operations__tab--active');
  content3.classList.add('operations__content--active');
});
*/
