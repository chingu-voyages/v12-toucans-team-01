// toggle todo display
$(document).ready(function () {
	$('.todo-link').click(function () {
		$('.todo-list-container').toggle(200);
		$('.js-todo-input').focus();
	})
})

// based on freshman.tech/todo-list and https://www.taniarascia.com/how-to-use-local-storage-with-javascript/

// load array from local storage or set as blank array
let todoItems 

if (localStorage.getItem('items')) {
    todoItems = JSON.parse(localStorage.getItem('items'));

    // iterate over existing items
    todoItems.forEach(addLi);
    todoItems.forEach(updateChecks);
    function updateChecks(item){
        if (item.checked === true) {
            let li = document.querySelector(`[data-key='${item.id}']`);
            console.log(li);
            li.classList.add('done');
	        li.querySelector('.tick').innerHTML = '&#9745;';
        }
    }
} else {
    todoItems = [];
}

function addTodo(text) {
	const todo = {
		text,
		checked: false,
		id: Date.now()
	};

    // save to array
    todoItems.push(todo);
    // save to local storage
    localStorage.setItem('items', JSON.stringify(todoItems));

    addLi(todo);
	
}

function addLi(todo){
    //add todo li elements
	const list = document.querySelector('.js-todo-list');
	list.insertAdjacentHTML(
		'beforeend',
		`
        <li class="todo-item" data-key="${todo.id}">
            <input id="${todo.id}" type="checkbox" class="hidden"/>
            <label for="${todo.id}" class="tick js-tick">&#9744;</label>
            <span class="todo-text">${todo.text}</span>
            <button class="delete-todo js-delete-todo">&times;</button>
        </li>
    `
	);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const input = document.querySelector('.js-todo-input');

	const text = input.value.trim();
	if (text !== '') {
		addTodo(text);
		input.value = '';
		input.focus();
	}
});

// listeners for checkbox and delete buttons
const list = document.querySelector('.js-todo-list');
list.addEventListener('click', (event) => {
	if (event.target.classList.contains('js-tick')) {
		const itemKey = event.target.parentElement.dataset.key;
		toggleDone(itemKey);
	}

	if (event.target.classList.contains('js-delete-todo')) {
		const itemKey = event.target.parentElement.dataset.key;
		deleteItem(itemKey);
	}
});

// toggle checked state
function toggleDone(key) {
	const index = todoItems.findIndex((item) => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    // save to local storage
    localStorage.setItem('items', JSON.stringify(todoItems));
    
    const item = document.querySelector(`[data-key='${key}']`);
	if (todoItems[index].checked) {
		item.classList.add('done');
	    item.querySelector('.tick').innerHTML = '&#9745;';
	} else {
		item.classList.remove('done');
		item.querySelector('.tick').innerHTML = '&#9744;';
	}
}

//settings to show/hide todo link
document.getElementById('tdSet').onclick = function () {
	if (this.checked == false) {
		$('.todo-link').toggle(true);
		document.getElementById('tdSetCheck').innerHTML = '&#9744;';
	} else {
		$('.todo-link').toggle(false);
		document.getElementById('tdSetCheck').innerHTML = '&#9745;';
	}
};

// delete todo item
function deleteItem(key) {

	todoItems = todoItems.filter(item => item.id !== Number(key));
	const item = document.querySelector(`[data-key='${key}']`);
    item.remove();
    
    // update local storage
    localStorage.setItem('items', JSON.stringify(todoItems));

	// remove whitespace
	const list = document.querySelector('.js-todo-list');
	if (todoItems.length === 0) list.innerHTML = '';

	//focus
	$('.js-todo-input').focus();
}