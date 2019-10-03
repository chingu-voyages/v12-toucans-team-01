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

var greetingTimeOfDay = document.getElementById('timeOfDay')
var currentDate = new Date();
var currentHr = currentDate.getHours();

if (currentHr < 12) {
	greetingTimeOfDay.innerHTML = 'Morning'
} else if (currentHr < 18) {
	greetingTimeOfDay.innerHTML = 'Afternoon'
} else {
	greetingTimeOfDay.innerHTML = 'Evening'
}

var name = document.getElementById('userName')
userName.innerHTML = 'person'