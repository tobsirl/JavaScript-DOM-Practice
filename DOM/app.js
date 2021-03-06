// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute('src'));
// });

// document.getElementById
// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#FFF';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML =
//   '<span style="color: red">Task List</span>';

// document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';

// document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementByTagName
// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// Convert HTML Collection into an array using Array.form()
// lis = Array.from(lis);

// lis.reverse().reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index + 1}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll() this will give you a NodeList
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach((item, index) => {
//   console.log(item.className);
//   item.textContent = `${index + 1}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach((item, index) => {
//   item.style.background = '#eee';
// });

// liEven.forEach((item, index) => {
//   item.style.background = '#ccc';
// });

// console.log(items);

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// !Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
// val = list.children;
// val = list.children[0];
// list.children[1].textContent = 'Hello';

// Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// first child
// val = list.firstChild;
// val = list.firstElementChild;

// last child
// val = list.lastChild;
// val = list.lastElementChild;

// Count child elements
// val = list.childElementCount;

// Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// !Create element
// const li = document.createElement('li');

// Add class
// li.className = 'collection-item';

// Add id
// li.id = 'new-item';

// Add attribute
// li.setAttribute('title', 'New Item');

// Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// Create new link element
// const link = document.createElement('a');

// Add classes
// link.className = 'delete-item secondary-content';

// Add icon html
// link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link into li
// li.appendChild(link);

// Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// !REPLACE ELEMENT
// Create Element
// const newHeading = document.createElement('h2');

// Add ID
// newHeading.id = 'task-title';

// New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
// const oldHeading = document.getElementById('task-title');

// Parent
// const cardAction = document.querySelector('.card-action');

// Replace
// cardAction.replaceChild(newHeading, oldHeading);

// !REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// Remove list item
// lis[0].remove();

// Remove child element
// list.removeChild(lis[3]);

// !CLASS & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('href');
// link.removeAttribute('title');
// val = link;

// console.log(val);

// !Event Listeners and The Event Object
// const btn = document.querySelector('.clear-tasks');

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(`Click`);
// });

// console.log(btn);

// Named function
// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
// console.log(`Clicked`);
// let val;

// val = e;

// Event target element
// val = e.target;
// val = e.target.id;
// val = e.target.className;
// val = e.target.classList;

// e.target.innerText = "Hello"

// Event type
// val = e.type;

// Timestamp
// val = e.timeStamp;

// Coords event relative to the window
// val = e.clientY;
// val = e.clientX;

// Coords event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }

// !Mouse events
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// Mouse down
// clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter
// card.addEventListener('mouseenter', runEvent);

// Mouse Leave
// card.addEventListener('mouseleave', runEvent);

// Mouse Over
// card.addEventListener('mouseover', runEvent);

// Mouse Out
// card.addEventListener('mouseout', runEvent);

// Mouse Move
// card.addEventListener('mousemove', runEvent);

// Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keypress', runEvent);

// focus
// taskInput.addEventListener('focus', runEvent);

// blur
// taskInput.addEventListener('blur', runEvent);

// cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);

// input
// taskInput.addEventListener('input', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);

// heading.innerText = e.target.value;
// Get input value
// console.log(taskInput.value);

// e.preventDefault();

// Event Bubbling
// document
//   .querySelector('.card-title')
//   .addEventListener('click', () => console.log('card title'));

// document
//   .querySelector('.card-content')
//   .addEventListener('click', () => console.log('card content'));

// document
//   .querySelector('.card')
//   .addEventListener('click', () => console.log('card'));

// document
//   .querySelector('.col')
//   .addEventListener('click', () => console.log('col'));

// Event Delegation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log(`delete item`);
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log(`delete item`);
    e.target.parentElement.parentElement.remove();
  }
}
