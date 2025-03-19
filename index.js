document.addEventListener("DOMContentLoaded", function () {
  const weatherInfoDiv = document.getElementsByClassName(
    "Gridstyle__Container-sc-sque-2 dDmrLp nt-grid"
  )[0]; // Added [0] since getElementsByClassName returns an array-like object

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026`
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
