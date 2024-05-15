//create variables for existing items
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//create new elements
const li = document.createElement('li');
const deleteButton = document.createElement('button');

//add text content to elements
li.textContent = input.value;
deleteButton.textContent = '❌';

li.append(deleteButton);
list.append(li);