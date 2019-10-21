// toggle todo display
$(document).ready(function () {
	$('.todo-link').click(function () {
		$('.todo-list-container').toggle(200);
		$('.js-todo-input').focus();
	})
})

// based on freshman.tech/todo-list
let todoItems = [];

function addTodo(text) {
	const todo = {
		text,
		checked: false,
		id: Date.now()
	};

	todoItems.push(todo);

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

// toggle 'done' class and checkbox icon
function toggleDone(key) {
	const index = todoItems.findIndex((item) => item.id === Number(key));
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

	/* commented out bc of merge conflict, looks to be older code
	  todoItems = todoItems.filter((item) => item.id !== Number(key));
		const item = document.querySelector(`[data-key='${key}']`);
		item.remove();
	}
	*/

	// toggle todo display
	$(document).ready(function () {
		$('.todo-link').click(function () {
			$('.todo-list-container').toggle(500);
		});
	});

	//settings to show/hide todo link


	todoItems = todoItems.filter(item => item.id !== Number(key));
	const item = document.querySelector(`[data-key='${key}']`);
	item.remove();

	// remove whitespace
	const list = document.querySelector('.js-todo-list');
	if (todoItems.length === 0) list.innerHTML = '';

	//focus
	$('.js-todo-input').focus();
}