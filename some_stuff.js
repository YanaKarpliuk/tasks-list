//EXAMINING THE DOCUMENT OBJECT

//let val;

val = document; // shows entire HTML doc in console
val = document.all; // array of all tags of HTML doc: [html, head, meta, meta...]
val = document.all[2];
val = document.all.length; //43 elements
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms; // not recommended
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src'); // app.js

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src')); 
});

console.log(val);



//DOM SELECTORS FOR SINGLE ELEMETNS

// document.getElementById()
console.log(document.getElementById('task-title'));
// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);
// Change styling - use it for dynamic functionality
document.getElementById('task-title').style.background = '#333';
// Change content
document.getElementById('task-title').textContent = 'Task List'; // Option 1
document.getElementById('task-title').innerText = 'My Tasks'; // Option 2
document.getElementById('task-title').innerHTML = '<span>Task List</span>'; // Option 3

// to make it all shorter !!!
const taskTitle = document.getElementById('task-title');
// Change styling
taskTitle.style.background = '#333';
// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks'; 
taskTitle.innerHTML = '<span>Task List</span>'; 

// document.querySelector() - newer and more powerful
console.log(document.querySelector('#task-title')); //id
console.log(document.querySelector('.card-title')); //class
console.log(document.querySelector('h5')); //element (if there are several h5's, it will show only the first one)
console.log(document.querySelector('ul li')); //will target the first li
console.log(document.querySelector('h5:last-child')); //the last h5
console.log(document.querySelector('h5:nth-child(3)')); // the 3rd h5



//DOM SELECTORS FOR MULTIPLE ELEMENTS

// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items); //HTML collection of items
console.log(items[0]); //the first item

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems); // chose all list items within ul

// // document.getElementsByTagName
// const lis = document.getElementsByTagName('li');
// console.log(lis);

//document.querySelectorAll
const itemss = document.querySelectorAll('li');
console.log(itemss);

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(li, index) {
  li.style.background = '#ccc';
}); // all odd li are gray

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
} // all even li are light gray



// TRAVERSING THE DOM

//let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes
val = list.childNodes; // node list - children of ul
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children; // html collection - children of ul. Mostly used instead of childNode
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild; // first node
val = list.firstElementChild; // first element

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);



// CREATING ELEMENTS
// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);



//REMOVING AND REPLACING ELEMENTS

// REPLACE ELEMENT
// Create Element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));
// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');
// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;
// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val);



// EVENTS LISTENERS AND THE EVENT OBJECT
// Anonimous Function
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

//Named Function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e; // displays all the info about the event

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  e.target.innerText = 'Hello'; //changed name of the button

  console.log(val);
}



// MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading1 = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent); === Event type: click

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);  === Event type: dblclick

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent); === Event type: click and hold

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent); === Event type: click and hold and let it go

// Mouseenter
// card.addEventListener('mouseenter', runEvent); === Event type: just hover the mouse

// Mouseleave
// card.addEventListener('mouseleave', runEvent); === Event type: works after leaving to the main element

// Mouseover
// card.addEventListener('mouseover', runEvent); === Event type: hover over an element

// Mouseout
// card.addEventListener('mouseout', runEvent); === Event type: works after leaving to the main element or other element inside the card

// Mousemove
card.addEventListener('mousemove', runEvent); // === Event type: any movement inside the element


// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}



//KEYBOARDD & INPUT EVENTS
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}



// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}



//LOCAL & SESSION STORAGE
// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks)); // in local storage = [walk, pick, ...]

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});