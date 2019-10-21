// Clock Feature

var hr12setting = true;
const clockElement = document.getElementById('clock');

document.getElementById('hr12').onclick = function () {
	alert("clicked")
	if (this.checked == true) {
		hr12setting = false;
		document.getElementById('hrSetCheck').innerHTML = '&#9745;';
	} else {
		hr12setting = true;
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

setInterval(function () {
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

const name = document.getElementById('userName');
userName.innerHTML = 'human';

$('#userNameInput').change(function () {
	userNameInput = $('#userNameInput').val();
	userName.innerHTML = userNameInput;
});

// Focus of the Day
const focusInput = document.getElementById('focus-input-group');
const focus = document.getElementById('focus-container');
const focusDeleteButton = document.getElementById('focus-delete');
const focusCheck = document.getElementById('focus-checkbox');
const focusItem = document.getElementById('focus-item');

function focusSubmit(event) {
	event.preventDefault();
	focusInput.style.display = 'none';
	const value = focusInput.querySelector('input[type="text"]').value;
	focusItem.textContent = value;
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
$(document).ready(function () {
	$('.js-hidden').fadeTo(1000, 0);
	$('#focus-container').hover(
		function () {
			$('.js-hidden').fadeTo(300, 1);
		},
		function () {
			$('.js-hidden').fadeTo(300, 0);
		}
	);
});

focusInput.addEventListener('submit', focusSubmit);
focusDeleteButton.addEventListener('click', focusDelete);

// Settings Cog and Modal
$('#settingsCog').click(function () {
	$('#settingsModal').toggle(500);
});