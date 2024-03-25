const apiKey = "43a2d288aac0925bfcdaf45c9ec2773f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

function updateWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} km/h`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});
