document.addEventListener("DOMContentLoaded", function () {
  const weatherInfoDiv = document.getElementsByClassName(
    "Gridstyle__Container-sc-sque-2 dDmrLp nt-grid"
  )[0]; // Added [0] since getElementsByClassName returns an array-like object

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
        throw new Error(`API error: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Weather fetch error:", error);
      weatherInfoDiv.textContent = `Error fetching weather data: ${error.message}`;
    }
  }

  fetchWeather();
});
