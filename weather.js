// Sources: https://www.youtube.com/watch?v=KqZGuzrY9D4
// https://www.youtube.com/watch?v=wPElVpR1rwA
// Icons: https://github.com/manifestinteractive/weather-underground-icons

// Select elements
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const weatherModal = document.querySelector(".weather-modal");

// app data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// app consts and vars
const KELVIN = 273;
const key = "428358ef422b7d9e7c82a605f13375f8"

window.addEventListener('load', ()=> {
    let long;
    let lat;

    // check if browser supports geolocation
    if(navigator.geolocation){
        //get position
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                // store weather data from api
                .then(data => {
                    weather.temperature.celsius = Math.floor(data.main.temp - KELVIN);
                    weather.temperature.fahrenheit = Math.floor(weather.temperature.celsius * 9/5 + 32);
                    weather.description = data.weather[0].description;
                    weather.iconId = data.weather[0].icon;
                    weather.city = data.name;
                    weather.country = data.sys.country;
                })
                // display data to DOM
                .then(function(){
                    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
                    tempElement.innerHTML = `${weather.temperature.fahrenheit} °F / ${weather.temperature.celsius} °C`;
                    descElement.innerHTML = weather.description;
                    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
                });
        });
    }else{
        //what happens if no location can be accessed
    }

    
});

// display on hover
$('.weather-container').click(function () {
    $('.weather-modal').toggle(200);
})