const API_KEY = "f8bfcd960b869ab302ef50fab58de228";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const btn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");

const displayError = (message) => {
  const errorMsg = document.getElementById("errorMsg");
  errorMsg.innerText = message;
  errorMsg.style.display = "block";
  document.getElementById("weatherResult").style.display = "none";
};

const updateUI = (data) => {
  document.getElementById("errorMsg").style.display = "none";
  document.getElementById("weatherResult").style.display = "block";

  document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
  document.getElementById("humidity").innerText = `${data.main.humidity}%`;
  document.getElementById("windSpeed").innerText = `${data.wind.speed} km/h`;
  document.getElementById("weatherCondition").innerText = data.weather[0].main;

  const iconMap = {
    Clouds: "clouds.jpg",
    Clear: "clear.png",
    Rain: "rain.jpeg",
    Snow: "snow.png"
  };

  const condition = data.weather[0].main;
  const iconFile = iconMap[condition] || "clear.png"; 
  const iconPath = `Assets/images/${iconFile}`;

  document.getElementById("weatherIcon").src = iconPath;
};

const fetchWeather = async () => {
  const city = cityInput.value.trim();

  if (city === "") {
    displayError("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await response.json();

    if (data.cod === "404") {
      displayError("City not found. Try again.");
    } else {
      updateUI(data);
    }
  } catch (error) {
    console.error(error);
    displayError("Error fetching weather data.");
  }
};

btn.addEventListener("click", fetchWeather);
