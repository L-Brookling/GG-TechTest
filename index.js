document.addEventListener("DOMContentLoaded", function () {
  const weatherInfoDiv = document.getElementsByClassName(
    "Gridstyle__Container-sc-sque-2 dDmrLp nt-grid"
  )[0];

  // Check if element exists
  if (!weatherInfoDiv) {
    console.error("Weather information container not found");
    return;
  }

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.cod === "42") {
        // Updated to match actual response code
        // Clear existing content securely
        weatherInfoDiv.replaceChildren();

        // Create and append location information
        const locationInfo = document.createElement("div");
        locationInfo.innerHTML = `
          <h2>${data.city.name}, ${data.city.country}</h2>
          <p>Population: ${data.city.population}</p>
          <p>Coordinates: ${data.city.coord.lat}, ${data.city.coord.lon}</p>
        `;

        // Create and append current weather information
        const currentWeather = data.list[0];
        const weatherInfo = document.createElement("div");
        weatherInfo.innerHTML = `
          <h3>Current Weather</h3>
          <p>Temperature: ${currentWeather.main.temp}°C</p>
          <p>Feels Like: ${currentWeather.main.feels_like}°C</p>
          <p>Weather: ${currentWeather.weather[0].description}</p>
          <p>Humidity: ${currentWeather.main.humidity}%</p>
          <p>Wind Speed: ${currentWeather.wind.speed} m/s</p>
          <p>Pressure: ${currentWeather.main.pressure} hPa</p>
          <p>Visibility: ${currentWeather.visibility} meters</p>
        `;

        const weatherIcon = document.createElement("img");
        weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
        weatherIcon.alt = currentWeather.weather[0].description;

        // Append all elements
        weatherInfoDiv.append(locationInfo, weatherInfo, weatherIcon);
      } else {
        throw new Error(`API error: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Weather fetch error:", error);
      weatherInfoDiv.textContent = `Error fetching weather data: ${error.message}`;
    }
  }

  fetchWeather();
});
