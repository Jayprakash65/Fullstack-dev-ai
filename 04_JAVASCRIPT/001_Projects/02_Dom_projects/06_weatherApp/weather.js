
    const apiKey = "9115c170c594e7b098a45e9e5d2de715";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    let searchBox = document.querySelector(".search input");
    let searchBtn = document.querySelector(".search button");
    let weatherIcon = document.querySelector(".weather-icon");
    let weather = document.querySelector(".weather");

    async function checkWeather(city) {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      let data = await response.json();

      if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
        document.querySelector(".wind").innerHTML = `${data.main.temp} km/h`;

        if (data.weather[0].main === "Mist") {
          weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main === "Clouds") {
          weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Rain") {
          weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
          weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Snow") {
          weatherIcon.src = "images/snow.png";
        } else if (data.weather[0].main === "Clear") {
          weatherIcon.src = "images/clear.png";
        }

        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";


      }

      console.log(data);
    }

    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });
