//create variables for existing items
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const main = document.querySelector('main');

//create new elements
const li = document.createElement('li');
const deleteButton = document.createElement('button');

//click event for add chapter
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        //get rid of error message if it exists
        if (document.querySelector('#emptyVal')) {
            document.querySelector('#emptyVal').remove();
        }
        //add text content to elements
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        //add the delete button to every li
        //add the full li to the list
        li.append(deleteButton);
        list.append(li);
    } else {
        //display error message
        let emptyVal = document.createElement('p');
        emptyVal.setAttribute('id', 'emptyVal')
        emptyVal.textContent = 'Please enter a scripture chapter!';
        main.append(emptyVal);
        input.focus();
    }
    input.value = '';
})

deleteButton.addEventListener('click', function () {
    //remove the given li
    list.removeChild(li);
    input.focus();
    input.value = '';
})

input.focus();