(function () {
  // Add CSS stylesheet function at the top level
  function loadStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://l-brookling.github.io/GG-TechTest/styles.css";
    link.onload = () => console.log("Stylesheet loaded successfully!");
    link.onerror = (error) => console.error("Error loading stylesheet:", error);
    document.head.appendChild(link);
  }

  // Load CSS before running JS
  loadStyles();

  // Needs to be declared top level so that it is not out of scope
  let weatherInfoDiv;

  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWeather);
  } else {
    initWeather();
  }

  function initWeather() {
    // This is the section where the weather information will be displayed
    weatherInfoDiv = document.getElementsByClassName(
      "Sectionstyle__Content-sc-1rnt8u1-3 jvAto"
    )[0];
    console.log("Weather div found:", weatherInfoDiv);

    // This will check to see if the weatherInfoDiv exists
    if (!weatherInfoDiv) {
      console.error("Weather information container not found");
      return;
    }

    // Call fetchWeather after we've confirmed DOM is ready
    fetchWeather();
  }

  async function fetchWeather() {
    try {
      console.log("Fetching weather data...");

      // I have used the provided API key and coordinates to fetch the weather data
      const response = await fetch(
        `https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // This will check if the data is valid from the API
      if (data.cod === "42") {
        // This will create and append location data
        const locationInfo = document.createElement("div");
        locationInfo.classList.add("location-info");

        const cityTitle = document.createElement("h2");
        cityTitle.textContent = `${data.city.name}, ${data.city.country}`;

        const population = document.createElement("p");
        population.textContent = `Population: ${data.city.population}`;

        const coordinates = document.createElement("p");
        coordinates.textContent = `Coordinates: ${data.city.coord.lat}, ${data.city.coord.lon}`;

        locationInfo.append(cityTitle, population, coordinates);

        // This will create and append current weather data
        const currentWeather = data.list[0];
        const weatherInfo = document.createElement("div");
        weatherInfo.classList.add("weather-info");

        const weatherTitle = document.createElement("h3");
        weatherTitle.textContent = "Current Weather";

        const temp = document.createElement("p");
        temp.textContent = `Temperature: ${currentWeather.main.temp}°C`;

        const feelsLike = document.createElement("p");
        feelsLike.textContent = `Feels Like: ${currentWeather.main.feels_like}°C`;

        const weather = document.createElement("p");
        weather.textContent = `Weather: ${currentWeather.weather[0].description}`;

        const humidity = document.createElement("p");
        humidity.textContent = `Humidity: ${currentWeather.main.humidity}%`;

        const windSpeed = document.createElement("p");
        windSpeed.textContent = `Wind Speed: ${currentWeather.wind.speed} m/s`;

        const pressure = document.createElement("p");
        pressure.textContent = `Pressure: ${currentWeather.main.pressure} hPa`;

        const visibility = document.createElement("p");
        visibility.textContent = `Visibility: ${currentWeather.visibility} meters`;

        const weatherIcon = document.createElement("img");
        weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
        weatherIcon.alt = currentWeather.weather[0].description;

        // Create a container for weather text content
        const weatherTextContent = document.createElement("div");
        weatherTextContent.classList.add("weather-text-content");

        // Add text content to this container
        weatherTextContent.append(
          weatherTitle,
          temp,
          feelsLike,
          weather,
          humidity,
          windSpeed,
          pressure,
          visibility
        );

        // Add both text content and icon to the weather info div
        weatherInfo.append(weatherTextContent, weatherIcon);

        // Append data to all elements
        weatherInfoDiv.append(locationInfo, weatherInfo);
      } else {
        throw new Error(`API error: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Weather fetch error:", error);
      weatherInfoDiv.textContent = `Error fetching weather data: ${error.message}`;
    }
  }
})();
