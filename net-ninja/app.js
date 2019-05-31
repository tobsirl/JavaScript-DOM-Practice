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

Array.from(titles).forEach(item => {
  console.log(item);
});

const lis = document.getElementsByTagName('li');
// console.log(lis);


const title = document.querySelector('.title').innerHTML;
// console.log(title);
