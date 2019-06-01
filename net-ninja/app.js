// * Accessing elements in the DOM
// const banner = document.getElementById('page-banner'); // can't use # .
// console.log(banner);

// const bookList = document.getElementById('book-list'); // can't use # .
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

Array.from(books).forEach(book => console.log(book));

// * Editting the DOM
// Using textContent
Array.from(books).forEach(book => (book.textContent += ' (book title)'));

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = `<h2>Books and more books...</h2>`;
bookList.innerHTML += `<p>This is how you add HTML</p>`;

// Using nodeType to get the element number nodeName to get its name
// using method hasChildNodes() to see if it has children
const banner = document.querySelector('#page-banner');
// console.log(`#page-banner node type is: ${banner.nodeType}`);
// console.log(`#page-banner node name is: ${banner.nodeName}`);
// console.log(`#page-banner has child nodes: ${banner.hasChildNodes()}`);

// cloning a node
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// using parentNode + parentElement to move up through the nodes
const bookList1 = document.querySelector('#book-list');
// console.log('This parent node is ', bookList1.parentNode);
// console.log('This parent element is ', bookList1.parentElement);
// console.log('This parent element is ', bookList1.parentElement.parentElement);

// moveing down through the nodeList
// console.log(bookList1.childNodes);
// console.log(bookList1.children);

// traversing between siblings
const bookList2 = document.querySelector('#book-list');

// console.log('book-list next sibling is ', bookList2.nextSibling);
// console.log('book-list next sibling is ', bookList2.nextElementSibling);

// console.log('book-list previous sibling is ', bookList2.previousSibling);
// console.log('book-list previous sibling is ', bookList2.previousElementSibling);

bookList2.previousElementSibling.querySelector('p').innerHTML +=
  '<br/>Too cool for everyone else!';

// * Events
const h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', event => {
  console.log(event.target);
  console.log(event);
});

const btns = document.querySelectorAll('#book-list .delete');
console.log(btns);

// ! Event bubbling 
Array.from(btns).forEach(btn => {
  btn.addEventListener('click', event => {
    const li = event.target.parentElement;
    li.parentNode.removeChild(li);
  });
});
