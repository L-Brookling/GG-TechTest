document.addEventListener("DOMContentLoaded", function () {
  const apiKey = process.env.API_KEY;
  const location = "Bath,UK";
  const weatherInfoDiv = document.getElementByClassName(
    "Gridstyle__Container-sc-sque-2 dDmrLp nt-grid"
  );

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.cod === 200) {
        const temp = `${data.main.temp}°C`;
        const desc = data.weather[0].description;
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        // Clear existing content securely
        weatherInfoDiv.replaceChildren();

        // Create elements securely
        const weatherText = document.createElement("p");
        weatherText.textContent = `Weather: ${
          desc.charAt(0).toUpperCase() + desc.slice(1)
        }`;

        const tempText = document.createElement("p");
        tempText.textContent = `Temperature: ${temp}`;

        const weatherIcon = document.createElement("img");
        weatherIcon.src = iconUrl;
        weatherIcon.alt = desc;

        // Append elements securely
        weatherInfoDiv.append(weatherText, tempText, weatherIcon);
      } else {
        weatherInfoDiv.textContent = "Weather information unavailable.";
      }
    } catch (error) {
      weatherInfoDiv.textContent = "Error fetching weather data.";
    }
  }

  fetchWeather();
});
