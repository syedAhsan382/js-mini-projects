Weather App

A simple browser-based Weather App that fetches real-time weather data for any city using the OpenWeatherMap API.
Preview
Search for any city and instantly see:

Current temperature (°C)
Weather description
Weather icon

Features

Search weather by city name
Displays temperature, condition, and weather icon
Error message if city is not found
Clean, centered card UI with a gradient background

Files
FileDescriptionindex.htmlMain HTML structurestyle.cssStyling and layoutweather.jsFetches and displays weather data

How to Use

Open index.html in your browser
Type a city name in the input field
Click Get Weather
The current temperature, weather description, and icon will appear below

Setup
This app requires an API key from OpenWeatherMap.

Sign up at openweathermap.org and get a free API key
Open weather.js and replace the placeholder values:

jsconst apiKey = "YOUR_API_KEY";
const url = ""


Save and open index.html in your browser

Tech Stack

HTML
CSS (Flexbox, linear gradient)
JavaScript (Fetch API, async/await)
OpenWeatherMap API
