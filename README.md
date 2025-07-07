Live Project::https://corona-api-d6kb.vercel.app/

![Screenshot 2025-07-07 205251](https://github.com/user-attachments/assets/6fbb6ee1-a035-479c-8933-6e20008e3cb9)

📄 Project Documentation: Weather Dashboard


📌 Project Title:

Weather Dashboard Using OpenWeatherMap API

🎯 Objective:

To develop a modern, responsive, and interactive weather dashboard that allows users to fetch and view real-time weather information for any city using the OpenWeatherMap API.

🧰 Technologies Used:

Technology	Purpose

HTML5	                        Markup and structure

CSS3	                         Styling and layout

Bootstrap 5.3	                Responsive design and layout framework

JavaScript (ES6+)	            Dynamic data handling and interactivity

OpenWeatherMap API	          Real-time weather data

🗂️ Project Structure:

/project-folder
│
├── index.html       # Main HTML layout

├── style.css        # Custom styles for UI

├── script.js        # JS logic for weather API and UI updates

└── Assets/images/   # Weather icons for display

🌐 API Details:

API Used: OpenWeatherMap

Base URL: https://api.openweathermap.org/data/2.5/weather

Authentication: API Key required (used securely in script.js)

🖥️ Features:

✅ Fetches real-time weather data using city name

✅ Displays weather icon, temperature, humidity, wind speed, and condition

✅ Input validation and error handling

✅ Responsive design for all device sizes

✅ Smooth UI animations and transitions

💻 Code Breakdown:

🔹 HTML (index.html):

Uses Bootstrap layout with a central weather card.

Input field and button to get weather info.

#weatherResult div displays weather details dynamically.

🔹 CSS (style.css):

Uses linear gradients and modern card styles.

Responsive layout for mobile and desktop.

Fade-in animation for better user experience.

🔹 JavaScript (script.js):

Handles API fetching via fetchWeather() function.

Displays appropriate error messages using displayError().

Updates the UI with weather details using updateUI().

Maps conditions to icons dynamically from Assets/images.

🧪 Testing:

Test Case	Expected Result	Status

Valid city entered	Weather data displays correctly	✅

Empty input field	Error message appears	✅

Invalid city name	“City not found” message shown	✅

Slow/no internet	"Error fetching weather data" message	✅

Responsive on mobile/tablet	Layout adjusts properly	✅



📈 Future Improvements:

Add 5-day forecast using OpenWeatherMap's extended API.

Include weather map visualizations.

Use geolocation to auto-detect user's city.

Store last searched cities in localStorage.

Add theme toggle (dark/light mode).
