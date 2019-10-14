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
userName.innerHTML = "human";

$("#userNameInput").change(function () {
	userNameInput = $("#userNameInput").val();
	userName.innerHTML = userNameInput;
})


// Focus of the Day
const focusInput = document.getElementById('focus-input-group');
const focus = document.getElementById('focus-container');
const focusDeleteButton = document.getElementById('focus-delete');

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

// Settings Cog and Modal 
$("#settingsCog").click(function () {
	$("#settingsModal").fadeToggle(400)
});