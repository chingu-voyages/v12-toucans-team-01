// Clock Feature

let hr12setting;
if (!localStorage.getItem('hr12setting')) {
	hr12setting = true;
} else {
	hr12setting = localStorage.getItem('hr12setting');
}

if (hr12setting == false) {
	document.getElementById('hrSetCheck').innerHTML = '&#9745;';
} else {
	document.getElementById('hrSetCheck').innerHTML = '&#9744;';
}
const clockElement = document.getElementById('clock');

document.getElementById('hr12').onclick = function() {
	if (this.checked == true) {
		hr12setting = false;
		localStorage.setItem('hr12setting', false);
		document.getElementById('hrSetCheck').innerHTML = '&#9745;';
	} else {
		hr12setting = true;
		localStorage.setItem('hr12setting', true);
		document.getElementById('hrSetCheck').innerHTML = '&#9744;';
	}
};

function updateClock(clock) {
	clock.innerHTML = new Date().toLocaleTimeString([], {
		//for when we have 24 hr setting
		hour12: hr12setting,
		timeStyle: 'short'
	});
}

setInterval(function() {
	updateClock(clockElement);
}, 1000);

// Greeting based on time of day
const greetingTimeOfDay = document.getElementById('timeOfDay');
const currentDate = new Date();
const currentHr = currentDate.getHours();

if (currentHr < 12) {
	greetingTimeOfDay.innerHTML = 'Morning';
} else if (currentHr < 18) {
	greetingTimeOfDay.innerHTML = 'Afternoon';
} else {
	greetingTimeOfDay.innerHTML = 'Evening';
}

// Username from Settings to Greeting

userName.innerHTML = localStorage.getItem('userName');
if (userName.innerHTML == null || userName.innerHTML == '') {
	userName.innerHTML = 'human';
	localStorage.setItem('userName', 'human');
}
$('#userNameInput').change(function() {
	userNameInput = $('#userNameInput').val();
	userName.innerHTML = userNameInput;
	localStorage.setItem('userName', userNameInput);
});

// Focus of the Day
const focusInput = document.getElementById('focus-input-group');
const focus = document.getElementById('focus-container');
const focusDeleteButton = document.getElementById('focus-delete');
const focusCheck = document.getElementById('focus-checkbox');
const focusItem = document.getElementById('focus-item');
if (localStorage.getItem('focusValue')) {
	focus.style.display = 'block';
	focusInput.style.display = 'none';
	focusItem.textContent = localStorage.getItem('focusValue');
}

function focusSubmit(event) {
	event.preventDefault();
	focusInput.style.display = 'none';
	const value = focusInput.querySelector('input[type="text"]').value;
	focusItem.textContent = value;
	localStorage.setItem('focusValue', value);
	focus.style.display = 'block';
}
focusInput.addEventListener('submit', focusSubmit);

// check off button
function focusToggle(event) {
	focusItem.classList.toggle('strike');
	document.getElementById('empty-box').classList.toggle('no-display');
	document.getElementById('checked-box').classList.toggle('no-display');
}
focusCheck.addEventListener('click', focusToggle);

// delete button
function focusDelete(event) {
	if (focusItem.classList.contains('strike')) {
		focusItem.classList.toggle('strike');
		document.getElementById('empty-box').classList.toggle('no-display');
		document.getElementById('checked-box').classList.toggle('no-display');
	}
	focusInput.style.display = 'block';
	focusInput.reset();
	focus.style.display = 'none';
}
focusDeleteButton.addEventListener('click', focusDelete);

// Buttons appear on hover
$(document).ready(function() {
	$('.js-hidden').fadeTo(1000, 0);
	$('#focus-container').hover(
		function() {
			$('.js-hidden').fadeTo(300, 1);
		},
		function() {
			$('.js-hidden').fadeTo(300, 0);
		}
	);
});

focusInput.addEventListener('submit', focusSubmit);
focusDeleteButton.addEventListener('click', focusDelete);

// Settings Cog and Modal
$('#settingsCog').click(function() {
	$('#settingsModal').toggle(200);
});

$('#team-icon').click(function() {
	$('.team-modal').toggle(200);
});

// close out of any modal if clicking outside
$(document).click(function(e) {
	const allModals = $('#settingsModal, .team-modal, .weather-modal, .todo-list-container');
	const allClickZones = $(
		'.todo-link, .todo-flex, .settings-cog, .weather-container, .team-container, #settingsModal, .team-modal, .weather-modal, .todo-list-container'
	);

	// if the target of the click isn't the container nor a descendant of the container
	if (!allClickZones.is(e.target) && allClickZones.has(e.target).length === 0) {
		allModals.hide(200);
	}
});
