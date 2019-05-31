// Accessing elements in the DOM
const banner = document.getElementById('page-banner'); // can't use # .
// console.log(banner);

const bookList = document.getElementById('book-list'); // can't use # .
// console.log(bookList);

// Multiple elements can be accessed with bracket notation
const titles = document.getElementsByClassName('title');
// console.log(titles[0]);

// use forEach to cycle through the elements
// ! This won't work because it's not an array
// titles.forEach(item => {
//   console.log(item);
// });

// Using isArray() to check if it is an array
// console.log(Array.isArray(titles));

// Using Array.from to convert into an array
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(item => {
//   console.log(item);
// });

const lis = document.getElementsByTagName('li');
// console.log(lis);

// use # for id and . for class
const title = document.querySelector('.title').innerHTML;
// console.log(title);

// using css to grab the element you want
const wrap = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wrap);

// using querySelectorAll() to grab multiple elements
const books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(book => console.log(book.innerText));
