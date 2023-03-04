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

//use search button click to return weather data 
function getCityInfo() {
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

    //call function to save the data
    //var newCityData = localStorage.getItem('cityData')
    savetols(data)
    //console.log(newCityData)
})
}

//add event listener for search button click
document.getElementById("search-button").addEventListener('click', getCityInfo)

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

//use localstorage elements to store the search history
function savetols(data) {
    var input = document.getElementById('city-enter')
    var savedData = input.value
    // localStorage.setItem('cityData', data)
    var newHistoryButton = document.createElement('button')
    newHistoryButton.textContent = savedData;
    // newHistoryButton.value = 'cityData'
    var newSearchHistory = document.getElementById('searchHistoryAdder')
    newSearchHistory.appendChild(newHistoryButton)
}


//create search history buttons 

//create event listener for search history button and pull the api history for weather again

