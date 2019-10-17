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
            <input id="${todo.id}" type="checkbox" />
            <label for="${todo.id}" class="tick js-tick"></label>
            <span>${todo.text}</span>
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

// toggle todo display
$(document).ready(function(){
    $('.todo-link').click(function(){
        $('.todo-list-container').toggle(500);
    })
})