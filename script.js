//test fetch function to try an individual city 

var iconURL = 'http://openweathermap.org/img/wn/10d@2x.png'

fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=8dbb5b7df5ca3d60632d1bcdcd637c38`)
.then(response => {
    return response.json();
}).then(data => {
    console.log(data)
    console.log(data.city.name);
    console.log(data.list[0].main.temp)
})

function saveToLS(data) {
    var input = document.getElementById('city-enter')
    var savedData = input.value
    var currentWeather = {
        cityName: data.city.name,
        temperature: data.list[0].main.temp,
        wind: data.list[0].wind.speed,
        humidity: data.list[0].weather[0].description
    }

    var newHistoryButton = document.createElement('button');
    newHistoryButton.textContent = savedData;
    newHistoryButton.dataset.cityName = JSON.stringify(currentWeather)
    var newSearchHistory = document.getElementById('searchHistoryAdder');
    newSearchHistory.appendChild(newHistoryButton);
}
 

//use search button click to return weather data 
function getCityInfo() {
    //clear previous results

    if (searchClick) {
    document.getElementById('city-container').innerHTML = ''
    document.getElementById('weather-container').innerHTML = ''
    document.getElementById('wind-container').innerHTML = ''
    document.getElementById('humidity-container').innerHTML = ''
}else if (historyClick) {
        currentWeather.cityName = savedData
        newHistoryButton.dataset.cityName = JSON.stringify(currentWeather)
    }

    //intake value
    var cityEnter = document.getElementById("city-enter").value
    //use backticks to use Template Literal and create a variable that you can use 
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityEnter}&appid=8dbb5b7df5ca3d60632d1bcdcd637c38`)
.then(response => {
    return response.json();
}).then(data => {
    //console logs store the city name, weather and current time
    console.log(data)
    console.log(data.city.name);
    console.log(data.list[0].main.temp)
    console.log(data.list[0].dt_txt)
    displayCurrentWeather(data)
    displayForecastWeather(data)
    saveToLS(data)
    //call function to save the data
    //newCityData = localStorage.getItem('cityData')
    //console.log(newCityData)
})
}

//this code adds the current temperature to the screen
function displayCurrentWeather(data) {
    //returns the current city name
    var currentCityName = document.createElement('p')
    currentCityName.textContent = data.city.name
    var cityContainer = document.getElementById('city-container')
    cityContainer.appendChild(currentCityName)

    //returns the current city temperature
    var currentWeather = document.createElement('p')
    currentWeather.textContent = data.list[0].main.temp
    var weatherContainer = document.getElementById('weather-container')
    weatherContainer.appendChild(currentWeather)

    //returns the current wind speed
    var currentWind = document.createElement('p')
    currentWind.textContent = data.list[0].wind.speed
    var windContainer = document.getElementById('wind-container')
    windContainer.appendChild(currentWind)

    //returns the current visibity
    var currentHumidity = document.createElement('p')
    currentHumidity.textContent = data.list[0].weather[0].description
    var humidContainer = document.getElementById('humidity-container')
    humidContainer.appendChild(currentHumidity)
}

//create conditional statements to pick specific API call portions based on what city is searched
function displayForecastWeather(data) {
    
    // for (i = 0)
    // var currentCityName = document.createElement('p')
    // currentCityName.textContent = data.city.name
    // var cityContainer = document.getElementById('city-container')
    // cityContainer.appendChild(currentCityName)

    // //returns the current city temperature
    // var currentWeather = document.createElement('p')
    // currentWeather.textContent = data.list[0].main.temp
    // var weatherContainer = document.getElementById('weather-container')
    // weatherContainer.appendChild(currentWeather)

    // //returns the current wind speed
    // var currentWind = document.createElement('p')
    // currentWind.textContent = data.list[0].wind.speed
    // var windContainer = document.getElementById('wind-container')
    // windContainer.appendChild(currentWind)

    // //returns the current visibity
    // var currentHumidity = document.createElement('p')
    // currentHumidity.textContent = data.list[0].weather[0].description
    // var humidContainer = document.getElementById('humidity-container')
    // humidContainer.appendChild(currentHumidity)
}

//add event listener for search button click
var searchClick = document.getElementById("search-button")
searchClick.addEventListener('click', getCityInfo)

//create event listener for search history button and pull the api history for weather again
var historyClick = document.getElementById("searchHistoryAdder")
historyClick.addEventListener('click', getCityInfo)


