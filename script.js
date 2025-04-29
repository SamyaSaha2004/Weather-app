async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weatherBox = document.getElementById("weatherResult");
  
    if (!city) {
      weatherBox.innerHTML = "<p>Please enter a city name.</p>";
      return;
    }
  
    try {
      const url = `https://wttr.in/${city}?format=j1`;
      const response = await fetch(url);
      const data = await response.json();
  
      const area = data.nearest_area[0].areaName[0].value;
      const region = data.nearest_area[0].region[0].value;
      const country = data.nearest_area[0].country[0].value;
      const temperature = data.current_condition[0].temp_C;
      const description = data.current_condition[0].weatherDesc[0].value;
      const humidity = data.current_condition[0].humidity;
      const wind = data.current_condition[0].windspeedKmph;
  
      weatherBox.innerHTML = `
        <h3>${area}, ${region}, ${country}</h3>
        <p><strong>Temperature:</strong> ${temperature} °C</p>
        <p><strong>Condition:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind} km/h</p>
      `;
    } catch (error) {
      weatherBox.innerHTML = "<p>Error fetching weather data. Try again.</p>";
    }
  }
  