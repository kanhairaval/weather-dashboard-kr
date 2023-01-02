let apiKey = "0f6e217f50843357f6704a3782023132"
let currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=toronto&temperature.value&units=metric&humidity.value&wind.value&units=metric&appid=0f6e217f50843357f6704a3782023132`;
let futureWeather = "https://api.openweathermap.org/data/2.5/forecast?q=toronto&units=metric&temprature.value&humidity.value&wind.value&appid=0f6e217f50843357f6704a3782023132";
let searchBoxCity = $("#search-box").val();
let searchButton = $("<button>");
console.log(searchBoxCity);
let weatherCards = $(".weather-cards");
let todayDay = $("#day");
let todayDate = $("#date");
let cureentDisplayedCity = $("#city");
let currentTemp = $("#temperature");
let currentCondition = $("#condition");
let currentHumidity = $("#humidity");
let currentWind = $("#wind");
let futDay1 = $("#day-1");
let futDay2 = $("#day-2");
let futDay3 = $("#day-3");
let futDay4 = $("#day-4");
let day1Temp = $("#day-1-temp");
let day2Temp = $("#day-2-temp");
let day3Temp = $("#day-3-temp");
let day4Temp = $("#day-4-temp");
let prevSearched = $("#previous-text");
let numSymbol = $("#num-symbl");
let prevCity = $("#prev-city");
let prevNumber = $("#prev-num");
let prevCityName = $("#prev-city-name");
// weatherCards.attr("Style", "display: none");
function getApi() {

  fetch(currentWeather)
  .then(function (response) {
    return response.json();
  })
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp);
      console.log(data.main.humidity);
      console.log(data.wind.speed);
      currentTemp.textContent = data.main.temp;
      console.log(currentTemp);
    });
}

getApi();

searchButton.on("click", getApi)