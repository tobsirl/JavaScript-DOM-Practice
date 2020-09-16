let val;

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
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#FFF';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML =
  '<span style="color: red">Task List</span>';

// document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';

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
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach((item, index) => {
  console.log(item.className);
  item.textContent = `${index + 1}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((item, index) => {
  item.style.background = '#eee';
});

liEven.forEach((item, index) => {
  item.style.background = '#ccc';
});

console.log(items);
