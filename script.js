// Clock Feature
var clockElement = document.getElementById('clock');

function updateClock(clock) {
	clock.innerHTML = new Date().toLocaleTimeString([], {
		//for when we have 24 hr setting
		// hour12: false
		timeStyle: 'short'
	});
}

setInterval(function () {
	updateClock(clockElement);
}, 1000);

// Greeting based on time of day
var greetingTimeOfDay = document.getElementById('timeOfDay');
var currentDate = new Date();
var currentHr = currentDate.getHours();

if (currentHr < 12) {
	greetingTimeOfDay.innerHTML = 'Morning'
} else if (currentHr < 18) {
	greetingTimeOfDay.innerHTML = 'Afternoon'
} else {
	greetingTimeOfDay.innerHTML = 'Evening'
}

var name = document.getElementById('userName');
userName.innerHTML = 'person';

// Focus of the Day
const focusInput = document.getElementById('focus-input-group');
const focus = document.getElementById('focus-container');
const focusDeleteButton = document.getElementById('focus-delete')

function focusSubmit(event) {
	event.preventDefault();
	focusInput.style.display = 'none';
	const value = focusInput.querySelector('input[type="text"]').value;
	const focusItem = document.getElementById('focus-item');
	focusItem.textContent = value;
	focus.style.display = 'block';
}

function focusDelete(event) {
	focusInput.style.display = 'block';
	focus.style.display = 'none';
}

focusInput.addEventListener('submit', focusSubmit);
focusDeleteButton.addEventListener('click', focusDelete);

// Buttons appear on hover (need to figure out how to add jquery correctly. right now it breaks the app)
// $(document).ready(function{
// 	$("#focus-container").hover(function{
// 		$("#focus-delete").toggle(200);
// 	});
// });


