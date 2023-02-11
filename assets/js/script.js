let apiKey = "0f6e217f50843357f6704a3782023132"
let searchBtn = document.getElementById("search-button");
let currentCity = document.getElementById("current-city");
let displayCity1 = document.getElementById("dis-city-1");
let displayCity2 = document.getElementById("dis-city-2");
let displayCity3 = document.getElementById("dis-city-3");
let displayCity4 = document.getElementById("dis-city-4");
let displayCity5 = document.getElementById("dis-city-5");
let currentDate = document.getElementById("current-date");
let currentSymbol = document.getElementById("current-symbol");
let futureSymbol1 = document.getElementById("future-symbol-1");
let futureSymbol2 = document.getElementById("future-symbol-2");
let futureSymbol3 = document.getElementById("future-symbol-3");
let futureSymbol4 = document.getElementById("future-symbol-4");
let futureSymbol5 = document.getElementById("future-symbol-5");
let currentTemp = document.getElementById("current-temperature");
let currentDay = document.getElementById("current-day");
let currentHumidity = document.getElementById("current-humidity");
let currentWind = document.getElementById("current-wind");
let day1 = document.getElementById("day-1");
let day2 = document.getElementById("day-2");
let day3 = document.getElementById("day-3");
let day4 = document.getElementById("day-4");
let day5 = document.getElementById("day-5");
let date1 = document.getElementById("date-1");
let date2 = document.getElementById("date-2");
let date3 = document.getElementById("date-3");
let date4 = document.getElementById("date-4");
let date5 = document.getElementById("date-5");
// let city1 = document.getElementById("city-1");
// let city2 = document.getElementById("city-2");
// let city3 = document.getElementById("city-3");
// let city4 = document.getElementById("city-4");
// let city5 = document.getElementById("city-5");
// let city6 = document.getElementById("city-6");
let prevCityUl = document.getElementById("city-ul");
console.log(prevCityUl);
let prevCity = [];
let tempDay1 = document.getElementById("day-1-temp");
let tempDay2 = document.getElementById("day-2-temp");
let tempDay3 = document.getElementById("day-3-temp");
let tempDay4 = document.getElementById("day-4-temp");
let tempDay5 = document.getElementById("day-5-temp");
let humDay1 = document.getElementById("day-1-Hum");
let humDay2 = document.getElementById("day-2-Hum");
let humDay3 = document.getElementById("day-3-Hum");
let humDay4 = document.getElementById("day-4-Hum");
let humDay5 = document.getElementById("day-5-Hum");
let winDay1 = document.getElementById("day-1-Win");
let winDay2 = document.getElementById("day-2-Win");
let winDay3 = document.getElementById("day-3-Win");
let winDay4 = document.getElementById("day-4-Win");
let winDay5 = document.getElementById("day-5-Win");
let allWeatherCards = document.getElementById("all-weather-cards");
let prevCities = document.getElementById("prev-searches");
allWeatherCards.setAttribute("Style", "display: none");
// prevCities.setAttribute("Style", "display: none");

function getApi(event) {

  event.preventDefault();

  let searchBoxCity = document.getElementById("search-box").value;
  let currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${searchBoxCity}&temperature.value&units=metric&humidity.value&wind.value&units=metric&appid=0f6e217f50843357f6704a3782023132`;
  let futureWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${searchBoxCity}&units=metric&temprature.value&humidity.value&wind.value&appid=0f6e217f50843357f6704a3782023132`;
  document.getElementById("search-box").value = "";

  allWeatherCards.setAttribute("Style", "display: block");
  prevCities.setAttribute("Style", "display: block");

  localStorage.setItem("prev-city", searchBoxCity);

  if (prevCity === "") {
    return;
  } else {
    prevCity = localStorage.getItem("prev-city");
    let city1 = document.createElement("li");
    prevCityUl.appendChild(city1);
    city1.classList.add("city");
    city1.textContent = prevCity;
  }

  fetch(currentWeather)
  .then(function (response) {
    return response.json();
  })
    .then(function (data) {
      currentCity.textContent = searchBoxCity;
      currentTemp.textContent = `Temperature: ${parseInt(data.main.temp)} \u00B0 C`;
      currentHumidity.textContent = `Humidity: ${data.main.humidity} %`;
      currentSymbol.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
      currentWind.textContent = "Wind: " + parseInt(data.wind.speed) + " kmh";
      displayCity1.textContent = searchBoxCity;
      displayCity2.textContent = searchBoxCity;
      displayCity3.textContent = searchBoxCity;
      displayCity4.textContent = searchBoxCity;
      displayCity5.textContent = searchBoxCity;
      // humDay1.textContent = `Humidity: ${data.main.humidity}%`;
      // winDay1.textContent = "Wind:" + parseInt(data.wind.speed) + "kmh";
      currentDate.textContent = moment().format("MM-DD-YYYY");
      currentDay.textContent = moment().format("dddd");
      day1.textContent = moment().add(1, "d").format("ddd");
      day2.textContent = moment().add(2, "d").format("ddd");
      day3.textContent = moment().add(3, "d").format("ddd");
      day4.textContent = moment().add(4, "d").format("ddd");
      day5.textContent = moment().add(5, "d").format("ddd");
      date1.textContent = moment().add(1, 'days').format('MM-DD-YYYY');
      date2.textContent = moment().add(2, 'days').format('MM-DD-YYYY');
      date3.textContent = moment().add(3, 'days').format('MM-DD-YYYY');
      date4.textContent = moment().add(4, 'days').format('MM-DD-YYYY');
      date5.textContent = moment().add(5, 'days').format('MM-DD-YYYY');
    });

    fetch(futureWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].main.temp);
      console.log(data.list[0].main.humidity);
      console.log(data.list[0].wind.speed);
      console.log(data.list[8].main.temp);
      console.log(data.list[8].main.humidity);
      console.log(data.list[8].wind.speed);
      console.log(data.list[17].main.temp);
      console.log(data.list[17].main.humidity);
      console.log(data.list[17].wind.speed);
      console.log(data.list[25].main.temp);
      console.log(data.list[25].main.humidity);
      console.log(data.list[25].wind.speed);
      console.log(data.list[33].main.temp);
      console.log(data.list[33].main.humidity);
      console.log(data.list[33].wind.speed);
      console.log(data.list[1].weather[0].icon);

      tempDay1.textContent = `Temperature: ${parseInt(data.list[1].main.temp)} \u00B0 C`;
      humDay1.textContent = `Humidity: ${data.list[1].main.humidity}%`;
      winDay1.textContent = "Wind:" + parseInt(data.list[1].wind.speed) + "kmh";
      futureSymbol1.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + "@2x.png");

      tempDay2.textContent = `Temperature: ${parseInt(data.list[9].main.temp)} \u00B0 C`;
      humDay2.textContent = `Humidity: ${data.list[9].main.humidity}%`;
      winDay2.textContent = "Wind:" + parseInt(data.list[9].wind.speed) + "kmh";
      futureSymbol2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`);

      tempDay3.textContent = `Temperature: ${parseInt(data.list[17].main.temp)} \u00B0 C`;
      humDay3.textContent = `Humidity: ${data.list[17].main.humidity}%`;
      winDay3.textContent = "Wind:" + parseInt(data.list[17].wind.speed) + "kmh";
      futureSymbol3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`);

      tempDay4.textContent = `Temperature: ${parseInt(data.list[25].main.temp)} \u00B0 C`;
      humDay4.textContent = `Humidity: ${data.list[25].main.humidity}%`;
      winDay4.textContent = "Wind:" + parseInt(data.list[25].wind.speed) + "kmh";
      futureSymbol4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png`);

      tempDay5.textContent = `Temperature: ${parseInt(data.list[33].main.temp)} \u00B0 C`;
      humDay5.textContent = `Humidity: ${data.list[33].main.humidity}%`;
      winDay5.textContent = "Wind:" + parseInt(data.list[33].wind.speed) + "kmh";
      futureSymbol5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`);
    });
}

searchBtn.addEventListener("click", getApi);

city1.addEventListener("click", getApi);