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
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Implementing Smooth scroling
// A more modern way of implementing scrolling
btnScroleTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
// Page navigation by using event deligation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Building a tabbed component
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Guard clause -- ignore any clicks that happen not in the buttons (tabs)
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

////////////////////////////////////////
// Menu fade animation
const nav = document.querySelector('.nav');
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    // console.log(this); // this = 0.5 or 1
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////////////
//// Implementing a Sticky Navigation -- The Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height + 5;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

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
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class = "btn btn--close--cookie">Got it!</button>';

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
// console.log(getComputedStyle(message).height); // returns the height as a string // 43.366px
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px' ==== 43.366 + 30  + 'px'

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

// Data Attributes  // they are very usefull when building a UI to store data in the html code // they start with data-nameYouWant = "3.0"
// console.log(logo.dataset.versionNumber);

////////////////////////////////////
// Classes

// logo.classList.add('className'); // it adds a class name to the exisiting element without overriding the exisiting class name
// logo.classList.add('className', 'classname2); // multiple class names
// logo.classList.contains('className'); returns a boolean value
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
// an event is a signal that is generated by a certain DOM node. a signal means that something has happened.

// const h1 = document.querySelector('h1');
// console.log(h1);

// const alertH1 = function (e) {
//   console.log('great job!');
// };
// h1.addEventListener('mouseenter', alertH1); // the mouseenter event is a little bit like a hover event in css

// //onEventListener
// h1.onmouseenter = function (e) {
//   console.log('great job!');

// we can remove eventListeners
//   h1.removeEventListener('mouseenter', alertH1);
// };

/**
 * this type of onEvent Listener is a bit an old schoole. now we usually use addEventListener .
 * There are two ways that addEventListener is better .
 *    1- that it allows us to add multiple eventlistenrs to the same event.
 *    2- we can actually remove an eventlistener incase we don't need it.
 */

/////////////////////////////////////
/**
 * Event Propagation : BUBBLING AND CAPTURING
 *  The most important property of events which is bublbing.
 *
 * let's now say: a click happens on the link. the DOM  then generates a click event. however this event is not actually generated at the target element
 * instead the event is generated at the root of the document so at the very top of the dom tree. and from there the so calld capturing phase is happening.
 * Then the event travels all the way down from the document root to the target element. As the event travels down the tree, it will pass through every single parent element of the target el.
 * As soon as the event reaches the target, the target phase begins where the event can be handled right at the target.
 * After reaching the target the event eventually travels all the way up to the document root through each parent element again in a so called BUBBLING PHASE.
 * WHY THIS IS SO IMPORTANT ?
 *      As the event bubbles through each parent element, it is as if the event also happened in each of the parent element.
 *      what this means is that if we attached the same eventlistener to the parent el, we would have handled the same event twice.
 *      and this behavior will allow us to implement really powerfull paterns.
 */

// const randomInt = (min, max) =>
//   Math.floor((Math.random() * (max - min) + 1 )+ min);
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

///////////////////////////////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // it will prevent the default behavior of the anchor tag so it does not move to that section defined in the href attribute.
//     const id = this.getAttribute('href'); // id = '#section--1'
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//  with the above we already implemented smooth scrolling to each nav links but it is not efficient because
//  we are adding this event handler to each  one of this three elements and this is not ideal.

// The better solution is to use Event deligation. in this we use the fact that events bubble up the dom tree
// and by putting an event listener to common parent element
// 2nd, Determine what element originated the event

///////////////////////////////////////////////
// DOM TRAVERSING   // this will be another REFERENCE LECTURE

// <h1>
//   When
//   <!-- Green highlight effect -->
//   <span class="highlight">banking</span>
//   meets<br />
//   <span class="highlight">minimalist</span>
// </h1>

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children); // here we get 3 html elements : span.highlight, br, span.highlight //--- returns HTMLCollection && applies for direct child elements

// console.log(h1.firstElementChild); // <span class="highlight">banking</span>
// console.log(h1.lastElementChild); // <span class="highlight">minimalist</span>

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// console.log(h1.parentElement); // which may not be a direct parent //
// h1.parentNode.style.background = 'gray'
// h1.parentElement.style.background = 'gray'

// h1.closest('.classname') // it selects the closest parent node with that class, nomatter how far they are
// h1.querySelector('.classname') // in reverse it selects the child nodes nomatter how they deep

// h1.closest('.header').style.background = 'var(--gradient-primary)'
// h1.closest('h1').style.background = 'var(--gradient-secondary)'

// ///////// Going sideway: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// trick-- so we can see the siblings // HTMLCollection -- iterable
// console.log(h1.parentElement.children);  // we get all sibilings and h1 itself

// console.log([...h1.parentElement.children]); // it reterns an HTMLCollection
// [...h1.parentElement.children].forEach(function (el, i, arr) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)'
//   }
// })

/////////////////////////////////////////////////
//Building a tabbed component
// actually I take it as a challenge and I implemented this with the following
// not dirty but beautifull code

// const tab1 = document.querySelector('.operations__tab--1');
// const tab2 = document.querySelector('.operations__tab--2');
// const tab3 = document.querySelector('.operations__tab--3');
// const content1 = document.querySelector('.operations__content--1');
// const content2 = document.querySelector('.operations__content--2');
// const content3 = document.querySelector('.operations__content--3');

// tab1.addEventListener('click', function (e) {
//   [...tab1.parentElement.children].forEach(function (el, i) {
//     if (el.classList.contains('operations__tab--active')) {
//       el.classList.remove('operations__tab--active');
//       [...content1.parentElement.children][i + 1].classList.remove(
//         'operations__content--active'
//       );
//     }
//   });
//   tab1.classList.add('operations__tab--active');
//   content1.classList.add('operations__content--active');
// });

// tab2.addEventListener('click', function (e) {
//   [...tab2.parentElement.children].forEach(function (el, i) {
//     if (el.classList.contains('operations__tab--active')) {
//       el.classList.remove('operations__tab--active');
//       [...content1.parentElement.children][i + 1].classList.remove(
//         'operations__content--active'
//       );
//     }
//   });
//   tab2.classList.add('operations__tab--active');
//   content2.classList.add('operations__content--active');
// });

// tab3.addEventListener('click', function (e) {
//   [...tab3.parentElement.children].forEach(function (el, i) {
//     if (el.classList.contains('operations__tab--active')) {
//       el.classList.remove('operations__tab--active');
//       [...content1.parentElement.children][i + 1].classList.remove(
//         'operations__content--active'
//       );
//     }
//   });
//   tab3.classList.add('operations__tab--active');
//   content3.classList.add('operations__content--active');
// });

////////////////////////////////////////
//- Menu fade animation
// //-- The difference between mouseenter nad mouseover is that mouseover events bubble up through the dom tree.
// const nav = document.querySelector('.nav');
// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('nav').querySelectorAll('.nav__link');
//     const logo = link.closest('nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     })
//     logo.style.opacity = 0.5;
//   }
// })

// this is basically to undo what we done in the mouse over
// nav.addEventListener('mouseout', function (e) {
//     if (e.target.classList.contains('nav__link')) {
//       const link = e.target;
//       const siblings = link.closest('nav').querySelectorAll('.nav__link');
//       const logo = link.closest('nav').querySelector('img');
//       siblings.forEach(el => {
//         if (el !== link) el.style.opacity = 1;
//       });
//       logo.style.opacity = 1;
//     }
// })

// // the above code works fine but needs refactoring. // usually refactoring works by creating a new function.
// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('nav').querySelectorAll('.nav__link');
//     const logo = link.closest('nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// }
// nav.addEventListener('mouseover', function(e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//  handleHover(e, 1)
// });

// the above code also needs to be refactored
// const handleHover = function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     console.log(this);
//     const link = e.target;
//     const siblings = link.closest('nav').querySelectorAll('.nav__link');
//     const logo = link.closest('nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };
// // basically we use the bind method to pass a value to a handler function.
// nav.addEventListener('mouseover', handleHover.bind(0.5)); // we set the `this` variable to the value in the bind function
// nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////////////
// Implementing a Sticky Navigation -- The Intersection Observer API
// const header = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect();
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };
// const Observer = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight.height}px`,
//   // rootMargin: '-90px', // if you have a responsive height, it is not a good idea to hard code 90px here
// });
// Observer.observe(header);

// console.log(navHeight);
/*
  DOMRect {x: 30.000001907348633, y: 0, width: 1438.888916015625, height: 90.00000762939453, top: 0, …}
  bottom:90.00000762939453
  height:90.00000762939453
  left:30.000001907348633
  right: 1468.8889179229736
  top:0
  width:1438.888916015625
  x:30.000001907348633
  y:0
*/
