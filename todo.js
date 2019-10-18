// based on freshman.tech/todo-list
let todoItems = [];

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    
    //add todo li elements
    const list = document.querySelector('.js-todo-list');
    list.insertAdjacentHTML('beforeend', `
        <li class="todo-item" data-key="${todo.id}">
            <input id="${todo.id}" type="checkbox" class="hidden"/>
            <label for="${todo.id}" class="tick js-tick">&#9744;</label>
            <span class="todo-text">${todo.text}</span>
            <button class="delete-todo js-delete-todo">
                <span>&times;</span>
            </button>
        </li>
    `);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input');

    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
})

// check off items
// listen for click
const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
})

// toggle 'done' class
function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;

    const item = document.querySelector(`[data-key='${key}']`);
    if (todoItems[index].checked) {
        item.classList.add('done');
        item.querySelector('.tick').innerHTML = '&#9745;';
    } else {
        item.classList.remove('done');
        item.querySelector('.tick').innerHTML = '&#9744;';
    }


}

// toggle todo display
$(document).ready(function(){
    $('.todo-link').click(function(){
        $('.todo-list-container').toggle(500);
    })
})